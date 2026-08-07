"""Hand-written facade over the generated Developer API client."""

from __future__ import annotations

import asyncio
import hashlib
import os
import random
import tempfile
from collections.abc import AsyncIterator, Awaitable, Callable, Iterator
from contextlib import asynccontextmanager, contextmanager
from pathlib import Path
from typing import Self, TypeVar

import httpx

from arcenciel.errors import ArcEnCielError, to_arcenciel_error
from arcenciel.generated.api.articles_api import ArticlesApi
from arcenciel.generated.api.chat_api import ChatApi
from arcenciel.generated.api.collabs_api import CollabsApi
from arcenciel.generated.api.collections_api import CollectionsApi
from arcenciel.generated.api.comments_api import CommentsApi
from arcenciel.generated.api.downloads_api import DownloadsApi
from arcenciel.generated.api.emotes_api import EmotesApi
from arcenciel.generated.api.feedback_api import FeedbackApi
from arcenciel.generated.api.generator_api import GeneratorApi
from arcenciel.generated.api.images_api import ImagesApi
from arcenciel.generated.api.models_api import ModelsApi
from arcenciel.generated.api.notifications_api import NotificationsApi
from arcenciel.generated.api.profile_api import ProfileApi
from arcenciel.generated.api.social_api import SocialApi
from arcenciel.generated.api.tags_api import TagsApi
from arcenciel.generated.api.trust_safety_api import TrustSafetyApi
from arcenciel.generated.api.users_api import UsersApi
from arcenciel.generated.api.videos_api import VideosApi
from arcenciel.generated.api_client import ApiClient
from arcenciel.generated.configuration import Configuration

T = TypeVar("T")
RETRYABLE_STATUS = {429, 502, 503, 504}


