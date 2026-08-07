# `arcenciel` 0.1.0 source beta

Official Python 3.11+ client for the immutable Arc en Ciel Developer API `1.1.0` contract. The package provides synchronous and asynchronous
generated APIs behind a small stable facade. It remains a source beta until the public release manifest reports `published-beta`; it is
not currently available from PyPI.

## Install the source beta

```bash
git clone --branch sdk-v0.1.0 --depth 1 https://github.com/FallenIncursio/arcenciel-sdks.git
cd arcenciel-sdks
python3.11 -m pip install ./packages/sdk-python
```

After trusted publication, the release manifest and Developer Portal switch to:

```bash
python3.11 -m pip install arcenciel==0.1.0
```

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
retried implicitly. Synchronous calls are normalized with `call_sync` and are not automatically retried.

Unknown future response enum values remain strings instead of failing deserialization.

## Stable namespaces

| Namespace | Stable operations |
| --- | --- |
| `client.models` | Search, model detail, model versions, gallery, and model classes |
| `client.downloads` | Download metadata, binary download, filename download, and download registration |

The generated low-level APIs and Pydantic models remain available under `arcenciel.generated`.

## Contract and generation

- Developer API: `1.1.0`, 10 operations
- SDK: `0.1.0` source beta
- Python: 3.11+
- OpenAPI Generator CLI: `2.40.1`
- OpenAPI Generator: `7.24.0`
- Contract: <https://arcenciel.io/developers/openapi/1.1.0.json>
- Release manifest: <https://arcenciel.io/developers/openapi/releases.json>
- Portal and support: <https://arcenciel.io/developers>

Generated code is committed and deterministically regenerated from the immutable contract. The hand-written facade, tests, and this
README are preserved across regeneration.

## License

MIT
