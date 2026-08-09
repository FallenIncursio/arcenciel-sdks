import { ArticlesApi } from './apis/ArticlesApi.js'
import { ChatApi } from './apis/ChatApi.js'
import { CollabsApi } from './apis/CollabsApi.js'
import { CollectionsApi } from './apis/CollectionsApi.js'
import { CommentsApi } from './apis/CommentsApi.js'
import { DownloadsApi } from './apis/DownloadsApi.js'
import { EmotesApi } from './apis/EmotesApi.js'
import { FeedbackApi } from './apis/FeedbackApi.js'
import { GeneratorApi } from './apis/GeneratorApi.js'
import { ImagesApi } from './apis/ImagesApi.js'
import { ModelsApi } from './apis/ModelsApi.js'
import { NotificationsApi } from './apis/NotificationsApi.js'
import { OAuthApi } from './apis/OAuthApi.js'
import { ProfileApi } from './apis/ProfileApi.js'
import { SocialApi } from './apis/SocialApi.js'
import { TagsApi } from './apis/TagsApi.js'
import { TrustSafetyApi } from './apis/TrustSafetyApi.js'
import { UsersApi } from './apis/UsersApi.js'
import { VideosApi } from './apis/VideosApi.js'
import { WebhooksApi } from './apis/WebhooksApi.js'
import { ArcEnCielError, toArcEnCielError } from './errors.js'
import { OAuthFlow } from './oauth.js'
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

export interface VerifyWebhookSignatureOptions {
  toleranceSeconds?: number
  now?: Date
}

export interface PagePaginationResult<T> {
  data?: readonly T[]
  items?: readonly T[]
  page?: number
  totalPages?: number | null
  hasMore?: boolean
}

export interface CursorPaginationResult<T, Cursor = string> {
  data?: readonly T[]
  items?: readonly T[]
  nextCursor?: Cursor | null
}

const RETRYABLE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS'])
const RETRYABLE_STATUSES = new Set([429, 502, 503, 504])

function isRetrySafeRequest(method: string, headers?: HeadersInit): boolean {
  if (RETRYABLE_METHODS.has(method)) return true
  if (method !== 'POST' || !headers) return false
  const idempotencyKey = new Headers(headers).get('idempotency-key')
  return Boolean(idempotencyKey?.trim())
}

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
    const retrySafe = isRetrySafeRequest(method, init?.headers)
    for (let attempt = 0; ; attempt += 1) {
      try {
        const response = await sourceFetch(input, {
          ...init,
          signal: combineSignals(init?.signal, timeoutMs),
        })
        if (attempt >= maxRetries || !retrySafe || !RETRYABLE_STATUSES.has(response.status)) {
          return response
        }
        const cap = Math.min(maxDelayMs, baseDelayMs * 2 ** attempt)
        const delay = parseRetryAfter(response) ?? Math.random() * cap
        await new Promise(resolve => setTimeout(resolve, delay))
      } catch (error) {
        if (attempt >= maxRetries || !retrySafe) throw error
        const cap = Math.min(maxDelayMs, baseDelayMs * 2 ** attempt)
        await new Promise(resolve => setTimeout(resolve, Math.random() * cap))
      }
    }
  }
}

export class ArcEnCielClient {
  readonly articles: ArticlesApi
  readonly chat: ChatApi
  readonly collabs: CollabsApi
  readonly collections: CollectionsApi
  readonly comments: CommentsApi
  readonly models: ModelsApi
  readonly downloads: DownloadsApi
  readonly emotes: EmotesApi
  readonly feedback: FeedbackApi
  readonly generator: GeneratorApi
  readonly images: ImagesApi
  readonly notifications: NotificationsApi
  readonly oauth: OAuthFlow
  readonly oauthApi: OAuthApi
  readonly profile: ProfileApi
  readonly social: SocialApi
  readonly tags: TagsApi
  readonly trustSafety: TrustSafetyApi
  readonly users: UsersApi
  readonly videos: VideosApi
  readonly webhooks: WebhooksApi
  private readonly apiKey?: string
  private readonly accessToken?: string
  private readonly baseUrl: string
  private readonly fetchApi: FetchAPI

