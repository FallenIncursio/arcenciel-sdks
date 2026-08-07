# arcenciel.generated.DownloadsApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_model_version**](DownloadsApi.md#download_model_version) | **GET** /api/models/{modelId}/versions/{versionId}/download | Download the model version file
[**download_model_version_with_filename**](DownloadsApi.md#download_model_version_with_filename) | **GET** /api/models/{modelId}/versions/{versionId}/download/{downloadName} | Download the model version file with a stable filename
[**get_model_version_download_info**](DownloadsApi.md#get_model_version_download_info) | **GET** /api/models/{modelId}/versions/{versionId}/download-info | Inspect model version download metadata
[**register_model_version_download**](DownloadsApi.md#register_model_version_download) | **POST** /api/models/{modelId}/versions/{versionId}/download/register | Register a model version download without streaming the file


# **download_model_version**
> DownloadModelVersion200Response download_model_version(model_id, version_id)

**Synchronous variant:** `download_model_version_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download the model version file

Download a hosted model file or register an external-only download. Clients must allow documented HTTPS redirects, preserve Range headers, and verify the full SHA-256 hash when provided.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.download_model_version200_response import DownloadModelVersion200Response
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
    api_instance = arcenciel.generated.DownloadsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    version_id = 1 # int | Version Id provided in the path.

    try:
        # Download the model version file
        api_response = await api_instance.download_model_version(model_id, version_id)
        print("The response of DownloadsApi->download_model_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadsApi->download_model_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. | 
 **version_id** | **int**| Version Id provided in the path. | 

### Return type

[**DownloadModelVersion200Response**](DownloadModelVersion200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Binary file download for hosted files, or JSON registration response for external-only versions. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * X-File-Scan-Reason - Present when a scan reason is available. <br>  * X-File-Scan-Status -  <br>  |
**206** | Partial content for a valid byte range request. |  * Content-Length -  <br>  * Content-Range -  <br>  * X-File-Scan-Status -  <br>  |
**302** | Production redirect to the dedicated transfer host for Arc-hosted files. |  * Location - Redirect target on https://uploads.arcenciel.io. <br>  |
**304** | Cached file is still fresh. |  -  |
**400** | Invalid model/version id, relationship mismatch, or no hosted file path is available. |  -  |
**403** | Version is not public and the caller has no applicable early-access entitlement. |  -  |
**404** | Version not found or file not available. |  -  |
**416** | Requested byte range is not satisfiable. |  -  |
**423** | File blocked due to malware, unsafe, or scan-error status. |  -  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  |
**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_model_version_with_filename**
> DownloadModelVersionWithFilename200Response download_model_version_with_filename(model_id, version_id, download_name)

**Synchronous variant:** `download_model_version_with_filename_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download the model version file with a stable filename

Download the selected model version using a client-friendly filename hint. The version identifier selects the file; clients must not treat downloadName as a trusted source of identity.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.download_model_version_with_filename200_response import DownloadModelVersionWithFilename200Response
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
    api_instance = arcenciel.generated.DownloadsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    version_id = 1 # int | Version Id provided in the path.
    download_name = 'example-download-name' # str | Filename slug used by clients and CDNs; the version id selects the actual file.

    try:
        # Download the model version file with a stable filename
        api_response = await api_instance.download_model_version_with_filename(model_id, version_id, download_name)
        print("The response of DownloadsApi->download_model_version_with_filename:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadsApi->download_model_version_with_filename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. | 
 **version_id** | **int**| Version Id provided in the path. | 
 **download_name** | **str**| Filename slug used by clients and CDNs; the version id selects the actual file. | 

### Return type

[**DownloadModelVersionWithFilename200Response**](DownloadModelVersionWithFilename200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Binary file download for hosted files, or JSON registration response for external-only versions. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * X-File-Scan-Reason - Present when a scan reason is available. <br>  * X-File-Scan-Status -  <br>  |
**206** | Partial content for a valid byte range request. |  * Content-Length -  <br>  * Content-Range -  <br>  * X-File-Scan-Status -  <br>  |
**302** | Production redirect to the dedicated transfer host for Arc-hosted files. |  * Location - Redirect target on https://uploads.arcenciel.io. <br>  |
**304** | Cached file is still fresh. |  -  |
**400** | Invalid model/version id, relationship mismatch, or no hosted file path is available. |  -  |
**404** | Version not found or file not available. |  -  |
**416** | Requested byte range is not satisfiable. |  -  |
**423** | File blocked due to malware, unsafe, or scan-error status. |  -  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  |
**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_model_version_download_info**
> VersionDownloadInfo get_model_version_download_info(model_id, version_id)

**Synchronous variant:** `get_model_version_download_info_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Inspect model version download metadata

Inspect the supported download source, filename, hashes, redirect allowlist, file-safety state, and early-access decision before transferring a model file.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.version_download_info import VersionDownloadInfo
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
    api_instance = arcenciel.generated.DownloadsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    version_id = 1 # int | Version Id provided in the path.

    try:
        # Inspect model version download metadata
        api_response = await api_instance.get_model_version_download_info(model_id, version_id)
        print("The response of DownloadsApi->get_model_version_download_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadsApi->get_model_version_download_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. | 
 **version_id** | **int**| Version Id provided in the path. | 

### Return type

[**VersionDownloadInfo**](VersionDownloadInfo.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Download metadata for the version. |  -  |
**400** | Invalid model/version id or relationship mismatch. |  -  |
**403** | Version is not published or is scheduled for the future. |  -  |
**404** | Version not found. |  -  |
**423** | A scheduled hosted file is not safety-cleared for supporter early access. |  -  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  |
**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register_model_version_download**
> RegisterModelVersionDownload200Response register_model_version_download(model_id, version_id)

**Synchronous variant:** `register_model_version_download_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Register a model version download without streaming the file

Record a completed direct or external download without streaming the file through Arc en Ciel. Authentication is optional and associates the event with the caller when available.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.register_model_version_download200_response import RegisterModelVersionDownload200Response
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
    api_instance = arcenciel.generated.DownloadsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    version_id = 1 # int | Version Id provided in the path.

    try:
        # Register a model version download without streaming the file
        api_response = await api_instance.register_model_version_download(model_id, version_id)
        print("The response of DownloadsApi->register_model_version_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadsApi->register_model_version_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. | 
 **version_id** | **int**| Version Id provided in the path. | 

### Return type

[**RegisterModelVersionDownload200Response**](RegisterModelVersionDownload200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Download registration completed. |  -  |
**400** | Invalid model/version id, relationship mismatch, or no file available. |  -  |
**403** | Version is not publicly available and the caller has no applicable early-access entitlement. |  -  |
**404** | Version not found or inaccessible. |  -  |
**423** | File blocked due to malware, unsafe, or scan-error status. |  -  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  |
**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

