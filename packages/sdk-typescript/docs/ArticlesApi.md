# ArticlesApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getArticle**](ArticlesApi.md#getarticle) | **GET** /api/articles/{id} | Retrieve an article by its ID |
| [**getArticleImage**](ArticlesApi.md#getarticleimage) | **GET** /api/articles/images/{imageId} | Retrieve an article image |
| [**searchArticles**](ArticlesApi.md#searcharticles) | **GET** /api/articles/search | Search articles |



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
