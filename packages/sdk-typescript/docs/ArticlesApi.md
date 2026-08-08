# ArticlesApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createArticle**](ArticlesApi.md#createarticle) | **POST** /api/articles | Create a new article |
| [**deleteArticle**](ArticlesApi.md#deletearticle) | **DELETE** /api/articles/{id} | Soft-delete an article |
| [**getArticle**](ArticlesApi.md#getarticle) | **GET** /api/articles/{id} | Retrieve an article by its ID |
| [**getArticleImage**](ArticlesApi.md#getarticleimage) | **GET** /api/articles/images/{imageId} | Retrieve an article image |
| [**publishArticle**](ArticlesApi.md#publisharticle) | **POST** /api/articles/{id}/publish | Publish an article |
| [**searchArticles**](ArticlesApi.md#searcharticles) | **GET** /api/articles/search | Search articles |
| [**setArticleShowcase**](ArticlesApi.md#setarticleshowcase) | **PATCH** /api/articles/{id}/showcased | Showcase or unshowcase an article |
| [**updateArticle**](ArticlesApi.md#updatearticleoperation) | **PATCH** /api/articles/{id} | Update an existing article |
| [**uploadArticleImages**](ArticlesApi.md#uploadarticleimages) | **POST** /api/articles/{id}/images | Upload images for an article |



## createArticle

> DeveloperArticleMutationResponse createArticle(idempotencyKey, content, tags, thumbnailFile, title)

Create a new article

Create an article draft with sanitized content, tags, optional thumbnail media, visibility metadata, and caller ownership. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '@arcenciel/sdk';
import type { CreateArticleRequest } from '@arcenciel/sdk';

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
  const api = new ArticlesApi(config);

  const body = {
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
    // string | Sanitized rich HTML article body. Legacy Markdown or mixed Markdown/HTML is accepted for compatibility and rendered by the rich-content pipeline. (optional)
    content: content_example,
    // string | Tags associated with this request payload; preserve server-returned values when passing them to another operation. (optional)
    tags: tags_example,
    // Blob | Thumbnail File associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary. (optional)
    thumbnailFile: BINARY_DATA_HERE,
    // string | Display title shown to users for this request payload. (optional)
    title: title_example,
  } satisfies CreateArticleRequest;

  try {
    const data = await api.createArticle(body);
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
| **content** | `string` | Sanitized rich HTML article body. Legacy Markdown or mixed Markdown/HTML is accepted for compatibility and rendered by the rich-content pipeline. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Tags associated with this request payload; preserve server-returned values when passing them to another operation. | [Optional] [Defaults to `undefined`] |
| **thumbnailFile** | `Blob` | Thumbnail File associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary. | [Optional] [Defaults to `undefined`] |
| **title** | `string` | Display title shown to users for this request payload. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperArticleMutationResponse**](DeveloperArticleMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Article successfully created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **409** | The request conflicts with the current state of the target resource. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteArticle

> DeveloperMessageResponse deleteArticle(id)

Soft-delete an article

Soft-delete a caller-managed article and remove its content from normal visibility without reusing its identifier. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '@arcenciel/sdk';
import type { DeleteArticleRequest } from '@arcenciel/sdk';

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
  const api = new ArticlesApi(config);

  const body = {
    // number | The unique ID of the article to delete.
    id: 1,
  } satisfies DeleteArticleRequest;

  try {
    const data = await api.deleteArticle(body);
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
| **id** | `number` | The unique ID of the article to delete. | [Defaults to `undefined`] |

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
| **200** | Article deleted successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Article not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getArticle

> Article getArticle(id)

Retrieve an article by its ID

Return one article visible to the caller, including its public author and media metadata. Draft and scheduled visibility continues to follow owner, staff, and publication-time rules.

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '@arcenciel/sdk';
import type { GetArticleRequest } from '@arcenciel/sdk';

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
  const api = new ArticlesApi(config);

  const body = {
    // number | The unique ID of the article.
    id: 1,
  } satisfies GetArticleRequest;

  try {
    const data = await api.getArticle(body);
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
| **id** | `number` | The unique ID of the article. | [Defaults to `undefined`] |

### Return type

[**Article**](Article.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested article. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **404** | Article not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getArticleImage

> Blob getArticleImage(imageId, variant)

Retrieve an article image

Transfer an article image in an available web image format after applying article visibility rules. Clients should use the returned Content-Type instead of inferring a format from the URL.

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '@arcenciel/sdk';
import type { GetArticleImageRequest } from '@arcenciel/sdk';

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
  const api = new ArticlesApi(config);

  const body = {
    // number | Image Id provided in the path.
    imageId: 1,
    // string | Optional generated image variant name. (optional)
    variant: example-variant,
  } satisfies GetArticleImageRequest;

  try {
    const data = await api.getArticleImage(body);
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
| **imageId** | `number` | Image Id provided in the path. | [Defaults to `undefined`] |
| **variant** | `string` | Optional generated image variant name. | [Optional] [Defaults to `undefined`] |

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
| **200** | Article image file. |  * X-Request-ID -  <br>  |
| **400** | Invalid image id. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Image not found or not visible to the viewer. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publishArticle

> DeveloperMessageResponse publishArticle(id)

Publish an article

Publish a caller-managed article draft immediately after enforcing publication status, ownership, and content lifecycle rules. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '@arcenciel/sdk';
import type { PublishArticleRequest } from '@arcenciel/sdk';

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
  const api = new ArticlesApi(config);

  const body = {
    // number | The article ID.
    id: 1,
  } satisfies PublishArticleRequest;

  try {
    const data = await api.publishArticle(body);
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
| **id** | `number` | The article ID. | [Defaults to `undefined`] |

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
| **200** | Article published. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Article not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchArticles

> SearchArticles200Response searchArticles(search, sort, page, limit, userId, selfFavorited, selfFollowing)

Search articles

Search visible articles with pagination and filters. Anonymous callers receive public articles; authenticated owners and staff may receive additional content allowed by the runtime visibility policy.

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '@arcenciel/sdk';
import type { SearchArticlesRequest } from '@arcenciel/sdk';

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
  const api = new ArticlesApi(config);

  const body = {
    // string | Search query applied to title, content, and tags (supports (optional)
    search: landscape,
    // 'newest' | 'oldest' | 'favorites' | 'hot' | Sort order for articles (newest uses bumpedAt; manual content edits bump at most once per 24h; autosave excluded. hot = recent articles sorted by favorites). (optional)
    sort: newest,
    // number | Page number. (optional)
    page: 1,
    // number | Number of articles per page (max 1000). (optional)
    limit: 20,
    // number | Filter articles by uploader id. (optional)
    userId: 1,
    // boolean | Auth only. Return articles favorited by the current user. (optional)
    selfFavorited: true,
    // boolean | Auth only. Return articles uploaded by users the current user follows. (optional)
    selfFollowing: true,
  } satisfies SearchArticlesRequest;

  try {
    const data = await api.searchArticles(body);
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
| **search** | `string` | Search query applied to title, content, and tags (supports | [Optional] [Defaults to `undefined`] |
| **sort** | `newest`, `oldest`, `favorites`, `hot` | Sort order for articles (newest uses bumpedAt; manual content edits bump at most once per 24h; autosave excluded. hot &#x3D; recent articles sorted by favorites). | [Optional] [Defaults to `undefined`] [Enum: newest, oldest, favorites, hot] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Number of articles per page (max 1000). | [Optional] [Defaults to `20`] |
| **userId** | `number` | Filter articles by uploader id. | [Optional] [Defaults to `undefined`] |
| **selfFavorited** | `boolean` | Auth only. Return articles favorited by the current user. | [Optional] [Defaults to `undefined`] |
| **selfFollowing** | `boolean` | Auth only. Return articles uploaded by users the current user follows. | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchArticles200Response**](SearchArticles200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of articles. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setArticleShowcase

> DeveloperMessageResponse setArticleShowcase(id)

Showcase or unshowcase an article

Set the explicit showcased state for a caller-owned article while enforcing the per-profile showcase limit. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '@arcenciel/sdk';
import type { SetArticleShowcaseRequest } from '@arcenciel/sdk';

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
  const api = new ArticlesApi(config);

  const body = {
    // number | The article ID.
    id: 1,
  } satisfies SetArticleShowcaseRequest;

  try {
    const data = await api.setArticleShowcase(body);
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
| **id** | `number` | The article ID. | [Defaults to `undefined`] |

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
| **200** | Showcase state updated. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Article not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateArticle

> DeveloperArticleMutationResponse updateArticle(id, updateArticleRequest)

Update an existing article

Update supported article fields and optionally replace its thumbnail while preserving ownership and publication visibility rules. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '@arcenciel/sdk';
import type { UpdateArticleOperationRequest } from '@arcenciel/sdk';

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
  const api = new ArticlesApi(config);

  const body = {
    // number | The unique ID of the article to update.
    id: 1,
    // UpdateArticleRequest | Request payload for this operation.
    updateArticleRequest: {"content":"value","tags":"value","title":"value"},
  } satisfies UpdateArticleOperationRequest;

  try {
    const data = await api.updateArticle(body);
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
| **id** | `number` | The unique ID of the article to update. | [Defaults to `undefined`] |
| **updateArticleRequest** | [UpdateArticleRequest](UpdateArticleRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperArticleMutationResponse**](DeveloperArticleMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Article updated successfully. |  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden – insufficient permissions. |  * X-Request-ID -  <br>  |
| **404** | Article not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadArticleImages

> DeveloperStoredImagesUploadResponse uploadArticleImages(id, idempotencyKey, imageFiles)

Upload images for an article

Upload validated inline images to an article owned by the caller and report partial validation failures without hiding accepted media. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  ArticlesApi,
} from '@arcenciel/sdk';
import type { UploadArticleImagesRequest } from '@arcenciel/sdk';

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
  const api = new ArticlesApi(config);

  const body = {
    // number | The article ID.
    id: 1,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8',
    // Array<Blob> | Ordered image files entries included with this request payload; an empty list means none are available. (optional)
    imageFiles: [new Blob(['example file content'], { type: 'application/octet-stream' })],
  } satisfies UploadArticleImagesRequest;

  try {
    const data = await api.uploadArticleImages(body);
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
| **id** | `number` | The article ID. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **imageFiles** | `Array<Blob>` | Ordered image files entries included with this request payload; an empty list means none are available. | [Optional] |

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
| **201** | Images uploaded. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **202** | Some images were rejected while the remaining images were stored. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | The caller may not edit this article. |  * X-Request-ID -  <br>  |
| **404** | Article not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
