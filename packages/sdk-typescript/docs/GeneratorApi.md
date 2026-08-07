# GeneratorApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelGeneratorJob**](GeneratorApi.md#cancelgeneratorjob) | **POST** /api/generator/jobs/{id}/cancel | Cancel a queued or running generator job |
| [**cancelGeneratorVideoJob**](GeneratorApi.md#cancelgeneratorvideojob) | **POST** /api/generator/video/jobs/{id}/cancel | Cancel a queued or active video job |
| [**createGeneratorCompareRun**](GeneratorApi.md#creategeneratorcomparerunoperation) | **POST** /api/generator/jobs/compare | Queue one txt2img prompt across multiple checkpoints |
| [**createGeneratorJob**](GeneratorApi.md#creategeneratorjoboperation) | **POST** /api/generator/jobs | Queue a new generator job |
| [**createGeneratorPreset**](GeneratorApi.md#creategeneratorpresetoperation) | **POST** /api/generator/presets | Create a generator preset |
| [**createGeneratorVideoJob**](GeneratorApi.md#creategeneratorvideojob) | **POST** /api/generator/video/jobs | Reserve quota and queue one remote video generation job |
| [**deleteGeneratorJob**](GeneratorApi.md#deletegeneratorjob) | **DELETE** /api/generator/jobs/{id} | Soft-delete a finished generator job |
| [**deleteGeneratorPreset**](GeneratorApi.md#deletegeneratorpreset) | **DELETE** /api/generator/presets/{id} | Delete a generator preset |
| [**deleteGeneratorVideoJob**](GeneratorApi.md#deletegeneratorvideojob) | **DELETE** /api/generator/video/jobs/{id} | Soft-delete a terminal video job and remove its output |
| [**downloadGeneratorCompareGrid**](GeneratorApi.md#downloadgeneratorcomparegrid) | **GET** /api/generator/compare-runs/{id}/grid/download | Download the compare run grid image |
| [**downloadGeneratorJob**](GeneratorApi.md#downloadgeneratorjob) | **GET** /api/generator/jobs/{id}/download | Download one job as zip |
| [**downloadGeneratorJobOutput**](GeneratorApi.md#downloadgeneratorjoboutput) | **GET** /api/generator/jobs/{id}/outputs/{outputId}/download | Download a single job output file |
| [**downloadGeneratorJobsBulk**](GeneratorApi.md#downloadgeneratorjobsbulkoperation) | **POST** /api/generator/jobs/bulk-download | Download multiple jobs as one zip archive |
| [**downloadGeneratorVideoJob**](GeneratorApi.md#downloadgeneratorvideojob) | **GET** /api/generator/video/jobs/{id}/download | Download a completed generated video |
| [**exportGeneratorPreset**](GeneratorApi.md#exportgeneratorpreset) | **GET** /api/generator/presets/{id}/export | Export a generator preset as JSON |
| [**getGeneratorCatalog**](GeneratorApi.md#getgeneratorcatalog) | **GET** /api/generator/catalog | Legacy alias for generator model catalog |
| [**getGeneratorCompareGrid**](GeneratorApi.md#getgeneratorcomparegrid) | **GET** /api/generator/compare-runs/{id}/grid | Render the compare run grid preview |
| [**getGeneratorCompareRun**](GeneratorApi.md#getgeneratorcomparerun) | **GET** /api/generator/compare-runs/{id} | Get a compare run aggregate |
| [**getGeneratorJob**](GeneratorApi.md#getgeneratorjob) | **GET** /api/generator/jobs/{id} | Get one generator job |
| [**getGeneratorOptions**](GeneratorApi.md#getgeneratoroptions) | **GET** /api/generator/options | Get generator runtime options and per-user quota snapshot |
| [**getGeneratorPreset**](GeneratorApi.md#getgeneratorpreset) | **GET** /api/generator/presets/{id} | Get a generator preset by id |
| [**getGeneratorState**](GeneratorApi.md#getgeneratorstate) | **GET** /api/generator/state | Get generator availability state |
| [**getGeneratorVideoJob**](GeneratorApi.md#getgeneratorvideojob) | **GET** /api/generator/video/jobs/{id} | Get one video generation job |
| [**getGeneratorVideoOptions**](GeneratorApi.md#getgeneratorvideooptions) | **GET** /api/generator/video/options | Get video presets, limits, capabilities, and quota |
| [**getGeneratorVideoSource**](GeneratorApi.md#getgeneratorvideosource) | **GET** /api/generator/video/jobs/{id}/source/{slot} | Stream an owned or staff-visible video source frame |
| [**getGeneratorVideoState**](GeneratorApi.md#getgeneratorvideostate) | **GET** /api/generator/video/state | Get video generator visibility and availability |
| [**interrogateGeneratorImage**](GeneratorApi.md#interrogategeneratorimage) | **POST** /api/generator/autotag/interrogate | Interrogate uploaded image with autotagger (artist+) |
| [**interrogateGeneratorImageUrl**](GeneratorApi.md#interrogategeneratorimageurloperation) | **POST** /api/generator/autotag/interrogate-url | Interrogate image from allowlisted URL (artist+) |
| [**listGeneratorJobs**](GeneratorApi.md#listgeneratorjobs) | **GET** /api/generator/jobs | List your generator jobs |
| [**listGeneratorModels**](GeneratorApi.md#listgeneratormodels) | **GET** /api/generator/models | List generator model catalog entries |
| [**listGeneratorPresets**](GeneratorApi.md#listgeneratorpresets) | **GET** /api/generator/presets | List generator presets |
| [**listGeneratorTagSuggestions**](GeneratorApi.md#listgeneratortagsuggestions) | **GET** /api/generator/tags/autocomplete | Autocomplete generator tags |
| [**listGeneratorVideoJobs**](GeneratorApi.md#listgeneratorvideojobs) | **GET** /api/generator/video/jobs | List the current user\&#39;s video generation jobs |
| [**publishGeneratorJob**](GeneratorApi.md#publishgeneratorjoboperation) | **POST** /api/generator/jobs/{id}/publish | Publish completed generator outputs to site images |
| [**remixGeneratorJob**](GeneratorApi.md#remixgeneratorjob) | **POST** /api/generator/jobs/{id}/remix | Queue a new job from an existing one |
| [**searchGeneratorCheckpoints**](GeneratorApi.md#searchgeneratorcheckpoints) | **GET** /api/generator/models/checkpoints | Search generator checkpoint catalog entries |
| [**searchGeneratorLoras**](GeneratorApi.md#searchgeneratorloras) | **GET** /api/generator/models/loras | Search generator LoRA catalog entries |
| [**streamGeneratorEvents**](GeneratorApi.md#streamgeneratorevents) | **GET** /api/generator/events | Stream generator events (SSE) |
| [**streamGeneratorVideoEvents**](GeneratorApi.md#streamgeneratorvideoevents) | **GET** /api/generator/video/events | Stream video job, queue-position, and ETA updates |
| [**streamGeneratorVideoOutput**](GeneratorApi.md#streamgeneratorvideooutput) | **GET** /api/generator/video/jobs/{id}/output | Stream a completed generated video |
| [**touchGeneratorUploads**](GeneratorApi.md#touchgeneratoruploads) | **POST** /api/generator/uploads/touch | Refresh expiry for existing generator upload paths |
| [**updateGeneratorPreset**](GeneratorApi.md#updategeneratorpresetoperation) | **PATCH** /api/generator/presets/{id} | Update a generator preset |
| [**uploadGeneratorSource**](GeneratorApi.md#uploadgeneratorsource) | **POST** /api/generator/uploads | Upload a source or mask image for generator flows |



## cancelGeneratorJob

> GeneratorJobEnvelope cancelGeneratorJob(id)

Cancel a queued or running generator job

Cancel one caller-owned image-generation job when its current state allows cancellation. Repeated calls do not create additional work.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { CancelGeneratorJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
  } satisfies CancelGeneratorJobRequest;

  try {
    const data = await api.cancelGeneratorJob(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**GeneratorJobEnvelope**](GeneratorJobEnvelope.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cancel request accepted. |  * X-Request-ID -  <br>  |
| **400** | Missing job id. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Job not found. |  * X-Request-ID -  <br>  |
| **409** | Job is already completed/failed. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelGeneratorVideoJob

> GeneratorVideoJobWithQuotaResponse cancelGeneratorVideoJob(id)

Cancel a queued or active video job

Cancel one caller-owned video-generation job when its current state allows cancellation. Repeated calls do not create additional work.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { CancelGeneratorVideoJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Video job ID.
    id: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
  } satisfies CancelGeneratorVideoJobRequest;

  try {
    const data = await api.cancelGeneratorVideoJob(body);
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
| **id** | `string` | Video job ID. | [Defaults to `undefined`] |

### Return type

[**GeneratorVideoJobWithQuotaResponse**](GeneratorVideoJobWithQuotaResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cancelled video job and updated quota. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGeneratorCompareRun

> GeneratorCompareResponse createGeneratorCompareRun(createGeneratorCompareRunRequest, idempotencyKey)

Queue one txt2img prompt across multiple checkpoints

Create a bounded image-generation comparison run across the requested axes and return its caller-owned jobs.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { CreateGeneratorCompareRunOperationRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // CreateGeneratorCompareRunRequest | Request payload for this operation.
    createGeneratorCompareRunRequest: {"adetailer":{"adetailerAttentionCouplePolicy":"value","adetailerDenoise":1,"adetailerMaskMode":"value","adetailerTiming":"value","attentionCouplePolicy":"strict-face-bbox","confidence":1,"denoise":0.5,"detectionOrder":"value","detector":"value","dilate":4,"dropSize":1,"enabled":true,"iou":1,"maskBlur":4,"maskMode":"segmentation","maxDetections":2,"model":"value","negativePrompt":"value","positivePrompt":"value","timing":"pre-upscale"},"adetailerDetectionOrder":"value","adetailerNegative":"value","adetailerPositive":"value","attentionCouple":{"enabled":true,"globalPromptWeight":0.01,"regions":[{"maskPath":"value","prompt":"value","weight":1}]},"batchSize":1,"cfg":1,"controlnets":[{"end":1,"imagePath":"value","model":"value","modelName":"value","start":1,"strength":1}],"denoise":1,"extraSeed":1,"extraSeedStrength":1,"height":1,"loraName":"value","loras":["value"],"metadata":{},"mode":"txt2img","modelName":"value","modelNames":["value","value"],"negativePrompt":"value","presetId":1,"prompt":"value","promptControl":true,"retentionDays":1,"rfShift":1,"samplerName":"value","scaleFactor":1,"scheduler":"value","schedulerName":"value","seed":1,"sfwMode":true,"steps":1,"tags":["value"],"upscaleProfiles":[{"denoise":1,"model":"value","modelName":"value","upscaleModelName":"value"}],"vaeName":"value","width":1},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateGeneratorCompareRunOperationRequest;

  try {
    const data = await api.createGeneratorCompareRun(body);
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
| **createGeneratorCompareRunRequest** | [CreateGeneratorCompareRunRequest](CreateGeneratorCompareRunRequest.md) | Request payload for this operation. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**GeneratorCompareResponse**](GeneratorCompareResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Compare jobs queued. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid payload, target count, mode, duplicate target, or incompatible LoRA/base family. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | User banned or restricted by policy. |  * X-Request-ID -  <br>  |
| **404** | User/preset not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | Daily/pending/budget limits exceeded for the aggregate run. |  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | Generator is disabled (maintenance mode). The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGeneratorJob

> GeneratorJobEnvelope createGeneratorJob(createGeneratorJobRequest, idempotencyKey)

Queue a new generator job

Create an image-generation job from validated parameters, caller-visible models, and caller-owned source uploads.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { CreateGeneratorJobOperationRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // CreateGeneratorJobRequest | Request payload for this operation.
    createGeneratorJobRequest: {"adetailer":{"adetailerAttentionCouplePolicy":"value","adetailerDenoise":1,"adetailerMaskMode":"value","adetailerTiming":"value","attentionCouplePolicy":"strict-face-bbox","confidence":1,"denoise":0.5,"detectionOrder":"value","detector":"value","dilate":4,"dropSize":1,"enabled":true,"iou":1,"maskBlur":4,"maskMode":"segmentation","maxDetections":2,"model":"value","negativePrompt":"value","positivePrompt":"value","timing":"pre-upscale"},"adetailerDetectionOrder":"value","adetailerNegative":"value","adetailerPositive":"value","attentionCouple":{"enabled":true,"globalPromptWeight":0.01,"regions":[{"maskPath":"value","prompt":"value","weight":1}]},"batchSize":1,"cfg":1,"controlnets":[{"end":1,"imagePath":"value","model":"value","modelName":"value","start":1,"strength":1}],"denoise":1,"extraSeed":1,"extraSeedStrength":1,"height":1,"imagePath":"value","loraName":"value","loras":["value"],"metadata":{},"mode":"txt2img","modelName":"value","negativePrompt":"value","presetId":1,"prompt":"value","promptControl":true,"retentionDays":1,"rfShift":1,"samplerName":"value","scaleFactor":1,"scheduler":"value","schedulerName":"value","seed":1,"sfwMode":true,"steps":1,"tags":["value"],"upscaleProfiles":[{"denoise":1,"model":"value","modelName":"value","upscaleModelName":"value"}],"vaeName":"value","width":1},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateGeneratorJobOperationRequest;

  try {
    const data = await api.createGeneratorJob(body);
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
| **createGeneratorJobRequest** | [CreateGeneratorJobRequest](CreateGeneratorJobRequest.md) | Request payload for this operation. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**GeneratorJobEnvelope**](GeneratorJobEnvelope.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Job queued. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid payload (range checks, unknown model, invalid mode/paths, etc.). |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | User banned or restricted by policy. |  * X-Request-ID -  <br>  |
| **404** | User/preset not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | Daily/pending/budget limits exceeded. |  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | Generator is disabled (maintenance mode). The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGeneratorPreset

> CreateGeneratorPreset201Response createGeneratorPreset(createGeneratorPresetRequest, idempotencyKey)

Create a generator preset

Create a reusable generator preset for the authenticated caller from a validated name and generation configuration.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { CreateGeneratorPresetOperationRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // CreateGeneratorPresetRequest | Request payload for this operation.
    createGeneratorPresetRequest: {"description":"value","isPublic":true,"name":"value","payload":{}},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateGeneratorPresetOperationRequest;

  try {
    const data = await api.createGeneratorPreset(body);
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
| **createGeneratorPresetRequest** | [CreateGeneratorPresetRequest](CreateGeneratorPresetRequest.md) | Request payload for this operation. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateGeneratorPreset201Response**](CreateGeneratorPreset201Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Preset created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGeneratorVideoJob

> GeneratorVideoJobWithQuotaResponse createGeneratorVideoJob(generatorVideoCreateRequest, idempotencyKey)

Reserve quota and queue one remote video generation job

Create a video-generation job from validated parameters, caller-visible models, and authorized source assets.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { CreateGeneratorVideoJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // GeneratorVideoCreateRequest | Mode- and duration-specific video generation request.
    generatorVideoCreateRequest: {"aspectRatio":"4:3","audioEnabled":false,"frames":124,"mode":"txt2video","negativePrompt":"flicker, unstable motion, warped anatomy","prompt":"Integrated multimodal description: A fox runs through a misty forest while the camera tracks alongside.","promptPreset":"cinematic-scene","resolutionBucket":512,"seed":"42","sfwMode":true,"steps":25},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateGeneratorVideoJobRequest;

  try {
    const data = await api.createGeneratorVideoJob(body);
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
| **generatorVideoCreateRequest** | [GeneratorVideoCreateRequest](GeneratorVideoCreateRequest.md) | Mode- and duration-specific video generation request. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**GeneratorVideoJobWithQuotaResponse**](GeneratorVideoJobWithQuotaResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Video job queued with quota reserved. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The operation is temporarily unavailable because a required service, dependency, or integration is unavailable. The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGeneratorJob

> deleteGeneratorJob(id)

Soft-delete a finished generator job

Delete one caller-owned image-generation job and its managed outputs when runtime state permits. Repeating the request leaves it absent.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { DeleteGeneratorJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
  } satisfies DeleteGeneratorJobRequest;

  try {
    const data = await api.deleteGeneratorJob(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Deleted. |  * X-Request-ID -  <br>  |
| **400** | Missing job id. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Job not found. |  * X-Request-ID -  <br>  |
| **409** | Running/queued jobs cannot be deleted. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Delete failed. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGeneratorPreset

> DeleteGeneratorPreset200Response deleteGeneratorPreset(id)

Delete a generator preset

Delete one caller-owned generator preset. Repeating the operation leaves the preset absent.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { DeleteGeneratorPresetRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // number | Id provided in the path.
    id: 1,
  } satisfies DeleteGeneratorPresetRequest;

  try {
    const data = await api.deleteGeneratorPreset(body);
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
| **id** | `number` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeleteGeneratorPreset200Response**](DeleteGeneratorPreset200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Preset deleted. |  * X-Request-ID -  <br>  |
| **400** | Invalid preset id. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Not authorized. |  * X-Request-ID -  <br>  |
| **404** | Preset not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGeneratorVideoJob

> deleteGeneratorVideoJob(id)

Soft-delete a terminal video job and remove its output

Delete one caller-owned video-generation job and its managed outputs when runtime state permits. Repeating the request leaves it absent.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { DeleteGeneratorVideoJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Video job ID.
    id: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
  } satisfies DeleteGeneratorVideoJobRequest;

  try {
    const data = await api.deleteGeneratorVideoJob(body);
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
| **id** | `string` | Video job ID. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Video job deleted with no response body. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadGeneratorCompareGrid

> Blob downloadGeneratorCompareGrid(id)

Download the compare run grid image

Download the generated comparison grid image for a completed caller-owned comparison run with an attachment filename.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { DownloadGeneratorCompareGridRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
  } satisfies DownloadGeneratorCompareGridRequest;

  try {
    const data = await api.downloadGeneratorCompareGrid(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/png`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | PNG compare grid attachment. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | One or more child outputs are safety restricted. |  * X-Request-ID -  <br>  |
| **404** | Grid is unavailable or outputs are missing. |  * X-Request-ID -  <br>  |
| **409** | Compare run is still queued/running. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadGeneratorJob

> Blob downloadGeneratorJob(id)

Download one job as zip

Download the primary image output of a completed caller-owned generation job with integrity and content metadata.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { DownloadGeneratorJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
  } satisfies DownloadGeneratorJobRequest;

  try {
    const data = await api.downloadGeneratorJob(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/zip`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Zip stream with all job outputs. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Safety restriction blocks download. |  * X-Request-ID -  <br>  |
| **404** | Job/output not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Failed to build download archive. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadGeneratorJobOutput

> Blob downloadGeneratorJobOutput(id, outputId)

Download a single job output file

Download a selected image output of a completed caller-owned generation job with integrity and content metadata.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { DownloadGeneratorJobOutputRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
    // string | Output selector. - `0`, `1`, ...: zero-based index in `job.outputs` - URL-encoded relative path from `${subfolder}/${filename}` (example: `nested%2Fleaf.png`) - `generator/` prefix is optional (`generator%2Fnested%2Fleaf.png` also works)
    outputId: 0,
  } satisfies DownloadGeneratorJobOutputRequest;

  try {
    const data = await api.downloadGeneratorJobOutput(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |
| **outputId** | `string` | Output selector. - &#x60;0&#x60;, &#x60;1&#x60;, ...: zero-based index in &#x60;job.outputs&#x60; - URL-encoded relative path from &#x60;${subfolder}/${filename}&#x60; (example: &#x60;nested%2Fleaf.png&#x60;) - &#x60;generator/&#x60; prefix is optional (&#x60;generator%2Fnested%2Fleaf.png&#x60; also works)  | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Binary file stream. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Safety restriction blocks download. |  * X-Request-ID -  <br>  |
| **404** | Job/output not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Failed to download output. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadGeneratorJobsBulk

> Blob downloadGeneratorJobsBulk(ids, downloadGeneratorJobsBulkRequest)

Download multiple jobs as one zip archive

Stream a ZIP archive for a bounded set of completed caller-owned image-generation jobs.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { DownloadGeneratorJobsBulkOperationRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Optional comma-separated job id list. Use this or request body `ids`.  (optional)
    ids: example-ids,
    // DownloadGeneratorJobsBulkRequest | Request payload for this operation. (optional)
    downloadGeneratorJobsBulkRequest: {"ids":["value"]},
  } satisfies DownloadGeneratorJobsBulkOperationRequest;

  try {
    const data = await api.downloadGeneratorJobsBulk(body);
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
| **ids** | `string` | Optional comma-separated job id list. Use this or request body &#x60;ids&#x60;.  | [Optional] [Defaults to `undefined`] |
| **downloadGeneratorJobsBulkRequest** | [DownloadGeneratorJobsBulkRequest](DownloadGeneratorJobsBulkRequest.md) | Request payload for this operation. | [Optional] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/zip`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Zip stream containing selected outputs. |  * X-Request-ID -  <br>  |
| **400** | Invalid ids payload or too many jobs requested. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Safety restriction blocks download. |  * X-Request-ID -  <br>  |
| **404** | No matching jobs/outputs found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Failed to build download archive. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadGeneratorVideoJob

> Blob downloadGeneratorVideoJob(id, range)

Download a completed generated video

Download a completed caller-owned video output with HTTP Range support and an attachment filename.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { DownloadGeneratorVideoJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Video job ID.
    id: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
    // string | Optional RFC 7233 byte range. (optional)
    range: bytes=0-1048575,
  } satisfies DownloadGeneratorVideoJobRequest;

  try {
    const data = await api.downloadGeneratorVideoJob(body);
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
| **id** | `string` | Video job ID. | [Defaults to `undefined`] |
| **range** | `string` | Optional RFC 7233 byte range. | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `video/mp4`, `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complete H.264 MP4 attachment. |  * Accept-Ranges - Supported range unit. <br>  * Cache-Control - Private no-store policy. <br>  * Content-Disposition - Attachment filename disposition. <br>  * Content-Length - Response bytes. <br>  * X-Request-ID -  <br>  |
| **206** | Requested H.264 MP4 byte range. |  * Accept-Ranges - Supported range unit. <br>  * Cache-Control - Private no-store policy. <br>  * Content-Disposition - Attachment filename disposition. <br>  * Content-Length - Response bytes. <br>  * Content-Range - Served byte range and total size. <br>  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | Output is pending review, quarantined, or the caller lacks permission. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **416** | Requested byte range is outside the stored video output. |  * Content-Range - Unsatisfied range and complete representation length. <br>  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportGeneratorPreset

> GeneratorPresetExport exportGeneratorPreset(id)

Export a generator preset as JSON

Export one caller-owned generator preset as portable JSON with a download-safe filename.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { ExportGeneratorPresetRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // number | Id provided in the path.
    id: 1,
  } satisfies ExportGeneratorPresetRequest;

  try {
    const data = await api.exportGeneratorPreset(body);
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
| **id** | `number` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**GeneratorPresetExport**](GeneratorPresetExport.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Downloadable preset export payload. |  * X-Request-ID -  <br>  |
| **400** | Invalid preset id. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Not authorized. |  * X-Request-ID -  <br>  |
| **404** | Preset not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Preset payload could not be exported. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorCatalog

> GeneratorModelCatalog getGeneratorCatalog(includeLoras)

Legacy alias for generator model catalog

List the image-generator model catalogue visible to the caller, including supported checkpoints, LoRAs, capabilities, and availability metadata.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorCatalogRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // boolean | Include Loras provided in the query. (optional)
    includeLoras: false,
  } satisfies GetGeneratorCatalogRequest;

  try {
    const data = await api.getGeneratorCatalog(body);
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
| **includeLoras** | `boolean` | Include Loras provided in the query. | [Optional] [Defaults to `false`] |

### Return type

[**GeneratorModelCatalog**](GeneratorModelCatalog.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model catalog payload. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorCompareGrid

> Blob getGeneratorCompareGrid(id)

Render the compare run grid preview

Return the generated comparison grid image for a completed caller-owned comparison run.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorCompareGridRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
  } satisfies GetGeneratorCompareGridRequest;

  try {
    const data = await api.getGeneratorCompareGrid(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/webp`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | WebP compare grid preview. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | One or more child outputs are safety restricted. |  * X-Request-ID -  <br>  |
| **404** | Grid is unavailable or outputs are missing. |  * X-Request-ID -  <br>  |
| **409** | Compare run is still queued/running. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorCompareRun

> GeneratorCompareResponse getGeneratorCompareRun(id)

Get a compare run aggregate

Return one caller-owned image comparison run and the jobs, axes, state, and grid metadata associated with it.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorCompareRunRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
  } satisfies GetGeneratorCompareRunRequest;

  try {
    const data = await api.getGeneratorCompareRun(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**GeneratorCompareResponse**](GeneratorCompareResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Compare run aggregate. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Compare run not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorJob

> GeneratorJobEnvelope getGeneratorJob(id)

Get one generator job

Return one image-generation job owned by the authenticated caller, including progress, parameters, errors, and output metadata.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
  } satisfies GetGeneratorJobRequest;

  try {
    const data = await api.getGeneratorJob(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**GeneratorJobEnvelope**](GeneratorJobEnvelope.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job payload. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Job not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorOptions

> GeneratorOptionsResponse getGeneratorOptions()

Get generator runtime options and per-user quota snapshot

Return the caller-specific image generation option catalogue, allowed limits, samplers, schedulers, and feature capabilities.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorOptionsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  try {
    const data = await api.getGeneratorOptions();
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

[**GeneratorOptionsResponse**](GeneratorOptionsResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Generator options payload. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | User not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorPreset

> GetGeneratorPreset200Response getGeneratorPreset(id)

Get a generator preset by id

Return one reusable generator preset owned by the authenticated caller, including its validated configuration.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorPresetRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // number | Id provided in the path.
    id: 1,
  } satisfies GetGeneratorPresetRequest;

  try {
    const data = await api.getGeneratorPreset(body);
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
| **id** | `number` | Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**GetGeneratorPreset200Response**](GetGeneratorPreset200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Preset payload. |  * X-Request-ID -  <br>  |
| **400** | Invalid preset id. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Not authorized. |  * X-Request-ID -  <br>  |
| **404** | Preset not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorState

> GeneratorState getGeneratorState()

Get generator availability state

Return public image-generator availability and maintenance state. The response does not expose worker credentials, queues, or administrative controls.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorStateRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  try {
    const data = await api.getGeneratorState();
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

[**GeneratorState**](GeneratorState.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current generator state. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorVideoJob

> GeneratorVideoJobEnvelope getGeneratorVideoJob(id)

Get one video generation job

Return one video-generation job owned by the authenticated caller, including progress, parameters, moderation state, and output metadata.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorVideoJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Video job ID.
    id: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
  } satisfies GetGeneratorVideoJobRequest;

  try {
    const data = await api.getGeneratorVideoJob(body);
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
| **id** | `string` | Video job ID. | [Defaults to `undefined`] |

### Return type

[**GeneratorVideoJobEnvelope**](GeneratorVideoJobEnvelope.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Video job. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorVideoOptions

> GeneratorVideoOptionsResponse getGeneratorVideoOptions()

Get video presets, limits, capabilities, and quota

Return the caller-specific video generation option catalogue, supported models, limits, and input capabilities.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorVideoOptionsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  try {
    const data = await api.getGeneratorVideoOptions();
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

[**GeneratorVideoOptionsResponse**](GeneratorVideoOptionsResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Video generator options. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorVideoSource

> Blob getGeneratorVideoSource(id, slot)

Stream an owned or staff-visible video source frame

Stream an authorized source asset for a caller-owned video-generation job. The slot identifies a documented input position.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorVideoSourceRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Video job ID.
    id: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
    // 'first' | 'last' | Requested source-frame slot.
    slot: first,
  } satisfies GetGeneratorVideoSourceRequest;

  try {
    const data = await api.getGeneratorVideoSource(body);
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
| **id** | `string` | Video job ID. | [Defaults to `undefined`] |
| **slot** | `first`, `last` | Requested source-frame slot. | [Defaults to `undefined`] [Enum: first, last] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/jpeg`, `image/png`, `image/webp`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Source image bytes in the stored format. |  * Cache-Control - Private no-store policy. <br>  * Content-Length - Response bytes. <br>  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneratorVideoState

> GeneratorVideoState getGeneratorVideoState()

Get video generator visibility and availability

Return caller-visible video-generator availability, maintenance state, and feature readiness.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { GetGeneratorVideoStateRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  try {
    const data = await api.getGeneratorVideoState();
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

[**GeneratorVideoState**](GeneratorVideoState.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Viewer-specific video generator state. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## interrogateGeneratorImage

> InterrogateGeneratorImage200Response interrogateGeneratorImage(image)

Interrogate uploaded image with autotagger (artist+)

Upload one validated image and return generator prompt tags inferred for the authenticated caller.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { InterrogateGeneratorImageRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // Blob | Image accepted or returned by this contract.
    image: BINARY_DATA_HERE,
  } satisfies InterrogateGeneratorImageRequest;

  try {
    const data = await api.interrogateGeneratorImage(body);
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
| **image** | `Blob` | Image accepted or returned by this contract. | [Defaults to `undefined`] |

### Return type

[**InterrogateGeneratorImage200Response**](InterrogateGeneratorImage200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tags generated successfully. |  * X-Request-ID -  <br>  |
| **400** | Missing upload or invalid input. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Role not allowed. |  * X-Request-ID -  <br>  |
| **413** | Uploaded image too large. |  * X-Request-ID -  <br>  |
| **422** | Tagger could not process image. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **502** | Autotagger unavailable. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## interrogateGeneratorImageUrl

> InterrogateGeneratorImageUrl200Response interrogateGeneratorImageUrl(interrogateGeneratorImageUrlRequest)

Interrogate image from allowlisted URL (artist+)

Fetch one supported image URL through the guarded media pipeline and return inferred generator prompt tags.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { InterrogateGeneratorImageUrlOperationRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // InterrogateGeneratorImageUrlRequest | Request payload for this operation.
    interrogateGeneratorImageUrlRequest: {"imageUrl":"https://cdn.discordapp.com/attachments/123/example.png"},
  } satisfies InterrogateGeneratorImageUrlOperationRequest;

  try {
    const data = await api.interrogateGeneratorImageUrl(body);
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
| **interrogateGeneratorImageUrlRequest** | [InterrogateGeneratorImageUrlRequest](InterrogateGeneratorImageUrlRequest.md) | Request payload for this operation. | |

### Return type

[**InterrogateGeneratorImageUrl200Response**](InterrogateGeneratorImageUrl200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tags generated successfully. |  * X-Request-ID -  <br>  |
| **400** | Invalid URL, unsafe URL, or fetch failed. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Role not allowed or host not allowlisted. |  * X-Request-ID -  <br>  |
| **413** | Remote image too large. |  * X-Request-ID -  <br>  |
| **415** | Remote content type is not a supported image format. |  * X-Request-ID -  <br>  |
| **422** | Tagger could not process image. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **502** | Remote fetch or autotagger unavailable. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGeneratorJobs

> GeneratorJobListResponse listGeneratorJobs(take, cursor, status, mode, q, query, tags, tagSource, tagMode, createdFrom, createdTo, hasOutputs, hasLoras)

List your generator jobs

List the authenticated caller’s image-generation jobs with bounded pagination, state, progress, and output summaries.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { ListGeneratorJobsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // number | Take provided in the query. (optional)
    take: 20,
    // string | Opaque cursor from previous response (`gc:*` composite cursor supported; legacy ids still accepted). (optional)
    cursor: next-page,
    // string | Comma-separated values (`queued,running,completed,failed`). (optional)
    status: example-status,
    // string | Comma-separated values (`txt2img,img2img,inpaint`). (optional)
    mode: example-mode,
    // string | Text search alias for `query`. (optional)
    q: landscape,
    // string | Text search across prompt/negativePrompt/model fields. (optional)
    query: landscape,
    // string | Comma-separated tag filter. (optional)
    tags: example-tags,
    // 'manual' | 'auto' | 'any' | Tag Source provided in the query. (optional)
    tagSource: manual,
    // 'any' | 'all' | Tag Mode provided in the query. (optional)
    tagMode: any,
    // string | Accepts full datetime or `YYYY-MM-DD`. (optional)
    createdFrom: 2026-07-28T10:00:00.000Z,
    // string | Accepts full datetime or `YYYY-MM-DD`. (optional)
    createdTo: 2026-07-28T10:00:00.000Z,
    // boolean | Boolean filter (`true/false`, `1/0`, `yes/no`, `on/off`). (optional)
    hasOutputs: true,
    // boolean | Boolean filter (`true/false`, `1/0`, `yes/no`, `on/off`). Evaluates presence of legacy `loraName` on jobs.  (optional)
    hasLoras: true,
  } satisfies ListGeneratorJobsRequest;

  try {
    const data = await api.listGeneratorJobs(body);
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
| **take** | `number` | Take provided in the query. | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Opaque cursor from previous response (&#x60;gc:*&#x60; composite cursor supported; legacy ids still accepted). | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Comma-separated values (&#x60;queued,running,completed,failed&#x60;). | [Optional] [Defaults to `undefined`] |
| **mode** | `string` | Comma-separated values (&#x60;txt2img,img2img,inpaint&#x60;). | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Text search alias for &#x60;query&#x60;. | [Optional] [Defaults to `undefined`] |
| **query** | `string` | Text search across prompt/negativePrompt/model fields. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Comma-separated tag filter. | [Optional] [Defaults to `undefined`] |
| **tagSource** | `manual`, `auto`, `any` | Tag Source provided in the query. | [Optional] [Defaults to `undefined`] [Enum: manual, auto, any] |
| **tagMode** | `any`, `all` | Tag Mode provided in the query. | [Optional] [Defaults to `undefined`] [Enum: any, all] |
| **createdFrom** | `string` | Accepts full datetime or &#x60;YYYY-MM-DD&#x60;. | [Optional] [Defaults to `undefined`] |
| **createdTo** | `string` | Accepts full datetime or &#x60;YYYY-MM-DD&#x60;. | [Optional] [Defaults to `undefined`] |
| **hasOutputs** | `boolean` | Boolean filter (&#x60;true/false&#x60;, &#x60;1/0&#x60;, &#x60;yes/no&#x60;, &#x60;on/off&#x60;). | [Optional] [Defaults to `undefined`] |
| **hasLoras** | `boolean` | Boolean filter (&#x60;true/false&#x60;, &#x60;1/0&#x60;, &#x60;yes/no&#x60;, &#x60;on/off&#x60;). Evaluates presence of legacy &#x60;loraName&#x60; on jobs.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GeneratorJobListResponse**](GeneratorJobListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated job list. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGeneratorModels

> GeneratorModelCatalog listGeneratorModels(includeLoras)

List generator model catalog entries

List the generator model catalogue using the compatibility route retained for existing integrations.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { ListGeneratorModelsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // boolean | Include full LoRA catalog entries. Accepts `true/false`, `1/0`, `yes/no`, `on/off`. (optional)
    includeLoras: false,
  } satisfies ListGeneratorModelsRequest;

  try {
    const data = await api.listGeneratorModels(body);
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
| **includeLoras** | `boolean` | Include full LoRA catalog entries. Accepts &#x60;true/false&#x60;, &#x60;1/0&#x60;, &#x60;yes/no&#x60;, &#x60;on/off&#x60;. | [Optional] [Defaults to `false`] |

### Return type

[**GeneratorModelCatalog**](GeneratorModelCatalog.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model catalog payload. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGeneratorPresets

> ListGeneratorPresets200Response listGeneratorPresets(scope)

List generator presets

List reusable generator presets owned by the authenticated caller with their current configuration summaries.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { ListGeneratorPresetsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // 'mine' | 'public' | 'all' | Preset scope filter. (optional)
    scope: mine,
  } satisfies ListGeneratorPresetsRequest;

  try {
    const data = await api.listGeneratorPresets(body);
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
| **scope** | `mine`, `public`, `all` | Preset scope filter. | [Optional] [Defaults to `undefined`] [Enum: mine, public, all] |

### Return type

[**ListGeneratorPresets200Response**](ListGeneratorPresets200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Preset list. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGeneratorTagSuggestions

> GeneratorTagSuggestionsResponse listGeneratorTagSuggestions(q, limit, includeAliases)

Autocomplete generator tags

Return bounded generator prompt-tag suggestions for the supplied prefix so clients can implement accessible autocomplete.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { ListGeneratorTagSuggestionsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Search term. (optional)
    q: landscape,
    // number | Limit provided in the query. (optional)
    limit: 20,
    // boolean | Include alias matches. (optional)
    includeAliases: true,
  } satisfies ListGeneratorTagSuggestionsRequest;

  try {
    const data = await api.listGeneratorTagSuggestions(body);
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
| **q** | `string` | Search term. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Limit provided in the query. | [Optional] [Defaults to `20`] |
| **includeAliases** | `boolean` | Include alias matches. | [Optional] [Defaults to `true`] |

### Return type

[**GeneratorTagSuggestionsResponse**](GeneratorTagSuggestionsResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tag suggestion list. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGeneratorVideoJobs

> GeneratorVideoJobListResponse listGeneratorVideoJobs(limit, cursor, status, mode)

List the current user\&#39;s video generation jobs

List the authenticated caller’s video-generation jobs with bounded pagination, state, progress, and output summaries.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { ListGeneratorVideoJobsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // number | Maximum jobs to return. (optional)
    limit: 30,
    // string | Job ID from which to continue. (optional)
    cursor: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
    // 'queued' | 'running' | 'finalizing' | 'completed' | 'failed' | 'cancelled' | Optional lifecycle-status filter. (optional)
    status: queued,
    // 'txt2video' | 'image2video' | Optional generation-mode filter. (optional)
    mode: txt2video,
  } satisfies ListGeneratorVideoJobsRequest;

  try {
    const data = await api.listGeneratorVideoJobs(body);
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
| **limit** | `number` | Maximum jobs to return. | [Optional] [Defaults to `30`] |
| **cursor** | `string` | Job ID from which to continue. | [Optional] [Defaults to `undefined`] |
| **status** | `queued`, `running`, `finalizing`, `completed`, `failed`, `cancelled` | Optional lifecycle-status filter. | [Optional] [Defaults to `undefined`] [Enum: queued, running, finalizing, completed, failed, cancelled] |
| **mode** | `txt2video`, `image2video` | Optional generation-mode filter. | [Optional] [Defaults to `undefined`] [Enum: txt2video, image2video] |

### Return type

[**GeneratorVideoJobListResponse**](GeneratorVideoJobListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Video job history and current quota. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publishGeneratorJob

> GeneratorPublishResponse publishGeneratorJob(id, idempotencyKey, publishGeneratorJobRequest)

Publish completed generator outputs to site images

Publish a completed caller-owned generator output into the normal image workflow once and return the resulting resource.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { PublishGeneratorJobOperationRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
    // PublishGeneratorJobRequest | Request payload for this operation. (optional)
    publishGeneratorJobRequest: {"outputs":["value"]},
  } satisfies PublishGeneratorJobOperationRequest;

  try {
    const data = await api.publishGeneratorJob(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **publishGeneratorJobRequest** | [PublishGeneratorJobRequest](PublishGeneratorJobRequest.md) | Request payload for this operation. | [Optional] |

### Return type

[**GeneratorPublishResponse**](GeneratorPublishResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Outputs published. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Job not completed, invalid output selection, or no outputs. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Missing role or safety restriction. |  * X-Request-ID -  <br>  |
| **404** | Job or selected outputs not found. |  * X-Request-ID -  <br>  |
| **409** | Selected outputs already published. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## remixGeneratorJob

> RemixGeneratorJob202Response remixGeneratorJob(id, generatorJobRemixRequest, idempotencyKey)

Queue a new job from an existing one

Create a new caller-owned image-generation job derived from an accessible source job and explicit parameter overrides.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { RemixGeneratorJobRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
    // GeneratorJobRemixRequest | Request payload for this operation.
    generatorJobRemixRequest: {"adetailer":{"adetailerAttentionCouplePolicy":"value","adetailerDenoise":1,"adetailerMaskMode":"value","adetailerTiming":"value","attentionCouplePolicy":"strict-face-bbox","confidence":1,"denoise":0.5,"detectionOrder":"value","detector":"value","dilate":4,"dropSize":1,"enabled":true,"iou":1,"maskBlur":4,"maskMode":"segmentation","maxDetections":2,"model":"value","negativePrompt":"value","positivePrompt":"value","timing":"pre-upscale"},"adetailerDetectionOrder":"value","adetailerNegative":"value","adetailerPositive":"value","attentionCouple":{"enabled":true,"globalPromptWeight":0.01,"regions":[{"maskPath":"value","prompt":"value","weight":1}]},"batchSize":1,"cfg":1,"controlnets":[{"end":1,"imagePath":"value","model":"value","modelName":"value","start":1,"strength":1}],"denoise":1,"extraSeed":1,"extraSeedStrength":1,"height":1,"imagePath":"value","loraName":"value","loras":["value"],"metadata":{},"mode":"txt2img","modelName":"value","negativePrompt":"value","presetId":1,"prompt":"value","promptControl":true,"retentionDays":1,"rfShift":1,"samplerName":"value","scaleFactor":1,"scheduler":"value","schedulerName":"value","seed":1,"sfwMode":true,"steps":1,"tags":["value"],"upscaleProfiles":[{"denoise":1,"model":"value","modelName":"value","upscaleModelName":"value"}],"vaeName":"value","width":1},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies RemixGeneratorJobRequest;

  try {
    const data = await api.remixGeneratorJob(body);
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
| **id** | `string` | Id provided in the path. | [Defaults to `undefined`] |
| **generatorJobRemixRequest** | [GeneratorJobRemixRequest](GeneratorJobRemixRequest.md) | Request payload for this operation. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**RemixGeneratorJob202Response**](RemixGeneratorJob202Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Remix job queued. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Access restricted or banned. |  * X-Request-ID -  <br>  |
| **404** | Source job or user not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | Limit/budget exceeded. |  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | Generator is disabled (maintenance mode). The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchGeneratorCheckpoints

> SearchGeneratorCheckpoints200Response searchGeneratorCheckpoints(q, limit, baseModel)

Search generator checkpoint catalog entries

Search generator checkpoints by the supported query, ownership, availability, and pagination filters.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { SearchGeneratorCheckpointsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Search term (minimum 2 characters). (optional)
    q: landscape,
    // number | Maximum number of results. (optional)
    limit: 100,
    // string | Optional base model filter (for example `sdxl` or `sd15`). (optional)
    baseModel: example-base-model,
  } satisfies SearchGeneratorCheckpointsRequest;

  try {
    const data = await api.searchGeneratorCheckpoints(body);
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
| **q** | `string` | Search term (minimum 2 characters). | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of results. | [Optional] [Defaults to `100`] |
| **baseModel** | `string` | Optional base model filter (for example &#x60;sdxl&#x60; or &#x60;sd15&#x60;). | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchGeneratorCheckpoints200Response**](SearchGeneratorCheckpoints200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Checkpoint search result list. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchGeneratorLoras

> SearchGeneratorLoras200Response searchGeneratorLoras(q, limit, baseModel)

Search generator LoRA catalog entries

Search generator LoRAs by the supported query, ownership, base-model, availability, and pagination filters.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { SearchGeneratorLorasRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Search term (minimum 2 characters). (optional)
    q: landscape,
    // number | Maximum number of results. (optional)
    limit: 100,
    // string | Optional base model filter (for example `sdxl` or `sd15`). (optional)
    baseModel: example-base-model,
  } satisfies SearchGeneratorLorasRequest;

  try {
    const data = await api.searchGeneratorLoras(body);
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
| **q** | `string` | Search term (minimum 2 characters). | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of results. | [Optional] [Defaults to `100`] |
| **baseModel** | `string` | Optional base model filter (for example &#x60;sdxl&#x60; or &#x60;sd15&#x60;). | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchGeneratorLoras200Response**](SearchGeneratorLoras200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | LoRA search result list. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamGeneratorEvents

> string streamGeneratorEvents()

Stream generator events (SSE)

Open a server-sent event stream for caller-owned image-generation job state changes. Clients should reconnect with bounded backoff.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { StreamGeneratorEventsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  try {
    const data = await api.streamGeneratorEvents();
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

**string**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/event-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active text/event-stream connection. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated (response is typically empty if auth fails before stream handshake). |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamGeneratorVideoEvents

> string streamGeneratorVideoEvents()

Stream video job, queue-position, and ETA updates

Open a server-sent event stream for caller-owned video-generation job state changes. Clients should reconnect with bounded backoff.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { StreamGeneratorVideoEventsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  try {
    const data = await api.streamGeneratorVideoEvents();
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

**string**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/event-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server-sent video job updates. |  * Cache-Control - Prevents buffering and caching. <br>  * X-Accel-Buffering - Disables reverse-proxy response buffering. <br>  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamGeneratorVideoOutput

> Blob streamGeneratorVideoOutput(id, range)

Stream a completed generated video

Stream a completed caller-owned video output with HTTP Range support for media players and resumable consumers.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { StreamGeneratorVideoOutputRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // string | Video job ID.
    id: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
    // string | Optional RFC 7233 byte range for seeking. (optional)
    range: bytes=0-1048575,
  } satisfies StreamGeneratorVideoOutputRequest;

  try {
    const data = await api.streamGeneratorVideoOutput(body);
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
| **id** | `string` | Video job ID. | [Defaults to `undefined`] |
| **range** | `string` | Optional RFC 7233 byte range for seeking. | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `video/mp4`, `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complete H.264 MP4 output. |  * Accept-Ranges - Supported range unit. <br>  * Cache-Control - Private no-store policy. <br>  * Content-Disposition - Inline filename disposition. <br>  * Content-Length - Response bytes. <br>  * X-Request-ID -  <br>  |
| **206** | Requested H.264 MP4 byte range. |  * Accept-Ranges - Supported range unit. <br>  * Cache-Control - Private no-store policy. <br>  * Content-Disposition - Inline filename disposition. <br>  * Content-Length - Response bytes. <br>  * Content-Range - Served byte range and total size. <br>  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | Output is pending review, quarantined, or the caller lacks permission. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **416** | Requested byte range is outside the stored video output. |  * Content-Range - Unsatisfied range and complete representation length. <br>  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## touchGeneratorUploads

> GeneratorUploadTouchResponse touchGeneratorUploads(generatorUploadTouchRequest)

Refresh expiry for existing generator upload paths

Extend the lifetime of a bounded set of caller-owned temporary generator uploads without creating new upload records.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { TouchGeneratorUploadsRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // GeneratorUploadTouchRequest | Request payload for this operation.
    generatorUploadTouchRequest: {"paths":["generator/source-123.png"]},
  } satisfies TouchGeneratorUploadsRequest;

  try {
    const data = await api.touchGeneratorUploads(body);
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
| **generatorUploadTouchRequest** | [GeneratorUploadTouchRequest](GeneratorUploadTouchRequest.md) | Request payload for this operation. | |

### Return type

[**GeneratorUploadTouchResponse**](GeneratorUploadTouchResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Upload expiry refreshed. |  * X-Request-ID -  <br>  |
| **400** | Invalid or empty paths payload. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | User banned. |  * X-Request-ID -  <br>  |
| **404** | User not found or provided paths no longer exist. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Keepalive operation failed. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGeneratorPreset

> GetGeneratorPreset200Response updateGeneratorPreset(id, updateGeneratorPresetRequest)

Update a generator preset

Update the supplied fields of a caller-owned generator preset while preserving unspecified configuration.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { UpdateGeneratorPresetOperationRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // number | Id provided in the path.
    id: 1,
    // UpdateGeneratorPresetRequest | Request payload for this operation.
    updateGeneratorPresetRequest: {"description":"value","isPublic":true,"name":"value","payload":{}},
  } satisfies UpdateGeneratorPresetOperationRequest;

  try {
    const data = await api.updateGeneratorPreset(body);
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
| **id** | `number` | Id provided in the path. | [Defaults to `undefined`] |
| **updateGeneratorPresetRequest** | [UpdateGeneratorPresetRequest](UpdateGeneratorPresetRequest.md) | Request payload for this operation. | |

### Return type

[**GetGeneratorPreset200Response**](GetGeneratorPreset200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Preset updated. |  * X-Request-ID -  <br>  |
| **400** | Invalid payload or no updates provided. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | Not authorized. |  * X-Request-ID -  <br>  |
| **404** | Preset not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadGeneratorSource

> GeneratorUploadResponse uploadGeneratorSource(image, idempotencyKey, kind)

Upload a source or mask image for generator flows

Upload one validated image source for subsequent image-generation jobs and return its caller-bound temporary identifier.

### Example

```ts
import {
  Configuration,
  GeneratorApi,
} from '@arcenciel/sdk';
import type { UploadGeneratorSourceRequest } from '@arcenciel/sdk';

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
  const api = new GeneratorApi(config);

  const body = {
    // Blob | Image accepted or returned by this contract.
    image: BINARY_DATA_HERE,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
    // string | Upload classification used for TTL/quota tracking. Unknown values fall back to `SOURCE`. (optional)
    kind: kind_example,
  } satisfies UploadGeneratorSourceRequest;

  try {
    const data = await api.uploadGeneratorSource(body);
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
| **image** | `Blob` | Image accepted or returned by this contract. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **kind** | `SOURCE`, `MASK`, `ATTENTION`, `CONTROLNET`, `OTHER` | Upload classification used for TTL/quota tracking. Unknown values fall back to &#x60;SOURCE&#x60;. | [Optional] [Defaults to `&#39;SOURCE&#39;`] [Enum: SOURCE, MASK, ATTENTION, CONTROLNET, OTHER] |

### Return type

[**GeneratorUploadResponse**](GeneratorUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Upload stored successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Missing file or invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Not authenticated. |  * X-Request-ID -  <br>  |
| **403** | User banned. |  * X-Request-ID -  <br>  |
| **404** | User not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **413** | Upload quota exceeded or file too large. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Upload storage error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
