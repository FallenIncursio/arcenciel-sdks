# arcenciel.generated.UsersApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_creator_stats**](UsersApi.md#get_creator_stats) | **GET** /api/creators/{id}/stats | Retrieve aggregated statistics for a creator.
[**get_user**](UsersApi.md#get_user) | **GET** /api/users/{id} | Retrieve a specific user&#39;s profile.
[**list_user_uploads**](UsersApi.md#list_user_uploads) | **GET** /api/users/{id}/uploads | Retrieve uploads for a specific user
[**list_users**](UsersApi.md#list_users) | **GET** /api/users | Retrieve a list of users.
[**resolve_users**](UsersApi.md#resolve_users) | **POST** /api/users/resolve | Resolve usernames to user IDs
[**search_users**](UsersApi.md#search_users) | **GET** /api/users/search | Search for users by username


# **get_creator_stats**
> CreatorStatsResponse get_creator_stats(id, start_date=start_date, end_date=end_date)

**Synchronous variant:** `get_creator_stats_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve aggregated statistics for a creator.

Return the authenticated creator statistics available to the caller. Standard creators receive a bounded preview, supporters receive advanced ranges, and staff may inspect another creator.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.creator_stats_response import CreatorStatsResponse
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
    api_instance = arcenciel.generated.UsersApi(api_client)
    id = 1 # int | The creator's user ID.
    start_date = '2026-07-28T10:00:00.000Z' # datetime | ISO timestamp that marks the inclusive start of the range. Ignored for the standard seven-day preview. (optional)
    end_date = '2026-07-28T10:00:00.000Z' # datetime | ISO timestamp that marks the inclusive end of the range. Ignored for the standard seven-day preview. (optional)

    try:
        # Retrieve aggregated statistics for a creator.
        api_response = await api_instance.get_creator_stats(id, start_date=start_date, end_date=end_date)
        print("The response of UsersApi->get_creator_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_creator_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The creator&#39;s user ID. |
 **start_date** | **datetime**| ISO timestamp that marks the inclusive start of the range. Ignored for the standard seven-day preview. | [optional]
 **end_date** | **datetime**| ISO timestamp that marks the inclusive end of the range. Ignored for the standard seven-day preview. | [optional]

### Return type

[**CreatorStatsResponse**](CreatorStatsResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Aggregated statistics for the requested creator. |  * X-Creator-Stats-Cache - HIT when the response came from the short-lived private cache, otherwise MISS. <br>  * X-Creator-Stats-Window - Maximum number of days available to this caller. <br>  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | Creator not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user**
> UserProfile get_user(id)

**Synchronous variant:** `get_user_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve a specific user's profile.

Return the public profile for one visible user, including only fields approved for external integrations. Account-security and private contact data remains outside this contract.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.user_profile import UserProfile
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
    api_instance = arcenciel.generated.UsersApi(api_client)
    id = 1 # int | The user ID.

    try:
        # Retrieve a specific user's profile.
        api_response = await api_instance.get_user(id)
        print("The response of UsersApi->get_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The user ID. |

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the user&#39;s profile. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**404** | User not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_uploads**
> Uploads list_user_uploads(id, sort=sort)

**Synchronous variant:** `list_user_uploads_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve uploads for a specific user

List models, images, videos, articles, and other upload groups visible on one public user profile. Every nested record is filtered using its domain visibility policy.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.uploads import Uploads
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
    api_instance = arcenciel.generated.UsersApi(api_client)
    id = 1 # int | The user ID.
    sort = 'recent' # str | Sort order for results. (optional)

    try:
        # Retrieve uploads for a specific user
        api_response = await api_instance.list_user_uploads(id, sort=sort)
        print("The response of UsersApi->list_user_uploads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_user_uploads: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The user ID. |
 **sort** | **str**| Sort order for results. | [optional]

### Return type

[**Uploads**](Uploads.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists of uploads grouped by type. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_users**
> ListUsers200Response list_users(search=search, role=role, followed=followed, sort=sort, direction=direction, page=page, limit=limit)

**Synchronous variant:** `list_users_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve a list of users.

List public user profiles with the documented pagination and filtering controls. Private account, security, email, and session data is never part of this Developer API response.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.list_users200_response import ListUsers200Response
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
    api_instance = arcenciel.generated.UsersApi(api_client)
    search = 'landscape' # str | Filter by username (contains match). (optional)
    role = 'ADMIN' # str | Filter by user role. (optional)
    followed = true # bool | When true, return users followed by the current user (auth only). (optional)
    sort = 'username' # str | Sort field (default username). (optional)
    direction = 'asc' # str | Sort direction (default desc). (optional)
    page = 1 # int | Page number. (optional) (default to 1)
    limit = 40 # int | Page size (min 10, max 100). (optional) (default to 40)

    try:
        # Retrieve a list of users.
        api_response = await api_instance.list_users(search=search, role=role, followed=followed, sort=sort, direction=direction, page=page, limit=limit)
        print("The response of UsersApi->list_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Filter by username (contains match). | [optional]
 **role** | **str**| Filter by user role. | [optional]
 **followed** | **bool**| When true, return users followed by the current user (auth only). | [optional]
 **sort** | **str**| Sort field (default username). | [optional]
 **direction** | **str**| Sort direction (default desc). | [optional]
 **page** | **int**| Page number. | [optional] [default to 1]
 **limit** | **int**| Page size (min 10, max 100). | [optional] [default to 40]

### Return type

[**ListUsers200Response**](ListUsers200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a paginated list of users. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolve_users**
> Dict[str, Optional[int]] resolve_users(resolve_users_request)

**Synchronous variant:** `resolve_users_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Resolve usernames to user IDs

Resolve a bounded list of public usernames to numeric user identifiers. Authentication is optional and API keys need only ProfileRead for this read-like POST.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.resolve_users_request import ResolveUsersRequest
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
    api_instance = arcenciel.generated.UsersApi(api_client)
    resolve_users_request = {"names":["value"]} # ResolveUsersRequest | Request payload for this operation.

    try:
        # Resolve usernames to user IDs
        api_response = await api_instance.resolve_users(resolve_users_request)
        print("The response of UsersApi->resolve_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->resolve_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resolve_users_request** | [**ResolveUsersRequest**](ResolveUsersRequest.md)| Request payload for this operation. |

### Return type

**Dict[str, Optional[int]]**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Mapping from username to user ID (null if not found). |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_users**
> List[SearchUsers200ResponseInner] search_users(q=q, limit=limit, include_collaborators=include_collaborators)

**Synchronous variant:** `search_users_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Search for users by username

Search public user profiles by username for attribution and creator-picking workflows. Results contain only public profile fields and clients must not infer account availability.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.search_users200_response_inner import SearchUsers200ResponseInner
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
    api_instance = arcenciel.generated.UsersApi(api_client)
    q = 'landscape' # str | Partial username to search for (min 2 characters). (optional)
    limit = 1 # int | Max number of users to return (default 10). (optional)
    include_collaborators = true # bool | Include collection collaborators in results. (optional)

    try:
        # Search for users by username
        api_response = await api_instance.search_users(q=q, limit=limit, include_collaborators=include_collaborators)
        print("The response of UsersApi->search_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->search_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Partial username to search for (min 2 characters). | [optional]
 **limit** | **int**| Max number of users to return (default 10). | [optional]
 **include_collaborators** | **bool**| Include collection collaborators in results. | [optional]

### Return type

[**List[SearchUsers200ResponseInner]**](SearchUsers200ResponseInner.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of matching users. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
