import { describe, expect, it, vi } from 'vitest'

import {
  ArcEnCielClient,
  createArcEnCielFetch,
  paginate,
  paginateCursor,
  paginatePages,
  type OAuthAuthorization,
  readAndVerifySha256,
  sha256Hex,
  UserProfileSocialLinksInnerFromJSON,
  verifyWebhookSignature,
} from '../src'
import type { SelfProfileSocialLinksInner, UserProfileSocialLinksInner } from '../src'

describe('ArcEnCielClient', () => {
  it('preserves the SDK 1.0.0 social-link model alias', () => {
    const legacy: UserProfileSocialLinksInner = { id: 1, url: 'https://example.test/creator' }
    const canonical: SelfProfileSocialLinksInner = legacy

    expect(UserProfileSocialLinksInnerFromJSON(canonical)).toEqual(legacy)
  })

  it('configures the API key and base URL', async () => {
    const fetch = vi.fn(async () => Response.json({ classes: [] }, { headers: { 'x-request-id': 'request-1' } }))
    const client = new ArcEnCielClient({ apiKey: 'secret', baseUrl: `https://example.test${'/'.repeat(2_048)}`, fetch })

    expect(
      Object.keys(client).filter(key =>
        [
          'articles',
          'chat',
          'collabs',
          'collections',
          'comments',
          'downloads',
          'emotes',
          'feedback',
          'generator',
          'images',
          'models',
          'notifications',
          'profile',
          'social',
          'tags',
          'trustSafety',
          'users',
          'videos',
          'webhooks',
        ].includes(key)
      )
    ).toHaveLength(19)

    await client.models.listModelClasses()

    expect(fetch).toHaveBeenCalledOnce()
    const [url, init] = fetch.mock.calls[0]
    expect(url).toBe('https://example.test/api/models/classes')
    expect(new Headers(init?.headers).get('x-api-key')).toBe('secret')
  })

  it('exposes the v1.6 generator namespace with API-key authentication', async () => {
    const fetch = vi.fn(async () =>
      Response.json({ enabled: true, message: null, allowModeratorsWhenDisabled: false, regionalPromptsAdminsOnly: false })
    )
    const client = new ArcEnCielClient({ apiKey: 'generator-key', baseUrl: 'https://example.test', fetch, retry: false })

    const state = await client.generator.getGeneratorState()

    expect(state.enabled).toBe(true)
    const [url, init] = fetch.mock.calls[0]
    expect(url).toBe('https://example.test/api/generator/state')
    expect(new Headers(init?.headers).get('x-api-key')).toBe('generator-key')
  })

  it('exposes the v1.7 chat namespace with scoped API-key authentication', async () => {
    const fetch = vi.fn(async () => Response.json({ data: [], limit: 30 }))
    const client = new ArcEnCielClient({ apiKey: 'chat-read-key', baseUrl: 'https://example.test', fetch, retry: false })

    const threads = await client.chat.listChatThreads({ folder: 'inbox', limit: 30 })

    expect(threads.data).toEqual([])
    const [url, init] = fetch.mock.calls[0]
    expect(url).toBe('https://example.test/api/chat/threads?folder=inbox&limit=30')
    expect(new Headers(init?.headers).get('x-api-key')).toBe('chat-read-key')
  })

  it('exposes v1.8 feedback and trust namespaces with scoped API-key authentication', async () => {
    const fetch = vi.fn(async () => Response.json([]))
    const client = new ArcEnCielClient({ apiKey: 'feedback-read-key', baseUrl: 'https://example.test', fetch, retry: false })

    expect(await client.feedback.listMyFeedback()).toEqual([])
    expect(await client.trustSafety.listMyIllegalContentNotices()).toEqual([])

    expect(fetch).toHaveBeenCalledTimes(2)
    expect(fetch.mock.calls[0][0]).toBe('https://example.test/api/feedback/me')
    expect(fetch.mock.calls[1][0]).toBe('https://example.test/api/illegal-content-notices/me')
    for (const [, init] of fetch.mock.calls) expect(new Headers(init?.headers).get('x-api-key')).toBe('feedback-read-key')
  })

  it('exposes the v1.9 webhooks namespace', async () => {
    const fetch = vi.fn(async () => Response.json({ data: [] }))
    const client = new ArcEnCielClient({ apiKey: 'webhooks-read-key', baseUrl: 'https://example.test', fetch, retry: false })

    expect((await client.webhooks.listWebhookEndpoints()).data).toEqual([])
    expect(fetch.mock.calls[0][0]).toBe('https://example.test/api/webhooks/endpoints')
    expect(new Headers(fetch.mock.calls[0][1]?.headers).get('x-api-key')).toBe('webhooks-read-key')
  })

  it('exposes v1.10 generated OAuth methods and a state/issuer/PKCE-safe flow', async () => {
    const fetch = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input)
      if (url.endsWith('/api/oauth/token')) {
        const body = new URLSearchParams(String(init?.body))
        expect(init?.method).toBe('POST')
        expect(body.get('grant_type')).toBe('authorization_code')
        expect(body.get('code')).toBe('single-use-code')
        expect(body.get('code_verifier')?.length).toBeGreaterThanOrEqual(43)
        expect(body.get('client_id')).toBe('aec_client_test')
        expect(new Headers(init?.headers).has('x-api-key')).toBe(false)
        return Response.json({
          access_token: 'access-1',
          token_type: 'Bearer',
          expires_in: 900,
          scope: 'models:read offline_access',
          refresh_token: 'refresh-1',
        })
      }
      return Response.json({ data: [] })
    })
    const client = new ArcEnCielClient({ baseUrl: 'https://example.test', fetch, retry: false })
    expect(client.oauthApi).toBeDefined()
    const authorization = await client.oauth.createAuthorization({
      clientId: 'aec_client_test',
      redirectUri: 'https://client.test/callback',
      scopes: ['models:read', 'offline_access'],
      state: 'state-value-123',
    })
    const authorizationUrl = new URL(authorization.url)
    expect(authorizationUrl.searchParams.get('code_challenge_method')).toBe('S256')
    expect(authorizationUrl.searchParams.get('code_challenge')).toMatch(/^[A-Za-z0-9_-]{43}$/)

    const tokens = await client.oauth.exchangeCallback({
      callbackUrl: 'https://client.test/callback?code=single-use-code&state=state-value-123&iss=https%3A%2F%2Fexample.test',
      authorization,
    })
    expect(tokens).toMatchObject({ accessToken: 'access-1', refreshToken: 'refresh-1', expiresIn: 900 })
  })

  it('rejects OAuth callback mix-up attacks before making a token request', async () => {
    const fetch = vi.fn(async () => Response.json({}))
    const client = new ArcEnCielClient({ baseUrl: 'https://example.test', fetch, retry: false })
    const authorization: OAuthAuthorization = {
      url: 'https://example.test/api/oauth/authorize',
      state: 'expected-state',
      codeVerifier: 'v'.repeat(64),
      clientId: 'client',
      redirectUri: 'https://client.test/callback',
      issuer: 'https://example.test',
    }
    await expect(
      client.oauth.exchangeCallback({
        callbackUrl: 'https://client.test/callback?code=code&state=wrong-state&iss=https%3A%2F%2Fexample.test',
        authorization,
      })
    ).rejects.toMatchObject({ code: 'OAUTH_STATE_MISMATCH' })
    await expect(
      client.oauth.exchangeCallback({
        callbackUrl: 'https://client.test/callback?code=code&state=expected-state&iss=https%3A%2F%2Fevil.test',
        authorization,
      })
    ).rejects.toMatchObject({ code: 'OAUTH_ISSUER_MISMATCH' })
    expect(fetch).not.toHaveBeenCalled()
  })

  it('rotates, revokes, and introspects OAuth credentials without retrying protocol writes', async () => {
    const requests: Array<{ url: string; body: URLSearchParams; headers: Headers }> = []
    const fetch = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const entry = { url: String(input), body: new URLSearchParams(String(init?.body)), headers: new Headers(init?.headers) }
      requests.push(entry)
      if (entry.url.endsWith('/token')) {
        return Response.json({
          access_token: 'access-2',
          token_type: 'Bearer',
          expires_in: 900,
          scope: 'models:read',
          refresh_token: 'refresh-2',
        })
      }
      if (entry.url.endsWith('/introspect')) return Response.json({ active: true, client_id: 'client', exp: 123, sub: '42' })
      return new Response(null, { status: 200 })
    })
    const client = new ArcEnCielClient({ baseUrl: 'https://example.test', fetch, retry: { maxRetries: 3, baseDelayMs: 0 } })
    expect(await client.oauth.refresh({ clientId: 'client', refreshToken: 'refresh-1' })).toMatchObject({ refreshToken: 'refresh-2' })
    await client.oauth.revoke({ clientId: 'client', token: 'refresh-2' })
    expect(await client.oauth.introspect({ clientId: 'client', clientSecret: 'secret', token: 'access-2' })).toMatchObject({
      active: true,
      clientId: 'client',
      sub: '42',
    })
    expect(requests[0].body.get('refresh_token')).toBe('refresh-1')
    expect(requests[1].body.get('client_id')).toBe('client')
    expect(requests[2].headers.get('authorization')).toBe(`Basic ${btoa('client:secret')}`)
    expect(fetch).toHaveBeenCalledTimes(3)
  })

  it('normalizes generated response errors', async () => {
    const client = new ArcEnCielClient({
      fetch: async () =>
        Response.json(
          { code: 'RATE_LIMITED', message: 'Slow down' },
          { status: 429, headers: { 'retry-after': '2', 'x-request-id': 'request-2' } }
        ),
      retry: false,
    })

    await expect(client.call(() => client.models.listModelClasses())).rejects.toMatchObject({
      name: 'ArcEnCielError',
      status: 429,
      code: 'RATE_LIMITED',
      requestId: 'request-2',
      retryAfterMs: 2_000,
    })
  })

  it('retries safe reads and idempotency-protected posts but not unsafe writes', async () => {
    const fetch = vi
      .fn()
      .mockResolvedValueOnce(new Response(null, { status: 503 }))
      .mockResolvedValueOnce(Response.json({ ok: true }))
    const retryingFetch = createArcEnCielFetch(fetch, 1_000, {
      maxRetries: 1,
      baseDelayMs: 0,
    })

    expect((await retryingFetch('https://example.test')).status).toBe(200)
    expect(fetch).toHaveBeenCalledTimes(2)

    fetch.mockClear().mockResolvedValue(new Response(null, { status: 503 }))
    expect((await retryingFetch('https://example.test', { method: 'POST' })).status).toBe(503)
    expect(fetch).toHaveBeenCalledOnce()

    fetch
      .mockClear()
      .mockResolvedValueOnce(new Response(null, { status: 503 }))
      .mockResolvedValueOnce(Response.json({ ok: true }))
    expect(
      (
        await retryingFetch('https://example.test', {
          method: 'POST',
          headers: { 'Idempotency-Key': 'comment-create-1' },
        })
      ).status
    ).toBe(200)
    expect(fetch).toHaveBeenCalledTimes(2)
    expect(new Headers(fetch.mock.calls[1][1]?.headers).get('idempotency-key')).toBe('comment-create-1')
  })

  it('serializes a v1.5 publishing create with its scope credential and idempotency key', async () => {
    const fetch = vi.fn(async () => Response.json({ id: 84, slug: 'sdk-fixture' }, { status: 201 }))
    const client = new ArcEnCielClient({ apiKey: 'collections-key', baseUrl: 'https://example.test', fetch, retry: false })

    const created = await client.collections.createCollection({
      idempotencyKey: 'publishing-fixture-1',
      createCollectionRequest: {
        name: 'SDK fixture',
        type: 'MODEL',
        visibility: 'PRIVATE',
      },
    })

    expect(created).toEqual({ id: 84, slug: 'sdk-fixture' })
    const [url, init] = fetch.mock.calls[0]
    expect(url).toBe('https://example.test/api/collections')
    expect(init?.method).toBe('POST')
    expect(new Headers(init?.headers).get('x-api-key')).toBe('collections-key')
    expect(new Headers(init?.headers).get('idempotency-key')).toBe('publishing-fixture-1')
    expect(JSON.parse(String(init?.body))).toMatchObject({ name: 'SDK fixture', type: 'MODEL', visibility: 'PRIVATE' })
  })

  it('iterates all pages', async () => {
    const load = vi.fn(async (page: number) => ({ data: [page], totalPages: 2 }))
    const values: number[] = []
    for await (const value of paginate(load)) values.push(value)
    expect(values).toEqual([1, 2])
  })

  it('abstracts page/limit and cursor pagination without exposing transport loops', async () => {
    const pageValues: number[] = []
    for await (const value of paginatePages(async page => ({ items: [page], hasMore: page < 3 }))) pageValues.push(value)
    expect(pageValues).toEqual([1, 2, 3])

    const cursorValues: string[] = []
    const cursors: Array<string | undefined> = []
    for await (const value of paginateCursor(async cursor => {
      cursors.push(cursor)
      return cursor === undefined ? { data: ['first'], nextCursor: 'page-2' } : { data: ['second'], nextCursor: null }
    })) {
      cursorValues.push(value)
    }
    expect(cursors).toEqual([undefined, 'page-2'])
    expect(cursorValues).toEqual(['first', 'second'])

    await expect(
      (async () => {
        for await (const _value of paginatePages(async () => ({ data: [] }), 0)) void _value
      })()
    ).rejects.toMatchObject({ code: 'INVALID_PAGINATION' })
    await expect(
      (async () => {
        for await (const _value of paginateCursor(async () => ({ data: [], nextCursor: 'same' }), 'same')) void _value
      })()
    ).rejects.toMatchObject({ code: 'INVALID_PAGINATION' })
  })

  it('streams downloads with auth, range, redirects, and encoded filenames', async () => {
    const fetch = vi.fn(
      async () => new Response('content', { status: 206, headers: { 'content-range': 'bytes 0-6/7', 'x-request-id': 'download-1' } })
    )
    const client = new ArcEnCielClient({ apiKey: 'secret', accessToken: 'bearer', baseUrl: 'https://example.test/', fetch })

    const response = await client.downloadModelVersionStream(1, 2, {
      filename: 'model name.safetensors',
      range: 'bytes=0-6',
    })

    expect(response.status).toBe(206)
    expect(await response.text()).toBe('content')
    const [url, init] = fetch.mock.calls[0]
    expect(url).toBe('https://example.test/api/models/1/versions/2/download/model%20name.safetensors')
    expect(new Headers(init?.headers).get('x-api-key')).toBe('secret')
    expect(new Headers(init?.headers).get('authorization')).toBe('Bearer bearer')
    expect(new Headers(init?.headers).get('range')).toBe('bytes=0-6')
    expect(init?.redirect).toBe('follow')
  })

  it('normalizes download failures', async () => {
    const client = new ArcEnCielClient({
      fetch: async () => Response.json({ code: 'RANGE_INVALID', message: 'Invalid range' }, { status: 416 }),
      retry: false,
    })

    await expect(client.downloadModelVersionStream(1, 2)).rejects.toMatchObject({
      name: 'ArcEnCielError',
      status: 416,
      code: 'RANGE_INVALID',
    })
    await expect(client.downloadModelVersionStream(0, 2)).rejects.toMatchObject({ code: 'INVALID_ARGUMENT' })
  })

  it('calculates and verifies SHA-256 checksums', async () => {
    const expected = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
    expect(await sha256Hex(new TextEncoder().encode('hello'))).toBe(expected)
    await expect(readAndVerifySha256(new Response('hello'), expected)).resolves.toEqual(new TextEncoder().encode('hello'))
    await expect(readAndVerifySha256(new Response('hello'), '0'.repeat(64))).rejects.toMatchObject({ code: 'CHECKSUM_MISMATCH' })
    await expect(readAndVerifySha256(new Response('hello'), 'invalid')).rejects.toMatchObject({ code: 'INVALID_CHECKSUM' })
  })

  it('verifies webhook signatures, rotation candidates, and timestamp tolerance', async () => {
    const body = '{"id":"evt_1"}'
    const secret = 'whsec_sdk_test'
    const timestamp = '1786147200'
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
    const digest = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${timestamp}.${body}`))
    const signature = Array.from(new Uint8Array(digest))
      .map(value => value.toString(16).padStart(2, '0'))
      .join('')

    await expect(
      verifyWebhookSignature(body, `t=${timestamp},v1=${'0'.repeat(64)},v1=${signature}`, secret, {
        now: new Date(Number(timestamp) * 1000),
      })
    ).resolves.toBe(true)
    await expect(
      verifyWebhookSignature(body, `t=${timestamp},v1=${signature}`, secret, { now: new Date((Number(timestamp) + 301) * 1000) })
    ).resolves.toBe(false)
    await expect(verifyWebhookSignature(body, 'invalid', secret)).resolves.toBe(false)
  })
})