  constructor(options: ArcEnCielClientOptions = {}) {
    const sourceFetch = options.fetch ?? globalThis.fetch
    if (!sourceFetch) throw new ArcEnCielError('A Fetch API implementation is required')
    this.apiKey = options.apiKey
    this.accessToken = options.accessToken
    let baseUrl = options.baseUrl ?? 'https://arcenciel.io'
    while (baseUrl.endsWith('/')) baseUrl = baseUrl.slice(0, -1)
    this.baseUrl = baseUrl
    this.fetchApi = createArcEnCielFetch(sourceFetch.bind(globalThis) as FetchAPI, options.timeoutMs ?? 30_000, options.retry ?? {})
    const configuration = new Configuration({
      basePath: this.baseUrl,
      apiKey: options.apiKey,
      accessToken: options.accessToken,
      fetchApi: this.fetchApi,
    })
    this.articles = new ArticlesApi(configuration)
    this.chat = new ChatApi(configuration)
    this.collabs = new CollabsApi(configuration)
    this.collections = new CollectionsApi(configuration)
    this.comments = new CommentsApi(configuration)
    this.downloads = new DownloadsApi(configuration)
    this.emotes = new EmotesApi(configuration)
    this.feedback = new FeedbackApi(configuration)
    this.generator = new GeneratorApi(configuration)
    this.images = new ImagesApi(configuration)
    this.models = new ModelsApi(configuration)
    this.notifications = new NotificationsApi(configuration)
    this.oauthApi = new OAuthApi(configuration)
    this.oauth = new OAuthFlow(this.baseUrl, this.fetchApi)
    this.profile = new ProfileApi(configuration)
    this.social = new SocialApi(configuration)
    this.tags = new TagsApi(configuration)
    this.trustSafety = new TrustSafetyApi(configuration)
    this.users = new UsersApi(configuration)
    this.videos = new VideosApi(configuration)
    this.webhooks = new WebhooksApi(configuration)
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

function webhookBodyBytes(rawBody: string | ArrayBuffer | Uint8Array): Uint8Array {
  if (typeof rawBody === 'string') return new TextEncoder().encode(rawBody)
  return rawBody instanceof Uint8Array ? Uint8Array.from(rawBody) : new Uint8Array(rawBody.slice(0))
}

function constantTimeHexEqual(left: string, right: string): boolean {
  if (left.length !== right.length || !/^[a-f0-9]+$/i.test(left) || !/^[a-f0-9]+$/i.test(right)) return false
  let difference = 0
  for (let index = 0; index < left.length; index += 1) difference |= left.charCodeAt(index) ^ right.charCodeAt(index)
  return difference === 0
}

export async function verifyWebhookSignature(
  rawBody: string | ArrayBuffer | Uint8Array,
  signatureHeader: string,
  signingSecret: string,
  options: VerifyWebhookSignatureOptions = {}
): Promise<boolean> {
  if (!globalThis.crypto?.subtle) {
    throw new ArcEnCielError('Web Crypto HMAC-SHA256 support is required', { code: 'CRYPTO_UNAVAILABLE' })
  }
  const fields = signatureHeader.split(',').map(field => field.trim().split('=', 2))
  const timestampValue = fields.find(([name]) => name === 't')?.[1]
  const signatures = fields.filter(([name, value]) => name === 'v1' && value).map(([, value]) => value.toLowerCase())
  if (!timestampValue || signatures.length === 0 || !/^\d+$/.test(timestampValue)) return false
  const timestamp = Number(timestampValue)
  const nowSeconds = Math.floor((options.now ?? new Date()).getTime() / 1000)
  const toleranceSeconds = options.toleranceSeconds ?? 300
  if (!Number.isSafeInteger(timestamp) || toleranceSeconds < 0 || Math.abs(nowSeconds - timestamp) > toleranceSeconds) return false

  const prefix = new TextEncoder().encode(`${timestampValue}.`)
  const body = webhookBodyBytes(rawBody)
  const signedPayload = new Uint8Array(prefix.length + body.length)
  signedPayload.set(prefix)
  signedPayload.set(body, prefix.length)
  const key = await globalThis.crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(signingSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const digest = Array.from(new Uint8Array(await globalThis.crypto.subtle.sign('HMAC', key, signedPayload)))
    .map(value => value.toString(16).padStart(2, '0'))
    .join('')
  return signatures.some(signature => constantTimeHexEqual(signature, digest))
}

const paginationItems = <T>(result: { data?: readonly T[]; items?: readonly T[] }): readonly T[] => result.data ?? result.items ?? []

export async function* paginatePages<T>(loadPage: (page: number) => Promise<PagePaginationResult<T>>, startPage = 1): AsyncGenerator<T> {
  if (!Number.isInteger(startPage) || startPage < 1) {
    throw new ArcEnCielError('startPage must be a positive integer', { code: 'INVALID_PAGINATION' })
  }
  for (let page = startPage; ; page += 1) {
    const result = await loadPage(page)
    const items = paginationItems(result)
    yield* items
    if (result.totalPages != null) {
      if (page >= result.totalPages) return
      continue
    }
    if (result.hasMore !== true || items.length === 0) return
  }
}

export async function* paginateCursor<T, Cursor = string>(
  loadPage: (cursor: Cursor | undefined) => Promise<CursorPaginationResult<T, Cursor>>,
  initialCursor?: Cursor
): AsyncGenerator<T> {
  let cursor = initialCursor
  for (;;) {
    const result = await loadPage(cursor)
    yield* paginationItems(result)
    const nextCursor = result.nextCursor
    if (nextCursor == null) return
    if (Object.is(nextCursor, cursor)) {
      throw new ArcEnCielError('Cursor pagination returned the same continuation token twice', {
        code: 'INVALID_PAGINATION',
      })
    }
    cursor = nextCursor
  }
}

/** Backwards-compatible alias for page/limit pagination. */
export async function* paginate<T>(loadPage: (page: number) => Promise<PagePaginationResult<T>>, startPage = 1): AsyncGenerator<T> {
  yield* paginatePages(loadPage, startPage)
}
