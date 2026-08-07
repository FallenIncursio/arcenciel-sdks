# arcenciel.generated.ModelsApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attach_model_version_discord_images**](ModelsApi.md#attach_model_version_discord_images) | **POST** /api/models/{modelId}/versions/{versionId}/images/attach | Attach Discord-uploaded images to a model version
[**cancel_model_version_upload**](ModelsApi.md#cancel_model_version_upload) | **DELETE** /api/model-version-uploads/{uploadId} | Cancel a chunked upload session
[**complete_model_version_upload**](ModelsApi.md#complete_model_version_upload) | **POST** /api/model-version-uploads/{uploadId}/complete | Complete a chunked model version upload
[**create_model**](ModelsApi.md#create_model) | **POST** /api/models | Create a new model draft
[**create_model_version**](ModelsApi.md#create_model_version) | **POST** /api/models/{modelId}/versions | Add a new version to an existing model
[**create_model_version_upload**](ModelsApi.md#create_model_version_upload) | **POST** /api/model-version-uploads | Start a chunked model version upload
[**delete_model**](ModelsApi.md#delete_model) | **DELETE** /api/models/{id} | Delete a model
[**delete_model_version**](ModelsApi.md#delete_model_version) | **DELETE** /api/models/{modelId}/versions/{versionId} | Delete a model version (soft-delete)
[**get_model**](ModelsApi.md#get_model) | **GET** /api/models/{id} | Retrieve model details by ID
[**get_model_description_image**](ModelsApi.md#get_model_description_image) | **GET** /api/models/{id}/description-images/{imageId} | Retrieve a model description image
[**get_model_version**](ModelsApi.md#get_model_version) | **GET** /api/models/{modelId}/versions/{versionId} | Retrieve details of a specific model version
[**get_model_version_resources**](ModelsApi.md#get_model_version_resources) | **GET** /api/models/{modelId}/versions/{versionId}/resources | Retrieve detected and manually curated version resource dependencies
[**get_model_version_training_metadata**](ModelsApi.md#get_model_version_training_metadata) | **GET** /api/models/{modelId}/versions/{versionId}/training-metadata-raw | Retrieve raw safetensors __metadata__ for a specific model version
[**get_model_version_upload**](ModelsApi.md#get_model_version_upload) | **GET** /api/model-version-uploads/{uploadId} | Get chunked upload session status
[**list_model_classes**](ModelsApi.md#list_model_classes) | **GET** /api/models/classes | List available model classes
[**list_model_gallery_images**](ModelsApi.md#list_model_gallery_images) | **GET** /api/models/{id}/gallery | Retrieve gallery images associated with a model
[**list_model_version_discord_image_candidates**](ModelsApi.md#list_model_version_discord_image_candidates) | **GET** /api/models/{modelId}/versions/{versionId}/images/discord-candidates | List Discord-uploaded images that can be attached to a model version
[**list_model_version_media_previews**](ModelsApi.md#list_model_version_media_previews) | **GET** /api/models/{modelId}/versions/media-preview | Retrieve lightweight carousel media previews for specific model versions
[**list_model_version_resource_candidates**](ModelsApi.md#list_model_version_resource_candidates) | **GET** /api/models/{modelId}/versions/{versionId}/resources/candidates | Search local versions that can be added as manual resources
[**list_model_versions**](ModelsApi.md#list_model_versions) | **GET** /api/models/{modelId}/versions | List all versions of a model
[**publish_model_version**](ModelsApi.md#publish_model_version) | **POST** /api/models/{modelId}/versions/{versionId}/publish | Publish a model version immediately
[**reorder_model_version_images**](ModelsApi.md#reorder_model_version_images) | **PATCH** /api/models/{modelId}/versions/{versionId}/images | Reorder images for a specific model version
[**reorder_model_version_videos**](ModelsApi.md#reorder_model_version_videos) | **PATCH** /api/models/{modelId}/versions/{versionId}/videos | Reorder videos for a specific model version
[**reorder_model_versions**](ModelsApi.md#reorder_model_versions) | **PATCH** /api/models/{modelId}/versions | Reorder multiple versions of a model
[**replace_model_version_resources**](ModelsApi.md#replace_model_version_resources) | **PUT** /api/models/{modelId}/versions/{versionId}/resources/manual | Add or replace manually curated version resource dependencies
[**schedule_model_version**](ModelsApi.md#schedule_model_version) | **POST** /api/models/{modelId}/versions/{versionId}/schedule | Schedule publishing of a model version
[**search_models**](ModelsApi.md#search_models) | **GET** /api/models/search | Search models with filtering and pagination
[**set_model_showcase**](ModelsApi.md#set_model_showcase) | **PATCH** /api/models/{id}/showcased | Showcase or unshowcase a model
[**set_model_version_community_media**](ModelsApi.md#set_model_version_community_media) | **PATCH** /api/models/{modelId}/versions/{versionId}/community-media | Add or remove community media for a model version
[**update_model**](ModelsApi.md#update_model) | **PATCH** /api/models/{id} | Edit an existing model
[**update_model_version**](ModelsApi.md#update_model_version) | **PATCH** /api/models/{modelId}/versions/{versionId} | Edit an existing model version
[**update_model_version_resource**](ModelsApi.md#update_model_version_resource) | **PATCH** /api/models/{modelId}/versions/{versionId}/resources/{edgeId} | Update a resource dependency edge
[**upload_model_description_images**](ModelsApi.md#upload_model_description_images) | **POST** /api/models/{id}/description-images | Upload images for a model description
[**upload_model_version_chunk**](ModelsApi.md#upload_model_version_chunk) | **PUT** /api/model-version-uploads/{uploadId}/chunks/{index} | Upload one model version file chunk
[**upload_model_version_images**](ModelsApi.md#upload_model_version_images) | **POST** /api/models/{modelId}/versions/{versionId}/images | Upload one or more images for a specific model version
[**upload_model_version_videos**](ModelsApi.md#upload_model_version_videos) | **POST** /api/models/{modelId}/versions/{versionId}/videos | Upload one or more videos for a specific model version


# **attach_model_version_discord_images**
> DeveloperAttachedImagesResponse attach_model_version_discord_images(model_id, version_id, attach_model_version_discord_images_request)

**Synchronous variant:** `attach_model_version_discord_images_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Attach Discord-uploaded images to a model version

Attach selected hash-matched Discord images to a model version while returning already attached identifiers separately. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.attach_model_version_discord_images_request import AttachModelVersionDiscordImagesRequest
from arcenciel.generated.models.developer_attached_images_response import DeveloperAttachedImagesResponse
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
    attach_model_version_discord_images_request = {"imageIds":[1]} # AttachModelVersionDiscordImagesRequest | Request payload for this operation.

    try:
        # Attach Discord-uploaded images to a model version
        api_response = await api_instance.attach_model_version_discord_images(model_id, version_id, attach_model_version_discord_images_request)
        print("The response of ModelsApi->attach_model_version_discord_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->attach_model_version_discord_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **attach_model_version_discord_images_request** | [**AttachModelVersionDiscordImagesRequest**](AttachModelVersionDiscordImagesRequest.md)| Request payload for this operation. |

### Return type

[**DeveloperAttachedImagesResponse**](DeveloperAttachedImagesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Images attached successfully. |  * X-Request-ID -  <br>  |
**400** | Invalid image ids. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_model_version_upload**
> ModelVersionChunkUploadSession cancel_model_version_upload(upload_id)

**Synchronous variant:** `cancel_model_version_upload_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Cancel a chunked upload session

Cancel the caller’s resumable model-version upload session and discard its staged chunks before completion. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_version_chunk_upload_session import ModelVersionChunkUploadSession
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
    upload_id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Upload-session identifier returned by the create operation.

    try:
        # Cancel a chunked upload session
        api_response = await api_instance.cancel_model_version_upload(upload_id)
        print("The response of ModelsApi->cancel_model_version_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->cancel_model_version_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **UUID**| Upload-session identifier returned by the create operation. |

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upload session cancelled. |  * X-Request-ID -  <br>  |
**401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
**403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
**404** | The upload session does not exist or has been cleaned up after expiry. A chunk PUT is rejected before its body is read. |  * X-Request-ID -  <br>  |
**409** | The upload session is already completed. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **complete_model_version_upload**
> ModelVersionChunkUploadSession complete_model_version_upload(upload_id)

**Synchronous variant:** `complete_model_version_upload_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Complete a chunked model version upload

Finalize a complete resumable upload session or return its asynchronous processing state without creating a second version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_version_chunk_upload_session import ModelVersionChunkUploadSession
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
    upload_id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Upload-session identifier returned by the create operation.

    try:
        # Complete a chunked model version upload
        api_response = await api_instance.complete_model_version_upload(upload_id)
        print("The response of ModelsApi->complete_model_version_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->complete_model_version_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **UUID**| Upload-session identifier returned by the create operation. |

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upload was already completed. |  * X-Request-ID -  <br>  |
**202** | All chunks were accepted and version creation is processing. |  * X-Request-ID -  <br>  |
**400** | At least one expected chunk is missing or assembled bytes do not match &#x60;fileSize&#x60;. |  * X-Request-ID -  <br>  |
**401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
**403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
**404** | The upload session does not exist or has been cleaned up after expiry. A chunk PUT is rejected before its body is read. |  * X-Request-ID -  <br>  |
**410** | The upload session was cancelled and can no longer receive chunks or be completed. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_model**
> DeveloperModelCreatedResponse create_model(idempotency_key=idempotency_key, author_wishes=author_wishes, description=description, tags=tags, title=title, type=type)

**Synchronous variant:** `create_model_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create a new model draft

Create an empty caller-owned model container with validated type, title, description, tags, and author wishes. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_model_created_response import DeveloperModelCreatedResponse
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
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    author_wishes = 'author_wishes_example' # str | JSON array of author wishes. (optional)
    description = 'description_example' # str | Sanitized rich HTML model description. Legacy Markdown or mixed Civitai-style HTML is accepted for compatibility and rendered by the rich-content pipeline. (optional)
    tags = 'tags_example' # str | Comma-separated list of tags. (optional)
    title = 'title_example' # str | Title accepted or returned by this contract. (optional)
    type = 'type_example' # str | The model type (e.g., LORA, CHECKPOINT). (optional)

    try:
        # Create a new model draft
        api_response = await api_instance.create_model(idempotency_key=idempotency_key, author_wishes=author_wishes, description=description, tags=tags, title=title, type=type)
        print("The response of ModelsApi->create_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->create_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **author_wishes** | **str**| JSON array of author wishes. | [optional]
 **description** | **str**| Sanitized rich HTML model description. Legacy Markdown or mixed Civitai-style HTML is accepted for compatibility and rendered by the rich-content pipeline. | [optional]
 **tags** | **str**| Comma-separated list of tags. | [optional]
 **title** | **str**| Title accepted or returned by this contract. | [optional]
 **type** | **str**| The model type (e.g., LORA, CHECKPOINT). | [optional]

### Return type

[**DeveloperModelCreatedResponse**](DeveloperModelCreatedResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Model created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Bad request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_model_version**
> DeveloperVersionCreatedResponse create_model_version(model_id, idempotency_key=idempotency_key, about_this_version=about_this_version, activation_tags=activation_tags, base_model=base_model, huggingface_link=huggingface_link, supporter_early_access_enabled=supporter_early_access_enabled, version_file=version_file, version_name=version_name)

**Synchronous variant:** `create_model_version_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Add a new version to an existing model

Create a model version from one hosted file or one validated external source, including hashes, scan state, and release metadata. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_version_created_response import DeveloperVersionCreatedResponse
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
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    about_this_version = 'about_this_version_example' # str | About This Version accepted or returned by this contract. (optional)
    activation_tags = 'activation_tags_example' # str | Activation Tags accepted or returned by this contract. (optional)
    base_model = 'base_model_example' # str | Base Model accepted or returned by this contract. (optional)
    huggingface_link = 'huggingface_link_example' # str | URL to a HuggingFace model file. Either versionFile or huggingfaceLink must be provided. Allowed by default: .safetensors, .pt. For models of type OTHER, archive extensions are also allowed. (optional)
    supporter_early_access_enabled = True # bool | Creator opt-out for the 72-hour supporter early-access window. External sources are always excluded. (optional) (default to True)
    version_file = None # bytes | The file for the model version. Allowed by default: .safetensors, .pt. For models of type OTHER, archives are also allowed (.zip, .7z, .rar, .tar, .tar.gz, .tar.xz, .tar.bz2, .gz, .xz, .bz2). (optional)
    version_name = 'version_name_example' # str | Version Name accepted or returned by this contract. (optional)

    try:
        # Add a new version to an existing model
        api_response = await api_instance.create_model_version(model_id, idempotency_key=idempotency_key, about_this_version=about_this_version, activation_tags=activation_tags, base_model=base_model, huggingface_link=huggingface_link, supporter_early_access_enabled=supporter_early_access_enabled, version_file=version_file, version_name=version_name)
        print("The response of ModelsApi->create_model_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->create_model_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| ID of the model. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **about_this_version** | **str**| About This Version accepted or returned by this contract. | [optional]
 **activation_tags** | **str**| Activation Tags accepted or returned by this contract. | [optional]
 **base_model** | **str**| Base Model accepted or returned by this contract. | [optional]
 **huggingface_link** | **str**| URL to a HuggingFace model file. Either versionFile or huggingfaceLink must be provided. Allowed by default: .safetensors, .pt. For models of type OTHER, archive extensions are also allowed. | [optional]
 **supporter_early_access_enabled** | **bool**| Creator opt-out for the 72-hour supporter early-access window. External sources are always excluded. | [optional] [default to True]
 **version_file** | **bytes**| The file for the model version. Allowed by default: .safetensors, .pt. For models of type OTHER, archives are also allowed (.zip, .7z, .rar, .tar, .tar.gz, .tar.xz, .tar.bz2, .gz, .xz, .bz2). | [optional]
 **version_name** | **str**| Version Name accepted or returned by this contract. | [optional]

### Return type

[**DeveloperVersionCreatedResponse**](DeveloperVersionCreatedResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | New version created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Bad request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_model_version_upload**
> ModelVersionChunkUploadSession create_model_version_upload(create_model_version_chunk_upload_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_model_version_upload_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Start a chunked model version upload

Create a 24-hour resumable upload session and negotiate chunk sizing for one new hosted model version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_model_version_chunk_upload_request import CreateModelVersionChunkUploadRequest
from arcenciel.generated.models.model_version_chunk_upload_session import ModelVersionChunkUploadSession
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
    create_model_version_chunk_upload_request = {"aboutThisVersion":"Improved natural-light rendering.","activationTags":"landscape, natural light","baseModel":"SDXL 1.0","chunkSize":8388608,"fileName":"landscape-v2.safetensors","fileSize":16777216,"modelId":42,"supporterEarlyAccessEnabled":true,"versionName":"Landscape v2"} # CreateModelVersionChunkUploadRequest | Request payload for this operation.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Start a chunked model version upload
        api_response = await api_instance.create_model_version_upload(create_model_version_chunk_upload_request, idempotency_key=idempotency_key)
        print("The response of ModelsApi->create_model_version_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->create_model_version_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_model_version_chunk_upload_request** | [**CreateModelVersionChunkUploadRequest**](CreateModelVersionChunkUploadRequest.md)| Request payload for this operation. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Upload session created. Use the returned &#x60;chunkSize&#x60;, &#x60;totalChunks&#x60;, and &#x60;uploadId&#x60;. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Request fields are invalid or the negotiated split would exceed the maximum chunk count. |  * X-Request-ID -  <br>  |
**401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
**403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | Per-user quota exceeded. At most 3 active sessions and 1610612736 pending bytes are allowed. Cancel abandoned sessions before retrying. |  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_model**
> DeveloperMessageResponse delete_model(id)

**Synchronous variant:** `delete_model_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete a model

Delete an empty caller-managed model after verifying it has no remaining versions or protected relationships. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    id = 1 # int | Unique identifier of the model.

    try:
        # Delete a model
        api_response = await api_instance.delete_model(id)
        print("The response of ModelsApi->delete_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->delete_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the model. |

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
**200** | Model deleted successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the model owner or admin). |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_model_version**
> DeveloperMessageResponse delete_model_version(model_id, version_id)

**Synchronous variant:** `delete_model_version_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete a model version (soft-delete)

Delete one caller-managed model version and automatically remove the model only when it was the final version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    version_id = 1 # int | Version Id provided in the path.

    try:
        # Delete a model version (soft-delete)
        api_response = await api_instance.delete_model_version(model_id, version_id)
        print("The response of ModelsApi->delete_model_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->delete_model_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |

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
**200** | Version removed successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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

# **get_model_version_upload**
> ModelVersionChunkUploadSession get_model_version_upload(upload_id)

**Synchronous variant:** `get_model_version_upload_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get chunked upload session status

Inspect the authenticated caller’s resumable model-version upload session, negotiated chunk size, progress, expiry, and completion state. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_version_chunk_upload_session import ModelVersionChunkUploadSession
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
    upload_id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Upload-session identifier returned by the create operation.

    try:
        # Get chunked upload session status
        api_response = await api_instance.get_model_version_upload(upload_id)
        print("The response of ModelsApi->get_model_version_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->get_model_version_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **UUID**| Upload-session identifier returned by the create operation. |

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current upload session status. |  * X-Request-ID -  <br>  |
**401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
**403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
**404** | The upload session does not exist or has been cleaned up after expiry. A chunk PUT is rejected before its body is read. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

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

# **list_model_version_discord_image_candidates**
> DeveloperDiscordImageCandidatesResponse list_model_version_discord_image_candidates(model_id, version_id)

**Synchronous variant:** `list_model_version_discord_image_candidates_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List Discord-uploaded images that can be attached to a model version

List caller-owned Discord uploads whose resource hashes match a model version and indicate which images can be attached without duplication. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_discord_image_candidates_response import DeveloperDiscordImageCandidatesResponse
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
        # List Discord-uploaded images that can be attached to a model version
        api_response = await api_instance.list_model_version_discord_image_candidates(model_id, version_id)
        print("The response of ModelsApi->list_model_version_discord_image_candidates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->list_model_version_discord_image_candidates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |

### Return type

[**DeveloperDiscordImageCandidatesResponse**](DeveloperDiscordImageCandidatesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Candidate images returned successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

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

# **list_model_version_resource_candidates**
> DeveloperModelVersionResourceCandidatesResponse list_model_version_resource_candidates(model_id, version_id, q=q)

**Synchronous variant:** `list_model_version_resource_candidates_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Search local versions that can be added as manual resources

Search visible model versions that the caller may add to the managed dependency graph of the selected source version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_model_version_resource_candidates_response import DeveloperModelVersionResourceCandidatesResponse
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
    q = 'landscape' # str | Q provided in the query. (optional)

    try:
        # Search local versions that can be added as manual resources
        api_response = await api_instance.list_model_version_resource_candidates(model_id, version_id, q=q)
        print("The response of ModelsApi->list_model_version_resource_candidates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->list_model_version_resource_candidates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **q** | **str**| Q provided in the query. | [optional]

### Return type

[**DeveloperModelVersionResourceCandidatesResponse**](DeveloperModelVersionResourceCandidatesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Candidate version list. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

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

# **publish_model_version**
> DeveloperMessageResponse publish_model_version(model_id, version_id)

**Synchronous variant:** `publish_model_version_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Publish a model version immediately

Publish a caller-managed model version immediately after file-safety and lifecycle requirements have passed. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

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
    api_instance = arcenciel.generated.ModelsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    version_id = 1 # int | Version Id provided in the path.

    try:
        # Publish a model version immediately
        api_response = await api_instance.publish_model_version(model_id, version_id)
        print("The response of ModelsApi->publish_model_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->publish_model_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |

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
**200** | Version published and followers notified. |  * X-Request-ID -  <br>  |
**400** | Version already published or invalid request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Not allowed to publish this version. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reorder_model_version_images**
> DeveloperMessageResponse reorder_model_version_images(model_id, version_id, reorder_model_version_images_request)

**Synchronous variant:** `reorder_model_version_images_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reorder images for a specific model version

Replace the sample-image order for a model version after validating the complete set of attached image identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.reorder_model_version_images_request import ReorderModelVersionImagesRequest
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
    reorder_model_version_images_request = {"imageIds":[3,1,2]} # ReorderModelVersionImagesRequest | JSON object with new order of image IDs.

    try:
        # Reorder images for a specific model version
        api_response = await api_instance.reorder_model_version_images(model_id, version_id, reorder_model_version_images_request)
        print("The response of ModelsApi->reorder_model_version_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->reorder_model_version_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **reorder_model_version_images_request** | [**ReorderModelVersionImagesRequest**](ReorderModelVersionImagesRequest.md)| JSON object with new order of image IDs. |

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
**200** | Images reordered successfully. |  * X-Request-ID -  <br>  |
**400** | Invalid image IDs or order. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reorder_model_version_videos**
> DeveloperMessageResponse reorder_model_version_videos(model_id, version_id, reorder_model_version_videos_request)

**Synchronous variant:** `reorder_model_version_videos_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reorder videos for a specific model version

Replace the sample-video order for a model version after validating the complete set of attached video identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.reorder_model_version_videos_request import ReorderModelVersionVideosRequest
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
    reorder_model_version_videos_request = {"videoIds":[1]} # ReorderModelVersionVideosRequest | Request payload for this operation.

    try:
        # Reorder videos for a specific model version
        api_response = await api_instance.reorder_model_version_videos(model_id, version_id, reorder_model_version_videos_request)
        print("The response of ModelsApi->reorder_model_version_videos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->reorder_model_version_videos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **reorder_model_version_videos_request** | [**ReorderModelVersionVideosRequest**](ReorderModelVersionVideosRequest.md)| Request payload for this operation. |

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
**200** | Videos reordered successfully. |  * X-Request-ID -  <br>  |
**400** | Invalid video IDs or order. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reorder_model_versions**
> DeveloperMessageResponse reorder_model_versions(model_id, reorder_model_versions_request)

**Synchronous variant:** `reorder_model_versions_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reorder multiple versions of a model

Replace a model’s version ordering with a validated list containing exactly its current version identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.reorder_model_versions_request import ReorderModelVersionsRequest
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
    model_id = 1 # int | ID of the model whose versions you want to reorder.
    reorder_model_versions_request = {"versionIds":[3,1,2]} # ReorderModelVersionsRequest | JSON object with the new order of version IDs.

    try:
        # Reorder multiple versions of a model
        api_response = await api_instance.reorder_model_versions(model_id, reorder_model_versions_request)
        print("The response of ModelsApi->reorder_model_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->reorder_model_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| ID of the model whose versions you want to reorder. |
 **reorder_model_versions_request** | [**ReorderModelVersionsRequest**](ReorderModelVersionsRequest.md)| JSON object with the new order of version IDs. |

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
**200** | Versions reordered successfully. |  * X-Request-ID -  <br>  |
**400** | Invalid version IDs or order. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_model_version_resources**
> ModelVersionResourceGraphResponse replace_model_version_resources(model_id, version_id, replace_model_version_resources_request)

**Synchronous variant:** `replace_model_version_resources_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Add or replace manually curated version resource dependencies

Upsert or replace the manually managed dependency edges for one caller-managed model version and return the complete graph. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_version_resource_graph_response import ModelVersionResourceGraphResponse
from arcenciel.generated.models.replace_model_version_resources_request import ReplaceModelVersionResourcesRequest
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
    replace_model_version_resources_request = {"replace":true,"resources":[{}]} # ReplaceModelVersionResourcesRequest | Request payload for this operation.

    try:
        # Add or replace manually curated version resource dependencies
        api_response = await api_instance.replace_model_version_resources(model_id, version_id, replace_model_version_resources_request)
        print("The response of ModelsApi->replace_model_version_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->replace_model_version_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **replace_model_version_resources_request** | [**ReplaceModelVersionResourcesRequest**](ReplaceModelVersionResourcesRequest.md)| Request payload for this operation. |

### Return type

[**ModelVersionResourceGraphResponse**](ModelVersionResourceGraphResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refreshed resource graph. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_model_version**
> DeveloperMessageResponse schedule_model_version(model_id, version_id, schedule_model_version_request)

**Synchronous variant:** `schedule_model_version_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Schedule publishing of a model version

Schedule a caller-managed model version for future publication and persist its early-access preference. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.schedule_model_version_request import ScheduleModelVersionRequest
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
    schedule_model_version_request = {"publishAt":"2026-07-28T10:00:00.000Z","supporterEarlyAccessEnabled":true} # ScheduleModelVersionRequest | Request payload for this operation.

    try:
        # Schedule publishing of a model version
        api_response = await api_instance.schedule_model_version(model_id, version_id, schedule_model_version_request)
        print("The response of ModelsApi->schedule_model_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->schedule_model_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **schedule_model_version_request** | [**ScheduleModelVersionRequest**](ScheduleModelVersionRequest.md)| Request payload for this operation. |

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
**200** | Version scheduled. |  * X-Request-ID -  <br>  |
**400** | Invalid publish date. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Not allowed to schedule this version. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
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

# **set_model_showcase**
> DeveloperMessageResponse set_model_showcase(id, set_model_showcase_request)

**Synchronous variant:** `set_model_showcase_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Showcase or unshowcase a model

Set the explicit showcased state for a caller-owned model while enforcing the per-profile showcase limit. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.set_model_showcase_request import SetModelShowcaseRequest
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
    set_model_showcase_request = {"showcased":"NONE"} # SetModelShowcaseRequest | Request payload for this operation.

    try:
        # Showcase or unshowcase a model
        api_response = await api_instance.set_model_showcase(id, set_model_showcase_request)
        print("The response of ModelsApi->set_model_showcase:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->set_model_showcase: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id provided in the path. |
 **set_model_showcase_request** | [**SetModelShowcaseRequest**](SetModelShowcaseRequest.md)| Request payload for this operation. |

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
**200** | Showcase state updated. |  * X-Request-ID -  <br>  |
**400** | Invalid showcased value, limit exceeded, or missing payload. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Not allowed to modify showcase for this model. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_model_version_community_media**
> DeveloperMessageResponse set_model_version_community_media(model_id, version_id, set_model_version_community_media_request)

**Synchronous variant:** `set_model_version_community_media_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Add or remove community media for a model version

Add or remove one published image or video from a model version’s bounded community-media carousel. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.set_model_version_community_media_request import SetModelVersionCommunityMediaRequest
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
    set_model_version_community_media_request = {"include":true,"mediaId":1,"mediaType":"IMAGE"} # SetModelVersionCommunityMediaRequest | Request payload for this operation.

    try:
        # Add or remove community media for a model version
        api_response = await api_instance.set_model_version_community_media(model_id, version_id, set_model_version_community_media_request)
        print("The response of ModelsApi->set_model_version_community_media:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->set_model_version_community_media: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **set_model_version_community_media_request** | [**SetModelVersionCommunityMediaRequest**](SetModelVersionCommunityMediaRequest.md)| Request payload for this operation. |

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
**200** | Community media updated. |  * X-Request-ID -  <br>  |
**400** | Invalid payload or limit reached. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Not allowed to modify this version. |  * X-Request-ID -  <br>  |
**404** | Version or media not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_model**
> DeveloperModelMutationResponse update_model(id, update_model_request)

**Synchronous variant:** `update_model_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Edit an existing model

Update supported model metadata, description, type, tags, and author wishes for a caller-managed model. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_model_mutation_response import DeveloperModelMutationResponse
from arcenciel.generated.models.update_model_request import UpdateModelRequest
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
    update_model_request = {"authorWishes":"value","description":"value","tags":"value","title":"value","type":"value"} # UpdateModelRequest | Fields to update in the model (title, description, tags, etc.).

    try:
        # Edit an existing model
        api_response = await api_instance.update_model(id, update_model_request)
        print("The response of ModelsApi->update_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->update_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the model. |
 **update_model_request** | [**UpdateModelRequest**](UpdateModelRequest.md)| Fields to update in the model (title, description, tags, etc.). |

### Return type

[**DeveloperModelMutationResponse**](DeveloperModelMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model updated successfully. |  * X-Request-ID -  <br>  |
**400** | Bad request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the model owner or admin). |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_model_version**
> DeveloperVersionMutationResponse update_model_version(model_id, version_id, about_this_version=about_this_version, activation_tags=activation_tags, base_model=base_model, supporter_early_access_enabled=supporter_early_access_enabled, version_name=version_name)

**Synchronous variant:** `update_model_version_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Edit an existing model version

Update release metadata, source selection, hashes, file metadata, and early-access settings for a caller-managed model version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_version_mutation_response import DeveloperVersionMutationResponse
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
    about_this_version = 'about_this_version_example' # str | About This Version accepted or returned by this contract. (optional)
    activation_tags = 'activation_tags_example' # str | Activation Tags accepted or returned by this contract. (optional)
    base_model = 'base_model_example' # str | Base Model accepted or returned by this contract. (optional)
    supporter_early_access_enabled = True # bool | Set false to opt this hosted version out of supporter early access. (optional)
    version_name = 'version_name_example' # str | Version Name accepted or returned by this contract. (optional)

    try:
        # Edit an existing model version
        api_response = await api_instance.update_model_version(model_id, version_id, about_this_version=about_this_version, activation_tags=activation_tags, base_model=base_model, supporter_early_access_enabled=supporter_early_access_enabled, version_name=version_name)
        print("The response of ModelsApi->update_model_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->update_model_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **about_this_version** | **str**| About This Version accepted or returned by this contract. | [optional]
 **activation_tags** | **str**| Activation Tags accepted or returned by this contract. | [optional]
 **base_model** | **str**| Base Model accepted or returned by this contract. | [optional]
 **supporter_early_access_enabled** | **bool**| Set false to opt this hosted version out of supporter early access. | [optional]
 **version_name** | **str**| Version Name accepted or returned by this contract. | [optional]

### Return type

[**DeveloperVersionMutationResponse**](DeveloperVersionMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model version updated successfully. |  * X-Request-ID -  <br>  |
**400** | Bad request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_model_version_resource**
> ModelVersionResourceGraphResponse update_model_version_resource(model_id, version_id, edge_id, update_model_version_resource_request)

**Synchronous variant:** `update_model_version_resource_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update a resource dependency edge

Update, hide, restore, or remove one managed dependency edge and return the complete resulting resource graph. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_version_resource_graph_response import ModelVersionResourceGraphResponse
from arcenciel.generated.models.update_model_version_resource_request import UpdateModelVersionResourceRequest
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
    edge_id = 1 # int | Edge Id provided in the path.
    update_model_version_resource_request = {"kind":"REQUIRED","status":"ACTIVE"} # UpdateModelVersionResourceRequest | Request payload for this operation.

    try:
        # Update a resource dependency edge
        api_response = await api_instance.update_model_version_resource(model_id, version_id, edge_id, update_model_version_resource_request)
        print("The response of ModelsApi->update_model_version_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->update_model_version_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **edge_id** | **int**| Edge Id provided in the path. |
 **update_model_version_resource_request** | [**UpdateModelVersionResourceRequest**](UpdateModelVersionResourceRequest.md)| Request payload for this operation. |

### Return type

[**ModelVersionResourceGraphResponse**](ModelVersionResourceGraphResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refreshed resource graph. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Resource edge not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_model_description_images**
> DeveloperStoredImagesUploadResponse upload_model_description_images(id, idempotency_key=idempotency_key, image_files=image_files)

**Synchronous variant:** `upload_model_description_images_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload images for a model description

Upload validated inline description images to a caller-managed model and report partial validation outcomes. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_stored_images_upload_response import DeveloperStoredImagesUploadResponse
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
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    image_files = None # List[bytes] | JPEG, PNG, or WebP image files, up to 50MB each. (optional)

    try:
        # Upload images for a model description
        api_response = await api_instance.upload_model_description_images(id, idempotency_key=idempotency_key, image_files=image_files)
        print("The response of ModelsApi->upload_model_description_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->upload_model_description_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the model. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **image_files** | **List[bytes]**| JPEG, PNG, or WebP image files, up to 50MB each. | [optional]

### Return type

[**DeveloperStoredImagesUploadResponse**](DeveloperStoredImagesUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Model description images uploaded successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**202** | Some files were invalid but at least one image was uploaded. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Bad request, invalid model id, unsupported file type, or upload limit exceeded. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the model owner or staff). |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_model_version_chunk**
> ModelVersionChunkUploadSession upload_model_version_chunk(upload_id, index, body)

**Synchronous variant:** `upload_model_version_chunk_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload one model version file chunk

Store one indexed binary chunk at the negotiated length; repeating the same index and bytes leaves the upload session unchanged. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.model_version_chunk_upload_session import ModelVersionChunkUploadSession
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
    upload_id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Upload-session identifier returned by the create operation.
    index = 0 # int | Zero-based chunk index; must be less than the session's `totalChunks`.
    body = b'...' # bytes | Request payload for this operation.

    try:
        # Upload one model version file chunk
        api_response = await api_instance.upload_model_version_chunk(upload_id, index, body)
        print("The response of ModelsApi->upload_model_version_chunk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->upload_model_version_chunk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **UUID**| Upload-session identifier returned by the create operation. |
 **index** | **int**| Zero-based chunk index; must be less than the session&#39;s &#x60;totalChunks&#x60;. |
 **body** | **bytes**| Request payload for this operation. |

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chunk stored or safely replaced. |  * X-Request-ID -  <br>  |
**400** | Missing body, out-of-range index, or body length does not exactly match the expected chunk length. |  * X-Request-ID -  <br>  |
**401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
**403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
**404** | The upload session does not exist or has been cleaned up after expiry. A chunk PUT is rejected before its body is read. |  * X-Request-ID -  <br>  |
**408** | The chunk request body was interrupted before it arrived in full. Query the session and retry the same chunk index if absent. |  * X-Request-ID -  <br>  |
**409** | The upload session is already processing or completed. |  * X-Request-ID -  <br>  |
**410** | The upload session was cancelled and can no longer receive chunks or be completed. |  * X-Request-ID -  <br>  |
**413** | Chunk request exceeds the upload host&#39;s request-body limit. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_model_version_images**
> DeveloperImageUploadResponse upload_model_version_images(model_id, version_id, idempotency_key=idempotency_key, description=description, image_files=image_files, tags=tags, title=title)

**Synchronous variant:** `upload_model_version_images_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload one or more images for a specific model version

Upload validated sample images to a caller-managed model version and preserve accepted identifiers on partial failure. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_image_upload_response import DeveloperImageUploadResponse
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
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    description = 'description_example' # str | Description accepted or returned by this contract. (optional)
    image_files = None # List[bytes] | Array of image files. (optional)
    tags = 'tags_example' # str | Comma-separated list of tags. (optional)
    title = 'title_example' # str | Title accepted or returned by this contract. (optional)

    try:
        # Upload one or more images for a specific model version
        api_response = await api_instance.upload_model_version_images(model_id, version_id, idempotency_key=idempotency_key, description=description, image_files=image_files, tags=tags, title=title)
        print("The response of ModelsApi->upload_model_version_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->upload_model_version_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **description** | **str**| Description accepted or returned by this contract. | [optional]
 **image_files** | **List[bytes]**| Array of image files. | [optional]
 **tags** | **str**| Comma-separated list of tags. | [optional]
 **title** | **str**| Title accepted or returned by this contract. | [optional]

### Return type

[**DeveloperImageUploadResponse**](DeveloperImageUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Version image(s) uploaded successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**202** | Some images were rejected while the remaining images were stored. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Bad request (e.g. no files uploaded or invalid file format). |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_model_version_videos**
> DeveloperVideoUploadResponse upload_model_version_videos(model_id, version_id, idempotency_key=idempotency_key, description=description, meta_images=meta_images, tags=tags, title=title, video_files=video_files)

**Synchronous variant:** `upload_model_version_videos_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload one or more videos for a specific model version

Upload validated sample videos and optional preview images to a caller-managed model version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_video_upload_response import DeveloperVideoUploadResponse
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
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    description = 'description_example' # str | Description accepted or returned by this contract. (optional)
    meta_images = None # List[bytes] | Optional preview images. (optional)
    tags = 'tags_example' # str | Comma-separated list of tags. (optional)
    title = 'title_example' # str | Title accepted or returned by this contract. (optional)
    video_files = None # List[bytes] | Array of video files. (optional)

    try:
        # Upload one or more videos for a specific model version
        api_response = await api_instance.upload_model_version_videos(model_id, version_id, idempotency_key=idempotency_key, description=description, meta_images=meta_images, tags=tags, title=title, video_files=video_files)
        print("The response of ModelsApi->upload_model_version_videos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelsApi->upload_model_version_videos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **version_id** | **int**| Version Id provided in the path. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **description** | **str**| Description accepted or returned by this contract. | [optional]
 **meta_images** | **List[bytes]**| Optional preview images. | [optional]
 **tags** | **str**| Comma-separated list of tags. | [optional]
 **title** | **str**| Title accepted or returned by this contract. | [optional]
 **video_files** | **List[bytes]**| Array of video files. | [optional]

### Return type

[**DeveloperVideoUploadResponse**](DeveloperVideoUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Version video(s) uploaded successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**202** | Some videos were rejected while the remaining videos were stored. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Bad request (e.g. no files uploaded). |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden. |  * X-Request-ID -  <br>  |
**404** | Version not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
