import { ArcEnCielError } from './errors.js'
import type { FetchAPI } from './runtime.js'

export interface OAuthAuthorization {
  url: string
  state: string
  codeVerifier: string
  clientId: string
  redirectUri: string
  issuer: string
}

export interface CreateOAuthAuthorizationOptions {
  clientId: string
  redirectUri: string
  scopes: readonly string[]
  state?: string
}

export interface OAuthClientCredentials {
  clientId: string
  clientSecret?: string
}

export interface OAuthTokenSet {
  accessToken: string
  tokenType: string
  expiresIn: number
  scope: string
  refreshToken?: string
}

export interface OAuthTokenIntrospection {
  active: boolean
  clientId?: string
  username?: string
  scope?: string
  tokenType?: string
  exp?: number
  iat?: number
  sub?: string
  iss?: string
}

const base64Url = (bytes: Uint8Array): string => {
  let binary = ''
  for (const value of bytes) binary += String.fromCharCode(value)
  return globalThis.btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

const randomUrlSafe = (bytes: number): string => {
  if (!globalThis.crypto?.getRandomValues) {
    throw new ArcEnCielError('Web Crypto random generation is required for OAuth state and PKCE', { code: 'CRYPTO_UNAVAILABLE' })
  }
  return base64Url(globalThis.crypto.getRandomValues(new Uint8Array(bytes)))
}

const basicAuthorization = (clientId: string, clientSecret: string): string => {
  const encoded = new TextEncoder().encode(`${clientId}:${clientSecret}`)
  let binary = ''
  for (const value of encoded) binary += String.fromCharCode(value)
  return `Basic ${globalThis.btoa(binary)}`
}

const normalizeTokenSet = (payload: Record<string, unknown>): OAuthTokenSet => ({
  accessToken: String(payload.access_token ?? ''),
  tokenType: String(payload.token_type ?? ''),
  expiresIn: Number(payload.expires_in),
  scope: String(payload.scope ?? ''),
  ...(typeof payload.refresh_token === 'string' ? { refreshToken: payload.refresh_token } : {}),
})

export class OAuthFlow {
  constructor(
    private readonly baseUrl: string,
    private readonly fetchApi: FetchAPI
  ) {}

  async createAuthorization(options: CreateOAuthAuthorizationOptions): Promise<OAuthAuthorization> {
    if (!options.clientId || !options.redirectUri || options.scopes.length === 0) {
      throw new ArcEnCielError('clientId, redirectUri, and at least one scope are required', { code: 'INVALID_ARGUMENT' })
    }
    const issuer = this.baseUrl
    const state = options.state ?? randomUrlSafe(24)
    if (state.length < 8) throw new ArcEnCielError('OAuth state must contain at least 8 characters', { code: 'INVALID_ARGUMENT' })
    const codeVerifier = randomUrlSafe(64)
    const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier))
    const query = new URLSearchParams({
      response_type: 'code',
      client_id: options.clientId,
      redirect_uri: options.redirectUri,
      scope: options.scopes.join(' '),
      state,
      code_challenge: base64Url(new Uint8Array(digest)),
      code_challenge_method: 'S256',
    })
    return {
      url: `${issuer}/api/oauth/authorize?${query.toString()}`,
      state,
      codeVerifier,
      clientId: options.clientId,
      redirectUri: options.redirectUri,
      issuer,
    }
  }

  async exchangeCallback(options: {
    callbackUrl: string
    authorization: OAuthAuthorization
    clientSecret?: string
  }): Promise<OAuthTokenSet> {
    const callback = new URL(options.callbackUrl)
    const protocolError = callback.searchParams.get('error')
    if (protocolError) {
      throw new ArcEnCielError(callback.searchParams.get('error_description') ?? protocolError, { code: protocolError })
    }
    if (callback.searchParams.get('state') !== options.authorization.state) {
      throw new ArcEnCielError('OAuth callback state does not match the authorization request', { code: 'OAUTH_STATE_MISMATCH' })
    }
    if (callback.searchParams.get('iss') !== options.authorization.issuer) {
      throw new ArcEnCielError('OAuth callback issuer does not match Arc en Ciel', { code: 'OAUTH_ISSUER_MISMATCH' })
    }
    const code = callback.searchParams.get('code')
    if (!code) throw new ArcEnCielError('OAuth callback does not contain an authorization code', { code: 'INVALID_CALLBACK' })
    return this.token(
      {
        grant_type: 'authorization_code',
        code,
        redirect_uri: options.authorization.redirectUri,
        code_verifier: options.authorization.codeVerifier,
      },
      { clientId: options.authorization.clientId, clientSecret: options.clientSecret }
    )
  }

  refresh(options: OAuthClientCredentials & { refreshToken: string }): Promise<OAuthTokenSet> {
    return this.token({ grant_type: 'refresh_token', refresh_token: options.refreshToken }, options)
  }

  async revoke(options: OAuthClientCredentials & { token: string }): Promise<void> {
    await this.formRequest('/api/oauth/revoke', { token: options.token }, options, false)
  }

  async introspect(options: OAuthClientCredentials & { clientSecret: string; token: string }): Promise<OAuthTokenIntrospection> {
    const payload = await this.formRequest('/api/oauth/introspect', { token: options.token }, options, true)
    return {
      active: payload.active === true,
      ...(typeof payload.client_id === 'string' ? { clientId: payload.client_id } : {}),
      ...(typeof payload.username === 'string' ? { username: payload.username } : {}),
      ...(typeof payload.scope === 'string' ? { scope: payload.scope } : {}),
      ...(typeof payload.token_type === 'string' ? { tokenType: payload.token_type } : {}),
      ...(typeof payload.exp === 'number' ? { exp: payload.exp } : {}),
      ...(typeof payload.iat === 'number' ? { iat: payload.iat } : {}),
      ...(typeof payload.sub === 'string' ? { sub: payload.sub } : {}),
      ...(typeof payload.iss === 'string' ? { iss: payload.iss } : {}),
    }
  }

  private async token(fields: Record<string, string>, credentials: OAuthClientCredentials): Promise<OAuthTokenSet> {
    return normalizeTokenSet(await this.formRequest('/api/oauth/token', fields, credentials, true))
  }

  private async formRequest(
    path: string,
    fields: Record<string, string>,
    credentials: OAuthClientCredentials,
    expectJson: boolean
  ): Promise<Record<string, unknown>> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
    const body = new URLSearchParams(fields)
    if (credentials.clientSecret) headers.set('Authorization', basicAuthorization(credentials.clientId, credentials.clientSecret))
    else body.set('client_id', credentials.clientId)
    const response = await this.fetchApi(`${this.baseUrl}${path}`, { method: 'POST', headers, body })
    if (!response.ok) {
      let payload: Record<string, unknown> = {}
      try {
        payload = (await response.clone().json()) as Record<string, unknown>
      } catch {
        // OAuth permits empty error responses from intermediaries.
      }
      throw new ArcEnCielError(String(payload.error_description ?? payload.error ?? `OAuth request failed (${response.status})`), {
        status: response.status,
        code: typeof payload.error === 'string' ? payload.error : undefined,
        requestId: response.headers.get('x-request-id') ?? undefined,
        headers: response.headers,
      })
    }
    if (!expectJson) return {}
    return (await response.json()) as Record<string, unknown>
  }
}
