from __future__ import annotations

import hashlib
from importlib.metadata import version as package_version
from pathlib import Path
from typing import Any
from unittest.mock import AsyncMock

import httpx
import pytest

from arcenciel import ArcEnCielClient, ArcEnCielError, __version__, to_arcenciel_error
from arcenciel.generated.exceptions import ApiException
from arcenciel.generated.models.create_collection_request import CreateCollectionRequest
from arcenciel.generated.models.image import Image
from arcenciel.generated.models.version import Version


def test_reports_package_version() -> None:
    assert __version__ == package_version("arcenciel")


def test_configures_namespaces_and_api_key() -> None:
    client = ArcEnCielClient(api_key="secret", base_url="https://example.test/")

    assert client.base_url == "https://example.test"
    assert client.models.api_client.configuration.api_key["apiKeyAuth"] == "secret"
    assert client.downloads.api_client is client.models.api_client
    assert all(
        namespace.api_client is client.models.api_client
        for namespace in (
            client.articles,
            client.chat,
            client.collabs,
            client.collections,
            client.comments,
            client.downloads,
            client.emotes,
            client.feedback,
            client.generator,
            client.images,
            client.notifications,
            client.profile,
            client.social,
            client.tags,
            client.trust_safety,
            client.users,
            client.videos,
        )
    )


def test_exposes_v16_generator_namespace() -> None:
    client = ArcEnCielClient(api_key="generator-key", base_url="https://example.test")

    method, url, headers, _, _ = client.generator._get_generator_state_serialize(
        _request_auth=None,
        _content_type=None,
        _headers=None,
        _host_index=0,
    )

    assert method == "GET"
    assert url == "https://example.test/api/generator/state"
    assert headers["x-api-key"] == "generator-key"


def test_exposes_v17_chat_namespace() -> None:
    client = ArcEnCielClient(api_key="chat-read-key", base_url="https://example.test")

    method, url, headers, _, _ = client.chat._list_chat_threads_serialize(
        folder="inbox",
        limit=30,
        _request_auth=None,
        _content_type=None,
        _headers=None,
        _host_index=0,
    )

    assert method == "GET"
    assert url == "https://example.test/api/chat/threads?folder=inbox&limit=30"
    assert headers["x-api-key"] == "chat-read-key"


def test_exposes_v18_feedback_and_trust_namespaces() -> None:
    client = ArcEnCielClient(api_key="feedback-read-key", base_url="https://example.test")

    feedback_method, feedback_url, feedback_headers, _, _ = (
        client.feedback._list_my_feedback_serialize(
            _request_auth=None,
            _content_type=None,
            _headers=None,
            _host_index=0,
        )
    )
    trust_method, trust_url, trust_headers, _, _ = (
        client.trust_safety._list_my_illegal_content_notices_serialize(
            _request_auth=None,
            _content_type=None,
            _headers=None,
            _host_index=0,
        )
    )

    assert feedback_method == trust_method == "GET"
    assert feedback_url == "https://example.test/api/feedback/me"
    assert trust_url == "https://example.test/api/illegal-content-notices/me"
    assert feedback_headers["x-api-key"] == trust_headers["x-api-key"] == "feedback-read-key"


def test_normalizes_api_errors() -> None:
    generated = ApiException(
        status=429,
        reason="Too Many Requests",
        body='{"code":"RATE_LIMITED","message":"Slow down"}',
    )
    generated.headers = {"x-request-id": "request-1", "retry-after": "2"}

    error = to_arcenciel_error(generated)

    assert error.status == 429
    assert error.code == "RATE_LIMITED"
    assert error.request_id == "request-1"
    assert error.retry_after == 2.0


@pytest.mark.asyncio
async def test_retries_only_when_call_is_marked_safe(monkeypatch: pytest.MonkeyPatch) -> None:
    client = ArcEnCielClient(max_retries=1)
    attempts = 0

    async def request() -> str:
        nonlocal attempts
        attempts += 1
        if attempts == 1:
            raise ApiException(status=503, reason="Unavailable")
        return "ok"

    async def no_sleep(_delay: float) -> None:
        return None

    monkeypatch.setattr("arcenciel.client.asyncio.sleep", no_sleep)
    assert await client.call(request, retry_safe=True) == "ok"
    assert attempts == 2


