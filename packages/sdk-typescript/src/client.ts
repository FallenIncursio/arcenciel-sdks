import { DownloadsApi } from './apis/DownloadsApi.js'
import { ModelsApi } from './apis/ModelsApi.js'
import { ArcEnCielError, toArcEnCielError } from './errors.js'
import { Configuration, type FetchAPI, ResponseError } from './runtime.js'

export interface RetryOptions {
  maxRetries?: number
  baseDelayMs?: number
  maxDelayMs?: number
}

export interface ArcEnCielClientOptions {
  apiKey?: string
  accessToken?: string
  baseUrl?: string
  timeoutMs?: number
  fetch?: FetchAPI
  retry?: RetryOptions | false
}

export interface ModelVersionDownloadOptions {
  filename?: string
  range?: string
  signal?: AbortSignal
}

const RETRYABLE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS'])
const RETRYABLE_STATUSES = new Set([429, 502, 503, 504])

function parseRetryAfter(response: Response): number | undefined {
  const value = response.headers.get('retry-after')
  if (!value) return undefined
  const seconds = Number(value)
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1_000)
  const date = Date.parse(value)
  return Number.isNaN(date) ? undefined : Math.max(0, date - Date.now())
}

function combineSignals(signal: AbortSignal | null | undefined, timeoutMs: number): AbortSignal {
  const timeout = AbortSignal.timeout(timeoutMs)
  return signal ? AbortSignal.any([signal, timeout]) : timeout
}

export function createArcEnCielFetch(sourceFetch: FetchAPI, timeoutMs: number, options: RetryOptions | false): FetchAPI {
  const retry = options === false ? { maxRetries: 0 } : options
  const maxRetries = retry.maxRetries ?? 3
  const baseDelayMs = retry.baseDelayMs ?? 250
  const maxDelayMs = retry.maxDelayMs ?? 8_000

  return async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const method = (init?.method ?? 'GET').toUpperCase()
    for (let attempt = 0; ; attempt += 1) {
      try {
        const response = await sourceFetch(input, {
          ...init,
          signal: combineSignals(init?.signal, timeoutMs),
        })
        if (attempt >= maxRetries || !RETRYABLE_METHODS.has(method) || !RETRYABLE_STATUSES.has(response.status)) {
          return response
        }
        const cap = Math.min(maxDelayMs, baseDelayMs * 2 ** attempt)
        const delay = parseRetryAfter(response) ?? Math.random() * cap
        await new Promise(resolve => setTimeout(resolve, delay))
      } catch (error) {
        if (attempt >= maxRetries || !RETRYABLE_METHODS.has(method)) throw error
        const cap = Math.min(maxDelayMs, baseDelayMs * 2 ** attempt)
        await new Promise(resolve => setTimeout(resolve, Math.random() * cap))
      }
    }
  }
}

export class ArcEnCielClient {
  readonly models: ModelsApi
  readonly downloads: DownloadsApi
  private readonly apiKey?: string
  private readonly accessToken?: string
  private readonly baseUrl: string
  private readonly fetchApi: FetchAPI

  constructor(options: ArcEnCielClientOptions = {}) {
    const sourceFetch = options.fetch ?? globalThis.fetch
    if (!sourceFetch) throw new ArcEnCielError('A Fetch API implementation is required')
    this.apiKey = options.apiKey
    this.accessToken = options.accessToken
    this.baseUrl = (options.baseUrl ?? 'https://arcenciel.io').replace(/\/+$/, '')
    this.fetchApi = createArcEnCielFetch(sourceFetch.bind(globalThis) as FetchAPI, options.timeoutMs ?? 30_000, options.retry ?? {})
    const configuration = new Configuration({
      basePath: this.baseUrl,
      apiKey: options.apiKey,
      accessToken: options.accessToken,
      fetchApi: this.fetchApi,
    })
    this.models = new ModelsApi(configuration)
    this.downloads = new DownloadsApi(configuration)
  }

  async call<T>(request: () => Promise<T>): Promise<T> {
    try {
      return await request()
    } catch (error) {
      throw await toArcEnCielError(error)
    }
  }

  async downloadModelVersionStream(modelId: number, versionId: number, options: ModelVersionDownloadOptions = {}): Promise<Response> {
    if (!Number.isInteger(modelId) || modelId <= 0 || !Number.isInteger(versionId) || versionId <= 0) {
      throw new ArcEnCielError('modelId and versionId must be positive integers', { code: 'INVALID_ARGUMENT' })
    }
    const filename = options.filename ? `/${encodeURIComponent(options.filename)}` : ''
    const headers = new Headers()
    if (this.apiKey) headers.set('x-api-key', this.apiKey)
    if (this.accessToken) headers.set('authorization', `Bearer ${this.accessToken}`)
    if (options.range) headers.set('range', options.range)

    try {
      const response = await this.fetchApi(
        `${this.baseUrl}/api/models/${encodeURIComponent(String(modelId))}/versions/${encodeURIComponent(String(versionId))}/download${filename}`,
        { method: 'GET', headers, redirect: 'follow', signal: options.signal }
      )
      if (response.status === 200 || response.status === 206) return response
      throw new ResponseError(response, 'Model download failed')
    } catch (error) {
      throw await toArcEnCielError(error)
    }
  }
}

export async function sha256Hex(bytes: ArrayBuffer | Uint8Array): Promise<string> {
  if (!globalThis.crypto?.subtle) throw new ArcEnCielError('Web Crypto SHA-256 support is required', { code: 'CRYPTO_UNAVAILABLE' })
  const input = bytes instanceof Uint8Array ? Uint8Array.from(bytes) : new Uint8Array(bytes.slice(0))
  const digest = await globalThis.crypto.subtle.digest('SHA-256', input)
  return Array.from(new Uint8Array(digest))
    .map(value => value.toString(16).padStart(2, '0'))
    .join('')
}

export async function readAndVerifySha256(response: Response, expectedSha256: string): Promise<Uint8Array> {
  const expected = expectedSha256.trim().toLowerCase()
  if (!/^[a-f0-9]{64}$/.test(expected)) {
    throw new ArcEnCielError('Expected SHA-256 must contain exactly 64 hexadecimal characters', { code: 'INVALID_CHECKSUM' })
  }
  const bytes = new Uint8Array(await response.arrayBuffer())
  const actual = await sha256Hex(bytes)
  if (actual !== expected) {
    throw new ArcEnCielError(`Model download checksum mismatch: expected ${expected}, received ${actual}`, {
      code: 'CHECKSUM_MISMATCH',
      requestId: response.headers.get('x-request-id') ?? undefined,
      headers: response.headers,
    })
  }
  return bytes
}

export async function* paginate<T>(
  loadPage: (page: number) => Promise<{ data?: T[]; totalPages?: number }>,
  startPage = 1
): AsyncGenerator<T> {
  for (let page = startPage; ; page += 1) {
    const result = await loadPage(page)
    yield* result.data ?? []
    if (page >= (result.totalPages ?? page)) return
  }
}
