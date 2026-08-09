# OAuthApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**beginOAuthAuthorization**](OAuthApi.md#beginoauthauthorization) | **GET** /api/oauth/authorize | Begin interactive Authorization Code consent |
| [**exchangeOAuthToken**](OAuthApi.md#exchangeoauthtoken) | **POST** /api/oauth/token | Exchange a code or rotate a refresh token |
| [**getOAuthAuthorizationServerMetadata**](OAuthApi.md#getoauthauthorizationservermetadata) | **GET** /.well-known/oauth-authorization-server | Discover the OAuth authorization server |
| [**getPublicOAuthClient**](OAuthApi.md#getpublicoauthclient) | **GET** /api/oauth/clients/{clientId}/public | Inspect public OAuth application identity |
| [**introspectOAuthToken**](OAuthApi.md#introspectoauthtoken) | **POST** /api/oauth/introspect | Introspect a token owned by a confidential client |
| [**listOAuthScopes**](OAuthApi.md#listoauthscopes) | **GET** /api/oauth/scopes | List OAuth scopes and consent risk labels |
| [**revokeOAuthToken**](OAuthApi.md#revokeoauthtoken) | **POST** /api/oauth/revoke | Revoke an access or refresh token |



## beginOAuthAuthorization

> beginOAuthAuthorization(responseType, clientId, redirectUri, scope, state, codeChallenge, codeChallengeMethod)

Begin interactive Authorization Code consent

Begin an interactive Authorization Code request after validating state, the exact registered redirect URI, requested scopes, and the mandatory PKCE S256 challenge; the response redirects to login or consent.

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@arcenciel/sdk';
import type { BeginOAuthAuthorizationRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure API key authorization: sessionCookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OAuthApi(config);

  const body = {
    // 'code' | Response type provided in the query.
    responseType: code,
    // string | Client id provided in the query.
    clientId: example-client-id,
    // string | Redirect uri provided in the query.
    redirectUri: https://arcenciel.io,
    // string | Scope provided in the query.
    scope: models:read offline_access,
    // string | State provided in the query.
    state: valuexxx,
    // string | Code challenge provided in the query.
    codeChallenge: valuexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
    // 'S256' | Code challenge method provided in the query.
    codeChallengeMethod: S256,
  } satisfies BeginOAuthAuthorizationRequest;

  try {
    const data = await api.beginOAuthAuthorization(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **responseType** | `code` | Response type provided in the query. | [Defaults to `undefined`] [Enum: code] |
| **clientId** | `string` | Client id provided in the query. | [Defaults to `undefined`] |
| **redirectUri** | `string` | Redirect uri provided in the query. | [Defaults to `undefined`] |
| **scope** | `string` | Scope provided in the query. | [Defaults to `undefined`] |
| **state** | `string` | State provided in the query. | [Defaults to `undefined`] |
| **codeChallenge** | `string` | Code challenge provided in the query. | [Defaults to `undefined`] |
| **codeChallengeMethod** | `S256` | Code challenge method provided in the query. | [Defaults to `undefined`] [Enum: S256] |

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **302** | Redirect to login when no interactive session exists, otherwise to first-party consent. |  * Location -  <br>  * X-Request-ID -  <br>  |
| **400** | Invalid authorization request. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exchangeOAuthToken

> OAuthTokenResponse exchangeOAuthToken(clientId, code, codeVerifier, grantType, redirectUri, refreshToken)

Exchange a code or rotate a refresh token

Exchange a single-use authorization code and its original PKCE verifier, or rotate an offline refresh token. Never automatically retry an ambiguous exchange because refresh-token reuse revokes the grant family.

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@arcenciel/sdk';
import type { ExchangeOAuthTokenRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure HTTP basic authorization: oauthClientBasicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new OAuthApi(config);

  const body = {
    // string | Required in the body for public clients; omit when using HTTP Basic. (optional)
    clientId: clientId_example,
    // string | Code associated with this request payload; preserve server-returned values when passing them to another operation. (optional)
    code: code_example,
    // string | Code verifier associated with this request payload; preserve server-returned values when passing them to another operation. Minimum length: 43 characters. Maximum length: 128 characters. (optional)
    codeVerifier: codeVerifier_example,
    // string | Discriminator identifying the kind of request payload; clients should tolerate future values. Supported values: `refresh_token`. (optional)
    grantType: grantType_example,
    // string | Redirect uri associated with this request payload; preserve server-returned values when passing them to another operation. Format: uri. (optional)
    redirectUri: redirectUri_example,
    // string | Refresh token associated with this request payload; preserve server-returned values when passing them to another operation. (optional)
    refreshToken: refreshToken_example,
  } satisfies ExchangeOAuthTokenRequest;

  try {
    const data = await api.exchangeOAuthToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **clientId** | `string` | Required in the body for public clients; omit when using HTTP Basic. | [Optional] [Defaults to `undefined`] |
| **code** | `string` | Code associated with this request payload; preserve server-returned values when passing them to another operation. | [Optional] [Defaults to `undefined`] |
| **codeVerifier** | `string` | Code verifier associated with this request payload; preserve server-returned values when passing them to another operation. Minimum length: 43 characters. Maximum length: 128 characters. | [Optional] [Defaults to `undefined`] |
| **grantType** | `refresh_token` | Discriminator identifying the kind of request payload; clients should tolerate future values. Supported values: &#x60;refresh_token&#x60;. | [Optional] [Defaults to `undefined`] [Enum: refresh_token] |
| **redirectUri** | `string` | Redirect uri associated with this request payload; preserve server-returned values when passing them to another operation. Format: uri. | [Optional] [Defaults to `undefined`] |
| **refreshToken** | `string` | Refresh token associated with this request payload; preserve server-returned values when passing them to another operation. | [Optional] [Defaults to `undefined`] |

### Return type

[**OAuthTokenResponse**](OAuthTokenResponse.md)

### Authorization

[oauthClientBasicAuth](../README.md#oauthClientBasicAuth)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Opaque access token and, when offline_access was approved, a new rotating refresh token. |  * X-Request-ID -  <br>  |
| **400** | Invalid request, grant, scope, or unsupported grant type. |  * X-Request-ID -  <br>  |
| **401** | Confidential client authentication failed. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOAuthAuthorizationServerMetadata

> GetOAuthAuthorizationServerMetadata200Response getOAuthAuthorizationServerMetadata()

Discover the OAuth authorization server

Discover the canonical OAuth 2.0 authorization, token, revocation, and introspection endpoints together with supported grants, client authentication methods, scopes, and mandatory PKCE S256 support.

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@arcenciel/sdk';
import type { GetOAuthAuthorizationServerMetadataRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure API key authorization: sessionCookieAuth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OAuthApi(config);

  try {
    const data = await api.getOAuthAuthorizationServerMetadata();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetOAuthAuthorizationServerMetadata200Response**](GetOAuthAuthorizationServerMetadata200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current OAuth endpoint and capability metadata. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicOAuthClient

> GetPublicOAuthClient200Response getPublicOAuthClient(clientId)

Inspect public OAuth application identity

Inspect a non-revoked OAuth application’s public identity, owner, type, and maximum scope policy before authorization without exposing redirect URIs, client secrets, or owner-private metadata.

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@arcenciel/sdk';
import type { GetPublicOAuthClientRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure API key authorization: sessionCookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OAuthApi(config);

  const body = {
    // string | Client Id provided in the path.
    clientId: example-client-id,
  } satisfies GetPublicOAuthClientRequest;

  try {
    const data = await api.getPublicOAuthClient(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **clientId** | `string` | Client Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**GetPublicOAuthClient200Response**](GetPublicOAuthClient200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Public application identity. |  * X-Request-ID -  <br>  |
| **404** | Application is unknown or revoked. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## introspectOAuthToken

> OAuthIntrospection introspectOAuthToken(token)

Introspect a token owned by a confidential client

Inspect whether a token owned by the calling confidential OAuth client is active and obtain its bounded subject, scope, issue, and expiry metadata; tokens from other clients appear inactive.

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@arcenciel/sdk';
import type { IntrospectOAuthTokenRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure HTTP basic authorization: oauthClientBasicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new OAuthApi(config);

  const body = {
    // string | Token associated with this request payload; preserve server-returned values when passing them to another operation.
    token: token_example,
  } satisfies IntrospectOAuthTokenRequest;

  try {
    const data = await api.introspectOAuthToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | Token associated with this request payload; preserve server-returned values when passing them to another operation. | [Defaults to `undefined`] |

### Return type

[**OAuthIntrospection**](OAuthIntrospection.md)

### Authorization

[oauthClientBasicAuth](../README.md#oauthClientBasicAuth)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Token state and metadata when active; inactive responses contain only active&#x3D;false. |  * X-Request-ID -  <br>  |
| **400** | Invalid request. |  * X-Request-ID -  <br>  |
| **401** | Confidential client authentication failed. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOAuthScopes

> ListOAuthScopes200Response listOAuthScopes()

List OAuth scopes and consent risk labels

List every currently requestable OAuth resource scope and its consent-screen risk label so integrations can request least privilege and tolerate future additive scope definitions.

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@arcenciel/sdk';
import type { ListOAuthScopesRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure API key authorization: sessionCookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OAuthApi(config);

  try {
    const data = await api.listOAuthScopes();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListOAuthScopes200Response**](ListOAuthScopes200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Scope catalog used by registration and consent screens. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeOAuthToken

> revokeOAuthToken(token, clientId)

Revoke an access or refresh token

Idempotently revoke an access or refresh token owned by the authenticated OAuth client. Unknown and already inactive tokens also return success so the endpoint does not become a token oracle.

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@arcenciel/sdk';
import type { RevokeOAuthTokenRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure HTTP basic authorization: oauthClientBasicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new OAuthApi(config);

  const body = {
    // string | Token associated with this request payload; preserve server-returned values when passing them to another operation.
    token: token_example,
    // string | Required for public clients. (optional)
    clientId: clientId_example,
  } satisfies RevokeOAuthTokenRequest;

  try {
    const data = await api.revokeOAuthToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | Token associated with this request payload; preserve server-returned values when passing them to another operation. | [Defaults to `undefined`] |
| **clientId** | `string` | Required for public clients. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[oauthClientBasicAuth](../README.md#oauthClientBasicAuth)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Token is inactive; RFC 7009 revocation deliberately returns an empty response body. |  * X-Request-ID -  <br>  |
| **400** | Invalid request. |  * X-Request-ID -  <br>  |
| **401** | Confidential client authentication failed. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
