# `@arcenciel/sdk` 1.1.0

Official TypeScript/JavaScript client for the immutable Arc en Ciel Developer API `1.10.0` contract. The package is tested for Node.js
20.20+ and modern browsers. npm publishes it from the signed public source tag through OIDC Trusted Publishing with provenance.

## Install

```bash
npm install @arcenciel/sdk@1.1.0
```

## OAuth Authorization Code with PKCE

```ts
const client = new ArcEnCielClient()
const authorization = await client.oauth.createAuthorization({
  clientId: 'aec_client_...',
  redirectUri: 'https://your-app.example/oauth/callback',
  scopes: ['models:read', 'offline_access'],
})

sessionStorage.setItem('arcenciel-oauth', JSON.stringify(authorization))
window.location.assign(authorization.url)

// On the callback route, restore `authorization` from server-side/session storage.
const tokens = await client.oauth.exchangeCallback({ callbackUrl: window.location.href, authorization })
```

The helper verifies both callback `state` and Arc en Ciel `iss` before the single-use exchange. Persist a returned rotated
`refreshToken` atomically and never retry an ambiguous token request. Confidential clients pass `clientSecret` only from a server.

## Search and inspect a model

```ts
import { ArcEnCielClient, paginatePages } from '@arcenciel/sdk'

const client = new ArcEnCielClient({
  apiKey: process.env.ARCENCIEL_API_KEY,
  timeoutMs: 30_000,
})

const firstPage = await client.call(() =>
  client.models.searchModels({
    search: 'landscape',
    page: 1,
    limit: 20,
  })
)

const model = firstPage.data?.[0]
if (model?.id) {
  const detail = await client.call(() => client.models.getModel({ id: model.id }))
  console.log(detail.name)
}

for await (const item of paginatePages(page => client.models.searchModels({ search: 'landscape', page, limit: 50 }))) {
  console.log(item.name)
}
```

Public catalogue reads do not require credentials. Configure `apiKey` for account-specific filters and attribution. Use one key per
integration and grant only the documented scope.

## Page and cursor pagination

The facade keeps the two API pagination styles explicit while hiding their continuation loops. `paginatePages` accepts one-based
`page`/`limit` responses with `totalPages` or `hasMore`; the existing `paginate` export remains a compatible alias. `paginateCursor`
treats continuation values as opaque and stops only when `nextCursor` is absent:

```ts
import { paginateCursor, paginatePages } from '@arcenciel/sdk'

for await (const model of paginatePages(page => client.models.searchModels({ page, limit: 50 }))) {
  console.log(model.id)
}

for await (const notification of paginateCursor(cursor => client.notifications.listNotifications({ cursor, limit: 50 }))) {
  console.log(notification.id)
}
```

Both helpers reject invalid starts or repeated continuation tokens with `ArcEnCielError` code `INVALID_PAGINATION` instead of looping
forever.

## Test safely in the sandbox

All 265 stable methods can target deterministic or stateful isolated fixtures without changing generated code:

```ts
const sandbox = new ArcEnCielClient({
  baseUrl: 'https://arcenciel.io/developers/sandbox',
  apiKey: 'aec_test_public',
})

const page = await sandbox.call(() => sandbox.models.searchModels({ limit: 5 }))
```

