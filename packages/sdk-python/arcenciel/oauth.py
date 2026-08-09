"""OAuth Authorization Code + PKCE helpers for public and confidential clients."""

from __future__ import annotations

import base64
import hashlib
import secrets
from dataclasses import dataclass
from typing import Any
from urllib.parse import parse_qs, urlencode, urlparse

import httpx

from arcenciel.errors import ArcEnCielError


@dataclass(frozen=True, slots=True)
class OAuthAuthorization:
    """Short-lived local state required to validate and exchange an OAuth callback."""

    url: str
    state: str
    code_verifier: str
    client_id: str
    redirect_uri: str
    issuer: str


@dataclass(frozen=True, slots=True)
class OAuthTokenSet:
    """Opaque OAuth credentials returned by an authorization or refresh exchange."""

    access_token: str
    token_type: str
    expires_in: int
    scope: str
    refresh_token: str | None = None


class OAuthFlow:
    """Safe sync/async OAuth flow with state, issuer, PKCE, and rotation handling."""

    def __init__(
        self,
        base_url: str = "https://arcenciel.io",
        timeout: float = 30.0,
        *,
        transport: httpx.BaseTransport | None = None,
        async_transport: httpx.AsyncBaseTransport | None = None,
    ) -> None:
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout
        self.transport = transport
        self.async_transport = async_transport

    def create_authorization(
        self,
        *,
        client_id: str,
        redirect_uri: str,
        scopes: list[str],
        state: str | None = None,
    ) -> OAuthAuthorization:
        """Create an authorization URL and local verifier using mandatory PKCE S256."""

        if not client_id or not redirect_uri or not scopes:
            raise ArcEnCielError(
                "client_id, redirect_uri, and at least one scope are required",
                code="INVALID_ARGUMENT",
            )
        oauth_state = state or secrets.token_urlsafe(24)
        if len(oauth_state) < 8:
            raise ArcEnCielError(
                "OAuth state must contain at least 8 characters",
                code="INVALID_ARGUMENT",
            )
        verifier = secrets.token_urlsafe(64)
        challenge = (
            base64.urlsafe_b64encode(hashlib.sha256(verifier.encode()).digest())
            .rstrip(b"=")
            .decode()
        )
        query = urlencode(
            {
                "response_type": "code",
                "client_id": client_id,
                "redirect_uri": redirect_uri,
                "scope": " ".join(scopes),
                "state": oauth_state,
                "code_challenge": challenge,
                "code_challenge_method": "S256",
            }
        )
        return OAuthAuthorization(
            url=f"{self.base_url}/api/oauth/authorize?{query}",
            state=oauth_state,
            code_verifier=verifier,
            client_id=client_id,
            redirect_uri=redirect_uri,
            issuer=self.base_url,
        )

    def metadata(self) -> dict[str, Any]:
        return self._get("/.well-known/oauth-authorization-server")

    async def metadata_async(self) -> dict[str, Any]:
        return await self._get_async("/.well-known/oauth-authorization-server")

    def scopes(self) -> list[dict[str, Any]]:
        payload = self._get("/api/oauth/scopes")
        return list(payload.get("data", []))

    async def scopes_async(self) -> list[dict[str, Any]]:
        payload = await self._get_async("/api/oauth/scopes")
        return list(payload.get("data", []))

    def get_public_client(self, client_id: str) -> dict[str, Any]:
        return dict(self._get(f"/api/oauth/clients/{client_id}/public").get("data", {}))

    async def get_public_client_async(self, client_id: str) -> dict[str, Any]:
        payload = await self._get_async(f"/api/oauth/clients/{client_id}/public")
        return dict(payload.get("data", {}))

    def exchange_callback(
        self,
        *,
        callback_url: str,
        authorization: OAuthAuthorization,
        client_secret: str | None = None,
    ) -> OAuthTokenSet:
        code = self._validate_callback(callback_url, authorization)
        return self._token(
            {
                "grant_type": "authorization_code",
                "code": code,
                "redirect_uri": authorization.redirect_uri,
                "code_verifier": authorization.code_verifier,
            },
            authorization.client_id,
            client_secret,
        )

    async def exchange_callback_async(
        self,
        *,
        callback_url: str,
        authorization: OAuthAuthorization,
        client_secret: str | None = None,
    ) -> OAuthTokenSet:
        code = self._validate_callback(callback_url, authorization)
        return await self._token_async(
            {
                "grant_type": "authorization_code",
                "code": code,
                "redirect_uri": authorization.redirect_uri,
                "code_verifier": authorization.code_verifier,
            },
            authorization.client_id,
            client_secret,
        )

    def refresh(
        self,
        *,
        client_id: str,
        refresh_token: str,
        client_secret: str | None = None,
    ) -> OAuthTokenSet:
        """Rotate a refresh token once; replace the previous token atomically."""

        return self._token(
            {"grant_type": "refresh_token", "refresh_token": refresh_token},
            client_id,
            client_secret,
        )

    async def refresh_async(
        self,
        *,
        client_id: str,
        refresh_token: str,
        client_secret: str | None = None,
    ) -> OAuthTokenSet:
        return await self._token_async(
            {"grant_type": "refresh_token", "refresh_token": refresh_token},
            client_id,
            client_secret,
        )

    def revoke(
        self,
        *,
        client_id: str,
        token: str,
        client_secret: str | None = None,
    ) -> None:
        self._form("/api/oauth/revoke", {"token": token}, client_id, client_secret, False)

    async def revoke_async(
        self,
        *,
        client_id: str,
        token: str,
        client_secret: str | None = None,
    ) -> None:
        await self._form_async(
            "/api/oauth/revoke", {"token": token}, client_id, client_secret, False
        )

    def introspect(
        self,
        *,
        client_id: str,
        client_secret: str,
        token: str,
    ) -> dict[str, Any]:
        return self._form("/api/oauth/introspect", {"token": token}, client_id, client_secret, True)

    async def introspect_async(
        self,
        *,
        client_id: str,
        client_secret: str,
        token: str,
    ) -> dict[str, Any]:
        return await self._form_async(
            "/api/oauth/introspect", {"token": token}, client_id, client_secret, True
        )

    def _validate_callback(self, callback_url: str, authorization: OAuthAuthorization) -> str:
        query = parse_qs(urlparse(callback_url).query)
        if "error" in query:
            code = query["error"][0]
            message = query.get("error_description", [code])[0]
            raise ArcEnCielError(message, code=code)
        if query.get("state", [None])[0] != authorization.state:
            raise ArcEnCielError(
                "OAuth callback state does not match the authorization request",
                code="OAUTH_STATE_MISMATCH",
            )
        if query.get("iss", [None])[0] != authorization.issuer:
            raise ArcEnCielError(
                "OAuth callback issuer does not match Arc en Ciel",
                code="OAUTH_ISSUER_MISMATCH",
            )
        authorization_code = query.get("code", [None])[0]
        if not authorization_code:
            raise ArcEnCielError(
                "OAuth callback does not contain an authorization code",
                code="INVALID_CALLBACK",
            )
        return authorization_code

    def _get(self, path: str) -> dict[str, Any]:
        with httpx.Client(
            base_url=self.base_url, timeout=self.timeout, transport=self.transport
        ) as client:
            return self._response(client.get(path))

    async def _get_async(self, path: str) -> dict[str, Any]:
        async with httpx.AsyncClient(
            base_url=self.base_url, timeout=self.timeout, transport=self.async_transport
        ) as client:
            return self._response(await client.get(path))

    def _token(
        self,
        fields: dict[str, str],
        client_id: str,
        client_secret: str | None,
    ) -> OAuthTokenSet:
        return self._token_set(
            self._form("/api/oauth/token", fields, client_id, client_secret, True)
        )

    async def _token_async(
        self,
        fields: dict[str, str],
        client_id: str,
        client_secret: str | None,
    ) -> OAuthTokenSet:
        payload = await self._form_async("/api/oauth/token", fields, client_id, client_secret, True)
        return self._token_set(payload)

    def _form(
        self,
        path: str,
        fields: dict[str, str],
        client_id: str,
        client_secret: str | None,
        expect_json: bool,
    ) -> dict[str, Any]:
        body, auth = self._form_auth(fields, client_id, client_secret)
        with httpx.Client(
            base_url=self.base_url, timeout=self.timeout, transport=self.transport
        ) as client:
            response = (
                client.post(path, data=body, auth=auth)
                if auth is not None
                else client.post(path, data=body)
            )
            return self._response(response) if expect_json else self._empty_response(response)

    async def _form_async(
        self,
        path: str,
        fields: dict[str, str],
        client_id: str,
        client_secret: str | None,
        expect_json: bool,
    ) -> dict[str, Any]:
        body, auth = self._form_auth(fields, client_id, client_secret)
        async with httpx.AsyncClient(
            base_url=self.base_url, timeout=self.timeout, transport=self.async_transport
        ) as client:
            response = (
                await client.post(path, data=body, auth=auth)
                if auth is not None
                else await client.post(path, data=body)
            )
            return self._response(response) if expect_json else self._empty_response(response)

    @staticmethod
    def _form_auth(
        fields: dict[str, str], client_id: str, client_secret: str | None
    ) -> tuple[dict[str, str], tuple[str, str] | None]:
        body = dict(fields)
        if client_secret is None:
            body["client_id"] = client_id
            return body, None
        return body, (client_id, client_secret)

    @staticmethod
    def _empty_response(response: httpx.Response) -> dict[str, Any]:
        OAuthFlow._raise_for_status(response)
        return {}

    @staticmethod
    def _response(response: httpx.Response) -> dict[str, Any]:
        OAuthFlow._raise_for_status(response)
        payload = response.json()
        if not isinstance(payload, dict):
            raise ArcEnCielError(
                "OAuth endpoint returned an invalid response", code="INVALID_RESPONSE"
            )
        return payload

    @staticmethod
    def _raise_for_status(response: httpx.Response) -> None:
        if response.is_success:
            return
        try:
            payload = response.json()
        except ValueError:
            payload = {}
        code = payload.get("error") if isinstance(payload, dict) else None
        message = payload.get("error_description") if isinstance(payload, dict) else None
        raise ArcEnCielError(
            str(message or code or f"OAuth request failed ({response.status_code})"),
            status=response.status_code,
            code=code if isinstance(code, str) else None,
            request_id=response.headers.get("x-request-id"),
            headers=response.headers,
        )

    @staticmethod
    def _token_set(payload: dict[str, Any]) -> OAuthTokenSet:
        return OAuthTokenSet(
            access_token=str(payload.get("access_token", "")),
            token_type=str(payload.get("token_type", "")),
            expires_in=int(payload.get("expires_in", 0)),
            scope=str(payload.get("scope", "")),
            refresh_token=(
                payload["refresh_token"] if isinstance(payload.get("refresh_token"), str) else None
            ),
        )
