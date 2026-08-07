# ModelsApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**attachModelVersionDiscordImages**](ModelsApi.md#attachmodelversiondiscordimagesoperation) | **POST** /api/models/{modelId}/versions/{versionId}/images/attach | Attach Discord-uploaded images to a model version |
| [**cancelModelVersionUpload**](ModelsApi.md#cancelmodelversionupload) | **DELETE** /api/model-version-uploads/{uploadId} | Cancel a chunked upload session |
| [**completeModelVersionUpload**](ModelsApi.md#completemodelversionupload) | **POST** /api/model-version-uploads/{uploadId}/complete | Complete a chunked model version upload |
| [**createModel**](ModelsApi.md#createmodel) | **POST** /api/models | Create a new model draft |
| [**createModelVersion**](ModelsApi.md#createmodelversion) | **POST** /api/models/{modelId}/versions | Add a new version to an existing model |
| [**createModelVersionUpload**](ModelsApi.md#createmodelversionupload) | **POST** /api/model-version-uploads | Start a chunked model version upload |
| [**deleteModel**](ModelsApi.md#deletemodel) | **DELETE** /api/models/{id} | Delete a model |
| [**deleteModelVersion**](ModelsApi.md#deletemodelversion) | **DELETE** /api/models/{modelId}/versions/{versionId} | Delete a model version (soft-delete) |
| [**getModel**](ModelsApi.md#getmodel) | **GET** /api/models/{id} | Retrieve model details by ID |
| [**getModelDescriptionImage**](ModelsApi.md#getmodeldescriptionimage) | **GET** /api/models/{id}/description-images/{imageId} | Retrieve a model description image |
| [**getModelVersion**](ModelsApi.md#getmodelversion) | **GET** /api/models/{modelId}/versions/{versionId} | Retrieve details of a specific model version |
| [**getModelVersionResources**](ModelsApi.md#getmodelversionresources) | **GET** /api/models/{modelId}/versions/{versionId}/resources | Retrieve detected and manually curated version resource dependencies |
| [**getModelVersionTrainingMetadata**](ModelsApi.md#getmodelversiontrainingmetadata) | **GET** /api/models/{modelId}/versions/{versionId}/training-metadata-raw | Retrieve raw safetensors __metadata__ for a specific model version |
| [**getModelVersionUpload**](ModelsApi.md#getmodelversionupload) | **GET** /api/model-version-uploads/{uploadId} | Get chunked upload session status |
| [**listModelClasses**](ModelsApi.md#listmodelclasses) | **GET** /api/models/classes | List available model classes |
| [**listModelGalleryImages**](ModelsApi.md#listmodelgalleryimages) | **GET** /api/models/{id}/gallery | Retrieve gallery images associated with a model |
| [**listModelVersionDiscordImageCandidates**](ModelsApi.md#listmodelversiondiscordimagecandidates) | **GET** /api/models/{modelId}/versions/{versionId}/images/discord-candidates | List Discord-uploaded images that can be attached to a model version |
| [**listModelVersionMediaPreviews**](ModelsApi.md#listmodelversionmediapreviews) | **GET** /api/models/{modelId}/versions/media-preview | Retrieve lightweight carousel media previews for specific model versions |
| [**listModelVersionResourceCandidates**](ModelsApi.md#listmodelversionresourcecandidates) | **GET** /api/models/{modelId}/versions/{versionId}/resources/candidates | Search local versions that can be added as manual resources |
| [**listModelVersions**](ModelsApi.md#listmodelversions) | **GET** /api/models/{modelId}/versions | List all versions of a model |
| [**publishModelVersion**](ModelsApi.md#publishmodelversion) | **POST** /api/models/{modelId}/versions/{versionId}/publish | Publish a model version immediately |
| [**reorderModelVersionImages**](ModelsApi.md#reordermodelversionimagesoperation) | **PATCH** /api/models/{modelId}/versions/{versionId}/images | Reorder images for a specific model version |
| [**reorderModelVersionVideos**](ModelsApi.md#reordermodelversionvideosoperation) | **PATCH** /api/models/{modelId}/versions/{versionId}/videos | Reorder videos for a specific model version |
| [**reorderModelVersions**](ModelsApi.md#reordermodelversionsoperation) | **PATCH** /api/models/{modelId}/versions | Reorder multiple versions of a model |
| [**replaceModelVersionResources**](ModelsApi.md#replacemodelversionresourcesoperation) | **PUT** /api/models/{modelId}/versions/{versionId}/resources/manual | Add or replace manually curated version resource dependencies |
| [**scheduleModelVersion**](ModelsApi.md#schedulemodelversionoperation) | **POST** /api/models/{modelId}/versions/{versionId}/schedule | Schedule publishing of a model version |
| [**searchModels**](ModelsApi.md#searchmodels) | **GET** /api/models/search | Search models with filtering and pagination |
| [**setModelShowcase**](ModelsApi.md#setmodelshowcaseoperation) | **PATCH** /api/models/{id}/showcased | Showcase or unshowcase a model |
| [**setModelVersionCommunityMedia**](ModelsApi.md#setmodelversioncommunitymediaoperation) | **PATCH** /api/models/{modelId}/versions/{versionId}/community-media | Add or remove community media for a model version |
| [**updateModel**](ModelsApi.md#updatemodeloperation) | **PATCH** /api/models/{id} | Edit an existing model |
| [**updateModelVersion**](ModelsApi.md#updatemodelversion) | **PATCH** /api/models/{modelId}/versions/{versionId} | Edit an existing model version |
| [**updateModelVersionResource**](ModelsApi.md#updatemodelversionresourceoperation) | **PATCH** /api/models/{modelId}/versions/{versionId}/resources/{edgeId} | Update a resource dependency edge |
| [**uploadModelDescriptionImages**](ModelsApi.md#uploadmodeldescriptionimages) | **POST** /api/models/{id}/description-images | Upload images for a model description |
| [**uploadModelVersionChunk**](ModelsApi.md#uploadmodelversionchunk) | **PUT** /api/model-version-uploads/{uploadId}/chunks/{index} | Upload one model version file chunk |
| [**uploadModelVersionImages**](ModelsApi.md#uploadmodelversionimages) | **POST** /api/models/{modelId}/versions/{versionId}/images | Upload one or more images for a specific model version |
| [**uploadModelVersionVideos**](ModelsApi.md#uploadmodelversionvideos) | **POST** /api/models/{modelId}/versions/{versionId}/videos | Upload one or more videos for a specific model version |



## attachModelVersionDiscordImages

> DeveloperAttachedImagesResponse attachModelVersionDiscordImages(modelId, versionId, attachModelVersionDiscordImagesRequest)

Attach Discord-uploaded images to a model version

Attach selected hash-matched Discord images to a model version while returning already attached identifiers separately. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { AttachModelVersionDiscordImagesOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // AttachModelVersionDiscordImagesRequest | Request payload for this operation.
    attachModelVersionDiscordImagesRequest: {"imageIds":[1]},
  } satisfies AttachModelVersionDiscordImagesOperationRequest;

  try {
    const data = await api.attachModelVersionDiscordImages(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **attachModelVersionDiscordImagesRequest** | [AttachModelVersionDiscordImagesRequest](AttachModelVersionDiscordImagesRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperAttachedImagesResponse**](DeveloperAttachedImagesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Images attached successfully. |  * X-Request-ID -  <br>  |
| **400** | Invalid image ids. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelModelVersionUpload

> ModelVersionChunkUploadSession cancelModelVersionUpload(uploadId)

Cancel a chunked upload session

Cancel the caller’s resumable model-version upload session and discard its staged chunks before completion. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { CancelModelVersionUploadRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // string | Upload-session identifier returned by the create operation.
    uploadId: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
  } satisfies CancelModelVersionUploadRequest;

  try {
    const data = await api.cancelModelVersionUpload(body);
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
| **uploadId** | `string` | Upload-session identifier returned by the create operation. | [Defaults to `undefined`] |

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Upload session cancelled. |  * X-Request-ID -  <br>  |
| **401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
| **404** | The upload session does not exist or has been cleaned up after expiry. A chunk PUT is rejected before its body is read. |  * X-Request-ID -  <br>  |
| **409** | The upload session is already completed. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## completeModelVersionUpload

> ModelVersionChunkUploadSession completeModelVersionUpload(uploadId)

Complete a chunked model version upload

Finalize a complete resumable upload session or return its asynchronous processing state without creating a second version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { CompleteModelVersionUploadRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // string | Upload-session identifier returned by the create operation.
    uploadId: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
  } satisfies CompleteModelVersionUploadRequest;

  try {
    const data = await api.completeModelVersionUpload(body);
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
| **uploadId** | `string` | Upload-session identifier returned by the create operation. | [Defaults to `undefined`] |

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Upload was already completed. |  * X-Request-ID -  <br>  |
| **202** | All chunks were accepted and version creation is processing. |  * X-Request-ID -  <br>  |
| **400** | At least one expected chunk is missing or assembled bytes do not match &#x60;fileSize&#x60;. |  * X-Request-ID -  <br>  |
| **401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
| **404** | The upload session does not exist or has been cleaned up after expiry. A chunk PUT is rejected before its body is read. |  * X-Request-ID -  <br>  |
| **410** | The upload session was cancelled and can no longer receive chunks or be completed. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createModel

> DeveloperModelCreatedResponse createModel(idempotencyKey, authorWishes, description, tags, title, type)

Create a new model draft

Create an empty caller-owned model container with validated type, title, description, tags, and author wishes. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { CreateModelRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
    // string | JSON array of author wishes. (optional)
    authorWishes: authorWishes_example,
    // string | Sanitized rich HTML model description. Legacy Markdown or mixed Civitai-style HTML is accepted for compatibility and rendered by the rich-content pipeline. (optional)
    description: description_example,
    // string | Comma-separated list of tags. (optional)
    tags: tags_example,
    // string | Title accepted or returned by this contract. (optional)
    title: title_example,
    // string | The model type (e.g., LORA, CHECKPOINT). (optional)
    type: type_example,
  } satisfies CreateModelRequest;

  try {
    const data = await api.createModel(body);
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
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **authorWishes** | `string` | JSON array of author wishes. | [Optional] [Defaults to `undefined`] |
| **description** | `string` | Sanitized rich HTML model description. Legacy Markdown or mixed Civitai-style HTML is accepted for compatibility and rendered by the rich-content pipeline. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Comma-separated list of tags. | [Optional] [Defaults to `undefined`] |
| **title** | `string` | Title accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **type** | `string` | The model type (e.g., LORA, CHECKPOINT). | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperModelCreatedResponse**](DeveloperModelCreatedResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Model created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createModelVersion

> DeveloperVersionCreatedResponse createModelVersion(modelId, idempotencyKey, aboutThisVersion, activationTags, baseModel, huggingfaceLink, supporterEarlyAccessEnabled, versionFile, versionName)

Add a new version to an existing model

Create a model version from one hosted file or one validated external source, including hashes, scan state, and release metadata. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { CreateModelVersionRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | ID of the model.
    modelId: 1,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
    // string | About This Version accepted or returned by this contract. (optional)
    aboutThisVersion: aboutThisVersion_example,
    // string | Activation Tags accepted or returned by this contract. (optional)
    activationTags: activationTags_example,
    // string | Base Model accepted or returned by this contract. (optional)
    baseModel: baseModel_example,
    // string | URL to a HuggingFace model file. Either versionFile or huggingfaceLink must be provided. Allowed by default: .safetensors, .pt. For models of type OTHER, archive extensions are also allowed. (optional)
    huggingfaceLink: huggingfaceLink_example,
    // boolean | Creator opt-out for the 72-hour supporter early-access window. External sources are always excluded. (optional)
    supporterEarlyAccessEnabled: true,
    // Blob | The file for the model version. Allowed by default: .safetensors, .pt. For models of type OTHER, archives are also allowed (.zip, .7z, .rar, .tar, .tar.gz, .tar.xz, .tar.bz2, .gz, .xz, .bz2). (optional)
    versionFile: BINARY_DATA_HERE,
    // string | Version Name accepted or returned by this contract. (optional)
    versionName: versionName_example,
  } satisfies CreateModelVersionRequest;

  try {
    const data = await api.createModelVersion(body);
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
| **modelId** | `number` | ID of the model. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **aboutThisVersion** | `string` | About This Version accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **activationTags** | `string` | Activation Tags accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **baseModel** | `string` | Base Model accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **huggingfaceLink** | `string` | URL to a HuggingFace model file. Either versionFile or huggingfaceLink must be provided. Allowed by default: .safetensors, .pt. For models of type OTHER, archive extensions are also allowed. | [Optional] [Defaults to `undefined`] |
| **supporterEarlyAccessEnabled** | `boolean` | Creator opt-out for the 72-hour supporter early-access window. External sources are always excluded. | [Optional] [Defaults to `true`] |
| **versionFile** | `Blob` | The file for the model version. Allowed by default: .safetensors, .pt. For models of type OTHER, archives are also allowed (.zip, .7z, .rar, .tar, .tar.gz, .tar.xz, .tar.bz2, .gz, .xz, .bz2). | [Optional] [Defaults to `undefined`] |
| **versionName** | `string` | Version Name accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperVersionCreatedResponse**](DeveloperVersionCreatedResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | New version created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createModelVersionUpload

> ModelVersionChunkUploadSession createModelVersionUpload(createModelVersionChunkUploadRequest, idempotencyKey)

Start a chunked model version upload

Create a 24-hour resumable upload session and negotiate chunk sizing for one new hosted model version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { CreateModelVersionUploadRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // CreateModelVersionChunkUploadRequest | Request payload for this operation.
    createModelVersionChunkUploadRequest: {"aboutThisVersion":"Improved natural-light rendering.","activationTags":"landscape, natural light","baseModel":"SDXL 1.0","chunkSize":8388608,"fileName":"landscape-v2.safetensors","fileSize":16777216,"modelId":42,"supporterEarlyAccessEnabled":true,"versionName":"Landscape v2"},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateModelVersionUploadRequest;

  try {
    const data = await api.createModelVersionUpload(body);
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
| **createModelVersionChunkUploadRequest** | [CreateModelVersionChunkUploadRequest](CreateModelVersionChunkUploadRequest.md) | Request payload for this operation. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Upload session created. Use the returned &#x60;chunkSize&#x60;, &#x60;totalChunks&#x60;, and &#x60;uploadId&#x60;. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Request fields are invalid or the negotiated split would exceed the maximum chunk count. |  * X-Request-ID -  <br>  |
| **401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | Per-user quota exceeded. At most 3 active sessions and 1610612736 pending bytes are allowed. Cancel abandoned sessions before retrying. |  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteModel

> DeveloperMessageResponse deleteModel(id)

Delete a model

Delete an empty caller-managed model after verifying it has no remaining versions or protected relationships. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { DeleteModelRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Unique identifier of the model.
    id: 1,
  } satisfies DeleteModelRequest;

  try {
    const data = await api.deleteModel(body);
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
| **id** | `number` | Unique identifier of the model. | [Defaults to `undefined`] |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model deleted successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the model owner or admin). |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteModelVersion

> DeveloperMessageResponse deleteModelVersion(modelId, versionId)

Delete a model version (soft-delete)

Delete one caller-managed model version and automatically remove the model only when it was the final version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { DeleteModelVersionRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
  } satisfies DeleteModelVersionRequest;

  try {
    const data = await api.deleteModelVersion(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Version removed successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getModel

> Model getModel(id)

Retrieve model details by ID

Return one visible model and its accessible version metadata. Anonymous callers receive only public content; owners and staff may receive additional private fields.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { GetModelRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Unique identifier of the model.
    id: 1,
  } satisfies GetModelRequest;

  try {
    const data = await api.getModel(body);
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
| **id** | `number` | Unique identifier of the model. | [Defaults to `undefined`] |

### Return type

[**Model**](Model.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model details retrieved successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getModelDescriptionImage

> Blob getModelDescriptionImage(id, imageId)

Retrieve a model description image

Transfer one description image belonging to a visible model after applying model and image visibility rules. Clients must use the returned Content-Type instead of assuming a file format.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { GetModelDescriptionImageRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Id provided in the path.
    id: 1,
    // number | Image Id provided in the path.
    imageId: 1,
  } satisfies GetModelDescriptionImageRequest;

  try {
    const data = await api.getModelDescriptionImage(body);
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
| **imageId** | `number` | Image Id provided in the path. | [Defaults to `undefined`] |

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
| **200** | Model description image file. |  * X-Request-ID -  <br>  |
| **400** | Invalid model or image id. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Image not found or not visible to the viewer. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getModelVersion

> Version getModelVersion(modelId, versionId)

Retrieve details of a specific model version

Return one accessible model version, including hashes, file-safety state, activation tags, and public training metadata when those values are available.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { GetModelVersionRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
  } satisfies GetModelVersionRequest;

  try {
    const data = await api.getModelVersion(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**Version**](Version.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Version details retrieved successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getModelVersionResources

> ModelVersionResourceGraphResponse getModelVersionResources(modelId, versionId)

Retrieve detected and manually curated version resource dependencies

Return detected and curated local or external dependencies for one visible model version. Hidden edges and management metadata are included only for authorized owners and staff.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { GetModelVersionResourcesRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
  } satisfies GetModelVersionResourcesRequest;

  try {
    const data = await api.getModelVersionResources(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**ModelVersionResourceGraphResponse**](ModelVersionResourceGraphResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resource graph grouped by dependency kind. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getModelVersionTrainingMetadata

> GetModelVersionTrainingMetadata200Response getModelVersionTrainingMetadata(modelId, versionId)

Retrieve raw safetensors __metadata__ for a specific model version

Return the public raw safetensors metadata extracted for one visible model version. File paths, secrets, and other protected training values remain redacted by the runtime policy.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { GetModelVersionTrainingMetadataRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
  } satisfies GetModelVersionTrainingMetadataRequest;

  try {
    const data = await api.getModelVersionTrainingMetadata(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**GetModelVersionTrainingMetadata200Response**](GetModelVersionTrainingMetadata200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Raw training metadata payload. |  * X-Request-ID -  <br>  |
| **400** | Invalid model/version id or relationship mismatch. |  * X-Request-ID -  <br>  |
| **404** | Version not found or inaccessible. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getModelVersionUpload

> ModelVersionChunkUploadSession getModelVersionUpload(uploadId)

Get chunked upload session status

Inspect the authenticated caller’s resumable model-version upload session, negotiated chunk size, progress, expiry, and completion state. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { GetModelVersionUploadRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // string | Upload-session identifier returned by the create operation.
    uploadId: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
  } satisfies GetModelVersionUploadRequest;

  try {
    const data = await api.getModelVersionUpload(body);
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
| **uploadId** | `string` | Upload-session identifier returned by the create operation. | [Defaults to `undefined`] |

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current upload session status. |  * X-Request-ID -  <br>  |
| **401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
| **404** | The upload session does not exist or has been cleaned up after expiry. A chunk PUT is rejected before its body is read. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listModelClasses

> ListModelClasses200Response listModelClasses()

List available model classes

List the model classes currently available for catalogue filtering and model metadata so integrations can discover supported values instead of hard-coding them.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ListModelClassesRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  try {
    const data = await api.listModelClasses();
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

[**ListModelClasses200Response**](ListModelClasses200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model classes |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listModelGalleryImages

> ModelGalleryResponse listModelGalleryImages(id, versionId, page, limit)

Retrieve gallery images associated with a model

List gallery images associated with one visible model, optionally filtered to a specific model version. Anonymous callers receive only content they may access.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ListModelGalleryImagesRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Unique identifier of the model.
    id: 1,
    // number | Optionally filter gallery images to a specific model version. (optional)
    versionId: 1,
    // number | One-based result page. Pinned images are returned only on the first page. (optional)
    page: 1,
    // number | Maximum number of mixed image and video entries per page. (optional)
    limit: 20,
  } satisfies ListModelGalleryImagesRequest;

  try {
    const data = await api.listModelGalleryImages(body);
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
| **id** | `number` | Unique identifier of the model. | [Defaults to `undefined`] |
| **versionId** | `number` | Optionally filter gallery images to a specific model version. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | One-based result page. Pinned images are returned only on the first page. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Maximum number of mixed image and video entries per page. | [Optional] [Defaults to `20`] |

### Return type

[**ModelGalleryResponse**](ModelGalleryResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of image and video entries associated with the model. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listModelVersionDiscordImageCandidates

> DeveloperDiscordImageCandidatesResponse listModelVersionDiscordImageCandidates(modelId, versionId)

List Discord-uploaded images that can be attached to a model version

List caller-owned Discord uploads whose resource hashes match a model version and indicate which images can be attached without duplication. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ListModelVersionDiscordImageCandidatesRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
  } satisfies ListModelVersionDiscordImageCandidatesRequest;

  try {
    const data = await api.listModelVersionDiscordImageCandidates(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperDiscordImageCandidatesResponse**](DeveloperDiscordImageCandidatesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Candidate images returned successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listModelVersionMediaPreviews

> ModelVersionMediaPreviewResponse listModelVersionMediaPreviews(modelId, versionIds, limit)

Retrieve lightweight carousel media previews for specific model versions

List lightweight visible image and video previews grouped by selected model versions. Scheduled content is sanitized for non-owners and inaccessible media is excluded from the response.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ListModelVersionMediaPreviewsRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Unique identifier of the model.
    modelId: 1,
    // string | Comma-separated list of version IDs to fetch previews for. Defaults to all visible versions. (optional)
    versionIds: example-version-ids,
    // number | Maximum number of preview entries per version. (optional)
    limit: 6,
  } satisfies ListModelVersionMediaPreviewsRequest;

  try {
    const data = await api.listModelVersionMediaPreviews(body);
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
| **modelId** | `number` | Unique identifier of the model. | [Defaults to `undefined`] |
| **versionIds** | `string` | Comma-separated list of version IDs to fetch previews for. Defaults to all visible versions. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of preview entries per version. | [Optional] [Defaults to `6`] |

### Return type

[**ModelVersionMediaPreviewResponse**](ModelVersionMediaPreviewResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Preview entries grouped by version. |  * X-Request-ID -  <br>  |
| **400** | Invalid model id or parameters. |  * X-Request-ID -  <br>  |
| **404** | Model not found or inaccessible. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listModelVersionResourceCandidates

> DeveloperModelVersionResourceCandidatesResponse listModelVersionResourceCandidates(modelId, versionId, q)

Search local versions that can be added as manual resources

Search visible model versions that the caller may add to the managed dependency graph of the selected source version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ListModelVersionResourceCandidatesRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // string | Q provided in the query. (optional)
    q: landscape,
  } satisfies ListModelVersionResourceCandidatesRequest;

  try {
    const data = await api.listModelVersionResourceCandidates(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **q** | `string` | Q provided in the query. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperModelVersionResourceCandidatesResponse**](DeveloperModelVersionResourceCandidatesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Candidate version list. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listModelVersions

> ModelVersionListResponse listModelVersions(modelId)

List all versions of a model

List the versions visible to the caller for one model, including release metadata, file-safety state, hashes, activation tags, and public training metadata when available.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ListModelVersionsRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | ID of the model.
    modelId: 1,
  } satisfies ListModelVersionsRequest;

  try {
    const data = await api.listModelVersions(body);
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
| **modelId** | `number` | ID of the model. | [Defaults to `undefined`] |

### Return type

[**ModelVersionListResponse**](ModelVersionListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Visible version objects wrapped in the stable versions property. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publishModelVersion

> DeveloperMessageResponse publishModelVersion(modelId, versionId)

Publish a model version immediately

Publish a caller-managed model version immediately after file-safety and lifecycle requirements have passed. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { PublishModelVersionRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
  } satisfies PublishModelVersionRequest;

  try {
    const data = await api.publishModelVersion(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Version published and followers notified. |  * X-Request-ID -  <br>  |
| **400** | Version already published or invalid request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to publish this version. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reorderModelVersionImages

> DeveloperMessageResponse reorderModelVersionImages(modelId, versionId, reorderModelVersionImagesRequest)

Reorder images for a specific model version

Replace the sample-image order for a model version after validating the complete set of attached image identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ReorderModelVersionImagesOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // ReorderModelVersionImagesRequest | JSON object with new order of image IDs.
    reorderModelVersionImagesRequest: {"imageIds":[3,1,2]},
  } satisfies ReorderModelVersionImagesOperationRequest;

  try {
    const data = await api.reorderModelVersionImages(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **reorderModelVersionImagesRequest** | [ReorderModelVersionImagesRequest](ReorderModelVersionImagesRequest.md) | JSON object with new order of image IDs. | |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Images reordered successfully. |  * X-Request-ID -  <br>  |
| **400** | Invalid image IDs or order. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reorderModelVersionVideos

> DeveloperMessageResponse reorderModelVersionVideos(modelId, versionId, reorderModelVersionVideosRequest)

Reorder videos for a specific model version

Replace the sample-video order for a model version after validating the complete set of attached video identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ReorderModelVersionVideosOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // ReorderModelVersionVideosRequest | Request payload for this operation.
    reorderModelVersionVideosRequest: {"videoIds":[1]},
  } satisfies ReorderModelVersionVideosOperationRequest;

  try {
    const data = await api.reorderModelVersionVideos(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **reorderModelVersionVideosRequest** | [ReorderModelVersionVideosRequest](ReorderModelVersionVideosRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Videos reordered successfully. |  * X-Request-ID -  <br>  |
| **400** | Invalid video IDs or order. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reorderModelVersions

> DeveloperMessageResponse reorderModelVersions(modelId, reorderModelVersionsRequest)

Reorder multiple versions of a model

Replace a model’s version ordering with a validated list containing exactly its current version identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ReorderModelVersionsOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | ID of the model whose versions you want to reorder.
    modelId: 1,
    // ReorderModelVersionsRequest | JSON object with the new order of version IDs.
    reorderModelVersionsRequest: {"versionIds":[3,1,2]},
  } satisfies ReorderModelVersionsOperationRequest;

  try {
    const data = await api.reorderModelVersions(body);
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
| **modelId** | `number` | ID of the model whose versions you want to reorder. | [Defaults to `undefined`] |
| **reorderModelVersionsRequest** | [ReorderModelVersionsRequest](ReorderModelVersionsRequest.md) | JSON object with the new order of version IDs. | |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Versions reordered successfully. |  * X-Request-ID -  <br>  |
| **400** | Invalid version IDs or order. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceModelVersionResources

> ModelVersionResourceGraphResponse replaceModelVersionResources(modelId, versionId, replaceModelVersionResourcesRequest)

Add or replace manually curated version resource dependencies

Upsert or replace the manually managed dependency edges for one caller-managed model version and return the complete graph. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ReplaceModelVersionResourcesOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // ReplaceModelVersionResourcesRequest | Request payload for this operation.
    replaceModelVersionResourcesRequest: {"replace":true,"resources":[{}]},
  } satisfies ReplaceModelVersionResourcesOperationRequest;

  try {
    const data = await api.replaceModelVersionResources(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **replaceModelVersionResourcesRequest** | [ReplaceModelVersionResourcesRequest](ReplaceModelVersionResourcesRequest.md) | Request payload for this operation. | |

### Return type

[**ModelVersionResourceGraphResponse**](ModelVersionResourceGraphResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Refreshed resource graph. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scheduleModelVersion

> DeveloperMessageResponse scheduleModelVersion(modelId, versionId, scheduleModelVersionRequest)

Schedule publishing of a model version

Schedule a caller-managed model version for future publication and persist its early-access preference. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { ScheduleModelVersionOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // ScheduleModelVersionRequest | Request payload for this operation.
    scheduleModelVersionRequest: {"publishAt":"2026-07-28T10:00:00.000Z","supporterEarlyAccessEnabled":true},
  } satisfies ScheduleModelVersionOperationRequest;

  try {
    const data = await api.scheduleModelVersion(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **scheduleModelVersionRequest** | [ScheduleModelVersionRequest](ScheduleModelVersionRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Version scheduled. |  * X-Request-ID -  <br>  |
| **400** | Invalid publish date. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to schedule this version. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchModels

> SearchModels200Response searchModels(search, sort, page, limit, hashOnly, baseModel, modelType, userId, status, compact, versionLimit, includeDescription, includeTags, includeAuthorWishes, selfFavorited, selfFollowing, selfDownloaded, selfNotDownloaded)

Search models with filtering and pagination

Search the public model catalogue with pagination and optional filters. Authentication is optional; account-specific self filters require a valid user session or API key.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { SearchModelsRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // string | Search query applied to model title, description, and tags (supports (optional)
    search: landscape,
    // 'newest' | 'oldest' | 'downloads' | 'favorites' | 'hot' | Sort order for models (hot = recent models sorted by downloads). (optional)
    sort: newest,
    // number | Page number. (optional)
    page: 1,
    // number | Number of models per page (max 1000). (optional)
    limit: 20,
    // boolean | If present, the search will be treated as a partial model hash. (optional)
    hashOnly: false,
    // string | Filter models by base model. (optional)
    baseModel: example-base-model,
    // string | Filter models by model type (e.g. LORA, CHECKPOINT, etc.). (optional)
    modelType: example-model-type,
    // number | Filter models by uploader id. (optional)
    userId: 1,
    // 'all' | 'available' | 'upcoming' | Filter by publication status (published = available). (optional)
    status: all,
    // boolean | Return a lightweight response for template pickers/autocomplete UIs (still respects visibility rules). Compact responses omit download metadata such as hashes, file names, and external download URLs; fetch model or version details before downloading. (optional)
    compact: false,
    // number | Compact only. Max versions returned per model (1-50). (optional)
    versionLimit: 1,
    // boolean | Compact only. Include model.description in results. (optional)
    includeDescription: false,
    // boolean | Compact only. Include model.tags in results. (optional)
    includeTags: false,
    // boolean | Compact only. Include model.authorWishes in results. (optional)
    includeAuthorWishes: false,
    // boolean | Auth only. Return models favorited by the current user. (optional)
    selfFavorited: true,
    // boolean | Auth only. Return models uploaded by users the current user follows. (optional)
    selfFollowing: true,
    // boolean | Auth only. Return models downloaded by the current user. (optional)
    selfDownloaded: true,
    // boolean | Auth only. Return models not yet downloaded by the current user. (optional)
    selfNotDownloaded: true,
  } satisfies SearchModelsRequest;

  try {
    const data = await api.searchModels(body);
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
| **search** | `string` | Search query applied to model title, description, and tags (supports | [Optional] [Defaults to `undefined`] |
| **sort** | `newest`, `oldest`, `downloads`, `favorites`, `hot` | Sort order for models (hot &#x3D; recent models sorted by downloads). | [Optional] [Defaults to `undefined`] [Enum: newest, oldest, downloads, favorites, hot] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Number of models per page (max 1000). | [Optional] [Defaults to `20`] |
| **hashOnly** | `boolean` | If present, the search will be treated as a partial model hash. | [Optional] [Defaults to `false`] |
| **baseModel** | `string` | Filter models by base model. | [Optional] [Defaults to `undefined`] |
| **modelType** | `string` | Filter models by model type (e.g. LORA, CHECKPOINT, etc.). | [Optional] [Defaults to `undefined`] |
| **userId** | `number` | Filter models by uploader id. | [Optional] [Defaults to `undefined`] |
| **status** | `all`, `available`, `upcoming` | Filter by publication status (published &#x3D; available). | [Optional] [Defaults to `undefined`] [Enum: all, available, upcoming] |
| **compact** | `boolean` | Return a lightweight response for template pickers/autocomplete UIs (still respects visibility rules). Compact responses omit download metadata such as hashes, file names, and external download URLs; fetch model or version details before downloading. | [Optional] [Defaults to `false`] |
| **versionLimit** | `number` | Compact only. Max versions returned per model (1-50). | [Optional] [Defaults to `1`] |
| **includeDescription** | `boolean` | Compact only. Include model.description in results. | [Optional] [Defaults to `false`] |
| **includeTags** | `boolean` | Compact only. Include model.tags in results. | [Optional] [Defaults to `false`] |
| **includeAuthorWishes** | `boolean` | Compact only. Include model.authorWishes in results. | [Optional] [Defaults to `false`] |
| **selfFavorited** | `boolean` | Auth only. Return models favorited by the current user. | [Optional] [Defaults to `undefined`] |
| **selfFollowing** | `boolean` | Auth only. Return models uploaded by users the current user follows. | [Optional] [Defaults to `undefined`] |
| **selfDownloaded** | `boolean` | Auth only. Return models downloaded by the current user. | [Optional] [Defaults to `undefined`] |
| **selfNotDownloaded** | `boolean` | Auth only. Return models not yet downloaded by the current user. | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchModels200Response**](SearchModels200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of models. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setModelShowcase

> DeveloperMessageResponse setModelShowcase(id, setModelShowcaseRequest)

Showcase or unshowcase a model

Set the explicit showcased state for a caller-owned model while enforcing the per-profile showcase limit. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { SetModelShowcaseOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Id provided in the path.
    id: 1,
    // SetModelShowcaseRequest | Request payload for this operation.
    setModelShowcaseRequest: {"showcased":"NONE"},
  } satisfies SetModelShowcaseOperationRequest;

  try {
    const data = await api.setModelShowcase(body);
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
| **setModelShowcaseRequest** | [SetModelShowcaseRequest](SetModelShowcaseRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Showcase state updated. |  * X-Request-ID -  <br>  |
| **400** | Invalid showcased value, limit exceeded, or missing payload. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to modify showcase for this model. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setModelVersionCommunityMedia

> DeveloperMessageResponse setModelVersionCommunityMedia(modelId, versionId, setModelVersionCommunityMediaRequest)

Add or remove community media for a model version

Add or remove one published image or video from a model version’s bounded community-media carousel. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { SetModelVersionCommunityMediaOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // SetModelVersionCommunityMediaRequest | Request payload for this operation.
    setModelVersionCommunityMediaRequest: {"include":true,"mediaId":1,"mediaType":"IMAGE"},
  } satisfies SetModelVersionCommunityMediaOperationRequest;

  try {
    const data = await api.setModelVersionCommunityMedia(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **setModelVersionCommunityMediaRequest** | [SetModelVersionCommunityMediaRequest](SetModelVersionCommunityMediaRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Community media updated. |  * X-Request-ID -  <br>  |
| **400** | Invalid payload or limit reached. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to modify this version. |  * X-Request-ID -  <br>  |
| **404** | Version or media not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateModel

> DeveloperModelMutationResponse updateModel(id, updateModelRequest)

Edit an existing model

Update supported model metadata, description, type, tags, and author wishes for a caller-managed model. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { UpdateModelOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Unique identifier of the model.
    id: 1,
    // UpdateModelRequest | Fields to update in the model (title, description, tags, etc.).
    updateModelRequest: {"authorWishes":"value","description":"value","tags":"value","title":"value","type":"value"},
  } satisfies UpdateModelOperationRequest;

  try {
    const data = await api.updateModel(body);
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
| **id** | `number` | Unique identifier of the model. | [Defaults to `undefined`] |
| **updateModelRequest** | [UpdateModelRequest](UpdateModelRequest.md) | Fields to update in the model (title, description, tags, etc.). | |

### Return type

[**DeveloperModelMutationResponse**](DeveloperModelMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model updated successfully. |  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the model owner or admin). |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateModelVersion

> DeveloperVersionMutationResponse updateModelVersion(modelId, versionId, aboutThisVersion, activationTags, baseModel, supporterEarlyAccessEnabled, versionName)

Edit an existing model version

Update release metadata, source selection, hashes, file metadata, and early-access settings for a caller-managed model version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { UpdateModelVersionRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // string | About This Version accepted or returned by this contract. (optional)
    aboutThisVersion: aboutThisVersion_example,
    // string | Activation Tags accepted or returned by this contract. (optional)
    activationTags: activationTags_example,
    // string | Base Model accepted or returned by this contract. (optional)
    baseModel: baseModel_example,
    // boolean | Set false to opt this hosted version out of supporter early access. (optional)
    supporterEarlyAccessEnabled: true,
    // string | Version Name accepted or returned by this contract. (optional)
    versionName: versionName_example,
  } satisfies UpdateModelVersionRequest;

  try {
    const data = await api.updateModelVersion(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **aboutThisVersion** | `string` | About This Version accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **activationTags** | `string` | Activation Tags accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **baseModel** | `string` | Base Model accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **supporterEarlyAccessEnabled** | `boolean` | Set false to opt this hosted version out of supporter early access. | [Optional] [Defaults to `undefined`] |
| **versionName** | `string` | Version Name accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperVersionMutationResponse**](DeveloperVersionMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model version updated successfully. |  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateModelVersionResource

> ModelVersionResourceGraphResponse updateModelVersionResource(modelId, versionId, edgeId, updateModelVersionResourceRequest)

Update a resource dependency edge

Update, hide, restore, or remove one managed dependency edge and return the complete resulting resource graph. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { UpdateModelVersionResourceOperationRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // number | Edge Id provided in the path.
    edgeId: 1,
    // UpdateModelVersionResourceRequest | Request payload for this operation.
    updateModelVersionResourceRequest: {"kind":"REQUIRED","status":"ACTIVE"},
  } satisfies UpdateModelVersionResourceOperationRequest;

  try {
    const data = await api.updateModelVersionResource(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **edgeId** | `number` | Edge Id provided in the path. | [Defaults to `undefined`] |
| **updateModelVersionResourceRequest** | [UpdateModelVersionResourceRequest](UpdateModelVersionResourceRequest.md) | Request payload for this operation. | |

### Return type

[**ModelVersionResourceGraphResponse**](ModelVersionResourceGraphResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Refreshed resource graph. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Resource edge not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadModelDescriptionImages

> DeveloperStoredImagesUploadResponse uploadModelDescriptionImages(id, idempotencyKey, imageFiles)

Upload images for a model description

Upload validated inline description images to a caller-managed model and report partial validation outcomes. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { UploadModelDescriptionImagesRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Unique identifier of the model.
    id: 1,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8',
    // Array<Blob> | JPEG, PNG, or WebP image files, up to 50MB each. (optional)
    imageFiles: [new Blob(['example file content'], { type: 'application/octet-stream' })],
  } satisfies UploadModelDescriptionImagesRequest;

  try {
    const data = await api.uploadModelDescriptionImages(body);
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
| **id** | `number` | Unique identifier of the model. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **imageFiles** | `Array<Blob>` | JPEG, PNG, or WebP image files, up to 50MB each. | [Optional] |

### Return type

[**DeveloperStoredImagesUploadResponse**](DeveloperStoredImagesUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Model description images uploaded successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **202** | Some files were invalid but at least one image was uploaded. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Bad request, invalid model id, unsupported file type, or upload limit exceeded. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the model owner or staff). |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadModelVersionChunk

> ModelVersionChunkUploadSession uploadModelVersionChunk(uploadId, index, body)

Upload one model version file chunk

Store one indexed binary chunk at the negotiated length; repeating the same index and bytes leaves the upload session unchanged. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { UploadModelVersionChunkRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // string | Upload-session identifier returned by the create operation.
    uploadId: 2f1cdb84-c3a7-4e6c-a289-34bb21e7bd71,
    // number | Zero-based chunk index; must be less than the session\'s `totalChunks`.
    index: 0,
    // Blob | Request payload for this operation.
    body: [B@3ed0918d,
  } satisfies UploadModelVersionChunkRequest;

  try {
    const data = await api.uploadModelVersionChunk(body);
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
| **uploadId** | `string` | Upload-session identifier returned by the create operation. | [Defaults to `undefined`] |
| **index** | `number` | Zero-based chunk index; must be less than the session\&#39;s &#x60;totalChunks&#x60;. | [Defaults to `undefined`] |
| **body** | `Blob` | Request payload for this operation. | |

### Return type

[**ModelVersionChunkUploadSession**](ModelVersionChunkUploadSession.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/octet-stream`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chunk stored or safely replaced. |  * X-Request-ID -  <br>  |
| **400** | Missing body, out-of-range index, or body length does not exactly match the expected chunk length. |  * X-Request-ID -  <br>  |
| **401** | Authentication is missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | The authenticated user cannot access this model or upload session. |  * X-Request-ID -  <br>  |
| **404** | The upload session does not exist or has been cleaned up after expiry. A chunk PUT is rejected before its body is read. |  * X-Request-ID -  <br>  |
| **408** | The chunk request body was interrupted before it arrived in full. Query the session and retry the same chunk index if absent. |  * X-Request-ID -  <br>  |
| **409** | The upload session is already processing or completed. |  * X-Request-ID -  <br>  |
| **410** | The upload session was cancelled and can no longer receive chunks or be completed. |  * X-Request-ID -  <br>  |
| **413** | Chunk request exceeds the upload host\&#39;s request-body limit. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadModelVersionImages

> DeveloperImageUploadResponse uploadModelVersionImages(modelId, versionId, idempotencyKey, description, imageFiles, tags, title)

Upload one or more images for a specific model version

Upload validated sample images to a caller-managed model version and preserve accepted identifiers on partial failure. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { UploadModelVersionImagesRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8',
    // string | Description accepted or returned by this contract. (optional)
    description: 'description_example',
    // Array<Blob> | Array of image files. (optional)
    imageFiles: [new Blob(['example file content'], { type: 'application/octet-stream' })],
    // string | Comma-separated list of tags. (optional)
    tags: 'tags_example',
    // string | Title accepted or returned by this contract. (optional)
    title: 'title_example',
  } satisfies UploadModelVersionImagesRequest;

  try {
    const data = await api.uploadModelVersionImages(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **description** | `string` | Description accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **imageFiles** | `Array<Blob>` | Array of image files. | [Optional] |
| **tags** | `string` | Comma-separated list of tags. | [Optional] [Defaults to `undefined`] |
| **title** | `string` | Title accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperImageUploadResponse**](DeveloperImageUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Version image(s) uploaded successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **202** | Some images were rejected while the remaining images were stored. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Bad request (e.g. no files uploaded or invalid file format). |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadModelVersionVideos

> DeveloperVideoUploadResponse uploadModelVersionVideos(modelId, versionId, idempotencyKey, description, metaImages, tags, title, videoFiles)

Upload one or more videos for a specific model version

Upload validated sample videos and optional preview images to a caller-managed model version. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@arcenciel/sdk';
import type { UploadModelVersionVideosRequest } from '@arcenciel/sdk';

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
  const api = new ModelsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8',
    // string | Description accepted or returned by this contract. (optional)
    description: 'description_example',
    // Array<Blob> | Optional preview images. (optional)
    metaImages: [new Blob(['example file content'], { type: 'application/octet-stream' })],
    // string | Comma-separated list of tags. (optional)
    tags: 'tags_example',
    // string | Title accepted or returned by this contract. (optional)
    title: 'title_example',
    // Array<Blob> | Array of video files. (optional)
    videoFiles: [new Blob(['example file content'], { type: 'application/octet-stream' })],
  } satisfies UploadModelVersionVideosRequest;

  try {
    const data = await api.uploadModelVersionVideos(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **description** | `string` | Description accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **metaImages** | `Array<Blob>` | Optional preview images. | [Optional] |
| **tags** | `string` | Comma-separated list of tags. | [Optional] [Defaults to `undefined`] |
| **title** | `string` | Title accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |
| **videoFiles** | `Array<Blob>` | Array of video files. | [Optional] |

### Return type

[**DeveloperVideoUploadResponse**](DeveloperVideoUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Version video(s) uploaded successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **202** | Some videos were rejected while the remaining videos were stored. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Bad request (e.g. no files uploaded). |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
