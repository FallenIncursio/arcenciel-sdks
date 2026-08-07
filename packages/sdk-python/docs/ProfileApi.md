# arcenciel.generated.ProfileApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_my_downloads**](ProfileApi.md#clear_my_downloads) | **DELETE** /api/users/me/downloads | Remove all downloads
[**delete_my_download**](ProfileApi.md#delete_my_download) | **DELETE** /api/users/me/downloads/{id} | Remove a specific download entry
[**export_my_data**](ProfileApi.md#export_my_data) | **GET** /api/users/me/export | Export all your account data
[**get_my_profile**](ProfileApi.md#get_my_profile) | **GET** /api/users/me | Retrieve the current user&#39;s profile
[**list_my_downloads**](ProfileApi.md#list_my_downloads) | **GET** /api/users/me/downloads | List your recent downloads
[**list_my_uploads**](ProfileApi.md#list_my_uploads) | **GET** /api/users/me/uploads | Retrieve your uploaded content (models, images, videos, articles)
[**list_pinned_templates**](ProfileApi.md#list_pinned_templates) | **GET** /api/users/me/pinned-template | Retrieve the model ids pinned as quick upload templates
[**remove_my_profile_banner**](ProfileApi.md#remove_my_profile_banner) | **DELETE** /api/users/me/banner | Remove your profile banner.
[**remove_my_profile_picture**](ProfileApi.md#remove_my_profile_picture) | **DELETE** /api/users/me/profile-picture | Remove your profile picture.
[**toggle_pinned_template**](ProfileApi.md#toggle_pinned_template) | **PATCH** /api/users/me/pinned-template | Toggle a model as pinned upload template
[**update_my_profile**](ProfileApi.md#update_my_profile) | **PATCH** /api/users/me | Update your own profile fields (e.g. username, bio, sfwMode, trackDownloads)
[**update_my_profile_banner**](ProfileApi.md#update_my_profile_banner) | **PATCH** /api/users/me/banner | Upload or change your profile banner.
[**update_my_profile_picture**](ProfileApi.md#update_my_profile_picture) | **PATCH** /api/users/me/profile-picture | Upload or change your profile picture.
[**update_my_social_links**](ProfileApi.md#update_my_social_links) | **PATCH** /api/users/me/social-links | Update your social links


# **clear_my_downloads**
> DeveloperMessageResponse clear_my_downloads()

**Synchronous variant:** `clear_my_downloads_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove all downloads

Clear all tracked download-history entries for the authenticated caller. This does not remove models, versions, files, or global aggregate statistics.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
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
    api_instance = arcenciel.generated.ProfileApi(api_client)

    try:
        # Remove all downloads
        api_response = await api_instance.clear_my_downloads()
        print("The response of ProfileApi->clear_my_downloads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->clear_my_downloads: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Downloads cleared. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_my_download**
> DeveloperMessageResponse delete_my_download(id)

**Synchronous variant:** `delete_my_download_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove a specific download entry

Delete one tracked download-history entry owned by the authenticated caller. The underlying model file and aggregate download counts are unaffected.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
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
    api_instance = arcenciel.generated.ProfileApi(api_client)
    id = 1 # int | Id provided in the path.

    try:
        # Remove a specific download entry
        api_response = await api_instance.delete_my_download(id)
        print("The response of ProfileApi->delete_my_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->delete_my_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id provided in the path. |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Download removed. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Download not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_my_data**
> DeveloperDataExport export_my_data()

**Synchronous variant:** `export_my_data_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Export all your account data

Export the authenticated caller’s account data, uploads, comments, and audit records. The privacy-sensitive export is limited to one request per 24 hours.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_data_export import DeveloperDataExport
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
    api_instance = arcenciel.generated.ProfileApi(api_client)

    try:
        # Export all your account data
        api_response = await api_instance.export_my_data()
        print("The response of ProfileApi->export_my_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->export_my_data: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DeveloperDataExport**](DeveloperDataExport.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns profile, uploads, comments and audit logs. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | Too many requests. |  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_my_profile**
> UserProfile get_my_profile()

**Synchronous variant:** `get_my_profile_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve the current user's profile

Return the authenticated caller’s own profile and account preferences without exposing write-only credentials or raw authentication secrets.

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
    api_instance = arcenciel.generated.ProfileApi(api_client)

    try:
        # Retrieve the current user's profile
        api_response = await api_instance.get_my_profile()
        print("The response of ProfileApi->get_my_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->get_my_profile: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Returns the profile of the current user. |  * X-Request-ID -  <br>  |
**401** | Unauthorized – user not logged in. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_my_downloads**
> List[DeveloperDownloadHistoryEntry] list_my_downloads()

**Synchronous variant:** `list_my_downloads_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List your recent downloads

List the authenticated caller’s tracked model download history with model and version context. This operation never returns another user’s records.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_download_history_entry import DeveloperDownloadHistoryEntry
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
    api_instance = arcenciel.generated.ProfileApi(api_client)

    try:
        # List your recent downloads
        api_response = await api_instance.list_my_downloads()
        print("The response of ProfileApi->list_my_downloads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->list_my_downloads: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[DeveloperDownloadHistoryEntry]**](DeveloperDownloadHistoryEntry.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of downloads. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_my_uploads**
> Uploads list_my_uploads()

**Synchronous variant:** `list_my_uploads_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve your uploaded content (models, images, videos, articles)

Return models, images, videos, and articles owned by the authenticated caller, including non-public items available through owner visibility.

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
    api_instance = arcenciel.generated.ProfileApi(api_client)

    try:
        # Retrieve your uploaded content (models, images, videos, articles)
        api_response = await api_instance.list_my_uploads()
        print("The response of ProfileApi->list_my_uploads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->list_my_uploads: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Returns an object containing arrays of your uploads. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_pinned_templates**
> DeveloperPinnedTemplatesResponse list_pinned_templates(compact=compact, version_limit=version_limit)

**Synchronous variant:** `list_pinned_templates_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve the model ids pinned as quick upload templates

List the model identifiers pinned by the authenticated caller as quick upload templates. At most the current configured limit is returned.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_pinned_templates_response import DeveloperPinnedTemplatesResponse
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
    api_instance = arcenciel.generated.ProfileApi(api_client)
    compact = False # bool | Include compact model records in addition to identifiers. (optional) (default to False)
    version_limit = 20 # int | Maximum versions included per compact model. (optional) (default to 20)

    try:
        # Retrieve the model ids pinned as quick upload templates
        api_response = await api_instance.list_pinned_templates(compact=compact, version_limit=version_limit)
        print("The response of ProfileApi->list_pinned_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->list_pinned_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compact** | **bool**| Include compact model records in addition to identifiers. | [optional] [default to False]
 **version_limit** | **int**| Maximum versions included per compact model. | [optional] [default to 20]

### Return type

[**DeveloperPinnedTemplatesResponse**](DeveloperPinnedTemplatesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of pinned models. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_my_profile_banner**
> RemoveMyProfileBanner200Response remove_my_profile_banner()

**Synchronous variant:** `remove_my_profile_banner_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove your profile banner.

Remove the authenticated caller’s current profile banner and managed derivative files. The operation cannot affect another user’s media.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.remove_my_profile_banner200_response import RemoveMyProfileBanner200Response
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
    api_instance = arcenciel.generated.ProfileApi(api_client)

    try:
        # Remove your profile banner.
        api_response = await api_instance.remove_my_profile_banner()
        print("The response of ProfileApi->remove_my_profile_banner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->remove_my_profile_banner: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RemoveMyProfileBanner200Response**](RemoveMyProfileBanner200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Profile banner removed. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_my_profile_picture**
> RemoveMyProfilePicture200Response remove_my_profile_picture()

**Synchronous variant:** `remove_my_profile_picture_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove your profile picture.

Remove the authenticated caller’s current profile picture and its managed derivative files. Repeating the request leaves the profile without an image.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.remove_my_profile_picture200_response import RemoveMyProfilePicture200Response
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
    api_instance = arcenciel.generated.ProfileApi(api_client)

    try:
        # Remove your profile picture.
        api_response = await api_instance.remove_my_profile_picture()
        print("The response of ProfileApi->remove_my_profile_picture:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->remove_my_profile_picture: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RemoveMyProfilePicture200Response**](RemoveMyProfilePicture200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Profile picture removed. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggle_pinned_template**
> DeveloperPinnedTemplatesResponse toggle_pinned_template(toggle_pinned_template_request)

**Synchronous variant:** `toggle_pinned_template_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Toggle a model as pinned upload template

Toggle a model in the authenticated caller’s quick-upload template list. Automatic retries are disabled because the endpoint toggles state.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_pinned_templates_response import DeveloperPinnedTemplatesResponse
from arcenciel.generated.models.toggle_pinned_template_request import TogglePinnedTemplateRequest
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
    api_instance = arcenciel.generated.ProfileApi(api_client)
    toggle_pinned_template_request = {"modelId":1} # TogglePinnedTemplateRequest | Request payload for this operation.

    try:
        # Toggle a model as pinned upload template
        api_response = await api_instance.toggle_pinned_template(toggle_pinned_template_request)
        print("The response of ProfileApi->toggle_pinned_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->toggle_pinned_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toggle_pinned_template_request** | [**TogglePinnedTemplateRequest**](TogglePinnedTemplateRequest.md)| Request payload for this operation. |

### Return type

[**DeveloperPinnedTemplatesResponse**](DeveloperPinnedTemplatesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pinned templates updated. |  * X-Request-ID -  <br>  |
**400** | Invalid model id or limit reached. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_my_profile**
> SelfProfile update_my_profile(update_my_profile_request)

**Synchronous variant:** `update_my_profile_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update your own profile fields (e.g. username, bio, sfwMode, trackDownloads)

Update supported fields on the authenticated caller’s profile. Username conflicts, validation failures, and preference constraints are returned explicitly.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.self_profile import SelfProfile
from arcenciel.generated.models.update_my_profile_request import UpdateMyProfileRequest
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
    api_instance = arcenciel.generated.ProfileApi(api_client)
    update_my_profile_request = {"bio":"value","nsfwAgeVerified":true,"sfwMode":true,"trackDownloads":true,"username":"value"} # UpdateMyProfileRequest | Fields to update in your profile.

    try:
        # Update your own profile fields (e.g. username, bio, sfwMode, trackDownloads)
        api_response = await api_instance.update_my_profile(update_my_profile_request)
        print("The response of ProfileApi->update_my_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->update_my_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_my_profile_request** | [**UpdateMyProfileRequest**](UpdateMyProfileRequest.md)| Fields to update in your profile. |

### Return type

[**SelfProfile**](SelfProfile.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Profile updated successfully. |  * X-Request-ID -  <br>  |
**400** | Bad request – invalid data. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_my_profile_banner**
> UpdateMyProfileBanner200Response update_my_profile_banner(banner_file=banner_file)

**Synchronous variant:** `update_my_profile_banner_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload or change your profile banner.

Upload and replace the authenticated caller’s profile banner using validated multipart image content. Clients must not retry uploads automatically.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.update_my_profile_banner200_response import UpdateMyProfileBanner200Response
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
    api_instance = arcenciel.generated.ProfileApi(api_client)
    banner_file = None # bytes | Banner File accepted or returned by this contract. (optional)

    try:
        # Upload or change your profile banner.
        api_response = await api_instance.update_my_profile_banner(banner_file=banner_file)
        print("The response of ProfileApi->update_my_profile_banner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->update_my_profile_banner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **banner_file** | **bytes**| Banner File accepted or returned by this contract. | [optional]

### Return type

[**UpdateMyProfileBanner200Response**](UpdateMyProfileBanner200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Profile banner updated. |  * X-Request-ID -  <br>  |
**400** | Bad request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_my_profile_picture**
> UpdateMyProfilePicture200Response update_my_profile_picture(profile_picture_file=profile_picture_file)

**Synchronous variant:** `update_my_profile_picture_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload or change your profile picture.

Upload and replace the authenticated caller’s profile picture using validated multipart image content. Clients must not retry uploads automatically.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.update_my_profile_picture200_response import UpdateMyProfilePicture200Response
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
    api_instance = arcenciel.generated.ProfileApi(api_client)
    profile_picture_file = None # bytes | Profile Picture File accepted or returned by this contract. (optional)

    try:
        # Upload or change your profile picture.
        api_response = await api_instance.update_my_profile_picture(profile_picture_file=profile_picture_file)
        print("The response of ProfileApi->update_my_profile_picture:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->update_my_profile_picture: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_picture_file** | **bytes**| Profile Picture File accepted or returned by this contract. | [optional]

### Return type

[**UpdateMyProfilePicture200Response**](UpdateMyProfilePicture200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Profile picture updated. |  * X-Request-ID -  <br>  |
**400** | Bad request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_my_social_links**
> DeveloperMessageResponse update_my_social_links(update_my_social_links_request)

**Synchronous variant:** `update_my_social_links_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update your social links

Replace the authenticated caller’s supported public social links after URL normalization and platform validation. Unknown platforms are rejected.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.update_my_social_links_request import UpdateMySocialLinksRequest
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
    api_instance = arcenciel.generated.ProfileApi(api_client)
    update_my_social_links_request = {"links":[{"icon":"ri-github-fill","url":"https://github.com/arcenciel"}]} # UpdateMySocialLinksRequest |

    try:
        # Update your social links
        api_response = await api_instance.update_my_social_links(update_my_social_links_request)
        print("The response of ProfileApi->update_my_social_links:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->update_my_social_links: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_my_social_links_request** | [**UpdateMySocialLinksRequest**](UpdateMySocialLinksRequest.md)|  |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Social links updated. |  * X-Request-ID -  <br>  |
**400** | Bad request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
