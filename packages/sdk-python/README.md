# `arcenciel` 1.1.0

Official Python 3.11+ client for the immutable Arc en Ciel Developer API `1.10.0` contract. The package provides synchronous and asynchronous
generated APIs behind a small stable facade. PyPI publishes it from the signed public source tag through OIDC Trusted Publishing with a
digital attestation.

## Install

```bash
python3.11 -m pip install arcenciel==1.1.0
```

## OAuth Authorization Code with PKCE

```python
from arcenciel import ArcEnCielClient

client = ArcEnCielClient()
authorization = client.oauth.create_authorization(
    client_id="aec_client_...",
    redirect_uri="https://your-app.example/oauth/callback",
    scopes=["models:read", "offline_access"],
)
print(authorization.url)

# Restore `authorization` from server-side/session storage on the callback route.
tokens = client.oauth.exchange_callback(
    callback_url=incoming_callback_url,
    authorization=authorization,
)
```

The helper verifies both callback `state` and Arc en Ciel `iss` before the single-use exchange. Persist a returned rotated
`refresh_token` atomically and never retry an ambiguous token request. Confidential clients pass `client_secret` only server-side.

## Search and inspect a model

```python
from arcenciel import ArcEnCielClient

client = ArcEnCielClient(api_key="...", timeout=30.0)
page = client.call_sync(
    lambda: client.models.search_models_sync(
        search="landscape",
        page=1,
        limit=20,
    )
)

model = page.data[0] if page.data else None
if model and model.id:
    detail = client.call_sync(lambda: client.models.get_model_sync(id=model.id))
    print(detail.name)
```

Public catalogue reads do not require credentials. Configure `api_key` for account-specific filters and attribution. Use one key per
integration and grant only the documented scope.

## Page and cursor pagination

The facade exposes separate sync and async helpers for the API's two pagination styles. Wrap a generated response in
`PagePaginationResult` or `CursorPaginationResult`; callers then iterate values without maintaining page counters or opaque cursors:

```python
from arcenciel import CursorPaginationResult, PagePaginationResult
from arcenciel import paginate_cursor, paginate_pages

def load_models(page_number: int) -> PagePaginationResult:
    result = client.models.search_models_sync(page=page_number, limit=50)
    return PagePaginationResult(result.data, total_pages=result.total_pages)

for model in paginate_pages(load_models):
    print(model.id)

def load_notifications(cursor: str | None) -> CursorPaginationResult:
    result = client.notifications.list_notifications_sync(cursor=cursor, limit=50)
    return CursorPaginationResult(result.data, next_cursor=result.next_cursor)

for notification in paginate_cursor(load_notifications):
    print(notification.id)
```

Use `paginate_pages_async` and `paginate_cursor_async` with async generated methods. Invalid starts and repeated cursors raise
`ArcEnCielError` with code `INVALID_PAGINATION` instead of looping forever.

## Test safely in the sandbox

All 265 stable methods can target deterministic or stateful isolated fixtures without changing generated code:

```python
sandbox = ArcEnCielClient(
    base_url="https://arcenciel.io/developers/sandbox",
    api_key="aec_test_public",
)
page = sandbox.call_sync(lambda: sandbox.models.search_models_sync(limit=5))
```

