# `@arcenciel/sdk` 0.2.0 source beta

Official TypeScript/JavaScript client for the immutable Arc en Ciel Developer API `1.2.0` contract. The package is tested for Node.js
20.20+ and modern browsers. It remains a source beta until the public release manifest reports `published-beta`; the npm package name is
reserved in the release workflow but is not currently published.

## Install the source beta

```bash
git clone --branch sdk-v0.2.0 --depth 1 https://github.com/FallenIncursio/arcenciel-sdks.git
cd arcenciel-sdks/packages/sdk-typescript
npm install --ignore-scripts
npx tsc
npx tsc -p tsconfig.esm.json
node scripts/write-esm-package.mjs
```

After trusted publication, the release manifest and Developer Portal switch to:

```bash
npm install @arcenciel/sdk@0.2.0
```

## Search and inspect a model

```ts
import { ArcEnCielClient, paginate } from '@arcenciel/sdk'

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

for await (const item of paginate(page => client.models.searchModels({ search: 'landscape', page, limit: 50 }))) {
  console.log(item.name)
}
```

Public catalogue reads do not require credentials. Configure `apiKey` for account-specific filters and attribution. Use one key per
integration and grant only the documented scope.

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

GET, HEAD, and OPTIONS requests retry `429`, `502`, `503`, and `504` with bounded full jitter. Writes are never retried automatically.
Configure `{ retry: false }` to disable retries or provide `maxRetries`, `baseDelayMs`, and `maxDelayMs`.

## Stable namespaces

| Namespace | Stable operations |
| --- | --- |
| `client.articles` | Article search, detail, and article-image transfer |
| `client.downloads` | Model download metadata, binary transfers, training TOML, archives, and registration |
| `client.emotes` | Anonymous emote catalogue reads |
| `client.images` | Image search, metadata, related media, analysis, and binary transfers |
| `client.models` | Model search, details, versions, gallery, classes, previews, and resource graphs |
| `client.tags` | Anonymous tag-usage discovery |
| `client.users` | Public profiles, creator statistics, search, and visible uploads |
| `client.videos` | Video search, metadata, related media, HLS, streaming, posters, and downloads |

The generated low-level APIs and models are also exported from the package root. Their method names come from the stable OpenAPI
`operationId` values.

## Contract and generation

- Developer API: `1.2.0`, 46 operations
- SDK: `0.2.0` source beta
- OpenAPI Generator CLI: `2.40.1`
- OpenAPI Generator: `7.24.0`
- Contract: <https://arcenciel.io/developers/openapi/1.2.0.json>
- Release manifest: <https://arcenciel.io/developers/openapi/releases.json>
- Portal and support: <https://arcenciel.io/developers>

Generated code is committed and deterministically regenerated from the immutable contract. The hand-written facade, tests, and this
README are preserved across regeneration.

## License

MIT
