import { describe, expect, it, vi } from 'vitest'

import { ArcEnCielClient, createArcEnCielFetch, paginate, readAndVerifySha256, sha256Hex } from '../src'

describe('ArcEnCielClient', () => {
  it('configures the API key and base URL', async () => {
    const fetch = vi.fn(async () => Response.json({ classes: [] }, { headers: { 'x-request-id': 'request-1' } }))
    const client = new ArcEnCielClient({ apiKey: 'secret', baseUrl: 'https://example.test/', fetch })

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
        ].includes(key)
      )
    ).toHaveLength(18)

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
})
