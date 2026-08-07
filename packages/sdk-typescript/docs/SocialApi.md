# SocialApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**followUser**](SocialApi.md#followuser) | **POST** /api/users/{id}/follow | Follow a user. |
| [**removeImageReaction**](SocialApi.md#removeimagereaction) | **DELETE** /api/images/{id}/reactions | Remove the user\&#39;s reaction from an image |
| [**removeVideoReaction**](SocialApi.md#removevideoreaction) | **DELETE** /api/videos/{id}/reactions | Remove your reaction from a video |
| [**setArticleFavorite**](SocialApi.md#setarticlefavoriteoperation) | **PATCH** /api/articles/{id}/favorited | Favorite or unfavorite an article |
| [**setCollectionFavorite**](SocialApi.md#setcollectionfavorite) | **PATCH** /api/collections/{collectionId}/favorited | Favorite or unfavorite a collection |
| [**setImageReaction**](SocialApi.md#setimagereactionoperation) | **POST** /api/images/{id}/reactions | Add or update a reaction to an image |
| [**setModelFavorite**](SocialApi.md#setmodelfavorite) | **PATCH** /api/models/{id}/favorited | Favorite or unfavorite a model |
| [**setVideoReaction**](SocialApi.md#setvideoreactionoperation) | **POST** /api/videos/{id}/reactions | React to a video |
| [**unfollowUser**](SocialApi.md#unfollowuser) | **DELETE** /api/users/{id}/follow | Unfollow a user. |



## followUser

> DeveloperMessageResponse followUser(id)

Follow a user.

Follow a visible user as the authenticated caller. The runtime prevents self-following and duplicate relationships and emits the normal notification workflow.

### Example

```ts
import {
  Configuration,
  SocialApi,
} from '@arcenciel/sdk';
import type { FollowUserRequest } from '@arcenciel/sdk';

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
  const api = new SocialApi(config);

  const body = {
    // number | The ID of the user to follow.
    id: 1,
  } satisfies FollowUserRequest;

  try {
    const data = await api.followUser(body);
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
| **id** | `number` | The ID of the user to follow. | [Defaults to `undefined`] |

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
| **200** | Follow successful. |  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeImageReaction

> DeveloperImageReactionResponse removeImageReaction(id)

Remove the user\&#39;s reaction from an image

Remove the current caller’s reaction from a visible image. The final state is stable when the request is repeated after an ambiguous response.

### Example

```ts
import {
  Configuration,
  SocialApi,
} from '@arcenciel/sdk';
import type { RemoveImageReactionRequest } from '@arcenciel/sdk';

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
  const api = new SocialApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
  } satisfies RemoveImageReactionRequest;

  try {
    const data = await api.removeImageReaction(body);
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

[**DeveloperImageReactionResponse**](DeveloperImageReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reaction removed successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeVideoReaction

> DeveloperVideoReactionResponse removeVideoReaction(id)

Remove your reaction from a video

Remove the current caller’s reaction from a visible video. The response includes the updated video representation for UI reconciliation.

### Example

```ts
import {
  Configuration,
  SocialApi,
} from '@arcenciel/sdk';
import type { RemoveVideoReactionRequest } from '@arcenciel/sdk';

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
  const api = new SocialApi(config);

  const body = {
    // string | The ID of the video.
    id: example-id,
  } satisfies RemoveVideoReactionRequest;

  try {
    const data = await api.removeVideoReaction(body);
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
| **id** | `string` | The ID of the video. | [Defaults to `undefined`] |

### Return type

[**DeveloperVideoReactionResponse**](DeveloperVideoReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reaction removed successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setArticleFavorite

> DeveloperMessageResponse setArticleFavorite(id, setArticleFavoriteRequest)

Favorite or unfavorite an article

Set the current caller’s favorite state for a visible article using an explicit boolean. Repeating the same desired state cannot reverse the result.

### Example

```ts
import {
  Configuration,
  SocialApi,
} from '@arcenciel/sdk';
import type { SetArticleFavoriteOperationRequest } from '@arcenciel/sdk';

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
  const api = new SocialApi(config);

  const body = {
    // number | The article ID.
    id: 1,
    // SetArticleFavoriteRequest
    setArticleFavoriteRequest: {"favorite":true},
  } satisfies SetArticleFavoriteOperationRequest;

  try {
    const data = await api.setArticleFavorite(body);
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
| **setArticleFavoriteRequest** | [SetArticleFavoriteRequest](SetArticleFavoriteRequest.md) |  | |

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
| **200** | Favorite state updated. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Article not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setCollectionFavorite

> DeveloperMessageResponse setCollectionFavorite(collectionId, setArticleFavoriteRequest)

Favorite or unfavorite a collection

Set the current caller’s favorite state for a visible collection using an explicit boolean. Repeating the same desired state cannot reverse it.

### Example

```ts
import {
  Configuration,
  SocialApi,
} from '@arcenciel/sdk';
import type { SetCollectionFavoriteRequest } from '@arcenciel/sdk';

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
  const api = new SocialApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // SetArticleFavoriteRequest
    setArticleFavoriteRequest: {"favorite":true},
  } satisfies SetCollectionFavoriteRequest;

  try {
    const data = await api.setCollectionFavorite(body);
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
| **collectionId** | `number` | Collection Id provided in the path. | [Defaults to `undefined`] |
| **setArticleFavoriteRequest** | [SetArticleFavoriteRequest](SetArticleFavoriteRequest.md) |  | |

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
| **200** | Favorite status updated. |  * X-Request-ID -  <br>  |
| **400** | Invalid request. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Collection not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setImageReaction

> DeveloperImageReactionResponse setImageReaction(id, setImageReactionRequest)

Add or update a reaction to an image

Set or replace the current caller’s reaction on a visible image. Sending the same reaction again leaves the resource in the same state.

### Example

```ts
import {
  Configuration,
  SocialApi,
} from '@arcenciel/sdk';
import type { SetImageReactionOperationRequest } from '@arcenciel/sdk';

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
  const api = new SocialApi(config);

  const body = {
    // number | Unique identifier of the image.
    id: 1,
    // SetImageReactionRequest | Reaction type to apply.
    setImageReactionRequest: {"reactionType":"heart"},
  } satisfies SetImageReactionOperationRequest;

  try {
    const data = await api.setImageReaction(body);
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
| **setImageReactionRequest** | [SetImageReactionRequest](SetImageReactionRequest.md) | Reaction type to apply. | |

### Return type

[**DeveloperImageReactionResponse**](DeveloperImageReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reaction updated successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setModelFavorite

> DeveloperMessageResponse setModelFavorite(id, setArticleFavoriteRequest)

Favorite or unfavorite a model

Set the current caller’s favorite state for a visible model using an explicit boolean. Repeating the same desired state cannot reverse the result.

### Example

```ts
import {
  Configuration,
  SocialApi,
} from '@arcenciel/sdk';
import type { SetModelFavoriteRequest } from '@arcenciel/sdk';

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
  const api = new SocialApi(config);

  const body = {
    // number | Id provided in the path.
    id: 1,
    // SetArticleFavoriteRequest
    setArticleFavoriteRequest: {"favorite":true},
  } satisfies SetModelFavoriteRequest;

  try {
    const data = await api.setModelFavorite(body);
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
| **setArticleFavoriteRequest** | [SetArticleFavoriteRequest](SetArticleFavoriteRequest.md) |  | |

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
| **200** | Favorite state updated. |  * X-Request-ID -  <br>  |
| **400** | Missing/invalid favorite value or no state change possible. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setVideoReaction

> DeveloperVideoReactionResponse setVideoReaction(id, setVideoReactionRequest)

React to a video

Set or replace the current caller’s reaction on a visible video. The returned video representation includes the reaction counts after the mutation.

### Example

```ts
import {
  Configuration,
  SocialApi,
} from '@arcenciel/sdk';
import type { SetVideoReactionOperationRequest } from '@arcenciel/sdk';

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
  const api = new SocialApi(config);

  const body = {
    // string | The ID of the video.
    id: example-id,
    // SetVideoReactionRequest | Reaction details.
    setVideoReactionRequest: {"reactionType":"heart"},
  } satisfies SetVideoReactionOperationRequest;

  try {
    const data = await api.setVideoReaction(body);
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
| **id** | `string` | The ID of the video. | [Defaults to `undefined`] |
| **setVideoReactionRequest** | [SetVideoReactionRequest](SetVideoReactionRequest.md) | Reaction details. | |

### Return type

[**DeveloperVideoReactionResponse**](DeveloperVideoReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reaction updated successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unfollowUser

> DeveloperMessageResponse unfollowUser(id)

Unfollow a user.

Remove the authenticated caller’s follow relationship with a user. Repeating the operation cannot recreate the relationship.

### Example

```ts
import {
  Configuration,
  SocialApi,
} from '@arcenciel/sdk';
import type { UnfollowUserRequest } from '@arcenciel/sdk';

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
  const api = new SocialApi(config);

  const body = {
    // number | The ID of the user to unfollow.
    id: 1,
  } satisfies UnfollowUserRequest;

  try {
    const data = await api.unfollowUser(body);
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
| **id** | `number` | The ID of the user to unfollow. | [Defaults to `undefined`] |

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
| **200** | Unfollow successful. |  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
