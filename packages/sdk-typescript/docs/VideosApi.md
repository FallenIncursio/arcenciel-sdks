# VideosApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteVideo**](VideosApi.md#deletevideo) | **DELETE** /api/videos/{id} | Delete a video (only author or admin/mod) |
| [**downloadVideo**](VideosApi.md#downloadvideo) | **GET** /api/videos/{id}/download | Download a video file |
| [**getVideo**](VideosApi.md#getvideo) | **GET** /api/videos/{id} | Retrieve a video by its ID |
| [**getVideoHlsAsset**](VideosApi.md#getvideohlsasset) | **GET** /api/videos/{id}/hls/{quality}/{asset} | Retrieve an authenticated HLS playlist or segment |
| [**getVideoHlsManifest**](VideosApi.md#getvideohlsmanifest) | **GET** /api/videos/{id}/stream.m3u8 | Retrieve an authenticated HLS master playlist |
| [**getVideoPoster**](VideosApi.md#getvideoposter) | **GET** /api/videos/{id}/poster | Retrieve an authenticated video poster image |
| [**listRelatedVideos**](VideosApi.md#listrelatedvideos) | **GET** /api/videos/{id}/related | List videos related to a given video |
| [**publishVideo**](VideosApi.md#publishvideo) | **POST** /api/videos/{id}/publish | Publish a video immediately |
| [**scheduleVideo**](VideosApi.md#schedulevideooperation) | **POST** /api/videos/{id}/schedule | Schedule publishing of a video |
| [**searchVideos**](VideosApi.md#searchvideos) | **GET** /api/videos/search | Search videos |
| [**setVideoShowcase**](VideosApi.md#setvideoshowcase) | **PATCH** /api/videos/{id}/showcased | Showcase or unshowcase a video |
| [**streamVideo**](VideosApi.md#streamvideo) | **GET** /api/videos/{id}/stream | Stream a video using range requests |
| [**updateVideo**](VideosApi.md#updatevideooperation) | **PATCH** /api/videos/{id} | Edit an existing video |
| [**uploadVideos**](VideosApi.md#uploadvideos) | **POST** /api/videos/upload | Upload a video |



## deleteVideo

> DeveloperMessageResponse deleteVideo(id)

Delete a video (only author or admin/mod)

Delete a caller-managed video, its poster and stream derivatives, and dependent associations after authorization checks. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { DeleteVideoRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | The ID of the video to delete.
    id: example-id,
  } satisfies DeleteVideoRequest;

  try {
    const data = await api.deleteVideo(body);
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
| **id** | `string` | The ID of the video to delete. | [Defaults to `undefined`] |

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
| **200** | Video deleted successfully. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | Forbidden – not the owner or admin/mod. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadVideo

> Blob downloadVideo(id)

Download a video file

Download the original bytes of a visible video with a server-provided filename. The download limiter applies and clients should stream the response instead of buffering large files.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { DownloadVideoRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | The ID of the video to download.
    id: example-id,
  } satisfies DownloadVideoRequest;

  try {
    const data = await api.downloadVideo(body);
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
| **id** | `string` | The ID of the video to download. | [Defaults to `undefined`] |

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
| **200** | The video file as a binary stream. |  * Content-Disposition - Attachment disposition containing the sanitized stored filename. <br>  * X-Request-ID -  <br>  |
| **404** | Video not found or file missing. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVideo

> Video getVideo(id)

Retrieve a video by its ID

Return metadata for one visible video, including the public uploader, tags, linked resources, reactions, and available stream metadata appropriate for the caller.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { GetVideoRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | The ID of the video.
    id: example-id,
  } satisfies GetVideoRequest;

  try {
    const data = await api.getVideo(body);
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

[**Video**](Video.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The video object. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVideoHlsAsset

> string getVideoHlsAsset(id, quality, asset)

Retrieve an authenticated HLS playlist or segment

Transfer an HLS variant playlist or transport-stream segment for a visible video. Callers must preserve the quality and asset path emitted by the master playlist.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { GetVideoHlsAssetRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
    // string | HLS quality directory, such as 720p.
    quality: example-quality,
    // string | Playlist or transport-stream segment filename.
    asset: example-asset,
  } satisfies GetVideoHlsAssetRequest;

  try {
    const data = await api.getVideoHlsAsset(body);
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
| **quality** | `string` | HLS quality directory, such as 720p. | [Defaults to `undefined`] |
| **asset** | `string` | Playlist or transport-stream segment filename. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/vnd.apple.mpegurl`, `video/mp2t`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rewritten HLS playlist or MPEG transport stream segment. |  * X-Request-ID -  <br>  |
| **404** | Video stream asset not found, or access denied. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVideoHlsManifest

> string getVideoHlsManifest(id)

Retrieve an authenticated HLS master playlist

Return the authenticated HLS master playlist for a visible video. Clients should resolve variant asset URLs from this manifest and must not construct private storage paths.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { GetVideoHlsManifestRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
  } satisfies GetVideoHlsManifestRequest;

  try {
    const data = await api.getVideoHlsManifest(body);
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

**string**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/vnd.apple.mpegurl`, `text/plain`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | HLS master playlist with authenticated child asset URLs. |  * X-Request-ID -  <br>  |
| **404** | Video or manifest not found, or access denied. |  * X-Request-ID -  <br>  |
| **416** | Requested byte range is outside the stored fallback asset. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVideoPoster

> Blob getVideoPoster(id)

Retrieve an authenticated video poster image

Transfer the poster image for a visible video after applying its rating and publication policy. Clients must honor the returned image Content-Type and cache headers.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { GetVideoPosterRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | The ID of the video poster to retrieve.
    id: example-id,
  } satisfies GetVideoPosterRequest;

  try {
    const data = await api.getVideoPoster(body);
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
| **id** | `string` | The ID of the video poster to retrieve. | [Defaults to `undefined`] |

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
| **200** | Poster image. |  * X-Request-ID -  <br>  |
| **404** | Video or poster not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listRelatedVideos

> Array&lt;Video&gt; listRelatedVideos(id)

List videos related to a given video

List videos related to one visible source video while filtering every result for publication, ownership, rating, and adult-content access of the current caller.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { ListRelatedVideosRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | The ID of the reference video.
    id: example-id,
  } satisfies ListRelatedVideosRequest;

  try {
    const data = await api.listRelatedVideos(body);
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
| **id** | `string` | The ID of the reference video. | [Defaults to `undefined`] |

### Return type

[**Array&lt;Video&gt;**](Video.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Related videos returned. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publishVideo

> DeveloperMessageResponse publishVideo(id)

Publish a video immediately

Publish a caller-managed video immediately and apply the normal visibility, notification, and audit workflow. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { PublishVideoRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | ID of the video to publish.
    id: example-id,
  } satisfies PublishVideoRequest;

  try {
    const data = await api.publishVideo(body);
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
| **id** | `string` | ID of the video to publish. | [Defaults to `undefined`] |

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
| **200** | Video published. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to publish this video. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scheduleVideo

> DeveloperMessageResponse scheduleVideo(id, scheduleVideoRequest)

Schedule publishing of a video

Schedule a caller-managed video for a future publication time supplied as an ISO-8601 timestamp. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { ScheduleVideoOperationRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | ID of the video to schedule.
    id: example-id,
    // ScheduleVideoRequest | Request payload for this operation.
    scheduleVideoRequest: {"publishAt":"2026-07-28T10:00:00.000Z"},
  } satisfies ScheduleVideoOperationRequest;

  try {
    const data = await api.scheduleVideo(body);
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
| **id** | `string` | ID of the video to schedule. | [Defaults to `undefined`] |
| **scheduleVideoRequest** | [ScheduleVideoRequest](ScheduleVideoRequest.md) | Request payload for this operation. | |

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
| **200** | Video scheduled. |  * X-Request-ID -  <br>  |
| **400** | Invalid publish date. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to schedule this video. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchVideos

> SearchVideos200Response searchVideos(search, sort, page, limit, ratings, userId, selfReacted, selfFollowing, cursor)

Search videos

Search visible videos with pagination, rating, tag, model, and ownership filters. Returned media is limited by publication, ownership, and adult-content policy for the caller.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { SearchVideosRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | Search query applied to title, description, and tags (comma-separated terms supported). (optional)
    search: landscape,
    // 'newest' | 'oldest' | 'reactions' | 'random' | 'hot' | Sorting order for the videos (hot = recent videos sorted by reactions). (optional)
    sort: newest,
    // number | Page number for pagination. (optional)
    page: 1,
    // number | Number of items per page (max 1000). (optional)
    limit: 20,
    // string | Comma-separated list of ratings to include (safe, questionable, sensitive, explicit). (optional)
    ratings: example-ratings,
    // number | Filter videos by uploader id. (optional)
    userId: 1,
    // string | Auth only. Filter videos reacted to by the current user (optionally specify a reaction type). (optional)
    selfReacted: example-self-reacted,
    // boolean | Auth only. Return videos uploaded by users the current user follows. (optional)
    selfFollowing: true,
    // string | Cursor for keyset pagination (use nextCursor from a previous response; only supported for newest/oldest). (optional)
    cursor: next-page,
  } satisfies SearchVideosRequest;

  try {
    const data = await api.searchVideos(body);
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
| **search** | `string` | Search query applied to title, description, and tags (comma-separated terms supported). | [Optional] [Defaults to `undefined`] |
| **sort** | `newest`, `oldest`, `reactions`, `random`, `hot` | Sorting order for the videos (hot &#x3D; recent videos sorted by reactions). | [Optional] [Defaults to `undefined`] [Enum: newest, oldest, reactions, random, hot] |
| **page** | `number` | Page number for pagination. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Number of items per page (max 1000). | [Optional] [Defaults to `20`] |
| **ratings** | `string` | Comma-separated list of ratings to include (safe, questionable, sensitive, explicit). | [Optional] [Defaults to `undefined`] |
| **userId** | `number` | Filter videos by uploader id. | [Optional] [Defaults to `undefined`] |
| **selfReacted** | `string` | Auth only. Filter videos reacted to by the current user (optionally specify a reaction type). | [Optional] [Defaults to `undefined`] |
| **selfFollowing** | `boolean` | Auth only. Return videos uploaded by users the current user follows. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Cursor for keyset pagination (use nextCursor from a previous response; only supported for newest/oldest). | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchVideos200Response**](SearchVideos200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of videos. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setVideoShowcase

> DeveloperMessageResponse setVideoShowcase(id)

Showcase or unshowcase a video

Set the explicit showcased state for a caller-owned video while enforcing the per-profile showcase limit. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { SetVideoShowcaseRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | Id provided in the path.
    id: example-id,
  } satisfies SetVideoShowcaseRequest;

  try {
    const data = await api.setVideoShowcase(body);
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
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamVideo

> string streamVideo(id)

Stream a video using range requests

Stream a visible video as direct media or an HLS response. Byte-range requests may return 206 with Content-Range, while invalid ranges return 416 and should not be retried unchanged.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { StreamVideoRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | The ID of the video to stream.
    id: example-id,
  } satisfies StreamVideoRequest;

  try {
    const data = await api.streamVideo(body);
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
| **id** | `string` | The ID of the video to stream. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/vnd.apple.mpegurl`, `video/mp4`, `video/webm`, `text/plain`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complete MP4/WebM stream or HLS manifest, depending on the stored asset. |  * Accept-Ranges - Present for directly streamed MP4 and WebM assets. <br>  * Content-Length - Full byte length for directly streamed MP4 and WebM assets. <br>  * X-Request-ID -  <br>  |
| **206** | Requested byte range from an MP4 or WebM asset. |  * Accept-Ranges -  <br>  * Content-Length -  <br>  * Content-Range -  <br>  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **416** | Requested byte range is outside the stored asset. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateVideo

> DeveloperVideoMutationResponse updateVideo(id, updateVideoRequest)

Edit an existing video

Update supported metadata, prompt, generation parameters, tags, rating, and publication fields on a caller-managed video. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { UpdateVideoOperationRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | ID of the video to edit.
    id: example-id,
    // UpdateVideoRequest | Request payload for this operation.
    updateVideoRequest: {"cfg":1,"description":"value","negativePrompt":"value","prompt":"value","rating":"value","sampler":"value","seed":"value","steps":1,"tags":"value","title":"value"},
  } satisfies UpdateVideoOperationRequest;

  try {
    const data = await api.updateVideo(body);
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
| **id** | `string` | ID of the video to edit. | [Defaults to `undefined`] |
| **updateVideoRequest** | [UpdateVideoRequest](UpdateVideoRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperVideoMutationResponse**](DeveloperVideoMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Video updated successfully. |  * X-Request-ID -  <br>  |
| **400** | Invalid input. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadVideos

> DeveloperVideoUploadResponse uploadVideos(idempotencyKey, description, duration, format, fps, tags, title, videoFile)

Upload a video

Upload up to twenty validated videos with optional preview images and preserve accepted identifiers on partial failure. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  VideosApi,
} from '@arcenciel/sdk';
import type { UploadVideosRequest } from '@arcenciel/sdk';

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
  const api = new VideosApi(config);

  const body = {
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
    // string | User-facing description of this request payload; it may contain an empty string when no description was supplied. (optional)
    description: description_example,
    // number | Duration of the video in seconds. (optional)
    duration: 8.14,
    // string | File format (e.g. mp4, webm). (optional)
    format: format_example,
    // number | Frames per second. (optional)
    fps: 8.14,
    // string | Tags associated with this request payload; preserve server-returned values when passing them to another operation. (optional)
    tags: tags_example,
    // string | Display title shown to users for this request payload. (optional)
    title: title_example,
    // Blob | Video File associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary. (optional)
    videoFile: BINARY_DATA_HERE,
  } satisfies UploadVideosRequest;

  try {
    const data = await api.uploadVideos(body);
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
| **duration** | `number` | Duration of the video in seconds. | [Optional] [Defaults to `undefined`] |
| **format** | `string` | File format (e.g. mp4, webm). | [Optional] [Defaults to `undefined`] |
| **fps** | `number` | Frames per second. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Tags associated with this request payload; preserve server-returned values when passing them to another operation. | [Optional] [Defaults to `undefined`] |
| **title** | `string` | Display title shown to users for this request payload. | [Optional] [Defaults to `undefined`] |
| **videoFile** | `Blob` | Video File associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary. | [Optional] [Defaults to `undefined`] |

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
| **201** | Video uploaded successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **202** | Some videos were rejected while the remaining videos were stored. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Bad request (e.g. no file provided or invalid file format). |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
