"""Stable error surface shared by sync and async SDK calls."""

from __future__ import annotations

import json
from collections.abc import Mapping
from datetime import UTC, datetime
from email.utils import parsedate_to_datetime
from typing import Any

from arcenciel.generated.exceptions import ApiException


class ArcEnCielError(Exception):
    """A normalized Developer API failure."""

    def __init__(
        self,
        message: str,
        *,
        status: int | None = None,
        code: str | None = None,
        request_id: str | None = None,
        headers: Mapping[str, str] | None = None,
        retry_after: float | None = None,
    ) -> None:
        super().__init__(message)
        self.status = status
        self.code = code
        self.request_id = request_id
        self.headers = headers
        self.retry_after = retry_after


def _retry_after(headers: Mapping[str, str] | None) -> float | None:
    if not headers:
        return None
    raw = headers.get("retry-after") or headers.get("Retry-After")
    if not raw:
        return None
    try:
        return max(0.0, float(raw))
    except ValueError:
        try:
            parsed = parsedate_to_datetime(raw)
            return max(0.0, (parsed - datetime.now(UTC)).total_seconds())
        except (TypeError, ValueError):
            return None


def to_arcenciel_error(error: Exception) -> ArcEnCielError:
    """Convert generated transport errors to the public error type."""

    if isinstance(error, ArcEnCielError):
        return error
    if not isinstance(error, ApiException):
        return ArcEnCielError(str(error))

    payload: dict[str, Any] = {}
    if error.body:
        try:
            decoded = json.loads(error.body)
            if isinstance(decoded, dict):
                payload = decoded
        except (TypeError, json.JSONDecodeError):
            pass
    headers = error.headers
    return ArcEnCielError(
        str(payload.get("message") or payload.get("error") or error.reason or "Request failed"),
        status=error.status,
        code=payload.get("code") if isinstance(payload.get("code"), str) else None,
        request_id=(headers.get("x-request-id") if headers else None),
        headers=headers,
        retry_after=_retry_after(headers),
    )