The sandbox rejects live API keys, bearer credentials, and cookies. It supports documented error scenarios, binary ranges, redirects, and
streams for integration and retry tests. See the [sandbox guide](https://arcenciel.io/developers/sandbox).

Async calls use the same typed namespace and opt into retries only when the operation is safe:

```python
async with ArcEnCielClient(api_key="...") as client:
    model = await client.call(
        lambda: client.models.get_model(id=42),
        retry_safe=True,
    )
```

## Stream and verify a download

```python
from pathlib import Path

from arcenciel import ArcEnCielClient


async def download() -> Path:
    async with ArcEnCielClient(api_key="...") as client:
        info = await client.call(
            lambda: client.downloads.get_model_version_download_info(
                model_id=42,
                version_id=81,
            ),
            retry_safe=True,
        )
        return await client.download_to_file(
            42,
            81,
            "model.safetensors",
            filename=info.file_name,
            expected_sha256=info.sha256,
        )
```

`download_to_file` and `download_to_file_sync` follow HTTPS redirects, stream into an atomic temporary file, optionally preserve a Range
header, and compare the complete SHA-256 before replacing the destination. A failed checksum removes only the temporary file and leaves an
existing destination untouched. Use `stream_download` or `stream_download_sync` when the caller needs direct control over the response
stream.

## Errors and retries

`ArcEnCielError` exposes `status`, API `code`, `request_id`, response `headers`, and `retry_after`. Generated async calls are retried only
when `client.call(..., retry_safe=True)` is used and the failure is a network error or `429`, `502`, `503`, or `504`. Writes are never
retried implicitly. For a deliberately retried comment create, pass the same `idempotency_key` from the closure on every attempt.
Synchronous calls are normalized with `call_sync` and are not automatically retried.

## Create a comment with an idempotency key

```python
from uuid import uuid4

from arcenciel.generated.models.create_article_comment_request import (
    CreateArticleCommentRequest,
)

key = str(uuid4())
created = client.call_sync(
    lambda: client.comments.create_model_comment_sync(
        model_id=42,
        idempotency_key=key,
        create_article_comment_request=CreateArticleCommentRequest(
            content="Useful training notes—thank you!"
        ),
    )
)
print(created.comment.id)
```

Unknown future response enum values remain strings instead of failing deserialization.

## Read conversations and send once

```python
from uuid import uuid4

inbox = client.call_sync(
    lambda: client.chat.list_chat_threads_sync(folder="inbox", limit=30)
)
for thread in inbox.data:
    print(thread.id, thread.title, thread.has_unread)

created = client.call_sync(
    lambda: client.chat.create_chat_message_sync(
        thread_id=81,
        idempotency_key=str(uuid4()),
        content="The release render is ready.",
    )
)
print(created.id)
```

Grant `ChatRead` for thread, message, presence, unread, and preview reads. Add `ChatWrite` only for requests, groups, messages, reactions,
read state, and group mutations. Reuse the same idempotency key when deliberately retrying a request, group, or message create.

## Manage and verify Developer Webhooks

```python
from arcenciel import ArcEnCielClient, verify_webhook_signature

client = ArcEnCielClient(api_key="...")
endpoints = client.webhooks.list_webhook_endpoints_sync()
valid = verify_webhook_signature(
    raw_body,
    request.headers["x-aec-signature"],
    webhook_secret,
)
```

Grant `WebhooksRead` for event, endpoint, and delivery reads. Add `WebhooksWrite` for endpoint lifecycle, test delivery, secret rotation, and
manual retry. Pass the exact unparsed request body to `verify_webhook_signature`; its default replay window is five minutes.
Run [`examples/webhook_workflow.py`](./examples/webhook_workflow.py) with a `WebhooksRead` key for a non-mutating discovery and local
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
| `client.trust_safety`  | Illegal-content notices, private evidence, review requests, and content reports       |
| `client.users`         | Public profiles, creator statistics, search, and visible uploads                      |
| `client.videos`        | Video discovery, uploads, metadata, publishing, HLS, streaming, and downloads         |
| `client.webhooks`      | Endpoint lifecycle, event catalog, delivery diagnostics, retries, and secret rotation |

The generated low-level APIs and Pydantic models remain available under `arcenciel.generated`.

## Contract and generation

- Developer API: `1.10.0`, 265 operations
- SDK: `1.1.0`
- Python: 3.11+
- OpenAPI Generator CLI: `2.40.1`
- OpenAPI Generator: `7.24.0`
- Contract: <https://arcenciel.io/developers/openapi/1.10.0.json>
- Release manifest: <https://arcenciel.io/developers/openapi/releases.json>
- Portal and support: <https://arcenciel.io/developers>

Generated code is committed and deterministically regenerated from the immutable contract. The hand-written facade, tests, and this
README are preserved across regeneration.

## License

MIT
