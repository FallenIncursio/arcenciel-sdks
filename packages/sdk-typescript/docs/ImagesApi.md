# ImagesApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeImagePrompt**](ImagesApi.md#analyzeimageprompt) | **GET** /api/images/{id}/prompt-analysis | Group an image prompt by semantic category |
| [**createImageCrosspost**](ImagesApi.md#createimagecrosspostoperation) | **POST** /api/images/{id}/crosspost | Crosspost an image to one or more models |
| [**deleteImage**](ImagesApi.md#deleteimage) | **DELETE** /api/images/{id} | Delete an image (only author or admin/mod) |
| [**downloadImage**](ImagesApi.md#downloadimage) | **GET** /api/images/{id}/download | Download the original image file |
| [**downloadImageLegacy**](ImagesApi.md#downloadimagelegacy) | **GET** /api/images/{id}/dl | Download the original image file (alias) |
| [**downloadImagesBulk**](ImagesApi.md#downloadimagesbulkoperation) | **POST** /api/images/bulk-download | Download selected original image files as a ZIP archive |
| [**getImage**](ImagesApi.md#getimage) | **GET** /api/images/{id}/info | Retrieve image metadata by ID |
| [**getImageContent**](ImagesApi.md#getimagecontent) | **GET** /api/images/{id} | Retrieve an image file (webp if supported, original otherwise) |
| [**getImageSpatialAttribution**](ImagesApi.md#getimagespatialattribution) | **GET** /api/images/{id}/spatial-attribution | Retrieve the asynchronous tag-location analysis status |
| [**getImageSpatialAttributionAtlas**](ImagesApi.md#getimagespatialattributionatlas) | **GET** /api/images/{id}/spatial-attribution/atlas | Retrieve the private tag-location heatmap atlas |
| [**getImagesBulk**](ImagesApi.md#getimagesbulk) | **GET** /api/images/bulk-info | Retrieve lightweight metadata for multiple image IDs |
| [**listImageExternalResources**](ImagesApi.md#listimageexternalresources) | **GET** /api/images/{id}/external-resources | Resolve resources associated with an image |
| [**listImageStyleMatches**](ImagesApi.md#listimagestylematches) | **GET** /api/images/{id}/style-matches | Retrieve style-similar images for a given image. |
| [**listRelatedImages**](ImagesApi.md#listrelatedimages) | **GET** /api/images/{id}/related | Retrieve images related to a given image |
| [**publishImage**](ImagesApi.md#publishimage) | **POST** /api/images/{id}/publish | Publish an image immediately |
| [**removeImageCrosspost**](ImagesApi.md#removeimagecrosspost) | **DELETE** /api/images/{id}/crosspost/{modelId} | Remove a crosspost from an image |
| [**requestImageSpatialAttribution**](ImagesApi.md#requestimagespatialattribution) | **POST** /api/images/{id}/spatial-attribution | Request a background tag-location analysis |
| [**scheduleImage**](ImagesApi.md#scheduleimageoperation) | **POST** /api/images/{id}/schedule | Schedule publishing of an image |
| [**searchImages**](ImagesApi.md#searchimages) | **GET** /api/images/search | Search images with pagination and filtering |
| [**searchImagesByStyleUpload**](ImagesApi.md#searchimagesbystyleupload) | **POST** /api/images/style-search/upload | Upload an image and retrieve style-similar matches. |
| [**setImagePin**](ImagesApi.md#setimagepinoperation) | **PATCH** /api/images/{id}/pinned | Pin or unpin an image |
| [**setImageShowcase**](ImagesApi.md#setimageshowcaseoperation) | **PATCH** /api/images/{id}/showcased | Showcase or remove showcase from an image |
| [**updateImage**](ImagesApi.md#updateimageoperation) | **PATCH** /api/images/{id} | Edit an existing image |
| [**uploadImages**](ImagesApi.md#uploadimages) | **POST** /api/images/upload | Upload one or multiple images |



## analyzeImagePrompt

> AnalyzeImagePrompt200Response analyzeImagePrompt(id)

Group an image prompt by semantic category

Group the visible prompt tokens of an image into semantic categories for inspection and UI presentation. The response may grow with new categories and clients must ignore unknown fields.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { AnalyzeImagePromptRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies AnalyzeImagePromptRequest;

  try {
    const data = await api.analyzeImagePrompt(body);
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
| **id** | `number` | Unique identifier of the image. | [Defaults to `undefined`] |

### Return type

[**AnalyzeImagePrompt200Response**](AnalyzeImagePrompt200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Grouped positive-prompt analysis. |  * Cache-Control - Private, non-cacheable response because prompts may be owner-visible. <br>  * X-Request-ID -  <br>  |
| **400** | Image ID must be a positive integer. |  * X-Request-ID -  <br>  |
| **404** | Image not found or not visible to the current viewer. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createImageCrosspost

> DeveloperMessageResponse createImageCrosspost(id, createImageCrosspostRequest)

Crosspost an image to one or more models

Associate a caller-managed image with a bounded set of caller-managed models without creating duplicate relationships. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { CreateImageCrosspostOperationRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | ID of the image to crosspost.
    id: 1,
    // CreateImageCrosspostRequest | List of model IDs to crosspost to.
    createImageCrosspostRequest: {"manual":true,"modelIds":[1]},
  } satisfies CreateImageCrosspostOperationRequest;

  try {
    const data = await api.createImageCrosspost(body);
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
| **id** | `number` | ID of the image to crosspost. | [Defaults to `undefined`] |
| **createImageCrosspostRequest** | [CreateImageCrosspostRequest](CreateImageCrosspostRequest.md) | List of model IDs to crosspost to. | |

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
| **201** | Crosspost created. |  * X-Request-ID -  <br>  |
| **400** | No modelIds provided or too many models. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to crosspost this image. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteImage

> DeveloperMessageResponse deleteImage(id)

Delete an image (only author or admin/mod)

Delete a caller-managed image, its managed derivatives, and dependent associations after authorization checks. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { DeleteImageRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies DeleteImageRequest;

  try {
    const data = await api.deleteImage(body);
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
| **id** | `number` | Unique identifier of the image. | [Defaults to `undefined`] |

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
| **200** | Image deleted successfully. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the owner or admin/mod). |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadImage

> Blob downloadImage(id)

Download the original image file

Download the original bytes of a visible image with a server-provided filename. The download limiter applies in addition to normal read limits and callers should stream large responses.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { DownloadImageRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies DownloadImageRequest;

  try {
    const data = await api.downloadImage(body);
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
| **id** | `number` | Unique identifier of the image. | [Defaults to `undefined`] |

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
| **200** | Binary file download of the image. |  * Content-Disposition - Attachment disposition containing the sanitized original filename. <br>  * X-Request-ID -  <br>  |
| **404** | Image not found or file missing on disk. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadImageLegacy

> Blob downloadImageLegacy(id)

Download the original image file (alias)

Download the original bytes of a visible image through the compatibility alias. New integrations should prefer downloadImage while existing clients may continue using this stable alias.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { DownloadImageLegacyRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies DownloadImageLegacyRequest;

  try {
    const data = await api.downloadImageLegacy(body);
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
| **id** | `number` | Unique identifier of the image. | [Defaults to `undefined`] |

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
| **200** | Binary file download of the image. |  * Content-Disposition - Attachment disposition containing the sanitized original filename. <br>  * X-Request-ID -  <br>  |
| **404** | Image not found or file missing on disk. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadImagesBulk

> Blob downloadImagesBulk(downloadImagesBulkRequest)

Download selected original image files as a ZIP archive

Stream a ZIP archive containing the visible original bytes for a bounded set of image identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { DownloadImagesBulkOperationRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // DownloadImagesBulkRequest | Request payload for this operation.
    downloadImagesBulkRequest: {"ids":[12,44,99]},
  } satisfies DownloadImagesBulkOperationRequest;

  try {
    const data = await api.downloadImagesBulk(body);
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
| **downloadImagesBulkRequest** | [DownloadImagesBulkRequest](DownloadImagesBulkRequest.md) | Request payload for this operation. | |

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
| **200** | ZIP archive containing downloadable selected images. |  * Content-Disposition - Attachment filename generated for the streamed ZIP archive. <br>  * X-Request-ID -  <br>  |
| **400** | Missing IDs or too many selected images. |  * X-Request-ID -  <br>  |
| **404** | None of the requested images could be downloaded. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getImage

> Image getImage(id)

Retrieve image metadata by ID

Return visible metadata for one image, including public uploader, tag, model-version, reaction, and generated-variant information appropriate for the current caller.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { GetImageRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies GetImageRequest;

  try {
    const data = await api.getImage(body);
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
| **id** | `number` | Unique identifier of the image. | [Defaults to `undefined`] |

### Return type

[**Image**](Image.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Image metadata retrieved successfully. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getImageContent

> Blob getImageContent(id)

Retrieve an image file (webp if supported, original otherwise)

Transfer a visible image, preferring a generated WebP representation when supported and otherwise returning the original. Clients must honor the actual response Content-Type.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { GetImageContentRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies GetImageContentRequest;

  try {
    const data = await api.getImageContent(body);
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
| **id** | `number` | Unique identifier of the image. | [Defaults to `undefined`] |

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
| **200** | The image file is returned. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getImageSpatialAttribution

> ImageSpatialAttribution getImageSpatialAttribution(id)

Retrieve the asynchronous tag-location analysis status

Return the asynchronous spatial tag-attribution state and visible result for an image. Callers can poll this safe read while respecting Retry-After and the shared read limit.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { GetImageSpatialAttributionRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies GetImageSpatialAttributionRequest;

  try {
    const data = await api.getImageSpatialAttribution(body);
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
| **id** | `number` | Unique identifier of the image. | [Defaults to `undefined`] |

### Return type

[**ImageSpatialAttribution**](ImageSpatialAttribution.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current analysis status or a completed tag-location manifest. |  * Cache-Control - Private, non-cacheable response because visibility is viewer-specific. <br>  * X-Request-ID -  <br>  |
| **404** | Image not found or not visible to the current viewer. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getImageSpatialAttributionAtlas

> Blob getImageSpatialAttributionAtlas(id)

Retrieve the private tag-location heatmap atlas

Transfer the generated PNG heatmap atlas for an accessible spatial-attribution result. The endpoint returns binary image content and does not expose unavailable private analyses.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { GetImageSpatialAttributionAtlasRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies GetImageSpatialAttributionAtlasRequest;

  try {
    const data = await api.getImageSpatialAttributionAtlas(body);
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
| **id** | `number` | Unique identifier of the image. | [Defaults to `undefined`] |

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
| **200** | Grayscale tag-location atlas. |  * X-Request-ID -  <br>  |
| **404** | Image or current atlas not found, or the image is not visible to the current viewer. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getImagesBulk

> GetImagesBulk200Response getImagesBulk(ids)

Retrieve lightweight metadata for multiple image IDs

Resolve lightweight visible metadata for a bounded set of image identifiers in one request. Missing or inaccessible identifiers are reported according to the documented response envelope.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { GetImagesBulkRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // string | Comma-separated image ids, for example `12,44,99`.
    ids: example-ids,
  } satisfies GetImagesBulkRequest;

  try {
    const data = await api.getImagesBulk(body);
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
| **ids** | `string` | Comma-separated image ids, for example &#x60;12,44,99&#x60;. | [Defaults to `undefined`] |

### Return type

[**GetImagesBulk200Response**](GetImagesBulk200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ordered image metadata entries. |  * X-Request-ID -  <br>  |
| **400** | No valid ids were provided. |  * X-Request-ID -  <br>  |
| **404** | One or more requested images were not found or are inaccessible. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listImageExternalResources

> ListImageExternalResources200Response listImageExternalResources(id)

Resolve resources associated with an image

Resolve public local and external model resources associated with one visible image. Private dependency and management metadata remains restricted to authorized owners and staff.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { ListImageExternalResourcesRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | ID of the image.
    id: 1,
  } satisfies ListImageExternalResourcesRequest;

  try {
    const data = await api.listImageExternalResources(body);
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
| **id** | `number` | ID of the image. | [Defaults to `undefined`] |

### Return type

[**ListImageExternalResources200Response**](ListImageExternalResources200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resource matches returned. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listImageStyleMatches

> ListImageStyleMatches200Response listImageStyleMatches(id, limit, backend)

Retrieve style-similar images for a given image.

Return style-similar visible images and similarity metadata for one source image. A temporary 503 indicates that the similarity index is unavailable and is safe to retry with backoff.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { ListImageStyleMatchesRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | ID of the reference image.
    id: 1,
    // number | Number of matches to return. (optional)
    limit: 8,
    // string | Optional style matcher backend override. (optional)
    backend: example-backend,
  } satisfies ListImageStyleMatchesRequest;

  try {
    const data = await api.listImageStyleMatches(body);
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
| **id** | `number` | ID of the reference image. | [Defaults to `undefined`] |
| **limit** | `number` | Number of matches to return. | [Optional] [Defaults to `8`] |
| **backend** | `string` | Optional style matcher backend override. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListImageStyleMatches200Response**](ListImageStyleMatches200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Hydrated style matches and metadata. |  * X-Request-ID -  <br>  |
| **400** | Invalid image or file path. |  * X-Request-ID -  <br>  |
| **404** | Image not found or not visible to the caller. |  * X-Request-ID -  <br>  |
| **429** | Style matcher is temporarily saturated. Retry-After indicates when to retry. |  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | Style matcher unavailable. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listRelatedImages

> Array&lt;Image&gt; listRelatedImages(id)

Retrieve images related to a given image

List images related to one visible source image while applying publication, ownership, rating, and adult-content rules for the current caller to every returned record.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { ListRelatedImagesRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | ID of the reference image.
    id: 1,
  } satisfies ListRelatedImagesRequest;

  try {
    const data = await api.listRelatedImages(body);
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
| **id** | `number` | ID of the reference image. | [Defaults to `undefined`] |

### Return type

[**Array&lt;Image&gt;**](Image.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of related images. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publishImage

> DeveloperMessageResponse publishImage(id)

Publish an image immediately

Publish a caller-managed image immediately and apply the normal visibility, notification, and audit workflow. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { PublishImageRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | ID of the image to publish.
    id: 1,
  } satisfies PublishImageRequest;

  try {
    const data = await api.publishImage(body);
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
| **id** | `number` | ID of the image to publish. | [Defaults to `undefined`] |

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
| **200** | Image published. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to publish this image. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeImageCrosspost

> DeveloperMessageResponse removeImageCrosspost(id, modelId)

Remove a crosspost from an image

Remove the association between a caller-managed image and model without deleting either resource. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { RemoveImageCrosspostRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | ID of the image.
    id: 1,
    // number | ID of the model to remove the crosspost from.
    modelId: 1,
  } satisfies RemoveImageCrosspostRequest;

  try {
    const data = await api.removeImageCrosspost(body);
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
| **id** | `number` | ID of the image. | [Defaults to `undefined`] |
| **modelId** | `number` | ID of the model to remove the crosspost from. | [Defaults to `undefined`] |

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
| **200** | Crosspost deleted. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to remove crosspost. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestImageSpatialAttribution

> ImageSpatialAttribution requestImageSpatialAttribution(id)

Request a background tag-location analysis

Return an existing spatial-attribution result or enqueue the bounded analysis job once when it is not ready. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { RequestImageSpatialAttributionRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies RequestImageSpatialAttributionRequest;

  try {
    const data = await api.requestImageSpatialAttribution(body);
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
| **id** | `number` | Unique identifier of the image. | [Defaults to `undefined`] |

### Return type

[**ImageSpatialAttribution**](ImageSpatialAttribution.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A current analysis is already ready. |  * X-Request-ID -  <br>  |
| **202** | Analysis is queued or already processing. |  * X-Request-ID -  <br>  |
| **401** | Authentication is required to start a new analysis. |  * X-Request-ID -  <br>  |
| **403** | The standard account\&#39;s free analysis has already been used. |  * X-Request-ID -  <br>  |
| **404** | Image not found or not visible to the current viewer. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | Tag-location analysis is disabled. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scheduleImage

> DeveloperMessageResponse scheduleImage(id, scheduleImageRequest)

Schedule publishing of an image

Schedule a caller-managed image for a future publication time supplied as an ISO-8601 timestamp. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { ScheduleImageOperationRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | ID of the image to schedule.
    id: 1,
    // ScheduleImageRequest | Request payload for this operation.
    scheduleImageRequest: {"publishAt":"2026-07-28T10:00:00.000Z"},
  } satisfies ScheduleImageOperationRequest;

  try {
    const data = await api.scheduleImage(body);
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
| **id** | `number` | ID of the image to schedule. | [Defaults to `undefined`] |
| **scheduleImageRequest** | [ScheduleImageRequest](ScheduleImageRequest.md) | Request payload for this operation. | |

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
| **200** | Image scheduled. |  * X-Request-ID -  <br>  |
| **400** | Invalid publish date. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to schedule this image. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchImages

> SearchImages200Response searchImages(search, sort, page, limit, ratings, userId, selfReacted, selfFollowing, cursor)

Search images with pagination and filtering

Search visible images with pagination, rating, tag, model, and ownership filters. Anonymous and third-party callers receive only media permitted by publication and adult-content policies.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { SearchImagesRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // string | Search query applied to title, description, prompt, and tags (comma-separated terms supported). (optional)
    search: landscape,
    // 'newest' | 'oldest' | 'reactions' | 'random' | 'hot' | Sort order for images (hot = recent images sorted by reactions). (optional)
    sort: newest,
    // number | Page number. (optional)
    page: 1,
    // number | Number of images per page (max 1000). (optional)
    limit: 12,
    // string | Comma-separated list of ratings to include (safe, questionable, sensitive, explicit). (optional)
    ratings: example-ratings,
    // number | Filter images by uploader id. (optional)
    userId: 1,
    // string | Auth only. Filter images reacted to by the current user (optionally specify a reaction type). (optional)
    selfReacted: example-self-reacted,
    // boolean | Auth only. Return images uploaded by users the current user follows. (optional)
    selfFollowing: true,
    // string | Cursor for keyset pagination (use nextCursor from a previous response; only supported for newest/oldest). (optional)
    cursor: next-page,
  } satisfies SearchImagesRequest;

  try {
    const data = await api.searchImages(body);
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
| **search** | `string` | Search query applied to title, description, prompt, and tags (comma-separated terms supported). | [Optional] [Defaults to `undefined`] |
| **sort** | `newest`, `oldest`, `reactions`, `random`, `hot` | Sort order for images (hot &#x3D; recent images sorted by reactions). | [Optional] [Defaults to `undefined`] [Enum: newest, oldest, reactions, random, hot] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Number of images per page (max 1000). | [Optional] [Defaults to `12`] |
| **ratings** | `string` | Comma-separated list of ratings to include (safe, questionable, sensitive, explicit). | [Optional] [Defaults to `undefined`] |
| **userId** | `number` | Filter images by uploader id. | [Optional] [Defaults to `undefined`] |
| **selfReacted** | `string` | Auth only. Filter images reacted to by the current user (optionally specify a reaction type). | [Optional] [Defaults to `undefined`] |
| **selfFollowing** | `boolean` | Auth only. Return images uploaded by users the current user follows. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Cursor for keyset pagination (use nextCursor from a previous response; only supported for newest/oldest). | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchImages200Response**](SearchImages200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of images. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchImagesByStyleUpload

> DeveloperStyleSearchResponse searchImagesByStyleUpload(image, backend, limit)

Upload an image and retrieve style-similar matches.

Upload up to three in-memory query images and return paginated visible style matches plus matcher capability metadata. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { SearchImagesByStyleUploadRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // Blob | Image associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary.
    image: BINARY_DATA_HERE,
    // string | Optional style matcher backend override. (optional)
    backend: backend_example,
    // number | Maximum number of records requested or returned in one page of this request payload. Maximum: 50. (optional)
    limit: 56,
  } satisfies SearchImagesByStyleUploadRequest;

  try {
    const data = await api.searchImagesByStyleUpload(body);
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
| **image** | `Blob` | Image associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary. | [Defaults to `undefined`] |
| **backend** | `string` | Optional style matcher backend override. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of records requested or returned in one page of this request payload. Maximum: 50. | [Optional] [Defaults to `8`] |

### Return type

[**DeveloperStyleSearchResponse**](DeveloperStyleSearchResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Style matches for the uploaded reference. |  * X-Request-ID -  <br>  |
| **400** | Missing or invalid upload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Style search access is restricted. |  * X-Request-ID -  <br>  |
| **429** | Style matcher is temporarily saturated. |  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | Style matcher unavailable. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setImagePin

> DeveloperMessageResponse setImagePin(id, setImagePinRequest)

Pin or unpin an image

Set the explicit pin state of an image within a caller-managed model after validating both resource identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { SetImagePinOperationRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | ID of the image to pin or unpin.
    id: 1,
    // SetImagePinRequest | Request payload for this operation.
    setImagePinRequest: {"modelId":1,"pin":true},
  } satisfies SetImagePinOperationRequest;

  try {
    const data = await api.setImagePin(body);
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
| **id** | `number` | ID of the image to pin or unpin. | [Defaults to `undefined`] |
| **setImagePinRequest** | [SetImagePinRequest](SetImagePinRequest.md) | Request payload for this operation. | |

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
| **200** | Pin state updated. |  * X-Request-ID -  <br>  |
| **400** | Missing/invalid modelId or pin payload, or no state change possible. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to pin/unpin for the target model. |  * X-Request-ID -  <br>  |
| **404** | Image or model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setImageShowcase

> DeveloperMessageResponse setImageShowcase(id, setImageShowcaseRequest)

Showcase or remove showcase from an image

Set the explicit showcased state for a caller-owned image while enforcing the per-profile showcase limit. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { SetImageShowcaseOperationRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | ID of the image to showcase.
    id: 1,
    // SetImageShowcaseRequest | Request payload for this operation.
    setImageShowcaseRequest: {"showcased":"NONE"},
  } satisfies SetImageShowcaseOperationRequest;

  try {
    const data = await api.setImageShowcase(body);
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
| **id** | `number` | ID of the image to showcase. | [Defaults to `undefined`] |
| **setImageShowcaseRequest** | [SetImageShowcaseRequest](SetImageShowcaseRequest.md) | Request payload for this operation. | |

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
| **403** | Not allowed to update showcase for this image. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateImage

> DeveloperImageMutationResponse updateImage(id, updateImageRequest)

Edit an existing image

Update supported metadata, prompt, generation parameters, tags, rating, and publication fields on a caller-managed image. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { UpdateImageOperationRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // number | Id provided in the path.
    id: 1,
    // UpdateImageRequest | Request payload for this operation.
    updateImageRequest: {"cfg":1,"description":"value","negativePrompt":"value","prompt":"value","sampler":"value","seed":"value","steps":1,"title":"value"},
  } satisfies UpdateImageOperationRequest;

  try {
    const data = await api.updateImage(body);
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
| **updateImageRequest** | [UpdateImageRequest](UpdateImageRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperImageMutationResponse**](DeveloperImageMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Image updated successfully. |  * X-Request-ID -  <br>  |
| **400** | Invalid input. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not allowed to edit). |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadImages

> DeveloperImageUploadResponse uploadImages(idempotencyKey, description, imageFiles, tags, title)

Upload one or multiple images

Upload up to twenty validated images with creator metadata and report accepted identifiers even when some files fail validation. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ImagesApi,
} from '@arcenciel/sdk';
import type { UploadImagesRequest } from '@arcenciel/sdk';

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
  const api = new ImagesApi(config);

  const body = {
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8',
    // string | User-facing description of this request payload; it may contain an empty string when no description was supplied. (optional)
    description: 'description_example',
    // Array<Blob> | Array of image files. (optional)
    imageFiles: [new Blob(['example file content'], { type: 'application/octet-stream' })],
    // string | Comma-separated list of tags. (optional)
    tags: 'tags_example',
    // string | Display title shown to users for this request payload. (optional)
    title: 'title_example',
  } satisfies UploadImagesRequest;

  try {
    const data = await api.uploadImages(body);
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
| **description** | `string` | User-facing description of this request payload; it may contain an empty string when no description was supplied. | [Optional] [Defaults to `undefined`] |
| **imageFiles** | `Array<Blob>` | Array of image files. | [Optional] |
| **tags** | `string` | Comma-separated list of tags. | [Optional] [Defaults to `undefined`] |
| **title** | `string` | Display title shown to users for this request payload. | [Optional] [Defaults to `undefined`] |

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
| **201** | Images uploaded successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **202** | Some images were rejected while the remaining images were stored. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Bad request (e.g. no files uploaded or invalid file format). |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
