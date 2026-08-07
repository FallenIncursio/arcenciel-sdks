# ModelsApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getModel**](ModelsApi.md#getmodel) | **GET** /api/models/{id} | Retrieve model details by ID |
| [**getModelDescriptionImage**](ModelsApi.md#getmodeldescriptionimage) | **GET** /api/models/{id}/description-images/{imageId} | Retrieve a model description image |
| [**getModelVersion**](ModelsApi.md#getmodelversion) | **GET** /api/models/{modelId}/versions/{versionId} | Retrieve details of a specific model version |
| [**getModelVersionResources**](ModelsApi.md#getmodelversionresources) | **GET** /api/models/{modelId}/versions/{versionId}/resources | Retrieve detected and manually curated version resource dependencies |
| [**getModelVersionTrainingMetadata**](ModelsApi.md#getmodelversiontrainingmetadata) | **GET** /api/models/{modelId}/versions/{versionId}/training-metadata-raw | Retrieve raw safetensors __metadata__ for a specific model version |
| [**listModelClasses**](ModelsApi.md#listmodelclasses) | **GET** /api/models/classes | List available model classes |
| [**listModelGalleryImages**](ModelsApi.md#listmodelgalleryimages) | **GET** /api/models/{id}/gallery | Retrieve gallery images associated with a model |
| [**listModelVersionMediaPreviews**](ModelsApi.md#listmodelversionmediapreviews) | **GET** /api/models/{modelId}/versions/media-preview | Retrieve lightweight carousel media previews for specific model versions |
| [**listModelVersions**](ModelsApi.md#listmodelversions) | **GET** /api/models/{modelId}/versions | List all versions of a model |
| [**searchModels**](ModelsApi.md#searchmodels) | **GET** /api/models/search | Search models with filtering and pagination |



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