The sandbox rejects live API keys, bearer credentials, and cookies. It supports documented error scenarios, binary ranges, redirects, and
streams for integration and retry tests. See the [sandbox guide](https://arcenciel.io/developers/sandbox).

## Stream and verify a download

```ts
import { ArcEnCielClient, readAndVerifySha256 } from '@arcenciel/sdk'

const client = new ArcEnCielClient({ apiKey: process.env.ARCENCIEL_API_KEY })
const info = await client.call(() =>
  client.downloads.getModelVersionDownloadInfo({
    modelId: 42,
    versionId: 81,
  })
)

const response = await client.downloadModelVersionStream(42, 81, {
  filename: info.fileName,
  range: 'bytes=0-',
})

if (!response.body) throw new Error('The runtime did not provide a response stream')
if (!info.sha256) throw new Error('The API did not provide a SHA-256 for this file')

// For small files, this portable helper reads the response and verifies it with Web Crypto.
// Large Node.js downloads should pipe response.body to disk while calculating an incremental SHA-256.
const bytes = await readAndVerifySha256(response, info.sha256)
console.log(`Verified ${bytes.byteLength} bytes`)
```

`downloadModelVersionStream` follows HTTPS redirects, preserves optional Range requests, accepts `200` and `206`, and normalizes failures
to `ArcEnCielError`. Always compare the full SHA-256 returned by `getModelVersionDownloadInfo` when it is available.

## Errors, timeouts, and retries

Generated methods throw their native transport error unless invoked through `client.call(...)`. The facade converts failures to
`ArcEnCielError`, which exposes:

- `status` and API `code`;
- `requestId` from `X-Request-ID`;
- response `headers`;
- `retryAfterMs` for rate-limit and transient-failure handling.

GET, HEAD, and OPTIONS requests retry `429`, `502`, `503`, and `504` with bounded full jitter. A POST is retried only when the final
generated request contains an `Idempotency-Key`; the same request and key are reused. Other writes are never retried automatically.
Configure `{ retry: false }` to disable retries or provide `maxRetries`, `baseDelayMs`, and `maxDelayMs`.

## Create a comment with safe retries

```ts
const idempotencyKey = crypto.randomUUID()
const created = await client.call(() =>
  client.comments.createModelComment({
    modelId: 42,
    idempotencyKey,
    createArticleCommentRequest: { content: 'Useful training notes—thank you!' },
  })
)
console.log(created.comment.id)
```

Keep one key for the complete logical action. Matching retries replay the original successful response for 24 hours; changing the body
while reusing a key returns `409`.

## Read conversations and send once

```ts
const inbox = await client.call(() => client.chat.listChatThreads({ folder: 'inbox', limit: 30 }))
for (const thread of inbox.data) console.log(thread.id, thread.title, thread.hasUnread)

const created = await client.call(() =>
  client.chat.createChatMessage({
    threadId: 81,
    idempotencyKey: crypto.randomUUID(),
    content: 'The release render is ready.',
  })
)
console.log(created.id)
```

Grant `ChatRead` for thread, message, presence, unread, and preview reads. Add `ChatWrite` only for requests, groups, messages, reactions,
read state, and group mutations. Keep one idempotency key across every retry of the same request, group, or message create.

## Manage and verify Developer Webhooks

```ts
import { ArcEnCielClient, verifyWebhookSignature } from '@arcenciel/sdk'

const client = new ArcEnCielClient({ apiKey: process.env.ARCENCIEL_API_KEY })
const endpoints = await client.webhooks.listWebhookEndpoints()

const valid = await verifyWebhookSignature(rawBody, request.headers.get('x-aec-signature') ?? '', process.env.ARCENCIEL_WEBHOOK_SECRET!)
```

Grant `WebhooksRead` for event, endpoint, and delivery reads. Add `WebhooksWrite` for endpoint lifecycle, test delivery, secret rotation, and
manual retry. Pass the exact unparsed request body to `verifyWebhookSignature`; its default replay window is five minutes.
Run [`examples/webhook-workflow.ts`](./examples/webhook-workflow.ts) with a `WebhooksRead` key for a non-mutating discovery and local
signature-verification smoke workflow.

## Stable namespaces

| Namespace              | Stable operations                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------- |
| `client.articles`      | Article discovery, drafts, media, scheduling, publication, updates, and deletion      |
| `client.chat`          | Private threads, requests, groups, messages, reactions, presence, and read state      |
| `client.collabs`       | Collaboration discovery, showcases, requests, participant media, and membership       |
| `client.collections`   | Collection discovery, creation, collaborators, contribution review, items, and media  |
| `client.comments`      | Typed article, image, model, and video comment reads and mutations                    |
| `client.downloads`     | Model download metadata, binary transfers, training TOML, archives, and registration  |
| `client.emotes`        | Anonymous emote catalogue reads                                                       |
| `client.feedback`      | Caller-owned product feedback, attachments, and deletion                              |
| `client.generator`     | Image/video generation options, presets, uploads, jobs, events, outputs, and publish  |
| `client.images`        | Image discovery, uploads, metadata, crossposts, publishing, and bulk transfer         |
| `client.models`        | Models, versions, resumable uploads, managed media, resources, and publishing         |
| `client.notifications` | Cursor-paginated inbox, summary, and read-state updates                               |
| `client.profile`       | Own profile, uploads, export, history, pinned templates, links, and profile media     |
| `client.social`        | Favorites, follows, image/video reactions, and their explicit removal operations      |
| `client.tags`          | Anonymous tag-usage discovery                                                         |
| `client.trustSafety`   | Illegal-content notices, private evidence, review requests, and content reports       |
| `client.users`         | Public profiles, creator statistics, search, and visible uploads                      |
| `client.videos`        | Video discovery, uploads, metadata, publishing, HLS, streaming, and downloads         |
| `client.webhooks`      | Endpoint lifecycle, event catalog, delivery diagnostics, retries, and secret rotation |

The generated low-level APIs and models are also exported from the package root. Their method names come from the stable OpenAPI
`operationId` values.

## Contract and generation

- Developer API: `1.10.0`, 265 operations
- SDK: `1.1.0`
- OpenAPI Generator CLI: `2.40.1`
- OpenAPI Generator: `7.24.0`
- Contract: <https://arcenciel.io/developers/openapi/1.10.0.json>
- Release manifest: <https://arcenciel.io/developers/openapi/releases.json>
- Portal and support: <https://arcenciel.io/developers>

Generated code is committed and deterministically regenerated from the immutable contract. The hand-written facade, tests, and this
README are preserved across regeneration.

## License

MIT
