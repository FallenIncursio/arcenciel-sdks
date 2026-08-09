from __future__ import annotations

from urllib.parse import parse_qs

import httpx
import pytest

from arcenciel import ArcEnCielError, OAuthFlow


def test_builds_pkce_authorization_and_runs_sync_protocol_flow() -> None:
    requests: list[httpx.Request] = []

    def handler(request: httpx.Request) -> httpx.Response:
        requests.append(request)
        if request.url.path == "/.well-known/oauth-authorization-server":
            return httpx.Response(200, json={"issuer": "https://example.test"})
        if request.url.path == "/api/oauth/scopes":
            return httpx.Response(200, json={"data": [{"name": "models:read"}]})
        if request.url.path.endswith("/public"):
            return httpx.Response(200, json={"data": {"id": "client"}})
        if request.url.path == "/api/oauth/token":
            form = parse_qs(request.content.decode())
            assert form["grant_type"] in [["authorization_code"], ["refresh_token"]]
            return httpx.Response(
                200,
                json={
                    "access_token": "access-1",
                    "token_type": "Bearer",
                    "expires_in": 900,
                    "scope": "models:read offline_access",
                    "refresh_token": "refresh-2",
                },
            )
        if request.url.path == "/api/oauth/introspect":
            assert request.headers["authorization"].startswith("Basic ")
            return httpx.Response(200, json={"active": True, "sub": "42"})
        return httpx.Response(200)

    flow = OAuthFlow(
        "https://example.test/",
        transport=httpx.MockTransport(handler),
    )
    authorization = flow.create_authorization(
        client_id="client",
        redirect_uri="https://client.test/callback",
        scopes=["models:read", "offline_access"],
        state="state-value-123",
    )
    query = parse_qs(httpx.URL(authorization.url).query.decode())
    assert query["code_challenge_method"] == ["S256"]
    assert len(query["code_challenge"][0]) == 43
    assert len(authorization.code_verifier) >= 43

    assert flow.metadata()["issuer"] == "https://example.test"
    assert flow.scopes() == [{"name": "models:read"}]
    assert flow.get_public_client("client") == {"id": "client"}
    tokens = flow.exchange_callback(
        callback_url=(
            "https://client.test/callback?code=single-use&state=state-value-123"
            "&iss=https%3A%2F%2Fexample.test"
        ),
        authorization=authorization,
    )
    assert tokens.access_token == "access-1"
    assert tokens.refresh_token == "refresh-2"
    assert flow.refresh(client_id="client", refresh_token="refresh-1").refresh_token == "refresh-2"
    flow.revoke(client_id="client", token="refresh-2")
    assert flow.introspect(client_id="client", client_secret="secret", token="access-1") == {
        "active": True,
        "sub": "42",
    }
    assert len(requests) == 7


@pytest.mark.asyncio
async def test_runs_async_oauth_protocol_flow() -> None:
    async def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path == "/.well-known/oauth-authorization-server":
            return httpx.Response(200, json={"issuer": "https://example.test"})
        if request.url.path == "/api/oauth/scopes":
            return httpx.Response(200, json={"data": [{"name": "models:read"}]})
        if request.url.path.endswith("/public"):
            return httpx.Response(200, json={"data": {"id": "client"}})
        if request.url.path == "/api/oauth/token":
            return httpx.Response(
                200,
                json={
                    "access_token": "access-async",
                    "token_type": "Bearer",
                    "expires_in": 900,
                    "scope": "models:read",
                    "refresh_token": "refresh-async",
                },
            )
        if request.url.path == "/api/oauth/introspect":
            return httpx.Response(200, json={"active": True})
        return httpx.Response(200)

    flow = OAuthFlow(
        "https://example.test",
        async_transport=httpx.MockTransport(handler),
    )
    authorization = flow.create_authorization(
        client_id="client",
        redirect_uri="https://client.test/callback",
        scopes=["models:read"],
        state="async-state-123",
    )
    assert (await flow.metadata_async())["issuer"] == "https://example.test"
    assert await flow.scopes_async() == [{"name": "models:read"}]
    assert await flow.get_public_client_async("client") == {"id": "client"}
    tokens = await flow.exchange_callback_async(
        callback_url=(
            "https://client.test/callback?code=code&state=async-state-123"
            "&iss=https%3A%2F%2Fexample.test"
        ),
        authorization=authorization,
    )
    assert tokens.access_token == "access-async"
    assert (
        await flow.refresh_async(client_id="client", refresh_token="refresh-1")
    ).refresh_token == "refresh-async"
    await flow.revoke_async(client_id="client", token="refresh-async")
    assert await flow.introspect_async(
        client_id="client", client_secret="secret", token="access-async"
    ) == {"active": True}


def test_rejects_callback_mixups_and_normalizes_protocol_errors() -> None:
    flow = OAuthFlow("https://example.test")
    authorization = flow.create_authorization(
        client_id="client",
        redirect_uri="https://client.test/callback",
        scopes=["models:read"],
        state="expected-state",
    )
    with pytest.raises(ArcEnCielError) as state_error:
        flow.exchange_callback(
            callback_url=(
                "https://client.test/callback?code=code&state=wrong&iss=https%3A%2F%2Fexample.test"
            ),
            authorization=authorization,
        )
    assert state_error.value.code == "OAUTH_STATE_MISMATCH"

    with pytest.raises(ArcEnCielError) as issuer_error:
        flow.exchange_callback(
            callback_url=(
                "https://client.test/callback?code=code&state=expected-state"
                "&iss=https%3A%2F%2Fevil.test"
            ),
            authorization=authorization,
        )
    assert issuer_error.value.code == "OAUTH_ISSUER_MISMATCH"

    with pytest.raises(ArcEnCielError) as denied:
        flow.exchange_callback(
            callback_url=(
                "https://client.test/callback?error=access_denied"
                "&error_description=User+denied+access&state=expected-state"
            ),
            authorization=authorization,
        )
    assert denied.value.code == "access_denied"


def test_normalizes_http_oauth_errors() -> None:
    def handler(_request: httpx.Request) -> httpx.Response:
        return httpx.Response(
            400,
            json={"error": "invalid_grant", "error_description": "Code expired"},
            headers={"x-request-id": "request-oauth"},
        )

    flow = OAuthFlow("https://example.test", transport=httpx.MockTransport(handler))
    with pytest.raises(ArcEnCielError) as error:
        flow.refresh(client_id="client", refresh_token="expired")
    assert error.value.status == 400
    assert error.value.code == "invalid_grant"
    assert error.value.request_id == "request-oauth"
