# arcenciel.generated.ModelsApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_model**](ModelsApi.md#get_model) | **GET** /api/models/{id} | Retrieve model details by ID
[**get_model_description_image**](ModelsApi.md#get_model_description_image) | **GET** /api/models/{id}/description-images/{imageId} | Retrieve a model description image
[**get_model_version**](ModelsApi.md#get_model_version) | **GET** /api/models/{modelId}/versions/{versionId} | Retrieve details of a specific model version
[**get_model_version_resources**](ModelsApi.md#get_model_version_resources) | **GET** /api/models/{modelId}/versions/{versionId}/resources | Retrieve detected and manually curated version resource dependencies
[**get_model_version_training_metadata**](ModelsApi.md#get_model_version_training_metadata) | **GET** /api/models/{modelId}/versions/{versionId}/training-metadata-raw | Retrieve raw safetensors __metadata__ for a specific model version
[**list_model_classes**](ModelsApi.md#list_model_classes) | **GET** /api/models/classes | List available model classes
[**list_model_gallery_images**](ModelsApi.md#list_model_gallery_images) | **GET** /api/models/{id}/gallery | Retrieve gallery images associated with a model
[**list_model_version_media_previews**](ModelsApi.md#list_model_version_media_previews) | **GET** /api/models/{modelId}/versions/media-preview | Retrieve lightweight carousel media previews for specific model versions
[**list_model_versions**](ModelsApi.md#list_model_versions) | **GET** /api/models/{modelId}/versions | List all versions of a model
[**search_models**](ModelsApi.md#search_models) | **GET** /api/models/search | Search models with filtering and pagination


# **get_model**
> Model get_model(id)

**Synchronous variant:** `get_model_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve model details by ID

Return one visible model and its accessible version metadata. Anonymous callers receive only public content; owners and staff may receive additional private fields.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model import Model
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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    id = 1 # int | Unique identifier of the model.

    try:
        # Retrieve model details by ID
        api_response = await api_instance.get_model(id)
        print("The response of ModelsApi->get_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->get_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the model. |

### Return type

[**Model**](Model.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model details retrieved successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_model_description_image**
> bytes get_model_description_image(id, image_id)

**Synchronous variant:** `get_model_description_image_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve a model description image

Transfer one description image belonging to a visible model after applying model and image visibility rules. Clients must use the returned Content-Type instead of assuming a file format.

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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    id = 1 # int | Id provided in the path.
    image_id = 1 # int | Image Id provided in the path.

    try:
        # Retrieve a model description image
        api_response = await api_instance.get_model_description_image(id, image_id)
        print("The response of ModelsApi->get_model_description_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->get_model_description_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id provided in the path. |
 **image_id** | **int**| Image Id provided in the path. |

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
**200** | Model description image file. |  * X-Request-ID -  <br>  |
**400** | Invalid model or image id. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Image not found or not visible to the viewer. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_model_version**
> Version get_model_version(model_id, version_id)

**Synchronous variant:** `get_model_version_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve details of a specific model version

Return one accessible model version, including hashes, file-safety state, activation tags, and public training metadata when those values are available.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.version import Version
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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    version_id = 1 # int | Version Id provided in the path.

    try:
        # Retrieve details of a specific model version
        api_response = await api_instance.get_model_version(model_id, version_id)
        print("The response of ModelsApi->get_model_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->get_model_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |

### Return type

[**Version**](Version.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Version details retrieved successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_model_version_resources**
> ModelVersionResourceGraphResponse get_model_version_resources(model_id, version_id)

**Synchronous variant:** `get_model_version_resources_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve detected and manually curated version resource dependencies

Return detected and curated local or external dependencies for one visible model version. Hidden edges and management metadata are included only for authorized owners and staff.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_version_resource_graph_response import ModelVersionResourceGraphResponse
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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    version_id = 1 # int | Version Id provided in the path.

    try:
        # Retrieve detected and manually curated version resource dependencies
        api_response = await api_instance.get_model_version_resources(model_id, version_id)
        print("The response of ModelsApi->get_model_version_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->get_model_version_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |

### Return type

[**ModelVersionResourceGraphResponse**](ModelVersionResourceGraphResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource graph grouped by dependency kind. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_model_version_training_metadata**
> GetModelVersionTrainingMetadata200Response get_model_version_training_metadata(model_id, version_id)

**Synchronous variant:** `get_model_version_training_metadata_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve raw safetensors __metadata__ for a specific model version

Return the public raw safetensors metadata extracted for one visible model version. File paths, secrets, and other protected training values remain redacted by the runtime policy.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.get_model_version_training_metadata200_response import GetModelVersionTrainingMetadata200Response
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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    version_id = 1 # int | Version Id provided in the path.

    try:
        # Retrieve raw safetensors __metadata__ for a specific model version
        api_response = await api_instance.get_model_version_training_metadata(model_id, version_id)
        print("The response of ModelsApi->get_model_version_training_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->get_model_version_training_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |

### Return type

[**GetModelVersionTrainingMetadata200Response**](GetModelVersionTrainingMetadata200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Raw training metadata payload. |  * X-Request-ID -  <br>  |
**400** | Invalid model/version id or relationship mismatch. |  * X-Request-ID -  <br>  |
**404** | Version not found or inaccessible. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_model_classes**
> ListModelClasses200Response list_model_classes()

**Synchronous variant:** `list_model_classes_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List available model classes

List the model classes currently available for catalogue filtering and model metadata so integrations can discover supported values instead of hard-coding them.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.list_model_classes200_response import ListModelClasses200Response
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
    api_instance = arcenciel.generated.ModelsApi(api_client)

    try:
        # List available model classes
        api_response = await api_instance.list_model_classes()
        print("The response of ModelsApi->list_model_classes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->list_model_classes: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListModelClasses200Response**](ListModelClasses200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model classes |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_model_gallery_images**
> ModelGalleryResponse list_model_gallery_images(id, version_id=version_id, page=page, limit=limit)

**Synchronous variant:** `list_model_gallery_images_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve gallery images associated with a model

List gallery images associated with one visible model, optionally filtered to a specific model version. Anonymous callers receive only content they may access.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_gallery_response import ModelGalleryResponse
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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    id = 1 # int | Unique identifier of the model.
    version_id = 1 # int | Optionally filter gallery images to a specific model version. (optional)
    page = 1 # int | One-based result page. Pinned images are returned only on the first page. (optional) (default to 1)
    limit = 20 # int | Maximum number of mixed image and video entries per page. (optional) (default to 20)

    try:
        # Retrieve gallery images associated with a model
        api_response = await api_instance.list_model_gallery_images(id, version_id=version_id, page=page, limit=limit)
        print("The response of ModelsApi->list_model_gallery_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->list_model_gallery_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the model. |
 **version_id** | **int**| Optionally filter gallery images to a specific model version. | [optional]
 **page** | **int**| One-based result page. Pinned images are returned only on the first page. | [optional] [default to 1]
 **limit** | **int**| Maximum number of mixed image and video entries per page. | [optional] [default to 20]

### Return type

[**ModelGalleryResponse**](ModelGalleryResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of image and video entries associated with the model. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_model_version_media_previews**
> ModelVersionMediaPreviewResponse list_model_version_media_previews(model_id, version_ids=version_ids, limit=limit)

**Synchronous variant:** `list_model_version_media_previews_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve lightweight carousel media previews for specific model versions

List lightweight visible image and video previews grouped by selected model versions. Scheduled content is sanitized for non-owners and inaccessible media is excluded from the response.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_version_media_preview_response import ModelVersionMediaPreviewResponse
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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    model_id = 1 # int | Unique identifier of the model.
    version_ids = 'example-version-ids' # str | Comma-separated list of version IDs to fetch previews for. Defaults to all visible versions. (optional)
    limit = 6 # int | Maximum number of preview entries per version. (optional) (default to 6)

    try:
        # Retrieve lightweight carousel media previews for specific model versions
        api_response = await api_instance.list_model_version_media_previews(model_id, version_ids=version_ids, limit=limit)
        print("The response of ModelsApi->list_model_version_media_previews:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->list_model_version_media_previews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Unique identifier of the model. |
 **version_ids** | **str**| Comma-separated list of version IDs to fetch previews for. Defaults to all visible versions. | [optional]
 **limit** | **int**| Maximum number of preview entries per version. | [optional] [default to 6]

### Return type

[**ModelVersionMediaPreviewResponse**](ModelVersionMediaPreviewResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Preview entries grouped by version. |  * X-Request-ID -  <br>  |
**400** | Invalid model id or parameters. |  * X-Request-ID -  <br>  |
**404** | Model not found or inaccessible. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_model_versions**
> ModelVersionListResponse list_model_versions(model_id)

**Synchronous variant:** `list_model_versions_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List all versions of a model

List the versions visible to the caller for one model, including release metadata, file-safety state, hashes, activation tags, and public training metadata when available.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_version_list_response import ModelVersionListResponse
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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    model_id = 1 # int | ID of the model.

    try:
        # List all versions of a model
        api_response = await api_instance.list_model_versions(model_id)
        print("The response of ModelsApi->list_model_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->list_model_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| ID of the model. |

### Return type

[**ModelVersionListResponse**](ModelVersionListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Visible version objects wrapped in the stable versions property. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_models**
> SearchModels200Response search_models(search=search, sort=sort, page=page, limit=limit, hash_only=hash_only, base_model=base_model, model_type=model_type, user_id=user_id, status=status, compact=compact, version_limit=version_limit, include_description=include_description, include_tags=include_tags, include_author_wishes=include_author_wishes, self_favorited=self_favorited, self_following=self_following, self_downloaded=self_downloaded, self_not_downloaded=self_not_downloaded)

**Synchronous variant:** `search_models_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Search models with filtering and pagination

Search the public model catalogue with pagination and optional filters. Authentication is optional; account-specific self filters require a valid user session or API key.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.search_models200_response import SearchModels200Response
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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    search = 'landscape' # str | Search query applied to model title, description, and tags (supports (optional)
    sort = 'newest' # str | Sort order for models (hot = recent models sorted by downloads). (optional)
    page = 1 # int | Page number. (optional) (default to 1)
    limit = 20 # int | Number of models per page (max 1000). (optional) (default to 20)
    hash_only = False # bool | If present, the search will be treated as a partial model hash. (optional) (default to False)
    base_model = 'example-base-model' # str | Filter models by base model. (optional)
    model_type = 'example-model-type' # str | Filter models by model type (e.g. LORA, CHECKPOINT, etc.). (optional)
    user_id = 1 # int | Filter models by uploader id. (optional)
    status = 'all' # str | Filter by publication status (published = available). (optional)
    compact = False # bool | Return a lightweight response for template pickers/autocomplete UIs (still respects visibility rules). Compact responses omit download metadata such as hashes, file names, and external download URLs; fetch model or version details before downloading. (optional) (default to False)
    version_limit = 1 # int | Compact only. Max versions returned per model (1-50). (optional) (default to 1)
    include_description = False # bool | Compact only. Include model.description in results. (optional) (default to False)
    include_tags = False # bool | Compact only. Include model.tags in results. (optional) (default to False)
    include_author_wishes = False # bool | Compact only. Include model.authorWishes in results. (optional) (default to False)
    self_favorited = true # bool | Auth only. Return models favorited by the current user. (optional)
    self_following = true # bool | Auth only. Return models uploaded by users the current user follows. (optional)
    self_downloaded = true # bool | Auth only. Return models downloaded by the current user. (optional)
    self_not_downloaded = true # bool | Auth only. Return models not yet downloaded by the current user. (optional)

    try:
        # Search models with filtering and pagination
        api_response = await api_instance.search_models(search=search, sort=sort, page=page, limit=limit, hash_only=hash_only, base_model=base_model, model_type=model_type, user_id=user_id, status=status, compact=compact, version_limit=version_limit, include_description=include_description, include_tags=include_tags, include_author_wishes=include_author_wishes, self_favorited=self_favorited, self_following=self_following, self_downloaded=self_downloaded, self_not_downloaded=self_not_downloaded)
        print("The response of ModelsApi->search_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->search_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Search query applied to model title, description, and tags (supports | [optional]
 **sort** | **str**| Sort order for models (hot &#x3D; recent models sorted by downloads). | [optional]
 **page** | **int**| Page number. | [optional] [default to 1]
 **limit** | **int**| Number of models per page (max 1000). | [optional] [default to 20]
 **hash_only** | **bool**| If present, the search will be treated as a partial model hash. | [optional] [default to False]
 **base_model** | **str**| Filter models by base model. | [optional]
 **model_type** | **str**| Filter models by model type (e.g. LORA, CHECKPOINT, etc.). | [optional]
 **user_id** | **int**| Filter models by uploader id. | [optional]
 **status** | **str**| Filter by publication status (published &#x3D; available). | [optional]
 **compact** | **bool**| Return a lightweight response for template pickers/autocomplete UIs (still respects visibility rules). Compact responses omit download metadata such as hashes, file names, and external download URLs; fetch model or version details before downloading. | [optional] [default to False]
 **version_limit** | **int**| Compact only. Max versions returned per model (1-50). | [optional] [default to 1]
 **include_description** | **bool**| Compact only. Include model.description in results. | [optional] [default to False]
 **include_tags** | **bool**| Compact only. Include model.tags in results. | [optional] [default to False]
 **include_author_wishes** | **bool**| Compact only. Include model.authorWishes in results. | [optional] [default to False]
 **self_favorited** | **bool**| Auth only. Return models favorited by the current user. | [optional]
 **self_following** | **bool**| Auth only. Return models uploaded by users the current user follows. | [optional]
 **self_downloaded** | **bool**| Auth only. Return models downloaded by the current user. | [optional]
 **self_not_downloaded** | **bool**| Auth only. Return models not yet downloaded by the current user. | [optional]

### Return type

[**SearchModels200Response**](SearchModels200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of models. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
