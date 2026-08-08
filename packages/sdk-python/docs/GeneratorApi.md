# arcenciel.generated.GeneratorApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_generator_job**](GeneratorApi.md#cancel_generator_job) | **POST** /api/generator/jobs/{id}/cancel | Cancel a queued or running generator job
[**cancel_generator_video_job**](GeneratorApi.md#cancel_generator_video_job) | **POST** /api/generator/video/jobs/{id}/cancel | Cancel a queued or active video job
[**create_generator_compare_run**](GeneratorApi.md#create_generator_compare_run) | **POST** /api/generator/jobs/compare | Queue one txt2img prompt across multiple checkpoints
[**create_generator_job**](GeneratorApi.md#create_generator_job) | **POST** /api/generator/jobs | Queue a new generator job
[**create_generator_preset**](GeneratorApi.md#create_generator_preset) | **POST** /api/generator/presets | Create a generator preset
[**create_generator_video_job**](GeneratorApi.md#create_generator_video_job) | **POST** /api/generator/video/jobs | Reserve quota and queue one remote video generation job
[**delete_generator_job**](GeneratorApi.md#delete_generator_job) | **DELETE** /api/generator/jobs/{id} | Soft-delete a finished generator job
[**delete_generator_preset**](GeneratorApi.md#delete_generator_preset) | **DELETE** /api/generator/presets/{id} | Delete a generator preset
[**delete_generator_video_job**](GeneratorApi.md#delete_generator_video_job) | **DELETE** /api/generator/video/jobs/{id} | Soft-delete a terminal video job and remove its output
[**download_generator_compare_grid**](GeneratorApi.md#download_generator_compare_grid) | **GET** /api/generator/compare-runs/{id}/grid/download | Download the compare run grid image
[**download_generator_job**](GeneratorApi.md#download_generator_job) | **GET** /api/generator/jobs/{id}/download | Download one job as zip
[**download_generator_job_output**](GeneratorApi.md#download_generator_job_output) | **GET** /api/generator/jobs/{id}/outputs/{outputId}/download | Download a single job output file
[**download_generator_jobs_bulk**](GeneratorApi.md#download_generator_jobs_bulk) | **POST** /api/generator/jobs/bulk-download | Download multiple jobs as one zip archive
[**download_generator_video_job**](GeneratorApi.md#download_generator_video_job) | **GET** /api/generator/video/jobs/{id}/download | Download a completed generated video
[**export_generator_preset**](GeneratorApi.md#export_generator_preset) | **GET** /api/generator/presets/{id}/export | Export a generator preset as JSON
[**get_generator_catalog**](GeneratorApi.md#get_generator_catalog) | **GET** /api/generator/catalog | Legacy alias for generator model catalog
[**get_generator_compare_grid**](GeneratorApi.md#get_generator_compare_grid) | **GET** /api/generator/compare-runs/{id}/grid | Render the compare run grid preview
[**get_generator_compare_run**](GeneratorApi.md#get_generator_compare_run) | **GET** /api/generator/compare-runs/{id} | Get a compare run aggregate
[**get_generator_job**](GeneratorApi.md#get_generator_job) | **GET** /api/generator/jobs/{id} | Get one generator job
[**get_generator_options**](GeneratorApi.md#get_generator_options) | **GET** /api/generator/options | Get generator runtime options and per-user quota snapshot
[**get_generator_preset**](GeneratorApi.md#get_generator_preset) | **GET** /api/generator/presets/{id} | Get a generator preset by id
[**get_generator_state**](GeneratorApi.md#get_generator_state) | **GET** /api/generator/state | Get generator availability state
[**get_generator_video_job**](GeneratorApi.md#get_generator_video_job) | **GET** /api/generator/video/jobs/{id} | Get one video generation job
[**get_generator_video_options**](GeneratorApi.md#get_generator_video_options) | **GET** /api/generator/video/options | Get video presets, limits, capabilities, and quota
[**get_generator_video_source**](GeneratorApi.md#get_generator_video_source) | **GET** /api/generator/video/jobs/{id}/source/{slot} | Stream an owned or staff-visible video source frame
[**get_generator_video_state**](GeneratorApi.md#get_generator_video_state) | **GET** /api/generator/video/state | Get video generator visibility and availability
[**interrogate_generator_image**](GeneratorApi.md#interrogate_generator_image) | **POST** /api/generator/autotag/interrogate | Interrogate uploaded image with autotagger (artist+)
[**interrogate_generator_image_url**](GeneratorApi.md#interrogate_generator_image_url) | **POST** /api/generator/autotag/interrogate-url | Interrogate image from allowlisted URL (artist+)
[**list_generator_jobs**](GeneratorApi.md#list_generator_jobs) | **GET** /api/generator/jobs | List your generator jobs
[**list_generator_models**](GeneratorApi.md#list_generator_models) | **GET** /api/generator/models | List generator model catalog entries
[**list_generator_presets**](GeneratorApi.md#list_generator_presets) | **GET** /api/generator/presets | List generator presets
[**list_generator_tag_suggestions**](GeneratorApi.md#list_generator_tag_suggestions) | **GET** /api/generator/tags/autocomplete | Autocomplete generator tags
[**list_generator_video_jobs**](GeneratorApi.md#list_generator_video_jobs) | **GET** /api/generator/video/jobs | List the current user&#39;s video generation jobs
[**publish_generator_job**](GeneratorApi.md#publish_generator_job) | **POST** /api/generator/jobs/{id}/publish | Publish completed generator outputs to site images
[**remix_generator_job**](GeneratorApi.md#remix_generator_job) | **POST** /api/generator/jobs/{id}/remix | Queue a new job from an existing one
[**search_generator_checkpoints**](GeneratorApi.md#search_generator_checkpoints) | **GET** /api/generator/models/checkpoints | Search generator checkpoint catalog entries
[**search_generator_loras**](GeneratorApi.md#search_generator_loras) | **GET** /api/generator/models/loras | Search generator LoRA catalog entries
[**stream_generator_events**](GeneratorApi.md#stream_generator_events) | **GET** /api/generator/events | Stream generator events (SSE)
[**stream_generator_video_events**](GeneratorApi.md#stream_generator_video_events) | **GET** /api/generator/video/events | Stream video job, queue-position, and ETA updates
[**stream_generator_video_output**](GeneratorApi.md#stream_generator_video_output) | **GET** /api/generator/video/jobs/{id}/output | Stream a completed generated video
[**touch_generator_uploads**](GeneratorApi.md#touch_generator_uploads) | **POST** /api/generator/uploads/touch | Refresh expiry for existing generator upload paths
[**update_generator_preset**](GeneratorApi.md#update_generator_preset) | **PATCH** /api/generator/presets/{id} | Update a generator preset
[**upload_generator_source**](GeneratorApi.md#upload_generator_source) | **POST** /api/generator/uploads | Upload a source or mask image for generator flows


# **cancel_generator_job**
> GeneratorJobEnvelope cancel_generator_job(id)

**Synchronous variant:** `cancel_generator_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Cancel a queued or running generator job

Cancel one caller-owned image-generation job when its current state allows cancellation. Repeated calls do not create additional work.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_job_envelope import GeneratorJobEnvelope
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 'example-id' # str | Id provided in the path.

    try:
        # Cancel a queued or running generator job
        api_response = await api_instance.cancel_generator_job(id)
        print("The response of GeneratorApi->cancel_generator_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->cancel_generator_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id provided in the path. |

### Return type

[**GeneratorJobEnvelope**](GeneratorJobEnvelope.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cancel request accepted. |  * X-Request-ID -  <br>  |
**400** | Missing job id. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Job not found. |  * X-Request-ID -  <br>  |
**409** | Job is already completed/failed. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_generator_video_job**
> GeneratorVideoJobWithQuotaResponse cancel_generator_video_job(id)

**Synchronous variant:** `cancel_generator_video_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Cancel a queued or active video job

Cancel one caller-owned video-generation job when its current state allows cancellation. Repeated calls do not create additional work.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_video_job_with_quota_response import GeneratorVideoJobWithQuotaResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Video job ID.

    try:
        # Cancel a queued or active video job
        api_response = await api_instance.cancel_generator_video_job(id)
        print("The response of GeneratorApi->cancel_generator_video_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->cancel_generator_video_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| Video job ID. |

### Return type

[**GeneratorVideoJobWithQuotaResponse**](GeneratorVideoJobWithQuotaResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cancelled video job and updated quota. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_generator_compare_run**
> GeneratorCompareResponse create_generator_compare_run(create_generator_compare_run_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_generator_compare_run_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Queue one txt2img prompt across multiple checkpoints

Create a bounded image-generation comparison run across the requested axes and return its caller-owned jobs.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_generator_compare_run_request import CreateGeneratorCompareRunRequest
from arcenciel.generated.models.generator_compare_response import GeneratorCompareResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    create_generator_compare_run_request = {"adetailer":{"adetailerAttentionCouplePolicy":"value","adetailerDenoise":1,"adetailerMaskMode":"value","adetailerTiming":"value","attentionCouplePolicy":"strict-face-bbox","confidence":1,"denoise":0.5,"detectionOrder":"value","detector":"value","dilate":4,"dropSize":1,"enabled":true,"iou":1,"maskBlur":4,"maskMode":"segmentation","maxDetections":2,"model":"value","negativePrompt":"value","positivePrompt":"value","timing":"pre-upscale"},"adetailerDetectionOrder":"value","adetailerNegative":"value","adetailerPositive":"value","attentionCouple":{"enabled":true,"globalPromptWeight":0.01,"regions":[{"maskPath":"value","prompt":"value","weight":1}]},"batchSize":1,"cfg":1,"controlnets":[{"end":1,"imagePath":"value","model":"value","modelName":"value","start":1,"strength":1}],"denoise":1,"extraSeed":1,"extraSeedStrength":1,"height":1,"loraName":"value","loras":["value"],"metadata":{},"mode":"txt2img","modelName":"value","modelNames":["value","value"],"negativePrompt":"value","presetId":1,"prompt":"value","promptControl":true,"retentionDays":1,"rfShift":1,"samplerName":"value","scaleFactor":1,"scheduler":"value","schedulerName":"value","seed":1,"sfwMode":true,"steps":1,"tags":["value"],"upscaleProfiles":[{"denoise":1,"model":"value","modelName":"value","upscaleModelName":"value"}],"vaeName":"value","width":1} # CreateGeneratorCompareRunRequest | Request payload for this operation.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Queue one txt2img prompt across multiple checkpoints
        api_response = await api_instance.create_generator_compare_run(create_generator_compare_run_request, idempotency_key=idempotency_key)
        print("The response of GeneratorApi->create_generator_compare_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->create_generator_compare_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_generator_compare_run_request** | [**CreateGeneratorCompareRunRequest**](CreateGeneratorCompareRunRequest.md)| Request payload for this operation. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**GeneratorCompareResponse**](GeneratorCompareResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Compare jobs queued. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid payload, target count, mode, duplicate target, or incompatible LoRA/base family. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | User banned or restricted by policy. |  * X-Request-ID -  <br>  |
**404** | User/preset not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | Daily/pending/budget limits exceeded for the aggregate run. |  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | Generator is disabled (maintenance mode). The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_generator_job**
> GeneratorJobEnvelope create_generator_job(create_generator_job_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_generator_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Queue a new generator job

Create an image-generation job from validated parameters, caller-visible models, and caller-owned source uploads.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_generator_job_request import CreateGeneratorJobRequest
from arcenciel.generated.models.generator_job_envelope import GeneratorJobEnvelope
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    create_generator_job_request = {"adetailer":{"adetailerAttentionCouplePolicy":"value","adetailerDenoise":1,"adetailerMaskMode":"value","adetailerTiming":"value","attentionCouplePolicy":"strict-face-bbox","confidence":1,"denoise":0.5,"detectionOrder":"value","detector":"value","dilate":4,"dropSize":1,"enabled":true,"iou":1,"maskBlur":4,"maskMode":"segmentation","maxDetections":2,"model":"value","negativePrompt":"value","positivePrompt":"value","timing":"pre-upscale"},"adetailerDetectionOrder":"value","adetailerNegative":"value","adetailerPositive":"value","attentionCouple":{"enabled":true,"globalPromptWeight":0.01,"regions":[{"maskPath":"value","prompt":"value","weight":1}]},"batchSize":1,"cfg":1,"controlnets":[{"end":1,"imagePath":"value","model":"value","modelName":"value","start":1,"strength":1}],"denoise":1,"extraSeed":1,"extraSeedStrength":1,"height":1,"imagePath":"value","loraName":"value","loras":["value"],"metadata":{},"mode":"txt2img","modelName":"value","negativePrompt":"value","presetId":1,"prompt":"value","promptControl":true,"retentionDays":1,"rfShift":1,"samplerName":"value","scaleFactor":1,"scheduler":"value","schedulerName":"value","seed":1,"sfwMode":true,"steps":1,"tags":["value"],"upscaleProfiles":[{"denoise":1,"model":"value","modelName":"value","upscaleModelName":"value"}],"vaeName":"value","width":1} # CreateGeneratorJobRequest | Request payload for this operation.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Queue a new generator job
        api_response = await api_instance.create_generator_job(create_generator_job_request, idempotency_key=idempotency_key)
        print("The response of GeneratorApi->create_generator_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->create_generator_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_generator_job_request** | [**CreateGeneratorJobRequest**](CreateGeneratorJobRequest.md)| Request payload for this operation. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**GeneratorJobEnvelope**](GeneratorJobEnvelope.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Job queued. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid payload (range checks, unknown model, invalid mode/paths, etc.). |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | User banned or restricted by policy. |  * X-Request-ID -  <br>  |
**404** | User/preset not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | Daily/pending/budget limits exceeded. |  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | Generator is disabled (maintenance mode). The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_generator_preset**
> CreateGeneratorPreset201Response create_generator_preset(create_generator_preset_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_generator_preset_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create a generator preset

Create a reusable generator preset for the authenticated caller from a validated name and generation configuration.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_generator_preset201_response import CreateGeneratorPreset201Response
from arcenciel.generated.models.create_generator_preset_request import CreateGeneratorPresetRequest
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    create_generator_preset_request = {"description":"value","isPublic":true,"name":"value","payload":{}} # CreateGeneratorPresetRequest | Request payload for this operation.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Create a generator preset
        api_response = await api_instance.create_generator_preset(create_generator_preset_request, idempotency_key=idempotency_key)
        print("The response of GeneratorApi->create_generator_preset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->create_generator_preset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_generator_preset_request** | [**CreateGeneratorPresetRequest**](CreateGeneratorPresetRequest.md)| Request payload for this operation. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**CreateGeneratorPreset201Response**](CreateGeneratorPreset201Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Preset created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_generator_video_job**
> GeneratorVideoJobWithQuotaResponse create_generator_video_job(generator_video_create_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_generator_video_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reserve quota and queue one remote video generation job

Create a video-generation job from validated parameters, caller-visible models, and authorized source assets.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_video_create_request import GeneratorVideoCreateRequest
from arcenciel.generated.models.generator_video_job_with_quota_response import GeneratorVideoJobWithQuotaResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    generator_video_create_request = {"aspectRatio":"4:3","audioEnabled":false,"frames":124,"mode":"txt2video","negativePrompt":"flicker, unstable motion, warped anatomy","prompt":"Integrated multimodal description: A fox runs through a misty forest while the camera tracks alongside.","promptPreset":"cinematic-scene","resolutionBucket":512,"seed":"42","sfwMode":true,"steps":25} # GeneratorVideoCreateRequest | Mode- and duration-specific video generation request.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Reserve quota and queue one remote video generation job
        api_response = await api_instance.create_generator_video_job(generator_video_create_request, idempotency_key=idempotency_key)
        print("The response of GeneratorApi->create_generator_video_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->create_generator_video_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generator_video_create_request** | [**GeneratorVideoCreateRequest**](GeneratorVideoCreateRequest.md)| Mode- and duration-specific video generation request. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**GeneratorVideoJobWithQuotaResponse**](GeneratorVideoJobWithQuotaResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Video job queued with quota reserved. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The operation is temporarily unavailable because a required service, dependency, or integration is unavailable. The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_generator_job**
> delete_generator_job(id)

**Synchronous variant:** `delete_generator_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Soft-delete a finished generator job

Delete one caller-owned image-generation job and its managed outputs when runtime state permits. Repeating the request leaves it absent.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 'example-id' # str | Id provided in the path.

    try:
        # Soft-delete a finished generator job
        await api_instance.delete_generator_job(id)
    except Exception as e:
        print("Exception when calling GeneratorApi->delete_generator_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id provided in the path. |

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
**204** | Deleted. |  * X-Request-ID -  <br>  |
**400** | Missing job id. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Job not found. |  * X-Request-ID -  <br>  |
**409** | Running/queued jobs cannot be deleted. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Delete failed. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_generator_preset**
> DeleteGeneratorPreset200Response delete_generator_preset(id)

**Synchronous variant:** `delete_generator_preset_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete a generator preset

Delete one caller-owned generator preset. Repeating the operation leaves the preset absent.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.delete_generator_preset200_response import DeleteGeneratorPreset200Response
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 1 # int | Id provided in the path.

    try:
        # Delete a generator preset
        api_response = await api_instance.delete_generator_preset(id)
        print("The response of GeneratorApi->delete_generator_preset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->delete_generator_preset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id provided in the path. |

### Return type

[**DeleteGeneratorPreset200Response**](DeleteGeneratorPreset200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Preset deleted. |  * X-Request-ID -  <br>  |
**400** | Invalid preset id. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Not authorized. |  * X-Request-ID -  <br>  |
**404** | Preset not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_generator_video_job**
> delete_generator_video_job(id)

**Synchronous variant:** `delete_generator_video_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Soft-delete a terminal video job and remove its output

Delete one caller-owned video-generation job and its managed outputs when runtime state permits. Repeating the request leaves it absent.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Video job ID.

    try:
        # Soft-delete a terminal video job and remove its output
        await api_instance.delete_generator_video_job(id)
    except Exception as e:
        print("Exception when calling GeneratorApi->delete_generator_video_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| Video job ID. |

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
**204** | Video job deleted with no response body. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_generator_compare_grid**
> bytes download_generator_compare_grid(id)

**Synchronous variant:** `download_generator_compare_grid_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download the compare run grid image

Download the generated comparison grid image for a completed caller-owned comparison run with an attachment filename.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Id provided in the path.

    try:
        # Download the compare run grid image
        api_response = await api_instance.download_generator_compare_grid(id)
        print("The response of GeneratorApi->download_generator_compare_grid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->download_generator_compare_grid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| Id provided in the path. |

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
**200** | PNG compare grid attachment. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | One or more child outputs are safety restricted. |  * X-Request-ID -  <br>  |
**404** | Grid is unavailable or outputs are missing. |  * X-Request-ID -  <br>  |
**409** | Compare run is still queued/running. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_generator_job**
> bytes download_generator_job(id)

**Synchronous variant:** `download_generator_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download one job as zip

Download the primary image output of a completed caller-owned generation job with integrity and content metadata.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 'example-id' # str | Id provided in the path.

    try:
        # Download one job as zip
        api_response = await api_instance.download_generator_job(id)
        print("The response of GeneratorApi->download_generator_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->download_generator_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id provided in the path. |

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Zip stream with all job outputs. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Safety restriction blocks download. |  * X-Request-ID -  <br>  |
**404** | Job/output not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Failed to build download archive. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_generator_job_output**
> bytes download_generator_job_output(id, output_id)

**Synchronous variant:** `download_generator_job_output_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download a single job output file

Download a selected image output of a completed caller-owned generation job with integrity and content metadata.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 'example-id' # str | Id provided in the path.
    output_id = '0' # str | Output selector. - `0`, `1`, ...: zero-based index in `job.outputs` - URL-encoded relative path from `${subfolder}/${filename}` (example: `nested%2Fleaf.png`) - `generator/` prefix is optional (`generator%2Fnested%2Fleaf.png` also works)

    try:
        # Download a single job output file
        api_response = await api_instance.download_generator_job_output(id, output_id)
        print("The response of GeneratorApi->download_generator_job_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->download_generator_job_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id provided in the path. |
 **output_id** | **str**| Output selector. - &#x60;0&#x60;, &#x60;1&#x60;, ...: zero-based index in &#x60;job.outputs&#x60; - URL-encoded relative path from &#x60;${subfolder}/${filename}&#x60; (example: &#x60;nested%2Fleaf.png&#x60;) - &#x60;generator/&#x60; prefix is optional (&#x60;generator%2Fnested%2Fleaf.png&#x60; also works)  |

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
**200** | Binary file stream. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Safety restriction blocks download. |  * X-Request-ID -  <br>  |
**404** | Job/output not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Failed to download output. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_generator_jobs_bulk**
> bytes download_generator_jobs_bulk(ids=ids, download_generator_jobs_bulk_request=download_generator_jobs_bulk_request)

**Synchronous variant:** `download_generator_jobs_bulk_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download multiple jobs as one zip archive

Stream a ZIP archive for a bounded set of completed caller-owned image-generation jobs.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.download_generator_jobs_bulk_request import DownloadGeneratorJobsBulkRequest
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    ids = 'example-ids' # str | Optional comma-separated job id list. Use this or request body `ids`.  (optional)
    download_generator_jobs_bulk_request = {"ids":["value"]} # DownloadGeneratorJobsBulkRequest | Request payload for this operation. (optional)

    try:
        # Download multiple jobs as one zip archive
        api_response = await api_instance.download_generator_jobs_bulk(ids=ids, download_generator_jobs_bulk_request=download_generator_jobs_bulk_request)
        print("The response of GeneratorApi->download_generator_jobs_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->download_generator_jobs_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **str**| Optional comma-separated job id list. Use this or request body &#x60;ids&#x60;.  | [optional]
 **download_generator_jobs_bulk_request** | [**DownloadGeneratorJobsBulkRequest**](DownloadGeneratorJobsBulkRequest.md)| Request payload for this operation. | [optional]

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Zip stream containing selected outputs. |  * X-Request-ID -  <br>  |
**400** | Invalid ids payload or too many jobs requested. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Safety restriction blocks download. |  * X-Request-ID -  <br>  |
**404** | No matching jobs/outputs found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Failed to build download archive. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_generator_video_job**
> bytes download_generator_video_job(id, range=range)

**Synchronous variant:** `download_generator_video_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download a completed generated video

Download a completed caller-owned video output with HTTP Range support and an attachment filename.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Video job ID.
    range = 'bytes=0-1048575' # str | Optional RFC 7233 byte range. (optional)

    try:
        # Download a completed generated video
        api_response = await api_instance.download_generator_video_job(id, range=range)
        print("The response of GeneratorApi->download_generator_video_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->download_generator_video_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| Video job ID. |
 **range** | **str**| Optional RFC 7233 byte range. | [optional]

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: video/mp4, application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Complete H.264 MP4 attachment. |  * Accept-Ranges -  <br>  * Cache-Control - Private no-store policy. <br>  * Content-Disposition -  <br>  * Content-Length - Response bytes. <br>  * X-Request-ID -  <br>  |
**206** | Requested H.264 MP4 byte range. |  * Accept-Ranges -  <br>  * Cache-Control - Private no-store policy. <br>  * Content-Disposition -  <br>  * Content-Length - Response bytes. <br>  * Content-Range -  <br>  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | Output is pending review, quarantined, or the caller lacks permission. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**416** | Requested byte range is outside the stored video output. |  * Content-Range -  <br>  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_generator_preset**
> GeneratorPresetExport export_generator_preset(id)

**Synchronous variant:** `export_generator_preset_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Export a generator preset as JSON

Export one caller-owned generator preset as portable JSON with a download-safe filename.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_preset_export import GeneratorPresetExport
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 1 # int | Id provided in the path.

    try:
        # Export a generator preset as JSON
        api_response = await api_instance.export_generator_preset(id)
        print("The response of GeneratorApi->export_generator_preset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->export_generator_preset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id provided in the path. |

### Return type

[**GeneratorPresetExport**](GeneratorPresetExport.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Downloadable preset export payload. |  * X-Request-ID -  <br>  |
**400** | Invalid preset id. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Not authorized. |  * X-Request-ID -  <br>  |
**404** | Preset not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Preset payload could not be exported. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_catalog**
> GeneratorModelCatalog get_generator_catalog(include_loras=include_loras)

**Synchronous variant:** `get_generator_catalog_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Legacy alias for generator model catalog

List the image-generator model catalogue visible to the caller, including supported checkpoints, LoRAs, capabilities, and availability metadata.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_model_catalog import GeneratorModelCatalog
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    include_loras = False # bool | Include Loras provided in the query. (optional) (default to False)

    try:
        # Legacy alias for generator model catalog
        api_response = await api_instance.get_generator_catalog(include_loras=include_loras)
        print("The response of GeneratorApi->get_generator_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_loras** | **bool**| Include Loras provided in the query. | [optional] [default to False]

### Return type

[**GeneratorModelCatalog**](GeneratorModelCatalog.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model catalog payload. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_compare_grid**
> bytes get_generator_compare_grid(id)

**Synchronous variant:** `get_generator_compare_grid_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Render the compare run grid preview

Return the generated comparison grid image for a completed caller-owned comparison run.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Id provided in the path.

    try:
        # Render the compare run grid preview
        api_response = await api_instance.get_generator_compare_grid(id)
        print("The response of GeneratorApi->get_generator_compare_grid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_compare_grid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| Id provided in the path. |

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/webp, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WebP compare grid preview. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | One or more child outputs are safety restricted. |  * X-Request-ID -  <br>  |
**404** | Grid is unavailable or outputs are missing. |  * X-Request-ID -  <br>  |
**409** | Compare run is still queued/running. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_compare_run**
> GeneratorCompareResponse get_generator_compare_run(id)

**Synchronous variant:** `get_generator_compare_run_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get a compare run aggregate

Return one caller-owned image comparison run and the jobs, axes, state, and grid metadata associated with it.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_compare_response import GeneratorCompareResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Id provided in the path.

    try:
        # Get a compare run aggregate
        api_response = await api_instance.get_generator_compare_run(id)
        print("The response of GeneratorApi->get_generator_compare_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_compare_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| Id provided in the path. |

### Return type

[**GeneratorCompareResponse**](GeneratorCompareResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Compare run aggregate. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Compare run not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_job**
> GeneratorJobEnvelope get_generator_job(id)

**Synchronous variant:** `get_generator_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get one generator job

Return one image-generation job owned by the authenticated caller, including progress, parameters, errors, and output metadata.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_job_envelope import GeneratorJobEnvelope
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 'example-id' # str | Id provided in the path.

    try:
        # Get one generator job
        api_response = await api_instance.get_generator_job(id)
        print("The response of GeneratorApi->get_generator_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id provided in the path. |

### Return type

[**GeneratorJobEnvelope**](GeneratorJobEnvelope.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job payload. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Job not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_options**
> GeneratorOptionsResponse get_generator_options()

**Synchronous variant:** `get_generator_options_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get generator runtime options and per-user quota snapshot

Return the caller-specific image generation option catalogue, allowed limits, samplers, schedulers, and feature capabilities.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_options_response import GeneratorOptionsResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)

    try:
        # Get generator runtime options and per-user quota snapshot
        api_response = await api_instance.get_generator_options()
        print("The response of GeneratorApi->get_generator_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_options: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GeneratorOptionsResponse**](GeneratorOptionsResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generator options payload. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | User not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_preset**
> GetGeneratorPreset200Response get_generator_preset(id)

**Synchronous variant:** `get_generator_preset_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get a generator preset by id

Return one reusable generator preset owned by the authenticated caller, including its validated configuration.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.get_generator_preset200_response import GetGeneratorPreset200Response
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 1 # int | Id provided in the path.

    try:
        # Get a generator preset by id
        api_response = await api_instance.get_generator_preset(id)
        print("The response of GeneratorApi->get_generator_preset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_preset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id provided in the path. |

### Return type

[**GetGeneratorPreset200Response**](GetGeneratorPreset200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Preset payload. |  * X-Request-ID -  <br>  |
**400** | Invalid preset id. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Not authorized. |  * X-Request-ID -  <br>  |
**404** | Preset not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_state**
> GeneratorState get_generator_state()

**Synchronous variant:** `get_generator_state_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get generator availability state

Return public image-generator availability and maintenance state. The response does not expose worker credentials, queues, or administrative controls.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_state import GeneratorState
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)

    try:
        # Get generator availability state
        api_response = await api_instance.get_generator_state()
        print("The response of GeneratorApi->get_generator_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_state: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GeneratorState**](GeneratorState.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current generator state. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_video_job**
> GeneratorVideoJobEnvelope get_generator_video_job(id)

**Synchronous variant:** `get_generator_video_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get one video generation job

Return one video-generation job owned by the authenticated caller, including progress, parameters, moderation state, and output metadata.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_video_job_envelope import GeneratorVideoJobEnvelope
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Video job ID.

    try:
        # Get one video generation job
        api_response = await api_instance.get_generator_video_job(id)
        print("The response of GeneratorApi->get_generator_video_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_video_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| Video job ID. |

### Return type

[**GeneratorVideoJobEnvelope**](GeneratorVideoJobEnvelope.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Video job. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_video_options**
> GeneratorVideoOptionsResponse get_generator_video_options()

**Synchronous variant:** `get_generator_video_options_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get video presets, limits, capabilities, and quota

Return the caller-specific video generation option catalogue, supported models, limits, and input capabilities.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_video_options_response import GeneratorVideoOptionsResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)

    try:
        # Get video presets, limits, capabilities, and quota
        api_response = await api_instance.get_generator_video_options()
        print("The response of GeneratorApi->get_generator_video_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_video_options: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GeneratorVideoOptionsResponse**](GeneratorVideoOptionsResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Video generator options. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_video_source**
> bytes get_generator_video_source(id, slot)

**Synchronous variant:** `get_generator_video_source_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Stream an owned or staff-visible video source frame

Stream an authorized source asset for a caller-owned video-generation job. The slot identifies a documented input position.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Video job ID.
    slot = 'first' # str | Requested source-frame slot.

    try:
        # Stream an owned or staff-visible video source frame
        api_response = await api_instance.get_generator_video_source(id, slot)
        print("The response of GeneratorApi->get_generator_video_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_video_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| Video job ID. |
 **slot** | **str**| Requested source-frame slot. |

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
**200** | Source image bytes in the stored format. |  * Cache-Control - Private no-store policy. <br>  * Content-Length - Response bytes. <br>  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_generator_video_state**
> GeneratorVideoState get_generator_video_state()

**Synchronous variant:** `get_generator_video_state_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get video generator visibility and availability

Return caller-visible video-generator availability, maintenance state, and feature readiness.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_video_state import GeneratorVideoState
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)

    try:
        # Get video generator visibility and availability
        api_response = await api_instance.get_generator_video_state()
        print("The response of GeneratorApi->get_generator_video_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->get_generator_video_state: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GeneratorVideoState**](GeneratorVideoState.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Viewer-specific video generator state. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **interrogate_generator_image**
> InterrogateGeneratorImage200Response interrogate_generator_image(image)

**Synchronous variant:** `interrogate_generator_image_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Interrogate uploaded image with autotagger (artist+)

Upload one validated image and return generator prompt tags inferred for the authenticated caller.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.interrogate_generator_image200_response import InterrogateGeneratorImage200Response
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    image = None # bytes | Image associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary.

    try:
        # Interrogate uploaded image with autotagger (artist+)
        api_response = await api_instance.interrogate_generator_image(image)
        print("The response of GeneratorApi->interrogate_generator_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->interrogate_generator_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **bytes**| Image associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary. |

### Return type

[**InterrogateGeneratorImage200Response**](InterrogateGeneratorImage200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tags generated successfully. |  * X-Request-ID -  <br>  |
**400** | Missing upload or invalid input. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Role not allowed. |  * X-Request-ID -  <br>  |
**413** | Uploaded image too large. |  * X-Request-ID -  <br>  |
**422** | Tagger could not process image. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**502** | Autotagger unavailable. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **interrogate_generator_image_url**
> InterrogateGeneratorImageUrl200Response interrogate_generator_image_url(interrogate_generator_image_url_request)

**Synchronous variant:** `interrogate_generator_image_url_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Interrogate image from allowlisted URL (artist+)

Fetch one supported image URL through the guarded media pipeline and return inferred generator prompt tags.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.interrogate_generator_image_url200_response import InterrogateGeneratorImageUrl200Response
from arcenciel.generated.models.interrogate_generator_image_url_request import InterrogateGeneratorImageUrlRequest
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    interrogate_generator_image_url_request = {"imageUrl":"https://cdn.discordapp.com/attachments/123/example.png"} # InterrogateGeneratorImageUrlRequest | Request payload for this operation.

    try:
        # Interrogate image from allowlisted URL (artist+)
        api_response = await api_instance.interrogate_generator_image_url(interrogate_generator_image_url_request)
        print("The response of GeneratorApi->interrogate_generator_image_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->interrogate_generator_image_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interrogate_generator_image_url_request** | [**InterrogateGeneratorImageUrlRequest**](InterrogateGeneratorImageUrlRequest.md)| Request payload for this operation. |

### Return type

[**InterrogateGeneratorImageUrl200Response**](InterrogateGeneratorImageUrl200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tags generated successfully. |  * X-Request-ID -  <br>  |
**400** | Invalid URL, unsafe URL, or fetch failed. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Role not allowed or host not allowlisted. |  * X-Request-ID -  <br>  |
**413** | Remote image too large. |  * X-Request-ID -  <br>  |
**415** | Remote content type is not a supported image format. |  * X-Request-ID -  <br>  |
**422** | Tagger could not process image. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**502** | Remote fetch or autotagger unavailable. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_generator_jobs**
> GeneratorJobListResponse list_generator_jobs(take=take, cursor=cursor, status=status, mode=mode, q=q, query=query, tags=tags, tag_source=tag_source, tag_mode=tag_mode, created_from=created_from, created_to=created_to, has_outputs=has_outputs, has_loras=has_loras)

**Synchronous variant:** `list_generator_jobs_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List your generator jobs

List the authenticated caller’s image-generation jobs with bounded pagination, state, progress, and output summaries.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_job_list_response import GeneratorJobListResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    take = 20 # int | Take provided in the query. (optional) (default to 20)
    cursor = 'next-page' # str | Opaque cursor from previous response (`gc:*` composite cursor supported; legacy ids still accepted). (optional)
    status = 'example-status' # str | Comma-separated values (`queued,running,completed,failed`). (optional)
    mode = 'example-mode' # str | Comma-separated values (`txt2img,img2img,inpaint`). (optional)
    q = 'landscape' # str | Text search alias for `query`. (optional)
    query = 'landscape' # str | Text search across prompt/negativePrompt/model fields. (optional)
    tags = 'example-tags' # str | Comma-separated tag filter. (optional)
    tag_source = 'manual' # str | Tag Source provided in the query. (optional)
    tag_mode = 'any' # str | Tag Mode provided in the query. (optional)
    created_from = '2026-07-28T10:00:00.000Z' # str | Accepts full datetime or `YYYY-MM-DD`. (optional)
    created_to = '2026-07-28T10:00:00.000Z' # str | Accepts full datetime or `YYYY-MM-DD`. (optional)
    has_outputs = true # bool | Boolean filter (`true/false`, `1/0`, `yes/no`, `on/off`). (optional)
    has_loras = true # bool | Boolean filter (`true/false`, `1/0`, `yes/no`, `on/off`). Evaluates presence of legacy `loraName` on jobs.  (optional)

    try:
        # List your generator jobs
        api_response = await api_instance.list_generator_jobs(take=take, cursor=cursor, status=status, mode=mode, q=q, query=query, tags=tags, tag_source=tag_source, tag_mode=tag_mode, created_from=created_from, created_to=created_to, has_outputs=has_outputs, has_loras=has_loras)
        print("The response of GeneratorApi->list_generator_jobs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->list_generator_jobs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **take** | **int**| Take provided in the query. | [optional] [default to 20]
 **cursor** | **str**| Opaque cursor from previous response (&#x60;gc:*&#x60; composite cursor supported; legacy ids still accepted). | [optional]
 **status** | **str**| Comma-separated values (&#x60;queued,running,completed,failed&#x60;). | [optional]
 **mode** | **str**| Comma-separated values (&#x60;txt2img,img2img,inpaint&#x60;). | [optional]
 **q** | **str**| Text search alias for &#x60;query&#x60;. | [optional]
 **query** | **str**| Text search across prompt/negativePrompt/model fields. | [optional]
 **tags** | **str**| Comma-separated tag filter. | [optional]
 **tag_source** | **str**| Tag Source provided in the query. | [optional]
 **tag_mode** | **str**| Tag Mode provided in the query. | [optional]
 **created_from** | **str**| Accepts full datetime or &#x60;YYYY-MM-DD&#x60;. | [optional]
 **created_to** | **str**| Accepts full datetime or &#x60;YYYY-MM-DD&#x60;. | [optional]
 **has_outputs** | **bool**| Boolean filter (&#x60;true/false&#x60;, &#x60;1/0&#x60;, &#x60;yes/no&#x60;, &#x60;on/off&#x60;). | [optional]
 **has_loras** | **bool**| Boolean filter (&#x60;true/false&#x60;, &#x60;1/0&#x60;, &#x60;yes/no&#x60;, &#x60;on/off&#x60;). Evaluates presence of legacy &#x60;loraName&#x60; on jobs.  | [optional]

### Return type

[**GeneratorJobListResponse**](GeneratorJobListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated job list. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_generator_models**
> GeneratorModelCatalog list_generator_models(include_loras=include_loras)

**Synchronous variant:** `list_generator_models_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List generator model catalog entries

List the generator model catalogue using the compatibility route retained for existing integrations.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_model_catalog import GeneratorModelCatalog
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    include_loras = False # bool | Include full LoRA catalog entries. Accepts `true/false`, `1/0`, `yes/no`, `on/off`. (optional) (default to False)

    try:
        # List generator model catalog entries
        api_response = await api_instance.list_generator_models(include_loras=include_loras)
        print("The response of GeneratorApi->list_generator_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->list_generator_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_loras** | **bool**| Include full LoRA catalog entries. Accepts &#x60;true/false&#x60;, &#x60;1/0&#x60;, &#x60;yes/no&#x60;, &#x60;on/off&#x60;. | [optional] [default to False]

### Return type

[**GeneratorModelCatalog**](GeneratorModelCatalog.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model catalog payload. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_generator_presets**
> ListGeneratorPresets200Response list_generator_presets(scope=scope)

**Synchronous variant:** `list_generator_presets_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List generator presets

List reusable generator presets owned by the authenticated caller with their current configuration summaries.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.list_generator_presets200_response import ListGeneratorPresets200Response
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    scope = 'mine' # str | Preset scope filter. (optional)

    try:
        # List generator presets
        api_response = await api_instance.list_generator_presets(scope=scope)
        print("The response of GeneratorApi->list_generator_presets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->list_generator_presets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Preset scope filter. | [optional]

### Return type

[**ListGeneratorPresets200Response**](ListGeneratorPresets200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Preset list. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_generator_tag_suggestions**
> GeneratorTagSuggestionsResponse list_generator_tag_suggestions(q=q, limit=limit, include_aliases=include_aliases)

**Synchronous variant:** `list_generator_tag_suggestions_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Autocomplete generator tags

Return bounded generator prompt-tag suggestions for the supplied prefix so clients can implement accessible autocomplete.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_tag_suggestions_response import GeneratorTagSuggestionsResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    q = 'landscape' # str | Search term. (optional)
    limit = 20 # int | Limit provided in the query. (optional) (default to 20)
    include_aliases = True # bool | Include alias matches. (optional) (default to True)

    try:
        # Autocomplete generator tags
        api_response = await api_instance.list_generator_tag_suggestions(q=q, limit=limit, include_aliases=include_aliases)
        print("The response of GeneratorApi->list_generator_tag_suggestions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->list_generator_tag_suggestions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Search term. | [optional]
 **limit** | **int**| Limit provided in the query. | [optional] [default to 20]
 **include_aliases** | **bool**| Include alias matches. | [optional] [default to True]

### Return type

[**GeneratorTagSuggestionsResponse**](GeneratorTagSuggestionsResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag suggestion list. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_generator_video_jobs**
> GeneratorVideoJobListResponse list_generator_video_jobs(limit=limit, cursor=cursor, status=status, mode=mode)

**Synchronous variant:** `list_generator_video_jobs_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List the current user's video generation jobs

List the authenticated caller’s video-generation jobs with bounded pagination, state, progress, and output summaries.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_video_job_list_response import GeneratorVideoJobListResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    limit = 30 # int | Maximum jobs to return. (optional) (default to 30)
    cursor = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Job ID from which to continue. (optional)
    status = 'queued' # str | Optional lifecycle-status filter. (optional)
    mode = 'txt2video' # str | Optional generation-mode filter. (optional)

    try:
        # List the current user's video generation jobs
        api_response = await api_instance.list_generator_video_jobs(limit=limit, cursor=cursor, status=status, mode=mode)
        print("The response of GeneratorApi->list_generator_video_jobs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->list_generator_video_jobs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum jobs to return. | [optional] [default to 30]
 **cursor** | **UUID**| Job ID from which to continue. | [optional]
 **status** | **str**| Optional lifecycle-status filter. | [optional]
 **mode** | **str**| Optional generation-mode filter. | [optional]

### Return type

[**GeneratorVideoJobListResponse**](GeneratorVideoJobListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Video job history and current quota. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publish_generator_job**
> GeneratorPublishResponse publish_generator_job(id, idempotency_key=idempotency_key, publish_generator_job_request=publish_generator_job_request)

**Synchronous variant:** `publish_generator_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Publish completed generator outputs to site images

Publish a completed caller-owned generator output into the normal image workflow once and return the resulting resource.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_publish_response import GeneratorPublishResponse
from arcenciel.generated.models.publish_generator_job_request import PublishGeneratorJobRequest
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 'example-id' # str | Id provided in the path.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    publish_generator_job_request = {"outputs":["value"]} # PublishGeneratorJobRequest | Request payload for this operation. (optional)

    try:
        # Publish completed generator outputs to site images
        api_response = await api_instance.publish_generator_job(id, idempotency_key=idempotency_key, publish_generator_job_request=publish_generator_job_request)
        print("The response of GeneratorApi->publish_generator_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->publish_generator_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id provided in the path. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **publish_generator_job_request** | [**PublishGeneratorJobRequest**](PublishGeneratorJobRequest.md)| Request payload for this operation. | [optional]

### Return type

[**GeneratorPublishResponse**](GeneratorPublishResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Outputs published. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Job not completed, invalid output selection, or no outputs. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Missing role or safety restriction. |  * X-Request-ID -  <br>  |
**404** | Job or selected outputs not found. |  * X-Request-ID -  <br>  |
**409** | Selected outputs already published. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remix_generator_job**
> RemixGeneratorJob202Response remix_generator_job(id, generator_job_remix_request, idempotency_key=idempotency_key)

**Synchronous variant:** `remix_generator_job_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Queue a new job from an existing one

Create a new caller-owned image-generation job derived from an accessible source job and explicit parameter overrides.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_job_remix_request import GeneratorJobRemixRequest
from arcenciel.generated.models.remix_generator_job202_response import RemixGeneratorJob202Response
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 'example-id' # str | Id provided in the path.
    generator_job_remix_request = {"adetailer":{"adetailerAttentionCouplePolicy":"value","adetailerDenoise":1,"adetailerMaskMode":"value","adetailerTiming":"value","attentionCouplePolicy":"strict-face-bbox","confidence":1,"denoise":0.5,"detectionOrder":"value","detector":"value","dilate":4,"dropSize":1,"enabled":true,"iou":1,"maskBlur":4,"maskMode":"segmentation","maxDetections":2,"model":"value","negativePrompt":"value","positivePrompt":"value","timing":"pre-upscale"},"adetailerDetectionOrder":"value","adetailerNegative":"value","adetailerPositive":"value","attentionCouple":{"enabled":true,"globalPromptWeight":0.01,"regions":[{"maskPath":"value","prompt":"value","weight":1}]},"batchSize":1,"cfg":1,"controlnets":[{"end":1,"imagePath":"value","model":"value","modelName":"value","start":1,"strength":1}],"denoise":1,"extraSeed":1,"extraSeedStrength":1,"height":1,"imagePath":"value","loraName":"value","loras":["value"],"metadata":{},"mode":"txt2img","modelName":"value","negativePrompt":"value","presetId":1,"prompt":"value","promptControl":true,"retentionDays":1,"rfShift":1,"samplerName":"value","scaleFactor":1,"scheduler":"value","schedulerName":"value","seed":1,"sfwMode":true,"steps":1,"tags":["value"],"upscaleProfiles":[{"denoise":1,"model":"value","modelName":"value","upscaleModelName":"value"}],"vaeName":"value","width":1} # GeneratorJobRemixRequest | Request payload for this operation.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Queue a new job from an existing one
        api_response = await api_instance.remix_generator_job(id, generator_job_remix_request, idempotency_key=idempotency_key)
        print("The response of GeneratorApi->remix_generator_job:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->remix_generator_job: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id provided in the path. |
 **generator_job_remix_request** | [**GeneratorJobRemixRequest**](GeneratorJobRemixRequest.md)| Request payload for this operation. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**RemixGeneratorJob202Response**](RemixGeneratorJob202Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Remix job queued. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Access restricted or banned. |  * X-Request-ID -  <br>  |
**404** | Source job or user not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | Limit/budget exceeded. |  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | Generator is disabled (maintenance mode). The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_generator_checkpoints**
> SearchGeneratorCheckpoints200Response search_generator_checkpoints(q=q, limit=limit, base_model=base_model)

**Synchronous variant:** `search_generator_checkpoints_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Search generator checkpoint catalog entries

Search generator checkpoints by the supported query, ownership, availability, and pagination filters.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.search_generator_checkpoints200_response import SearchGeneratorCheckpoints200Response
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    q = 'landscape' # str | Search term (minimum 2 characters). (optional)
    limit = 100 # int | Maximum number of results. (optional) (default to 100)
    base_model = 'example-base-model' # str | Optional base model filter (for example `sdxl` or `sd15`). (optional)

    try:
        # Search generator checkpoint catalog entries
        api_response = await api_instance.search_generator_checkpoints(q=q, limit=limit, base_model=base_model)
        print("The response of GeneratorApi->search_generator_checkpoints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->search_generator_checkpoints: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Search term (minimum 2 characters). | [optional]
 **limit** | **int**| Maximum number of results. | [optional] [default to 100]
 **base_model** | **str**| Optional base model filter (for example &#x60;sdxl&#x60; or &#x60;sd15&#x60;). | [optional]

### Return type

[**SearchGeneratorCheckpoints200Response**](SearchGeneratorCheckpoints200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Checkpoint search result list. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_generator_loras**
> SearchGeneratorLoras200Response search_generator_loras(q=q, limit=limit, base_model=base_model)

**Synchronous variant:** `search_generator_loras_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Search generator LoRA catalog entries

Search generator LoRAs by the supported query, ownership, base-model, availability, and pagination filters.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.search_generator_loras200_response import SearchGeneratorLoras200Response
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    q = 'landscape' # str | Search term (minimum 2 characters). (optional)
    limit = 100 # int | Maximum number of results. (optional) (default to 100)
    base_model = 'example-base-model' # str | Optional base model filter (for example `sdxl` or `sd15`). (optional)

    try:
        # Search generator LoRA catalog entries
        api_response = await api_instance.search_generator_loras(q=q, limit=limit, base_model=base_model)
        print("The response of GeneratorApi->search_generator_loras:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->search_generator_loras: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Search term (minimum 2 characters). | [optional]
 **limit** | **int**| Maximum number of results. | [optional] [default to 100]
 **base_model** | **str**| Optional base model filter (for example &#x60;sdxl&#x60; or &#x60;sd15&#x60;). | [optional]

### Return type

[**SearchGeneratorLoras200Response**](SearchGeneratorLoras200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LoRA search result list. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_generator_events**
> str stream_generator_events()

**Synchronous variant:** `stream_generator_events_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Stream generator events (SSE)

Open a server-sent event stream for caller-owned image-generation job state changes. Clients should reconnect with bounded backoff.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)

    try:
        # Stream generator events (SSE)
        api_response = await api_instance.stream_generator_events()
        print("The response of GeneratorApi->stream_generator_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->stream_generator_events: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Active text/event-stream connection. |  * X-Request-ID -  <br>  |
**401** | Not authenticated (response is typically empty if auth fails before stream handshake). |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_generator_video_events**
> str stream_generator_video_events()

**Synchronous variant:** `stream_generator_video_events_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Stream video job, queue-position, and ETA updates

Open a server-sent event stream for caller-owned video-generation job state changes. Clients should reconnect with bounded backoff.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)

    try:
        # Stream video job, queue-position, and ETA updates
        api_response = await api_instance.stream_generator_video_events()
        print("The response of GeneratorApi->stream_generator_video_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->stream_generator_video_events: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Server-sent video job updates. |  * Cache-Control - Prevents buffering and caching. <br>  * X-Accel-Buffering - Disables reverse-proxy response buffering. <br>  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_generator_video_output**
> bytes stream_generator_video_output(id, range=range)

**Synchronous variant:** `stream_generator_video_output_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Stream a completed generated video

Stream a completed caller-owned video output with HTTP Range support for media players and resumable consumers.

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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = UUID('2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71') # UUID | Video job ID.
    range = 'bytes=0-1048575' # str | Optional RFC 7233 byte range for seeking. (optional)

    try:
        # Stream a completed generated video
        api_response = await api_instance.stream_generator_video_output(id, range=range)
        print("The response of GeneratorApi->stream_generator_video_output:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->stream_generator_video_output: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| Video job ID. |
 **range** | **str**| Optional RFC 7233 byte range for seeking. | [optional]

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: video/mp4, application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Complete H.264 MP4 output. |  * Accept-Ranges -  <br>  * Cache-Control - Private no-store policy. <br>  * Content-Disposition -  <br>  * Content-Length - Response bytes. <br>  * X-Request-ID -  <br>  |
**206** | Requested H.264 MP4 byte range. |  * Accept-Ranges -  <br>  * Cache-Control - Private no-store policy. <br>  * Content-Disposition -  <br>  * Content-Length - Response bytes. <br>  * Content-Range -  <br>  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | Output is pending review, quarantined, or the caller lacks permission. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**416** | Requested byte range is outside the stored video output. |  * Content-Range -  <br>  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **touch_generator_uploads**
> GeneratorUploadTouchResponse touch_generator_uploads(generator_upload_touch_request)

**Synchronous variant:** `touch_generator_uploads_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Refresh expiry for existing generator upload paths

Extend the lifetime of a bounded set of caller-owned temporary generator uploads without creating new upload records.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_upload_touch_request import GeneratorUploadTouchRequest
from arcenciel.generated.models.generator_upload_touch_response import GeneratorUploadTouchResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    generator_upload_touch_request = {"paths":["generator/source-123.png"]} # GeneratorUploadTouchRequest | Request payload for this operation.

    try:
        # Refresh expiry for existing generator upload paths
        api_response = await api_instance.touch_generator_uploads(generator_upload_touch_request)
        print("The response of GeneratorApi->touch_generator_uploads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->touch_generator_uploads: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generator_upload_touch_request** | [**GeneratorUploadTouchRequest**](GeneratorUploadTouchRequest.md)| Request payload for this operation. |

### Return type

[**GeneratorUploadTouchResponse**](GeneratorUploadTouchResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upload expiry refreshed. |  * X-Request-ID -  <br>  |
**400** | Invalid or empty paths payload. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | User banned. |  * X-Request-ID -  <br>  |
**404** | User not found or provided paths no longer exist. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Keepalive operation failed. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_generator_preset**
> GetGeneratorPreset200Response update_generator_preset(id, update_generator_preset_request)

**Synchronous variant:** `update_generator_preset_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update a generator preset

Update the supplied fields of a caller-owned generator preset while preserving unspecified configuration.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.get_generator_preset200_response import GetGeneratorPreset200Response
from arcenciel.generated.models.update_generator_preset_request import UpdateGeneratorPresetRequest
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    id = 1 # int | Id provided in the path.
    update_generator_preset_request = {"description":"value","isPublic":true,"name":"value","payload":{}} # UpdateGeneratorPresetRequest | Request payload for this operation.

    try:
        # Update a generator preset
        api_response = await api_instance.update_generator_preset(id, update_generator_preset_request)
        print("The response of GeneratorApi->update_generator_preset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->update_generator_preset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id provided in the path. |
 **update_generator_preset_request** | [**UpdateGeneratorPresetRequest**](UpdateGeneratorPresetRequest.md)| Request payload for this operation. |

### Return type

[**GetGeneratorPreset200Response**](GetGeneratorPreset200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Preset updated. |  * X-Request-ID -  <br>  |
**400** | Invalid payload or no updates provided. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | Not authorized. |  * X-Request-ID -  <br>  |
**404** | Preset not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_generator_source**
> GeneratorUploadResponse upload_generator_source(image, idempotency_key=idempotency_key, kind=kind)

**Synchronous variant:** `upload_generator_source_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload a source or mask image for generator flows

Upload one validated image source for subsequent image-generation jobs and return its caller-bound temporary identifier.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.generator_upload_response import GeneratorUploadResponse
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
    api_instance = arcenciel.generated.GeneratorApi(api_client)
    image = None # bytes | Image associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    kind = 'SOURCE' # str | Upload classification used for TTL/quota tracking. Unknown values fall back to `SOURCE`. (optional) (default to 'SOURCE')

    try:
        # Upload a source or mask image for generator flows
        api_response = await api_instance.upload_generator_source(image, idempotency_key=idempotency_key, kind=kind)
        print("The response of GeneratorApi->upload_generator_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneratorApi->upload_generator_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **bytes**| Image associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **kind** | **str**| Upload classification used for TTL/quota tracking. Unknown values fall back to &#x60;SOURCE&#x60;. | [optional] [default to &#39;SOURCE&#39;]

### Return type

[**GeneratorUploadResponse**](GeneratorUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Upload stored successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Missing file or invalid payload. |  * X-Request-ID -  <br>  |
**401** | Not authenticated. |  * X-Request-ID -  <br>  |
**403** | User banned. |  * X-Request-ID -  <br>  |
**404** | User not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**413** | Upload quota exceeded or file too large. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Upload storage error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