def test_sync_call_normalizes_errors() -> None:
    client = ArcEnCielClient()

    def request() -> None:
        raise ApiException(status=403, reason="Forbidden")

    with pytest.raises(ArcEnCielError, match="Forbidden"):
        client.call_sync(request)


def test_serializes_v15_publishing_create_with_auth_and_idempotency() -> None:
    client = ArcEnCielClient(api_key="collections-key", base_url="https://example.test")

    method, url, headers, body, form = client.collections._create_collection_serialize(
        create_collection_request=CreateCollectionRequest(
            name="SDK fixture", type="MODEL", visibility="PRIVATE"
        ),
        idempotency_key="publishing-fixture-1",
        _request_auth=None,
        _content_type=None,
        _headers=None,
        _host_index=0,
    )

    assert method == "POST"
    assert url == "https://example.test/api/collections"
    assert headers["x-api-key"] == "collections-key"
    assert headers["Idempotency-Key"] == "publishing-fixture-1"
    assert body == {"name": "SDK fixture", "type": "MODEL", "visibility": "PRIVATE"}
    assert form == []


@pytest.mark.asyncio
async def test_async_context_closes_generated_client() -> None:
    client = ArcEnCielClient()
    close = AsyncMock()
    client.api_client.close = close

    async with client as active:
        assert active is client

    close.assert_awaited_once()


@pytest.mark.asyncio
async def test_unsafe_call_is_not_retried() -> None:
    client = ArcEnCielClient(max_retries=2)

    async def request() -> None:
        raise RuntimeError("network down")

    with pytest.raises(ArcEnCielError, match="network down"):
        await client.call(request)


