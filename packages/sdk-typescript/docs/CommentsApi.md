# CommentsApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createArticleComment**](CommentsApi.md#createarticlecommentoperation) | **POST** /api/articles/{articleId}/comments | Create a comment on an article |
| [**createImageComment**](CommentsApi.md#createimagecomment) | **POST** /api/images/{imageId}/comments | Create a comment on an image |
| [**createModelComment**](CommentsApi.md#createmodelcomment) | **POST** /api/models/{modelId}/comments | Create a comment on a model |
| [**createVideoComment**](CommentsApi.md#createvideocomment) | **POST** /api/videos/{videoId}/comments | Create a comment on a video |
| [**deleteArticleComment**](CommentsApi.md#deletearticlecomment) | **DELETE** /api/articles/{articleId}/comments/{commentId} | Delete a comment on an article |
| [**deleteImageComment**](CommentsApi.md#deleteimagecomment) | **DELETE** /api/images/{imageId}/comments/{commentId} | Delete a comment on an image |
| [**deleteModelComment**](CommentsApi.md#deletemodelcomment) | **DELETE** /api/models/{modelId}/comments/{commentId} | Delete a comment on a model |
| [**deleteVideoComment**](CommentsApi.md#deletevideocomment) | **DELETE** /api/videos/{videoId}/comments/{commentId} | Delete a comment on a video |
| [**listArticleComments**](CommentsApi.md#listarticlecomments) | **GET** /api/articles/{articleId}/comments | List all comments for a specific article |
| [**listImageComments**](CommentsApi.md#listimagecomments) | **GET** /api/images/{imageId}/comments | Get all comments for a specific image |
| [**listModelComments**](CommentsApi.md#listmodelcomments) | **GET** /api/models/{modelId}/comments | List all comments for a specific model |
| [**listVideoComments**](CommentsApi.md#listvideocomments) | **GET** /api/videos/{videoId}/comments | List all comments for a specific video |
| [**updateArticleComment**](CommentsApi.md#updatearticlecommentoperation) | **PATCH** /api/articles/{articleId}/comments/{commentId} | Update an existing comment on an article |
| [**updateImageComment**](CommentsApi.md#updateimagecomment) | **PATCH** /api/images/{imageId}/comments/{commentId} | Update an existing comment on an image |
| [**updateModelComment**](CommentsApi.md#updatemodelcomment) | **PATCH** /api/models/{modelId}/comments/{commentId} | Update an existing comment on a model |
| [**updateVideoComment**](CommentsApi.md#updatevideocomment) | **PATCH** /api/videos/{videoId}/comments/{commentId} | Update an existing comment on a video |



## createArticleComment

> DeveloperCommentMutationResponse createArticleComment(articleId, createArticleCommentRequest, idempotencyKey)

Create a comment on an article

Create a comment on a visible article. Supply an Idempotency-Key when a request may be retried so network failures cannot create duplicate comments.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { CreateArticleCommentOperationRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | The ID of the article to comment on.
    articleId: 1,
    // CreateArticleCommentRequest | Comment text and optional parent comment.
    createArticleCommentRequest: {"content":"Beautiful composition!"},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: comment-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateArticleCommentOperationRequest;

  try {
    const data = await api.createArticleComment(body);
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
| **articleId** | `number` | The ID of the article to comment on. | [Defaults to `undefined`] |
| **createArticleCommentRequest** | [CreateArticleCommentRequest](CreateArticleCommentRequest.md) | Comment text and optional parent comment. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Comment created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Article not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createImageComment

> DeveloperCommentMutationResponse createImageComment(imageId, createArticleCommentRequest, idempotencyKey)

Create a comment on an image

Create a comment on a visible image. Reuse the same Idempotency-Key and payload for retries; changing the payload for a used key returns a conflict.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { CreateImageCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | ID of the image to comment on.
    imageId: 1,
    // CreateArticleCommentRequest | Comment text and optional parent comment.
    createArticleCommentRequest: {"content":"Beautiful composition!"},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: comment-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateImageCommentRequest;

  try {
    const data = await api.createImageComment(body);
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
| **imageId** | `number` | ID of the image to comment on. | [Defaults to `undefined`] |
| **createArticleCommentRequest** | [CreateArticleCommentRequest](CreateArticleCommentRequest.md) | Comment text and optional parent comment. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Comment created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createModelComment

> DeveloperCommentMutationResponse createModelComment(modelId, createArticleCommentRequest, idempotencyKey)

Create a comment on a model

Create a comment on a visible model. Idempotency records are isolated by caller, method, target path, and key and retain successful responses for 24 hours.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { CreateModelCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | The ID of the model.
    modelId: 1,
    // CreateArticleCommentRequest | Comment text and optional parent comment.
    createArticleCommentRequest: {"content":"Beautiful composition!"},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: comment-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateModelCommentRequest;

  try {
    const data = await api.createModelComment(body);
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
| **modelId** | `number` | The ID of the model. | [Defaults to `undefined`] |
| **createArticleCommentRequest** | [CreateArticleCommentRequest](CreateArticleCommentRequest.md) | Comment text and optional parent comment. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Comment created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createVideoComment

> DeveloperCommentMutationResponse createVideoComment(videoId, createArticleCommentRequest, idempotencyKey)

Create a comment on a video

Create a comment on a visible video. Clients that retry must send the original Idempotency-Key so the first successful response can be replayed safely.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { CreateVideoCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | The ID of the video to comment on.
    videoId: 1,
    // CreateArticleCommentRequest | Comment text and optional parent comment.
    createArticleCommentRequest: {"content":"Beautiful composition!"},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: comment-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateVideoCommentRequest;

  try {
    const data = await api.createVideoComment(body);
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
| **videoId** | `number` | The ID of the video to comment on. | [Defaults to `undefined`] |
| **createArticleCommentRequest** | [CreateArticleCommentRequest](CreateArticleCommentRequest.md) | Comment text and optional parent comment. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Comment created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteArticleComment

> DeveloperMessageResponse deleteArticleComment(articleId, commentId)

Delete a comment on an article

Delete a caller-owned comment from an article. The article identifier is validated with the comment so a record cannot be deleted through another target.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { DeleteArticleCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | Article Id provided in the path.
    articleId: 1,
    // number | Comment Id provided in the path.
    commentId: 1,
  } satisfies DeleteArticleCommentRequest;

  try {
    const data = await api.deleteArticleComment(body);
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
| **articleId** | `number` | Article Id provided in the path. | [Defaults to `undefined`] |
| **commentId** | `number` | Comment Id provided in the path. | [Defaults to `undefined`] |

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
| **200** | Comment deleted successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
| **404** | Article or comment not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteImageComment

> DeveloperMessageResponse deleteImageComment(imageId, commentId)

Delete a comment on an image

Delete a caller-owned comment from an image. The operation is classified as idempotent, although a repeated call may report that the record is gone.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { DeleteImageCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | ID of the image.
    imageId: 1,
    // number | ID of the comment to delete.
    commentId: 1,
  } satisfies DeleteImageCommentRequest;

  try {
    const data = await api.deleteImageComment(body);
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
| **imageId** | `number` | ID of the image. | [Defaults to `undefined`] |
| **commentId** | `number` | ID of the comment to delete. | [Defaults to `undefined`] |

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
| **200** | Comment deleted successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
| **404** | Image or comment not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteModelComment

> DeveloperMessageResponse deleteModelComment(modelId, commentId)

Delete a comment on a model

Delete a caller-owned comment from a model while preserving ownership and target checks. Repeating the deletion cannot recreate the comment.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { DeleteModelCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Comment Id provided in the path.
    commentId: 1,
  } satisfies DeleteModelCommentRequest;

  try {
    const data = await api.deleteModelComment(body);
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
| **commentId** | `number` | Comment Id provided in the path. | [Defaults to `undefined`] |

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
| **200** | Comment deleted successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
| **404** | Model or comment not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteVideoComment

> DeveloperMessageResponse deleteVideoComment(videoId, commentId)

Delete a comment on a video

Delete a caller-owned comment from a video while validating both identifiers and ownership. Repeated calls leave the same final resource state.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { DeleteVideoCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | Video Id provided in the path.
    videoId: 1,
    // number | Comment Id provided in the path.
    commentId: 1,
  } satisfies DeleteVideoCommentRequest;

  try {
    const data = await api.deleteVideoComment(body);
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
| **videoId** | `number` | Video Id provided in the path. | [Defaults to `undefined`] |
| **commentId** | `number` | Comment Id provided in the path. | [Defaults to `undefined`] |

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
| **200** | Comment deleted successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
| **404** | Video or comment not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listArticleComments

> Array&lt;DeveloperComment&gt; listArticleComments(articleId)

List all comments for a specific article

List comments visible on one article. This read accepts anonymous callers, while an ArticlesRead API key may be used for consistent attribution and support diagnostics.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { ListArticleCommentsRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | The ID of the article.
    articleId: 1,
  } satisfies ListArticleCommentsRequest;

  try {
    const data = await api.listArticleComments(body);
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
| **articleId** | `number` | The ID of the article. | [Defaults to `undefined`] |

### Return type

[**Array&lt;DeveloperComment&gt;**](DeveloperComment.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns an array of comments. |  * X-Request-ID -  <br>  |
| **404** | Article not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listImageComments

> Array&lt;DeveloperComment&gt; listImageComments(imageId)

Get all comments for a specific image

List comments visible on one image without requiring a write-capable credential. Image visibility and moderation rules are applied before any comment records are returned.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { ListImageCommentsRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | ID of the image.
    imageId: 1,
  } satisfies ListImageCommentsRequest;

  try {
    const data = await api.listImageComments(body);
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
| **imageId** | `number` | ID of the image. | [Defaults to `undefined`] |

### Return type

[**Array&lt;DeveloperComment&gt;**](DeveloperComment.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns an array of comments. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listModelComments

> Array&lt;DeveloperComment&gt; listModelComments(modelId)

List all comments for a specific model

List comments visible on one model using the domain read scope rather than SocialWrite. The target model must remain visible to the current caller.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { ListModelCommentsRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | The ID of the model.
    modelId: 1,
  } satisfies ListModelCommentsRequest;

  try {
    const data = await api.listModelComments(body);
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
| **modelId** | `number` | The ID of the model. | [Defaults to `undefined`] |

### Return type

[**Array&lt;DeveloperComment&gt;**](DeveloperComment.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns an array of comments. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listVideoComments

> Array&lt;DeveloperComment&gt; listVideoComments(videoId)

List all comments for a specific video

List comments visible on one video using a VideosRead credential when API-key authentication is selected. Inaccessible videos do not leak comment metadata.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { ListVideoCommentsRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | The ID of the video.
    videoId: 1,
  } satisfies ListVideoCommentsRequest;

  try {
    const data = await api.listVideoComments(body);
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
| **videoId** | `number` | The ID of the video. | [Defaults to `undefined`] |

### Return type

[**Array&lt;DeveloperComment&gt;**](DeveloperComment.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns an array of comments. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateArticleComment

> DeveloperCommentMutationResponse updateArticleComment(articleId, commentId, updateArticleCommentRequest)

Update an existing comment on an article

Replace the editable content of the caller-owned article comment. Ownership is enforced by the runtime and other users cannot update the record.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { UpdateArticleCommentOperationRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | Article Id provided in the path.
    articleId: 1,
    // number | Comment Id provided in the path.
    commentId: 1,
    // UpdateArticleCommentRequest | Replacement comment text.
    updateArticleCommentRequest: {"content":"Beautiful composition!"},
  } satisfies UpdateArticleCommentOperationRequest;

  try {
    const data = await api.updateArticleComment(body);
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
| **articleId** | `number` | Article Id provided in the path. | [Defaults to `undefined`] |
| **commentId** | `number` | Comment Id provided in the path. | [Defaults to `undefined`] |
| **updateArticleCommentRequest** | [UpdateArticleCommentRequest](UpdateArticleCommentRequest.md) | Replacement comment text. | |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Comment updated successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
| **404** | Article or comment not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateImageComment

> DeveloperCommentMutationResponse updateImageComment(imageId, commentId, updateArticleCommentRequest)

Update an existing comment on an image

Replace the editable content of the caller-owned image comment. The target image and comment relationship are both validated before mutation.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { UpdateImageCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | ID of the image.
    imageId: 1,
    // number | ID of the comment to update.
    commentId: 1,
    // UpdateArticleCommentRequest | Replacement comment text.
    updateArticleCommentRequest: {"content":"Beautiful composition!"},
  } satisfies UpdateImageCommentRequest;

  try {
    const data = await api.updateImageComment(body);
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
| **imageId** | `number` | ID of the image. | [Defaults to `undefined`] |
| **commentId** | `number` | ID of the comment to update. | [Defaults to `undefined`] |
| **updateArticleCommentRequest** | [UpdateArticleCommentRequest](UpdateArticleCommentRequest.md) | Replacement comment text. | |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Comment updated successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
| **404** | Image or comment not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateModelComment

> DeveloperCommentMutationResponse updateModelComment(modelId, commentId, updateArticleCommentRequest)

Update an existing comment on a model

Replace the editable content of the caller-owned model comment. The operation never permits an API key to edit another user’s comment.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { UpdateModelCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Comment Id provided in the path.
    commentId: 1,
    // UpdateArticleCommentRequest | Replacement comment text.
    updateArticleCommentRequest: {"content":"Beautiful composition!"},
  } satisfies UpdateModelCommentRequest;

  try {
    const data = await api.updateModelComment(body);
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
| **commentId** | `number` | Comment Id provided in the path. | [Defaults to `undefined`] |
| **updateArticleCommentRequest** | [UpdateArticleCommentRequest](UpdateArticleCommentRequest.md) | Replacement comment text. | |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Comment updated successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
| **404** | Model or comment not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateVideoComment

> DeveloperCommentMutationResponse updateVideoComment(videoId, commentId, updateArticleCommentRequest)

Update an existing comment on a video

Replace the editable content of the caller-owned video comment. Video visibility and comment ownership are checked independently by the runtime.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@arcenciel/sdk';
import type { UpdateVideoCommentRequest } from '@arcenciel/sdk';

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
  const api = new CommentsApi(config);

  const body = {
    // number | Video Id provided in the path.
    videoId: 1,
    // number | Comment Id provided in the path.
    commentId: 1,
    // UpdateArticleCommentRequest | Replacement comment text.
    updateArticleCommentRequest: {"content":"Beautiful composition!"},
  } satisfies UpdateVideoCommentRequest;

  try {
    const data = await api.updateVideoComment(body);
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
| **videoId** | `number` | Video Id provided in the path. | [Defaults to `undefined`] |
| **commentId** | `number` | Comment Id provided in the path. | [Defaults to `undefined`] |
| **updateArticleCommentRequest** | [UpdateArticleCommentRequest](UpdateArticleCommentRequest.md) | Replacement comment text. | |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Comment updated successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
| **404** | Video or comment not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
