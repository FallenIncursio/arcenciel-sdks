# ImagesApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeImagePrompt**](ImagesApi.md#analyzeimageprompt) | **GET** /api/images/{id}/prompt-analysis | Group an image prompt by semantic category |
| [**downloadImage**](ImagesApi.md#downloadimage) | **GET** /api/images/{id}/download | Download the original image file |
| [**downloadImageLegacy**](ImagesApi.md#downloadimagelegacy) | **GET** /api/images/{id}/dl | Download the original image file (alias) |
| [**getImage**](ImagesApi.md#getimage) | **GET** /api/images/{id}/info | Retrieve image metadata by ID |
| [**getImageContent**](ImagesApi.md#getimagecontent) | **GET** /api/images/{id} | Retrieve an image file (webp if supported, original otherwise) |
| [**getImageSpatialAttribution**](ImagesApi.md#getimagespatialattribution) | **GET** /api/images/{id}/spatial-attribution | Retrieve the asynchronous tag-location analysis status |
| [**getImageSpatialAttributionAtlas**](ImagesApi.md#getimagespatialattributionatlas) | **GET** /api/images/{id}/spatial-attribution/atlas | Retrieve the private tag-location heatmap atlas |
| [**getImagesBulk**](ImagesApi.md#getimagesbulk) | **GET** /api/images/bulk-info | Retrieve lightweight metadata for multiple image IDs |
| [**listImageExternalResources**](ImagesApi.md#listimageexternalresources) | **GET** /api/images/{id}/external-resources | Resolve resources associated with an image |
| [**listImageStyleMatches**](ImagesApi.md#listimagestylematches) | **GET** /api/images/{id}/style-matches | Retrieve style-similar images for a given image. |
| [**listRelatedImages**](ImagesApi.md#listrelatedimages) | **GET** /api/images/{id}/related | Retrieve images related to a given image |
| [**searchImages**](ImagesApi.md#searchimages) | **GET** /api/images/search | Search images with pagination and filtering |



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
