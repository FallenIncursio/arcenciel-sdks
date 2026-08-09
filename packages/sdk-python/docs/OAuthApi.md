# arcenciel.generated.OAuthApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**begin_o_auth_authorization**](OAuthApi.md#begin_o_auth_authorization) | **GET** /api/oauth/authorize | Begin interactive Authorization Code consent
[**exchange_o_auth_token**](OAuthApi.md#exchange_o_auth_token) | **POST** /api/oauth/token | Exchange a code or rotate a refresh token
[**get_o_auth_authorization_server_metadata**](OAuthApi.md#get_o_auth_authorization_server_metadata) | **GET** /.well-known/oauth-authorization-server | Discover the OAuth authorization server
[**get_public_o_auth_client**](OAuthApi.md#get_public_o_auth_client) | **GET** /api/oauth/clients/{clientId}/public | Inspect public OAuth application identity
[**introspect_o_auth_token**](OAuthApi.md#introspect_o_auth_token) | **POST** /api/oauth/introspect | Introspect a token owned by a confidential client
[**list_o_auth_scopes**](OAuthApi.md#list_o_auth_scopes) | **GET** /api/oauth/scopes | List OAuth scopes and consent risk labels
[**revoke_o_auth_token**](OAuthApi.md#revoke_o_auth_token) | **POST** /api/oauth/revoke | Revoke an access or refresh token


# **begin_o_auth_authorization**
> begin_o_auth_authorization(response_type, client_id, redirect_uri, scope, state, code_challenge, code_challenge_method)

**Synchronous variant:** `begin_o_auth_authorization_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Begin interactive Authorization Code consent

Begin an interactive Authorization Code request after validating state, the exact registered redirect URI, requested scopes, and the mandatory PKCE S256 challenge; the response redirects to login or consent.

### Example

* Api Key Authentication (sessionCookieAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.OAuthApi(api_client)
    response_type = 'code' # str | Response type provided in the query.
    client_id = 'example-client-id' # str | Client id provided in the query.
    redirect_uri = 'https://arcenciel.io' # str | Redirect uri provided in the query.
    scope = 'models:read offline_access' # str | Scope provided in the query.
    state = 'valuexxx' # str | State provided in the query.
    code_challenge = 'valuexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' # str | Code challenge provided in the query.
    code_challenge_method = 'S256' # str | Code challenge method provided in the query.

    try:
        # Begin interactive Authorization Code consent
        await api_instance.begin_o_auth_authorization(response_type, client_id, redirect_uri, scope, state, code_challenge, code_challenge_method)
    except Exception as e:
        print("Exception when calling OAuthApi->begin_o_auth_authorization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **response_type** | **str**| Response type provided in the query. |
 **client_id** | **str**| Client id provided in the query. |
 **redirect_uri** | **str**| Redirect uri provided in the query. |
 **scope** | **str**| Scope provided in the query. |
 **state** | **str**| State provided in the query. |
 **code_challenge** | **str**| Code challenge provided in the query. |
 **code_challenge_method** | **str**| Code challenge method provided in the query. |

### Return type

void (empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirect to login when no interactive session exists, otherwise to first-party consent. |  * Location -  <br>  * X-Request-ID -  <br>  |
**400** | Invalid authorization request. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchange_o_auth_token**
> OAuthTokenResponse exchange_o_auth_token(client_id=client_id, code=code, code_verifier=code_verifier, grant_type=grant_type, redirect_uri=redirect_uri, refresh_token=refresh_token)

**Synchronous variant:** `exchange_o_auth_token_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Exchange a code or rotate a refresh token

Exchange a single-use authorization code and its original PKCE verifier, or rotate an offline refresh token. Never automatically retry an ambiguous exchange because refresh-token reuse revokes the grant family.

### Example

* Basic Authentication (oauthClientBasicAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.o_auth_token_response import OAuthTokenResponse
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: oauthClientBasicAuth
configuration = arcenciel.generated.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.OAuthApi(api_client)
    client_id = 'client_id_example' # str | Required in the body for public clients; omit when using HTTP Basic. (optional)
    code = 'code_example' # str | Code associated with this request payload; preserve server-returned values when passing them to another operation. (optional)
    code_verifier = 'code_verifier_example' # str | Code verifier associated with this request payload; preserve server-returned values when passing them to another operation. Minimum length: 43 characters. Maximum length: 128 characters. (optional)
    grant_type = 'grant_type_example' # str | Discriminator identifying the kind of request payload; clients should tolerate future values. Supported values: `refresh_token`. (optional)
    redirect_uri = 'redirect_uri_example' # str | Redirect uri associated with this request payload; preserve server-returned values when passing them to another operation. Format: uri. (optional)
    refresh_token = 'refresh_token_example' # str | Refresh token associated with this request payload; preserve server-returned values when passing them to another operation. (optional)

    try:
        # Exchange a code or rotate a refresh token
        api_response = await api_instance.exchange_o_auth_token(client_id=client_id, code=code, code_verifier=code_verifier, grant_type=grant_type, redirect_uri=redirect_uri, refresh_token=refresh_token)
        print("The response of OAuthApi->exchange_o_auth_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OAuthApi->exchange_o_auth_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Required in the body for public clients; omit when using HTTP Basic. | [optional]
 **code** | **str**| Code associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]
 **code_verifier** | **str**| Code verifier associated with this request payload; preserve server-returned values when passing them to another operation. Minimum length: 43 characters. Maximum length: 128 characters. | [optional]
 **grant_type** | **str**| Discriminator identifying the kind of request payload; clients should tolerate future values. Supported values: &#x60;refresh_token&#x60;. | [optional]
 **redirect_uri** | **str**| Redirect uri associated with this request payload; preserve server-returned values when passing them to another operation. Format: uri. | [optional]
 **refresh_token** | **str**| Refresh token associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]

### Return type

[**OAuthTokenResponse**](OAuthTokenResponse.md)

### Authorization

[oauthClientBasicAuth](../README.md#oauthClientBasicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Opaque access token and, when offline_access was approved, a new rotating refresh token. |  * X-Request-ID -  <br>  |
**400** | Invalid request, grant, scope, or unsupported grant type. |  * X-Request-ID -  <br>  |
**401** | Confidential client authentication failed. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_o_auth_authorization_server_metadata**
> GetOAuthAuthorizationServerMetadata200Response get_o_auth_authorization_server_metadata()

**Synchronous variant:** `get_o_auth_authorization_server_metadata_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Discover the OAuth authorization server

Discover the canonical OAuth 2.0 authorization, token, revocation, and introspection endpoints together with supported grants, client authentication methods, scopes, and mandatory PKCE S256 support.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.get_o_auth_authorization_server_metadata200_response import GetOAuthAuthorizationServerMetadata200Response
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.OAuthApi(api_client)

    try:
        # Discover the OAuth authorization server
        api_response = await api_instance.get_o_auth_authorization_server_metadata()
        print("The response of OAuthApi->get_o_auth_authorization_server_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OAuthApi->get_o_auth_authorization_server_metadata: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetOAuthAuthorizationServerMetadata200Response**](GetOAuthAuthorizationServerMetadata200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current OAuth endpoint and capability metadata. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_public_o_auth_client**
> GetPublicOAuthClient200Response get_public_o_auth_client(client_id)

**Synchronous variant:** `get_public_o_auth_client_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Inspect public OAuth application identity

Inspect a non-revoked OAuth application’s public identity, owner, type, and maximum scope policy before authorization without exposing redirect URIs, client secrets, or owner-private metadata.

### Example

* Api Key Authentication (sessionCookieAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.get_public_o_auth_client200_response import GetPublicOAuthClient200Response
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.OAuthApi(api_client)
    client_id = 'example-client-id' # str | Client Id provided in the path.

    try:
        # Inspect public OAuth application identity
        api_response = await api_instance.get_public_o_auth_client(client_id)
        print("The response of OAuthApi->get_public_o_auth_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OAuthApi->get_public_o_auth_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Client Id provided in the path. |

### Return type

[**GetPublicOAuthClient200Response**](GetPublicOAuthClient200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Public application identity. |  * X-Request-ID -  <br>  |
**404** | Application is unknown or revoked. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **introspect_o_auth_token**
> OAuthIntrospection introspect_o_auth_token(token)

**Synchronous variant:** `introspect_o_auth_token_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Introspect a token owned by a confidential client

Inspect whether a token owned by the calling confidential OAuth client is active and obtain its bounded subject, scope, issue, and expiry metadata; tokens from other clients appear inactive.

### Example

* Basic Authentication (oauthClientBasicAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.o_auth_introspection import OAuthIntrospection
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: oauthClientBasicAuth
configuration = arcenciel.generated.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.OAuthApi(api_client)
    token = 'token_example' # str | Token associated with this request payload; preserve server-returned values when passing them to another operation.

    try:
        # Introspect a token owned by a confidential client
        api_response = await api_instance.introspect_o_auth_token(token)
        print("The response of OAuthApi->introspect_o_auth_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OAuthApi->introspect_o_auth_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Token associated with this request payload; preserve server-returned values when passing them to another operation. |

### Return type

[**OAuthIntrospection**](OAuthIntrospection.md)

### Authorization

[oauthClientBasicAuth](../README.md#oauthClientBasicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token state and metadata when active; inactive responses contain only active&#x3D;false. |  * X-Request-ID -  <br>  |
**400** | Invalid request. |  * X-Request-ID -  <br>  |
**401** | Confidential client authentication failed. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_o_auth_scopes**
> ListOAuthScopes200Response list_o_auth_scopes()

**Synchronous variant:** `list_o_auth_scopes_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List OAuth scopes and consent risk labels

List every currently requestable OAuth resource scope and its consent-screen risk label so integrations can request least privilege and tolerate future additive scope definitions.

### Example

* Api Key Authentication (sessionCookieAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.list_o_auth_scopes200_response import ListOAuthScopes200Response
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.OAuthApi(api_client)

    try:
        # List OAuth scopes and consent risk labels
        api_response = await api_instance.list_o_auth_scopes()
        print("The response of OAuthApi->list_o_auth_scopes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OAuthApi->list_o_auth_scopes: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListOAuthScopes200Response**](ListOAuthScopes200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Scope catalog used by registration and consent screens. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_o_auth_token**
> revoke_o_auth_token(token, client_id=client_id)

**Synchronous variant:** `revoke_o_auth_token_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Revoke an access or refresh token

Idempotently revoke an access or refresh token owned by the authenticated OAuth client. Unknown and already inactive tokens also return success so the endpoint does not become a token oracle.

### Example

* Basic Authentication (oauthClientBasicAuth):

```python
import arcenciel.generated
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: oauthClientBasicAuth
configuration = arcenciel.generated.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.OAuthApi(api_client)
    token = 'token_example' # str | Token associated with this request payload; preserve server-returned values when passing them to another operation.
    client_id = 'client_id_example' # str | Required for public clients. (optional)

    try:
        # Revoke an access or refresh token
        await api_instance.revoke_o_auth_token(token, client_id=client_id)
    except Exception as e:
        print("Exception when calling OAuthApi->revoke_o_auth_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Token associated with this request payload; preserve server-returned values when passing them to another operation. |
 **client_id** | **str**| Required for public clients. | [optional]

### Return type

void (empty response body)

### Authorization

[oauthClientBasicAuth](../README.md#oauthClientBasicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token is inactive; RFC 7009 revocation deliberately returns an empty response body. |  * X-Request-ID -  <br>  |
**400** | Invalid request. |  * X-Request-ID -  <br>  |
**401** | Confidential client authentication failed. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
