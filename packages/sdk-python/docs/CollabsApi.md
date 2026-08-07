# arcenciel.generated.CollabsApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_collab_showcase_image**](CollabsApi.md#download_collab_showcase_image) | **GET** /api/collabs/{collabId}/showcase/image | Download a collaboration showcase image
[**get_collab**](CollabsApi.md#get_collab) | **GET** /api/collabs/{collabId} | Get a collaboration event
[**get_collab_announcement**](CollabsApi.md#get_collab_announcement) | **GET** /api/collabs/announcement | Get the active collaboration announcement
[**get_collab_showcase**](CollabsApi.md#get_collab_showcase) | **GET** /api/collabs/{collabId}/showcase | Get collaboration showcase data
[**get_historical_collab_overview**](CollabsApi.md#get_historical_collab_overview) | **GET** /api/collabs/history/overview | Get the public historical collaboration overview
[**leave_collab**](CollabsApi.md#leave_collab) | **DELETE** /api/collabs/{collabId}/participants/self | Remove the current user&#39;s collaboration participant record
[**list_collabs**](CollabsApi.md#list_collabs) | **GET** /api/collabs | List collaboration events
[**request_collab_join**](CollabsApi.md#request_collab_join) | **POST** /api/collabs/{collabId}/requests | Request to join a collaboration
[**update_my_collab_participant**](CollabsApi.md#update_my_collab_participant) | **PATCH** /api/collabs/{collabId}/participants/self | Update the current user&#39;s collaboration participant record
[**upload_my_collab_participant_placeholder**](CollabsApi.md#upload_my_collab_participant_placeholder) | **POST** /api/collabs/{collabId}/participants/placeholder | Upload a participant placeholder image


# **download_collab_showcase_image**
> bytes download_collab_showcase_image(collab_id, style=style, width=width, include_placeholders=include_placeholders, include_unreleased=include_unreleased)

**Synchronous variant:** `download_collab_showcase_image_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download a collaboration showcase image

Transfer a generated PNG showcase for an eligible released collaboration. Clients may use byte ranges, must honor Content-Range and the inline filename, and must not automatically retry an unchanged invalid range.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
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
    api_instance = arcenciel.generated.CollabsApi(api_client)
    collab_id = 'example-collab-id' # str | Collab Id provided in the path.
    style = 'example-style' # str | Server-supported layout. Unknown values fall back to the default layout. (optional)
    width = 1 # int | Requested output width; the runtime clamps values to the supported range. (optional)
    include_placeholders = true # bool | Include Placeholders provided in the query. (optional)
    include_unreleased = true # bool | Include Unreleased provided in the query. (optional)

    try:
        # Download a collaboration showcase image
        api_response = await api_instance.download_collab_showcase_image(collab_id, style=style, width=width, include_placeholders=include_placeholders, include_unreleased=include_unreleased)
        print("The response of CollabsApi->download_collab_showcase_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollabsApi->download_collab_showcase_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collab_id** | **str**| Collab Id provided in the path. |
 **style** | **str**| Server-supported layout. Unknown values fall back to the default layout. | [optional]
 **width** | **int**| Requested output width; the runtime clamps values to the supported range. | [optional]
 **include_placeholders** | **bool**| Include Placeholders provided in the query. | [optional]
 **include_unreleased** | **bool**| Include Unreleased provided in the query. | [optional]

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Showcase PNG returned. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * Content-Length -  <br>  * X-Request-ID -  <br>  |
**206** | Requested PNG byte range returned. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * Content-Length -  <br>  * Content-Range -  <br>  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
**416** | Requested byte range is not satisfiable for the current PNG representation. |  * Content-Range -  <br>  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_collab**
> CollabDetail get_collab(collab_id)

**Synchronous variant:** `get_collab_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get a collaboration event

Return a visible live or historical collaboration by numeric identifier or slug. Participant, submission, evidence, management, and invitation fields are filtered according to the anonymous, member, owner, and staff visibility matrix.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.collab_detail import CollabDetail
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
    api_instance = arcenciel.generated.CollabsApi(api_client)
    collab_id = 'example-collab-id' # str | Collab Id provided in the path.

    try:
        # Get a collaboration event
        api_response = await api_instance.get_collab(collab_id)
        print("The response of CollabsApi->get_collab:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollabsApi->get_collab: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collab_id** | **str**| Collab Id provided in the path. |

### Return type

[**CollabDetail**](CollabDetail.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collaboration detail returned. |  * X-Request-ID -  <br>  |
**403** | The authenticated principal does not have access to this operation. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_collab_announcement**
> CollabSummary get_collab_announcement()

**Synchronous variant:** `get_collab_announcement_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get the active collaboration announcement

Return the current public collaboration announcement, or null when no eligible live event is active. Authentication is optional and never expands this announcement response beyond the public summary.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.collab_summary import CollabSummary
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
    api_instance = arcenciel.generated.CollabsApi(api_client)

    try:
        # Get the active collaboration announcement
        api_response = await api_instance.get_collab_announcement()
        print("The response of CollabsApi->get_collab_announcement:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollabsApi->get_collab_announcement: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CollabSummary**](CollabSummary.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Active announcement returned. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_collab_showcase**
> CollabShowcase get_collab_showcase(collab_id, include_placeholders=include_placeholders, include_unreleased=include_unreleased)

**Synchronous variant:** `get_collab_showcase_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get collaboration showcase data

Return the public showcase entries for an eligible released collaboration. Placeholder and unreleased entries remain disabled for ordinary callers and can only be requested by authenticated staff.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.collab_showcase import CollabShowcase
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
    api_instance = arcenciel.generated.CollabsApi(api_client)
    collab_id = 'example-collab-id' # str | Collab Id provided in the path.
    include_placeholders = true # bool | Include Placeholders provided in the query. (optional)
    include_unreleased = true # bool | Include Unreleased provided in the query. (optional)

    try:
        # Get collaboration showcase data
        api_response = await api_instance.get_collab_showcase(collab_id, include_placeholders=include_placeholders, include_unreleased=include_unreleased)
        print("The response of CollabsApi->get_collab_showcase:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollabsApi->get_collab_showcase: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collab_id** | **str**| Collab Id provided in the path. |
 **include_placeholders** | **bool**| Include Placeholders provided in the query. | [optional]
 **include_unreleased** | **bool**| Include Unreleased provided in the query. | [optional]

### Return type

[**CollabShowcase**](CollabShowcase.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Showcase data returned. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_historical_collab_overview**
> GetHistoricalCollabOverview200Response get_historical_collab_overview()

**Synchronous variant:** `get_historical_collab_overview_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get the public historical collaboration overview

Return aggregate counts and the recorded year range for public historical collaborations. This anonymous-safe overview contains no participant contact information or staff-only evidence.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.get_historical_collab_overview200_response import GetHistoricalCollabOverview200Response
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
    api_instance = arcenciel.generated.CollabsApi(api_client)

    try:
        # Get the public historical collaboration overview
        api_response = await api_instance.get_historical_collab_overview()
        print("The response of CollabsApi->get_historical_collab_overview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollabsApi->get_historical_collab_overview: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetHistoricalCollabOverview200Response**](GetHistoricalCollabOverview200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Historical catalog totals and recorded year range returned. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **leave_collab**
> leave_collab(collab_id)

**Synchronous variant:** `leave_collab_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove the current user's collaboration participant record

Cancel the caller’s pending request or invitation to an active collaboration without affecting accepted participants. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
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
    api_instance = arcenciel.generated.CollabsApi(api_client)
    collab_id = 'example-collab-id' # str | Collab Id provided in the path.

    try:
        # Remove the current user's collaboration participant record
        await api_instance.leave_collab(collab_id)
    except Exception as e:
        print("Exception when calling CollabsApi->leave_collab: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collab_id** | **str**| Collab Id provided in the path. |

### Return type

void (empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Participant removed. |  * X-Request-ID -  <br>  |
**400** | Participant state does not allow self-removal. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Collaboration or participant not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_collabs**
> CollabPage list_collabs(page=page, limit=limit, search=search, scope=scope, status=status, category=category, user_id=user_id, mode=mode, scale=scale, year=year)

**Synchronous variant:** `list_collabs_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List collaboration events

List public live or historical collaboration events with pagination, availability counts, creator previews, and optional filters. Staff may explicitly request the management view while other callers remain on the public visibility policy.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.collab_page import CollabPage
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
    api_instance = arcenciel.generated.CollabsApi(api_client)
    page = 1 # int | Page provided in the query. (optional)
    limit = 1 # int | Limit provided in the query. (optional)
    search = 'landscape' # str | Search provided in the query. (optional)
    scope = 'public' # str | Staff-only `manage` view; all other callers receive the public view. (optional)
    status = 'example-status' # str | Filter by the current collaboration status. Unknown values are ignored. (optional)
    category = 'example-category' # str | Filter by collaboration category. Unknown values are ignored. (optional)
    user_id = 1 # int | Return collaborations containing the selected accepted participant or historical creator. (optional)
    mode = 'LIVE' # str | Select live events or the historical archive. Defaults to `LIVE`. (optional)
    scale = 'MAJOR' # str | Optional historical scale filter. (optional)
    year = 1970 # int | Optional UTC release year filter. (optional)

    try:
        # List collaboration events
        api_response = await api_instance.list_collabs(page=page, limit=limit, search=search, scope=scope, status=status, category=category, user_id=user_id, mode=mode, scale=scale, year=year)
        print("The response of CollabsApi->list_collabs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollabsApi->list_collabs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Page provided in the query. | [optional]
 **limit** | **int**| Limit provided in the query. | [optional]
 **search** | **str**| Search provided in the query. | [optional]
 **scope** | **str**| Staff-only &#x60;manage&#x60; view; all other callers receive the public view. | [optional]
 **status** | **str**| Filter by the current collaboration status. Unknown values are ignored. | [optional]
 **category** | **str**| Filter by collaboration category. Unknown values are ignored. | [optional]
 **user_id** | **int**| Return collaborations containing the selected accepted participant or historical creator. | [optional]
 **mode** | **str**| Select live events or the historical archive. Defaults to &#x60;LIVE&#x60;. | [optional]
 **scale** | **str**| Optional historical scale filter. | [optional]
 **year** | **int**| Optional UTC release year filter. | [optional]

### Return type

[**CollabPage**](CollabPage.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collaboration list returned. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_collab_join**
> DeveloperCollabParticipantResponse request_collab_join(collab_id, body=body)

**Synchronous variant:** `request_collab_join_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Request to join a collaboration

Request participation in an open live collaboration or return the caller’s existing request without creating a duplicate participant. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_collab_participant_response import DeveloperCollabParticipantResponse
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
    api_instance = arcenciel.generated.CollabsApi(api_client)
    collab_id = 'example-collab-id' # str | Collab Id provided in the path.
    body = {} # object | Request payload for this operation. (optional)

    try:
        # Request to join a collaboration
        api_response = await api_instance.request_collab_join(collab_id, body=body)
        print("The response of CollabsApi->request_collab_join:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollabsApi->request_collab_join: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collab_id** | **str**| Collab Id provided in the path. |
 **body** | **object**| Request payload for this operation. | [optional]

### Return type

[**DeveloperCollabParticipantResponse**](DeveloperCollabParticipantResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Existing join request or invitation updated. |  * X-Request-ID -  <br>  |
**201** | New join request recorded. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | The caller cannot request access to this collaboration. |  * X-Request-ID -  <br>  |
**404** | Collaboration not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_my_collab_participant**
> DeveloperCollabParticipantResponse update_my_collab_participant(collab_id, body)

**Synchronous variant:** `update_my_collab_participant_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update the current user's collaboration participant record

Update the caller’s own character, source, notes, and placeholder-description fields in an active collaboration. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_collab_participant_response import DeveloperCollabParticipantResponse
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
    api_instance = arcenciel.generated.CollabsApi(api_client)
    collab_id = 'example-collab-id' # str | Collab Id provided in the path.
    body = {} # object | Request payload for this operation.

    try:
        # Update the current user's collaboration participant record
        api_response = await api_instance.update_my_collab_participant(collab_id, body)
        print("The response of CollabsApi->update_my_collab_participant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollabsApi->update_my_collab_participant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collab_id** | **str**| Collab Id provided in the path. |
 **body** | **object**| Request payload for this operation. |

### Return type

[**DeveloperCollabParticipantResponse**](DeveloperCollabParticipantResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Participant updated. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_my_collab_participant_placeholder**
> DeveloperCollabPlaceholderUploadResponse upload_my_collab_participant_placeholder(collab_id, idempotency_key=idempotency_key, placeholder_image=placeholder_image)

**Synchronous variant:** `upload_my_collab_participant_placeholder_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload a participant placeholder image

Upload and safety-check placeholder artwork for the caller’s participant record in an active collaboration. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_collab_placeholder_upload_response import DeveloperCollabPlaceholderUploadResponse
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
    api_instance = arcenciel.generated.CollabsApi(api_client)
    collab_id = 'example-collab-id' # str | Collab Id provided in the path.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    placeholder_image = None # bytes | Placeholder Image accepted or returned by this contract. (optional)

    try:
        # Upload a participant placeholder image
        api_response = await api_instance.upload_my_collab_participant_placeholder(collab_id, idempotency_key=idempotency_key, placeholder_image=placeholder_image)
        print("The response of CollabsApi->upload_my_collab_participant_placeholder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollabsApi->upload_my_collab_participant_placeholder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collab_id** | **str**| Collab Id provided in the path. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **placeholder_image** | **bytes**| Placeholder Image accepted or returned by this contract. | [optional]

### Return type

[**DeveloperCollabPlaceholderUploadResponse**](DeveloperCollabPlaceholderUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Placeholder image uploaded. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The operation is temporarily unavailable because a required service, dependency, or integration is unavailable. The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
