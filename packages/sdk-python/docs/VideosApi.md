# arcenciel.generated.VideosApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_video**](VideosApi.md#download_video) | **GET** /api/videos/{id}/download | Download a video file
[**get_video**](VideosApi.md#get_video) | **GET** /api/videos/{id} | Retrieve a video by its ID
[**get_video_hls_asset**](VideosApi.md#get_video_hls_asset) | **GET** /api/videos/{id}/hls/{quality}/{asset} | Retrieve an authenticated HLS playlist or segment
[**get_video_hls_manifest**](VideosApi.md#get_video_hls_manifest) | **GET** /api/videos/{id}/stream.m3u8 | Retrieve an authenticated HLS master playlist
[**get_video_poster**](VideosApi.md#get_video_poster) | **GET** /api/videos/{id}/poster | Retrieve an authenticated video poster image
[**list_related_videos**](VideosApi.md#list_related_videos) | **GET** /api/videos/{id}/related | List videos related to a given video
[**search_videos**](VideosApi.md#search_videos) | **GET** /api/videos/search | Search videos
[**stream_video**](VideosApi.md#stream_video) | **GET** /api/videos/{id}/stream | Stream a video using range requests


# **download_video**
> bytes download_video(id)

**Synchronous variant:** `download_video_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download a video file

Download the original bytes of a visible video with a server-provided filename. The download limiter applies and clients should stream the response instead of buffering large files.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.VideosApi(api_client)
    id = 'example-id' # str | The ID of the video to download.

    try:
        # Download a video file
        api_response = await api_instance.download_video(id)
        print("The response of VideosApi->download_video:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideosApi->download_video: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the video to download. |

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The video file as a binary stream. |  * Content-Disposition - Attachment disposition containing the sanitized stored filename. <br>  * X-Request-ID -  <br>  |
**404** | Video not found or file missing. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_video**
> Video get_video(id)

**Synchronous variant:** `get_video_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve a video by its ID

Return metadata for one visible video, including the public uploader, tags, linked resources, reactions, and available stream metadata appropriate for the caller.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.video import Video
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.VideosApi(api_client)
    id = 'example-id' # str | The ID of the video.

    try:
        # Retrieve a video by its ID
        api_response = await api_instance.get_video(id)
        print("The response of VideosApi->get_video:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideosApi->get_video: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the video. |

### Return type

[**Video**](Video.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The video object. |  * X-Request-ID -  <br>  |
**404** | Video not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_video_hls_asset**
> str get_video_hls_asset(id, quality, asset)

**Synchronous variant:** `get_video_hls_asset_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve an authenticated HLS playlist or segment

Transfer an HLS variant playlist or transport-stream segment for a visible video. Callers must preserve the quality and asset path emitted by the master playlist.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.VideosApi(api_client)
    id = 'example-id' # str | Id provided in the path.
    quality = 'example-quality' # str | HLS quality directory, such as 720p.
    asset = 'example-asset' # str | Playlist or transport-stream segment filename.

    try:
        # Retrieve an authenticated HLS playlist or segment
        api_response = await api_instance.get_video_hls_asset(id, quality, asset)
        print("The response of VideosApi->get_video_hls_asset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideosApi->get_video_hls_asset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id provided in the path. |
 **quality** | **str**| HLS quality directory, such as 720p. |
 **asset** | **str**| Playlist or transport-stream segment filename. |

### Return type

**str**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.apple.mpegurl, video/mp2t, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rewritten HLS playlist or MPEG transport stream segment. |  * X-Request-ID -  <br>  |
**404** | Video stream asset not found, or access denied. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_video_hls_manifest**
> str get_video_hls_manifest(id)

**Synchronous variant:** `get_video_hls_manifest_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve an authenticated HLS master playlist

Return the authenticated HLS master playlist for a visible video. Clients should resolve variant asset URLs from this manifest and must not construct private storage paths.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.VideosApi(api_client)
    id = 'example-id' # str | Id provided in the path.

    try:
        # Retrieve an authenticated HLS master playlist
        api_response = await api_instance.get_video_hls_manifest(id)
        print("The response of VideosApi->get_video_hls_manifest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideosApi->get_video_hls_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id provided in the path. |

### Return type

**str**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.apple.mpegurl, text/plain, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HLS master playlist with authenticated child asset URLs. |  * X-Request-ID -  <br>  |
**404** | Video or manifest not found, or access denied. |  * X-Request-ID -  <br>  |
**416** | Requested byte range is outside the stored fallback asset. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_video_poster**
> bytes get_video_poster(id)

**Synchronous variant:** `get_video_poster_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve an authenticated video poster image

Transfer the poster image for a visible video after applying its rating and publication policy. Clients must honor the returned image Content-Type and cache headers.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.VideosApi(api_client)
    id = 'example-id' # str | The ID of the video poster to retrieve.

    try:
        # Retrieve an authenticated video poster image
        api_response = await api_instance.get_video_poster(id)
        print("The response of VideosApi->get_video_poster:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideosApi->get_video_poster: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the video poster to retrieve. |

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, image/png, image/webp, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Poster image. |  * X-Request-ID -  <br>  |
**404** | Video or poster not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_related_videos**
> List[Video] list_related_videos(id)

**Synchronous variant:** `list_related_videos_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List videos related to a given video

List videos related to one visible source video while filtering every result for publication, ownership, rating, and adult-content access of the current caller.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.video import Video
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.VideosApi(api_client)
    id = 'example-id' # str | The ID of the reference video.

    try:
        # List videos related to a given video
        api_response = await api_instance.list_related_videos(id)
        print("The response of VideosApi->list_related_videos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideosApi->list_related_videos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the reference video. |

### Return type

[**List[Video]**](Video.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related videos returned. |  * X-Request-ID -  <br>  |
**404** | Video not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_videos**
> SearchVideos200Response search_videos(search=search, sort=sort, page=page, limit=limit, ratings=ratings, user_id=user_id, self_reacted=self_reacted, self_following=self_following, cursor=cursor)

**Synchronous variant:** `search_videos_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Search videos

Search visible videos with pagination, rating, tag, model, and ownership filters. Returned media is limited by publication, ownership, and adult-content policy for the caller.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.search_videos200_response import SearchVideos200Response
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.VideosApi(api_client)
    search = 'landscape' # str | Search query applied to title, description, and tags (comma-separated terms supported). (optional)
    sort = 'newest' # str | Sorting order for the videos (hot = recent videos sorted by reactions). (optional)
    page = 1 # int | Page number for pagination. (optional) (default to 1)
    limit = 20 # int | Number of items per page (max 1000). (optional) (default to 20)
    ratings = 'example-ratings' # str | Comma-separated list of ratings to include (safe, questionable, sensitive, explicit). (optional)
    user_id = 1 # int | Filter videos by uploader id. (optional)
    self_reacted = 'example-self-reacted' # str | Auth only. Filter videos reacted to by the current user (optionally specify a reaction type). (optional)
    self_following = true # bool | Auth only. Return videos uploaded by users the current user follows. (optional)
    cursor = 'next-page' # str | Cursor for keyset pagination (use nextCursor from a previous response; only supported for newest/oldest). (optional)

    try:
        # Search videos
        api_response = await api_instance.search_videos(search=search, sort=sort, page=page, limit=limit, ratings=ratings, user_id=user_id, self_reacted=self_reacted, self_following=self_following, cursor=cursor)
        print("The response of VideosApi->search_videos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideosApi->search_videos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Search query applied to title, description, and tags (comma-separated terms supported). | [optional]
 **sort** | **str**| Sorting order for the videos (hot &#x3D; recent videos sorted by reactions). | [optional]
 **page** | **int**| Page number for pagination. | [optional] [default to 1]
 **limit** | **int**| Number of items per page (max 1000). | [optional] [default to 20]
 **ratings** | **str**| Comma-separated list of ratings to include (safe, questionable, sensitive, explicit). | [optional]
 **user_id** | **int**| Filter videos by uploader id. | [optional]
 **self_reacted** | **str**| Auth only. Filter videos reacted to by the current user (optionally specify a reaction type). | [optional]
 **self_following** | **bool**| Auth only. Return videos uploaded by users the current user follows. | [optional]
 **cursor** | **str**| Cursor for keyset pagination (use nextCursor from a previous response; only supported for newest/oldest). | [optional]

### Return type

[**SearchVideos200Response**](SearchVideos200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of videos. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_video**
> str stream_video(id)

**Synchronous variant:** `stream_video_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Stream a video using range requests

Stream a visible video as direct media or an HLS response. Byte-range requests may return 206 with Content-Range, while invalid ranges return 416 and should not be retried unchanged.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://arcenciel.io
# See configuration.py for a list of all supported configuration parameters.
configuration = arcenciel.generated.Configuration(
    host = "https://arcenciel.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: sessionCookieAuth
configuration.api_key['sessionCookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['sessionCookieAuth'] = 'Bearer'

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Configure Bearer authorization (JWT): bearerAuth
configuration = arcenciel.generated.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with arcenciel.generated.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = arcenciel.generated.VideosApi(api_client)
    id = 'example-id' # str | The ID of the video to stream.

    try:
        # Stream a video using range requests
        api_response = await api_instance.stream_video(id)
        print("The response of VideosApi->stream_video:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VideosApi->stream_video: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the video to stream. |

### Return type

**str**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.apple.mpegurl, video/mp4, video/webm, text/plain, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Complete MP4/WebM stream or HLS manifest, depending on the stored asset. |  * Accept-Ranges - Present for directly streamed MP4 and WebM assets. <br>  * Content-Length - Full byte length for directly streamed MP4 and WebM assets. <br>  * X-Request-ID -  <br>  |
**206** | Requested byte range from an MP4 or WebM asset. |  * Accept-Ranges -  <br>  * Content-Length - Full byte length for directly streamed MP4 and WebM assets. <br>  * Content-Range -  <br>  * X-Request-ID -  <br>  |
**404** | Video not found. |  * X-Request-ID -  <br>  |
**416** | Requested byte range is outside the stored asset. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
