# arcenciel.generated.ImagesApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyze_image_prompt**](ImagesApi.md#analyze_image_prompt) | **GET** /api/images/{id}/prompt-analysis | Group an image prompt by semantic category
[**download_image**](ImagesApi.md#download_image) | **GET** /api/images/{id}/download | Download the original image file
[**download_image_legacy**](ImagesApi.md#download_image_legacy) | **GET** /api/images/{id}/dl | Download the original image file (alias)
[**get_image**](ImagesApi.md#get_image) | **GET** /api/images/{id}/info | Retrieve image metadata by ID
[**get_image_content**](ImagesApi.md#get_image_content) | **GET** /api/images/{id} | Retrieve an image file (webp if supported, original otherwise)
[**get_image_spatial_attribution**](ImagesApi.md#get_image_spatial_attribution) | **GET** /api/images/{id}/spatial-attribution | Retrieve the asynchronous tag-location analysis status
[**get_image_spatial_attribution_atlas**](ImagesApi.md#get_image_spatial_attribution_atlas) | **GET** /api/images/{id}/spatial-attribution/atlas | Retrieve the private tag-location heatmap atlas
[**get_images_bulk**](ImagesApi.md#get_images_bulk) | **GET** /api/images/bulk-info | Retrieve lightweight metadata for multiple image IDs
[**list_image_external_resources**](ImagesApi.md#list_image_external_resources) | **GET** /api/images/{id}/external-resources | Resolve resources associated with an image
[**list_image_style_matches**](ImagesApi.md#list_image_style_matches) | **GET** /api/images/{id}/style-matches | Retrieve style-similar images for a given image.
[**list_related_images**](ImagesApi.md#list_related_images) | **GET** /api/images/{id}/related | Retrieve images related to a given image
[**search_images**](ImagesApi.md#search_images) | **GET** /api/images/search | Search images with pagination and filtering


# **analyze_image_prompt**
> AnalyzeImagePrompt200Response analyze_image_prompt(id)

**Synchronous variant:** `analyze_image_prompt_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Group an image prompt by semantic category

Group the visible prompt tokens of an image into semantic categories for inspection and UI presentation. The response may grow with new categories and clients must ignore unknown fields.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.analyze_image_prompt200_response import AnalyzeImagePrompt200Response
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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | Unique identifier of the image.

    try:
        # Group an image prompt by semantic category
        api_response = await api_instance.analyze_image_prompt(id)
        print("The response of ImagesApi->analyze_image_prompt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->analyze_image_prompt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the image. |

### Return type

[**AnalyzeImagePrompt200Response**](AnalyzeImagePrompt200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Grouped positive-prompt analysis. |  * Cache-Control - Private, non-cacheable response because visibility is viewer-specific. <br>  * X-Request-ID -  <br>  |
**400** | Image ID must be a positive integer. |  * X-Request-ID -  <br>  |
**404** | Image not found or not visible to the current viewer. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_image**
> bytes download_image(id)

**Synchronous variant:** `download_image_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download the original image file

Download the original bytes of a visible image with a server-provided filename. The download limiter applies in addition to normal read limits and callers should stream large responses.

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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | Unique identifier of the image.

    try:
        # Download the original image file
        api_response = await api_instance.download_image(id)
        print("The response of ImagesApi->download_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->download_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the image. |

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Binary file download of the image. |  * Content-Disposition - Attachment disposition containing the sanitized original filename. <br>  * X-Request-ID -  <br>  |
**404** | Image not found or file missing on disk. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_image_legacy**
> bytes download_image_legacy(id)

**Synchronous variant:** `download_image_legacy_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download the original image file (alias)

Download the original bytes of a visible image through the compatibility alias. New integrations should prefer downloadImage while existing clients may continue using this stable alias.

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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | Unique identifier of the image.

    try:
        # Download the original image file (alias)
        api_response = await api_instance.download_image_legacy(id)
        print("The response of ImagesApi->download_image_legacy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->download_image_legacy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the image. |

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Binary file download of the image. |  * Content-Disposition - Attachment disposition containing the sanitized original filename. <br>  * X-Request-ID -  <br>  |
**404** | Image not found or file missing on disk. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_image**
> Image get_image(id)

**Synchronous variant:** `get_image_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve image metadata by ID

Return visible metadata for one image, including public uploader, tag, model-version, reaction, and generated-variant information appropriate for the current caller.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.image import Image
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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | Unique identifier of the image.

    try:
        # Retrieve image metadata by ID
        api_response = await api_instance.get_image(id)
        print("The response of ImagesApi->get_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->get_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the image. |

### Return type

[**Image**](Image.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image metadata retrieved successfully. |  * X-Request-ID -  <br>  |
**404** | Image not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_image_content**
> bytes get_image_content(id)

**Synchronous variant:** `get_image_content_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve an image file (webp if supported, original otherwise)

Transfer a visible image, preferring a generated WebP representation when supported and otherwise returning the original. Clients must honor the actual response Content-Type.

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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | Unique identifier of the image.

    try:
        # Retrieve an image file (webp if supported, original otherwise)
        api_response = await api_instance.get_image_content(id)
        print("The response of ImagesApi->get_image_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->get_image_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the image. |

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, image/png, image/webp, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The image file is returned. |  * X-Request-ID -  <br>  |
**404** | Image not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_image_spatial_attribution**
> ImageSpatialAttribution get_image_spatial_attribution(id)

**Synchronous variant:** `get_image_spatial_attribution_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve the asynchronous tag-location analysis status

Return the asynchronous spatial tag-attribution state and visible result for an image. Callers can poll this safe read while respecting Retry-After and the shared read limit.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.image_spatial_attribution import ImageSpatialAttribution
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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | Unique identifier of the image.

    try:
        # Retrieve the asynchronous tag-location analysis status
        api_response = await api_instance.get_image_spatial_attribution(id)
        print("The response of ImagesApi->get_image_spatial_attribution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->get_image_spatial_attribution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the image. |

### Return type

[**ImageSpatialAttribution**](ImageSpatialAttribution.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current analysis status or a completed tag-location manifest. |  * Cache-Control - Private, non-cacheable response because visibility is viewer-specific. <br>  * X-Request-ID -  <br>  |
**404** | Image not found or not visible to the current viewer. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_image_spatial_attribution_atlas**
> bytes get_image_spatial_attribution_atlas(id)

**Synchronous variant:** `get_image_spatial_attribution_atlas_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve the private tag-location heatmap atlas

Transfer the generated PNG heatmap atlas for an accessible spatial-attribution result. The endpoint returns binary image content and does not expose unavailable private analyses.

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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | Unique identifier of the image.

    try:
        # Retrieve the private tag-location heatmap atlas
        api_response = await api_instance.get_image_spatial_attribution_atlas(id)
        print("The response of ImagesApi->get_image_spatial_attribution_atlas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->get_image_spatial_attribution_atlas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the image. |

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
**200** | Grayscale tag-location atlas. |  * X-Request-ID -  <br>  |
**404** | Image or current atlas not found, or the image is not visible to the current viewer. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_images_bulk**
> GetImagesBulk200Response get_images_bulk(ids)

**Synchronous variant:** `get_images_bulk_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve lightweight metadata for multiple image IDs

Resolve lightweight visible metadata for a bounded set of image identifiers in one request. Missing or inaccessible identifiers are reported according to the documented response envelope.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.get_images_bulk200_response import GetImagesBulk200Response
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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    ids = 'example-ids' # str | Comma-separated image ids, for example `12,44,99`.

    try:
        # Retrieve lightweight metadata for multiple image IDs
        api_response = await api_instance.get_images_bulk(ids)
        print("The response of ImagesApi->get_images_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->get_images_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **str**| Comma-separated image ids, for example &#x60;12,44,99&#x60;. |

### Return type

[**GetImagesBulk200Response**](GetImagesBulk200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ordered image metadata entries. |  * X-Request-ID -  <br>  |
**400** | No valid ids were provided. |  * X-Request-ID -  <br>  |
**404** | One or more requested images were not found or are inaccessible. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_image_external_resources**
> ListImageExternalResources200Response list_image_external_resources(id)

**Synchronous variant:** `list_image_external_resources_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Resolve resources associated with an image

Resolve public local and external model resources associated with one visible image. Private dependency and management metadata remains restricted to authorized owners and staff.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.list_image_external_resources200_response import ListImageExternalResources200Response
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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | ID of the image.

    try:
        # Resolve resources associated with an image
        api_response = await api_instance.list_image_external_resources(id)
        print("The response of ImagesApi->list_image_external_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->list_image_external_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the image. |

### Return type

[**ListImageExternalResources200Response**](ListImageExternalResources200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource matches returned. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Image not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_image_style_matches**
> ListImageStyleMatches200Response list_image_style_matches(id, limit=limit, backend=backend)

**Synchronous variant:** `list_image_style_matches_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve style-similar images for a given image.

Return style-similar visible images and similarity metadata for one source image. A temporary 503 indicates that the similarity index is unavailable and is safe to retry with backoff.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.list_image_style_matches200_response import ListImageStyleMatches200Response
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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | ID of the reference image.
    limit = 8 # int | Number of matches to return. (optional) (default to 8)
    backend = 'example-backend' # str | Optional style matcher backend override. (optional)

    try:
        # Retrieve style-similar images for a given image.
        api_response = await api_instance.list_image_style_matches(id, limit=limit, backend=backend)
        print("The response of ImagesApi->list_image_style_matches:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->list_image_style_matches: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the reference image. |
 **limit** | **int**| Number of matches to return. | [optional] [default to 8]
 **backend** | **str**| Optional style matcher backend override. | [optional]

### Return type

[**ListImageStyleMatches200Response**](ListImageStyleMatches200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hydrated style matches and metadata. |  * X-Request-ID -  <br>  |
**400** | Invalid image or file path. |  * X-Request-ID -  <br>  |
**404** | Image not found or not visible to the caller. |  * X-Request-ID -  <br>  |
**429** | Style matcher is temporarily saturated. Retry-After indicates when to retry. |  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | Style matcher unavailable. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_related_images**
> List[Image] list_related_images(id)

**Synchronous variant:** `list_related_images_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve images related to a given image

List images related to one visible source image while applying publication, ownership, rating, and adult-content rules for the current caller to every returned record.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.image import Image
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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    id = 1 # int | ID of the reference image.

    try:
        # Retrieve images related to a given image
        api_response = await api_instance.list_related_images(id)
        print("The response of ImagesApi->list_related_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->list_related_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the reference image. |

### Return type

[**List[Image]**](Image.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related images. |  * X-Request-ID -  <br>  |
**404** | Image not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_images**
> SearchImages200Response search_images(search=search, sort=sort, page=page, limit=limit, ratings=ratings, user_id=user_id, self_reacted=self_reacted, self_following=self_following, cursor=cursor)

**Synchronous variant:** `search_images_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Search images with pagination and filtering

Search visible images with pagination, rating, tag, model, and ownership filters. Anonymous and third-party callers receive only media permitted by publication and adult-content policies.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.search_images200_response import SearchImages200Response
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
    api_instance = arcenciel.generated.ImagesApi(api_client)
    search = 'landscape' # str | Search query applied to title, description, prompt, and tags (comma-separated terms supported). (optional)
    sort = 'newest' # str | Sort order for images (hot = recent images sorted by reactions). (optional)
    page = 1 # int | Page number. (optional) (default to 1)
    limit = 12 # int | Number of images per page (max 1000). (optional) (default to 12)
    ratings = 'example-ratings' # str | Comma-separated list of ratings to include (safe, questionable, sensitive, explicit). (optional)
    user_id = 1 # int | Filter images by uploader id. (optional)
    self_reacted = 'example-self-reacted' # str | Auth only. Filter images reacted to by the current user (optionally specify a reaction type). (optional)
    self_following = true # bool | Auth only. Return images uploaded by users the current user follows. (optional)
    cursor = 'next-page' # str | Cursor for keyset pagination (use nextCursor from a previous response; only supported for newest/oldest). (optional)

    try:
        # Search images with pagination and filtering
        api_response = await api_instance.search_images(search=search, sort=sort, page=page, limit=limit, ratings=ratings, user_id=user_id, self_reacted=self_reacted, self_following=self_following, cursor=cursor)
        print("The response of ImagesApi->search_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->search_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Search query applied to title, description, prompt, and tags (comma-separated terms supported). | [optional]
 **sort** | **str**| Sort order for images (hot &#x3D; recent images sorted by reactions). | [optional]
 **page** | **int**| Page number. | [optional] [default to 1]
 **limit** | **int**| Number of images per page (max 1000). | [optional] [default to 12]
 **ratings** | **str**| Comma-separated list of ratings to include (safe, questionable, sensitive, explicit). | [optional]
 **user_id** | **int**| Filter images by uploader id. | [optional]
 **self_reacted** | **str**| Auth only. Filter images reacted to by the current user (optionally specify a reaction type). | [optional]
 **self_following** | **bool**| Auth only. Return images uploaded by users the current user follows. | [optional]
 **cursor** | **str**| Cursor for keyset pagination (use nextCursor from a previous response; only supported for newest/oldest). | [optional]

### Return type

[**SearchImages200Response**](SearchImages200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of images. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