def test_sync_download_stream_preserves_auth_and_range(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    original_client = httpx.Client

    def handler(request: httpx.Request) -> httpx.Response:
        assert request.url.path.endswith("/download/model.safetensors")
        assert request.headers["x-api-key"] == "secret"
        assert request.headers["authorization"] == "Bearer bearer"
        assert request.headers["range"] == "bytes=0-9"
        return httpx.Response(206, content=b"ten-bytes!", request=request)

    def client_factory(**kwargs: Any) -> httpx.Client:
        return original_client(transport=httpx.MockTransport(handler), **kwargs)

    monkeypatch.setattr("arcenciel.client.httpx.Client", client_factory)
    client = ArcEnCielClient(api_key="secret", access_token="bearer")
    with client.stream_download_sync(
        1, 2, filename="model.safetensors", range_header="bytes=0-9"
    ) as response:
        assert response.read() == b"ten-bytes!"


def test_sync_download_stream_normalizes_error(monkeypatch: pytest.MonkeyPatch) -> None:
    original_client = httpx.Client

    def handler(request: httpx.Request) -> httpx.Response:
        return httpx.Response(
            416,
            headers={"x-request-id": "range-request"},
            request=request,
        )

    def client_factory(**kwargs: Any) -> httpx.Client:
        return original_client(transport=httpx.MockTransport(handler), **kwargs)

    monkeypatch.setattr("arcenciel.client.httpx.Client", client_factory)
    client = ArcEnCielClient()
    with pytest.raises(ArcEnCielError) as raised, client.stream_download_sync(1, 2):
        pass
    assert raised.value.status == 416
    assert raised.value.request_id == "range-request"


@pytest.mark.asyncio
async def test_async_download_stream_success_and_error(monkeypatch: pytest.MonkeyPatch) -> None:
    original_client = httpx.AsyncClient
    statuses = iter([200, 503])

    def handler(request: httpx.Request) -> httpx.Response:
        return httpx.Response(
            next(statuses),
            content=b"content",
            headers={"x-request-id": "async-request"},
            request=request,
        )

    def client_factory(**kwargs: Any) -> httpx.AsyncClient:
        return original_client(transport=httpx.MockTransport(handler), **kwargs)

    monkeypatch.setattr("arcenciel.client.httpx.AsyncClient", client_factory)
    client = ArcEnCielClient()
    async with client.stream_download(1, 2) as response:
        assert await response.aread() == b"content"
    with pytest.raises(ArcEnCielError) as raised:
        async with client.stream_download(1, 2):
            pass
    assert raised.value.status == 503


def test_unknown_response_enum_value_is_tolerated() -> None:
    version = Version.from_dict({"fileScanStatus": "FUTURE_SCAN_STATE"})

    assert version is not None
    assert version.file_scan_status == "FUTURE_SCAN_STATE"


def test_numeric_string_image_seed_is_tolerated() -> None:
    image = Image.from_dict({"seed": "4214574624"})

    assert image is not None
    assert image.seed == "4214574624"


def test_error_parser_handles_existing_plain_and_http_date_errors() -> None:
    existing = ArcEnCielError("existing")
    assert to_arcenciel_error(existing) is existing
    assert str(to_arcenciel_error(ValueError("plain"))) == "plain"

    dated = ApiException(status=503, reason="Unavailable", body="not json")
    dated.headers = {"Retry-After": "Wed, 21 Oct 2015 07:28:00 GMT"}
    assert to_arcenciel_error(dated).retry_after == 0.0

    missing = ApiException(status=500, reason="Error")
    missing.headers = {"Retry-After": "not-a-date"}
    assert to_arcenciel_error(missing).retry_after is None


def test_retry_delay_uses_server_hint() -> None:
    assert ArcEnCielClient._retry_delay(3, 1.5) == 1.5


def test_sync_download_to_file_is_atomic_and_verifies_sha256(
    monkeypatch: pytest.MonkeyPatch,
    tmp_path: Path,
) -> None:
    original_client = httpx.Client
    content = b"verified model bytes"

    def handler(request: httpx.Request) -> httpx.Response:
        return httpx.Response(200, content=content, request=request)

    def client_factory(**kwargs: Any) -> httpx.Client:
        return original_client(transport=httpx.MockTransport(handler), **kwargs)

    monkeypatch.setattr("arcenciel.client.httpx.Client", client_factory)
    target = tmp_path / "model.safetensors"
    client = ArcEnCielClient()

    result = client.download_to_file_sync(
        1,
        2,
        target,
        expected_sha256=hashlib.sha256(content).hexdigest(),
    )

    assert result == target
    assert target.read_bytes() == content
    assert not list(tmp_path.glob("*.part"))


@pytest.mark.asyncio
async def test_async_download_to_file_preserves_existing_target_on_checksum_error(
    monkeypatch: pytest.MonkeyPatch,
    tmp_path: Path,
) -> None:
    original_client = httpx.AsyncClient

    def handler(request: httpx.Request) -> httpx.Response:
        return httpx.Response(200, content=b"new bytes", request=request)

    def client_factory(**kwargs: Any) -> httpx.AsyncClient:
        return original_client(transport=httpx.MockTransport(handler), **kwargs)

    monkeypatch.setattr("arcenciel.client.httpx.AsyncClient", client_factory)
    target = tmp_path / "model.safetensors"
    target.write_bytes(b"existing")
    client = ArcEnCielClient()

    with pytest.raises(ArcEnCielError) as raised:
        await client.download_to_file(1, 2, target, expected_sha256="0" * 64)

    assert raised.value.code == "CHECKSUM_MISMATCH"
    assert target.read_bytes() == b"existing"
    assert not list(tmp_path.glob("*.part"))


def test_download_checksum_rejects_invalid_expected_value() -> None:
    with pytest.raises(ArcEnCielError) as raised:
        ArcEnCielClient._verify_download_checksum("0" * 64, "invalid")

    assert raised.value.code == "INVALID_CHECKSUM"