class ArcEnCielClient:
    """Typed sync/async access to the stable Developer API v1 contract."""

    def __init__(
        self,
        *,
        api_key: str | None = None,
        access_token: str | None = None,
        base_url: str = "https://arcenciel.io",
        timeout: float = 30.0,
        max_retries: int = 3,
    ) -> None:
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout
        self.max_retries = max_retries
        self.api_key = api_key
        self.access_token = access_token
        configuration = Configuration(
            host=self.base_url,
            api_key={"apiKeyAuth": api_key} if api_key else None,
            access_token=access_token,
        )
        self.api_client = ApiClient(configuration)
        self.articles = ArticlesApi(self.api_client)
        self.chat = ChatApi(self.api_client)
        self.collabs = CollabsApi(self.api_client)
        self.collections = CollectionsApi(self.api_client)
        self.comments = CommentsApi(self.api_client)
        self.downloads = DownloadsApi(self.api_client)
        self.emotes = EmotesApi(self.api_client)
        self.feedback = FeedbackApi(self.api_client)
        self.generator = GeneratorApi(self.api_client)
        self.images = ImagesApi(self.api_client)
        self.models = ModelsApi(self.api_client)
        self.notifications = NotificationsApi(self.api_client)
        self.profile = ProfileApi(self.api_client)
        self.social = SocialApi(self.api_client)
        self.tags = TagsApi(self.api_client)
        self.trust_safety = TrustSafetyApi(self.api_client)
        self.users = UsersApi(self.api_client)
        self.videos = VideosApi(self.api_client)

    async def close(self) -> None:
        await self.api_client.close()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(self, *_args: object) -> None:
        await self.close()

    async def call(
        self,
        request: Callable[[], Awaitable[T]],
        *,
        retry_safe: bool = False,
    ) -> T:
        """Run a call with normalized errors and explicitly enabled full-jitter retries.

        Set ``retry_safe`` only for reads or writes that carry the same idempotency key on
        every attempt. The facade never enables retries for writes implicitly.
        """

        for attempt in range(self.max_retries + 1):
            try:
                return await request()
            except Exception as error:
                normalized = to_arcenciel_error(error)
                if not self._should_retry(normalized, attempt, retry_safe):
                    raise normalized from error
                await asyncio.sleep(self._retry_delay(attempt, normalized.retry_after))
        raise AssertionError("unreachable")  # pragma: no cover

    def call_sync(self, request: Callable[[], T]) -> T:
        """Run a generated synchronous call and normalize its errors."""

        try:
            return request()
        except Exception as error:
            raise to_arcenciel_error(error) from error

    @asynccontextmanager
    async def stream_download(
        self,
        model_id: int,
        version_id: int,
        *,
        filename: str | None = None,
        range_header: str | None = None,
    ) -> AsyncIterator[httpx.Response]:
        """Stream a model download while preserving redirects and optional byte ranges."""

        path = f"/api/models/{model_id}/versions/{version_id}/download"
        if filename:
            path = f"{path}/{filename}"
        async with (
            httpx.AsyncClient(
                base_url=self.base_url,
                follow_redirects=True,
                timeout=self.timeout,
            ) as client,
            client.stream("GET", path, headers=self._download_headers(range_header)) as response,
        ):
            if response.status_code not in {200, 206}:
                await response.aread()
                raise self._httpx_error(response)
            yield response

    @contextmanager
    def stream_download_sync(
        self,
        model_id: int,
        version_id: int,
        *,
        filename: str | None = None,
        range_header: str | None = None,
    ) -> Iterator[httpx.Response]:
        """Synchronous counterpart to :meth:`stream_download`."""

        path = f"/api/models/{model_id}/versions/{version_id}/download"
        if filename:
            path = f"{path}/{filename}"
        with (
            httpx.Client(
                base_url=self.base_url,
                follow_redirects=True,
                timeout=self.timeout,
            ) as client,
            client.stream("GET", path, headers=self._download_headers(range_header)) as response,
        ):
            if response.status_code not in {200, 206}:
                response.read()
                raise self._httpx_error(response)
            yield response

    async def download_to_file(
        self,
        model_id: int,
        version_id: int,
        destination: str | Path,
        *,
        filename: str | None = None,
        range_header: str | None = None,
        expected_sha256: str | None = None,
    ) -> Path:
        """Atomically stream a download to disk and optionally verify its SHA-256."""

        target = Path(destination)
        temporary = self._temporary_download(target)
        digest = hashlib.sha256()
        try:
            async with self.stream_download(
                model_id,
                version_id,
                filename=filename,
                range_header=range_header,
            ) as response:
                with temporary.open("wb") as output:
                    async for chunk in response.aiter_bytes():
                        output.write(chunk)
                        digest.update(chunk)
            self._verify_download_checksum(digest.hexdigest(), expected_sha256)
            os.replace(temporary, target)
            return target
        except Exception:
            temporary.unlink(missing_ok=True)
            raise

    def download_to_file_sync(
        self,
        model_id: int,
        version_id: int,
        destination: str | Path,
        *,
        filename: str | None = None,
        range_header: str | None = None,
        expected_sha256: str | None = None,
    ) -> Path:
        """Synchronous atomic download with optional SHA-256 verification."""

        target = Path(destination)
        temporary = self._temporary_download(target)
        digest = hashlib.sha256()
        try:
            with (
                self.stream_download_sync(
                    model_id,
                    version_id,
                    filename=filename,
                    range_header=range_header,
                ) as response,
                temporary.open("wb") as output,
            ):
                for chunk in response.iter_bytes():
                    output.write(chunk)
                    digest.update(chunk)
            self._verify_download_checksum(digest.hexdigest(), expected_sha256)
            os.replace(temporary, target)
            return target
        except Exception:
            temporary.unlink(missing_ok=True)
            raise

    def _download_headers(self, range_header: str | None) -> dict[str, str]:
        headers: dict[str, str] = {}
        if self.api_key:
            headers["x-api-key"] = self.api_key
        if self.access_token:
            headers["authorization"] = f"Bearer {self.access_token}"
        if range_header:
            headers["range"] = range_header
        return headers

    @staticmethod
    def _temporary_download(target: Path) -> Path:
        target.parent.mkdir(parents=True, exist_ok=True)
        descriptor, filename = tempfile.mkstemp(
            prefix=f".{target.name}.", suffix=".part", dir=target.parent
        )
        os.close(descriptor)
        return Path(filename)

    @staticmethod
    def _verify_download_checksum(actual: str, expected: str | None) -> None:
        if expected is None:
            return
        normalized = expected.strip().lower()
        if len(normalized) != 64 or any(
            character not in "0123456789abcdef" for character in normalized
        ):
            raise ArcEnCielError(
                "Expected SHA-256 must contain exactly 64 hexadecimal characters",
                code="INVALID_CHECKSUM",
            )
        if actual != normalized:
            raise ArcEnCielError(
                f"Model download checksum mismatch: expected {normalized}, received {actual}",
                code="CHECKSUM_MISMATCH",
            )

    @staticmethod
    def _httpx_error(response: httpx.Response) -> ArcEnCielError:
        return ArcEnCielError(
            f"Arc en Ciel request failed ({response.status_code})",
            status=response.status_code,
            request_id=response.headers.get("x-request-id"),
            headers=response.headers,
        )

    def _should_retry(self, error: ArcEnCielError, attempt: int, retry_safe: bool) -> bool:
        return (
            retry_safe
            and attempt < self.max_retries
            and (error.status is None or error.status in RETRYABLE_STATUS)
        )

    @staticmethod
    def _retry_delay(attempt: int, retry_after: float | None) -> float:
        if retry_after is not None:
            return retry_after
        return random.uniform(0.0, min(8.0, 0.25 * 2**attempt))
