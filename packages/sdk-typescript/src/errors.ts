import { FetchError, ResponseError } from './runtime.js'

export interface ArcEnCielErrorOptions {
  status?: number
  code?: string
  requestId?: string
  headers?: Headers
  retryAfterMs?: number
  cause?: unknown
}

export class ArcEnCielError extends Error {
  readonly status?: number
  readonly code?: string
  readonly requestId?: string
  readonly headers?: Headers
  readonly retryAfterMs?: number
  override readonly cause?: unknown

  constructor(message: string, options: ArcEnCielErrorOptions = {}) {
    super(message)
    this.name = 'ArcEnCielError'
    this.status = options.status
    this.code = options.code
    this.requestId = options.requestId
    this.headers = options.headers
    this.retryAfterMs = options.retryAfterMs
    this.cause = options.cause
  }
}

interface ApiErrorBody {
  code?: string
  error?: string
  message?: string
}

function retryAfterMs(headers: Headers): number | undefined {
  const value = headers.get('retry-after')
  if (!value) return undefined
  const seconds = Number(value)
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1_000)
  const date = Date.parse(value)
  return Number.isNaN(date) ? undefined : Math.max(0, date - Date.now())
}

export async function toArcEnCielError(error: unknown): Promise<ArcEnCielError> {
  if (error instanceof ArcEnCielError) return error
  if (error instanceof ResponseError) {
    let body: ApiErrorBody = {}
    try {
      body = (await error.response.clone().json()) as ApiErrorBody
    } catch {
      // Empty and non-JSON error responses are valid for some endpoints.
    }
    return new ArcEnCielError(body.message ?? body.error ?? `Arc en Ciel request failed (${error.response.status})`, {
      status: error.response.status,
      code: body.code,
      requestId: error.response.headers.get('x-request-id') ?? undefined,
      headers: error.response.headers,
      retryAfterMs: retryAfterMs(error.response.headers),
      cause: error,
    })
  }
  if (error instanceof FetchError) {
    return new ArcEnCielError(error.cause.message, { cause: error.cause })
  }
  if (error instanceof Error) return new ArcEnCielError(error.message, { cause: error })
  return new ArcEnCielError('Arc en Ciel request failed', { cause: error })
}
