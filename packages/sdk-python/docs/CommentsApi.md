# arcenciel.generated.CommentsApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_article_comment**](CommentsApi.md#create_article_comment) | **POST** /api/articles/{articleId}/comments | Create a comment on an article
[**create_image_comment**](CommentsApi.md#create_image_comment) | **POST** /api/images/{imageId}/comments | Create a comment on an image
[**create_model_comment**](CommentsApi.md#create_model_comment) | **POST** /api/models/{modelId}/comments | Create a comment on a model
[**create_video_comment**](CommentsApi.md#create_video_comment) | **POST** /api/videos/{videoId}/comments | Create a comment on a video
[**delete_article_comment**](CommentsApi.md#delete_article_comment) | **DELETE** /api/articles/{articleId}/comments/{commentId} | Delete a comment on an article
[**delete_image_comment**](CommentsApi.md#delete_image_comment) | **DELETE** /api/images/{imageId}/comments/{commentId} | Delete a comment on an image
[**delete_model_comment**](CommentsApi.md#delete_model_comment) | **DELETE** /api/models/{modelId}/comments/{commentId} | Delete a comment on a model
[**delete_video_comment**](CommentsApi.md#delete_video_comment) | **DELETE** /api/videos/{videoId}/comments/{commentId} | Delete a comment on a video
[**list_article_comments**](CommentsApi.md#list_article_comments) | **GET** /api/articles/{articleId}/comments | List all comments for a specific article
[**list_image_comments**](CommentsApi.md#list_image_comments) | **GET** /api/images/{imageId}/comments | Get all comments for a specific image
[**list_model_comments**](CommentsApi.md#list_model_comments) | **GET** /api/models/{modelId}/comments | List all comments for a specific model
[**list_video_comments**](CommentsApi.md#list_video_comments) | **GET** /api/videos/{videoId}/comments | List all comments for a specific video
[**update_article_comment**](CommentsApi.md#update_article_comment) | **PATCH** /api/articles/{articleId}/comments/{commentId} | Update an existing comment on an article
[**update_image_comment**](CommentsApi.md#update_image_comment) | **PATCH** /api/images/{imageId}/comments/{commentId} | Update an existing comment on an image
[**update_model_comment**](CommentsApi.md#update_model_comment) | **PATCH** /api/models/{modelId}/comments/{commentId} | Update an existing comment on a model
[**update_video_comment**](CommentsApi.md#update_video_comment) | **PATCH** /api/videos/{videoId}/comments/{commentId} | Update an existing comment on a video


# **create_article_comment**
> DeveloperCommentMutationResponse create_article_comment(article_id, create_article_comment_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_article_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create a comment on an article

Create a comment on a visible article. Supply an Idempotency-Key when a request may be retried so network failures cannot create duplicate comments.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_article_comment_request import CreateArticleCommentRequest
from arcenciel.generated.models.developer_comment_mutation_response import DeveloperCommentMutationResponse
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    article_id = 1 # int | The ID of the article to comment on.
    create_article_comment_request = {"content":"Beautiful composition!"} # CreateArticleCommentRequest | Comment text and optional parent comment.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Create a comment on an article
        api_response = await api_instance.create_article_comment(article_id, create_article_comment_request, idempotency_key=idempotency_key)
        print("The response of CommentsApi->create_article_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->create_article_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_id** | **int**| The ID of the article to comment on. |
 **create_article_comment_request** | [**CreateArticleCommentRequest**](CreateArticleCommentRequest.md)| Comment text and optional parent comment. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Comment created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Article not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_image_comment**
> DeveloperCommentMutationResponse create_image_comment(image_id, create_article_comment_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_image_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create a comment on an image

Create a comment on a visible image. Reuse the same Idempotency-Key and payload for retries; changing the payload for a used key returns a conflict.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_article_comment_request import CreateArticleCommentRequest
from arcenciel.generated.models.developer_comment_mutation_response import DeveloperCommentMutationResponse
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    image_id = 1 # int | ID of the image to comment on.
    create_article_comment_request = {"content":"Beautiful composition!"} # CreateArticleCommentRequest | Comment text and optional parent comment.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Create a comment on an image
        api_response = await api_instance.create_image_comment(image_id, create_article_comment_request, idempotency_key=idempotency_key)
        print("The response of CommentsApi->create_image_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->create_image_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_id** | **int**| ID of the image to comment on. |
 **create_article_comment_request** | [**CreateArticleCommentRequest**](CreateArticleCommentRequest.md)| Comment text and optional parent comment. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Comment created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Image not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_model_comment**
> DeveloperCommentMutationResponse create_model_comment(model_id, create_article_comment_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_model_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create a comment on a model

Create a comment on a visible model. Idempotency records are isolated by caller, method, target path, and key and retain successful responses for 24 hours.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_article_comment_request import CreateArticleCommentRequest
from arcenciel.generated.models.developer_comment_mutation_response import DeveloperCommentMutationResponse
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    model_id = 1 # int | The ID of the model.
    create_article_comment_request = {"content":"Beautiful composition!"} # CreateArticleCommentRequest | Comment text and optional parent comment.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Create a comment on a model
        api_response = await api_instance.create_model_comment(model_id, create_article_comment_request, idempotency_key=idempotency_key)
        print("The response of CommentsApi->create_model_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->create_model_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| The ID of the model. |
 **create_article_comment_request** | [**CreateArticleCommentRequest**](CreateArticleCommentRequest.md)| Comment text and optional parent comment. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Comment created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_video_comment**
> DeveloperCommentMutationResponse create_video_comment(video_id, create_article_comment_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_video_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create a comment on a video

Create a comment on a visible video. Clients that retry must send the original Idempotency-Key so the first successful response can be replayed safely.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_article_comment_request import CreateArticleCommentRequest
from arcenciel.generated.models.developer_comment_mutation_response import DeveloperCommentMutationResponse
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    video_id = 1 # int | The ID of the video to comment on.
    create_article_comment_request = {"content":"Beautiful composition!"} # CreateArticleCommentRequest | Comment text and optional parent comment.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Create a comment on a video
        api_response = await api_instance.create_video_comment(video_id, create_article_comment_request, idempotency_key=idempotency_key)
        print("The response of CommentsApi->create_video_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->create_video_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **int**| The ID of the video to comment on. |
 **create_article_comment_request** | [**CreateArticleCommentRequest**](CreateArticleCommentRequest.md)| Comment text and optional parent comment. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Comment created successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Video not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_article_comment**
> DeveloperMessageResponse delete_article_comment(article_id, comment_id)

**Synchronous variant:** `delete_article_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete a comment on an article

Delete a caller-owned comment from an article. The article identifier is validated with the comment so a record cannot be deleted through another target.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    article_id = 1 # int | Article Id provided in the path.
    comment_id = 1 # int | Comment Id provided in the path.

    try:
        # Delete a comment on an article
        api_response = await api_instance.delete_article_comment(article_id, comment_id)
        print("The response of CommentsApi->delete_article_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->delete_article_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_id** | **int**| Article Id provided in the path. |
 **comment_id** | **int**| Comment Id provided in the path. |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment deleted successfully. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
**404** | Article or comment not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_image_comment**
> DeveloperMessageResponse delete_image_comment(image_id, comment_id)

**Synchronous variant:** `delete_image_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete a comment on an image

Delete a caller-owned comment from an image. The operation is classified as idempotent, although a repeated call may report that the record is gone.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    image_id = 1 # int | ID of the image.
    comment_id = 1 # int | ID of the comment to delete.

    try:
        # Delete a comment on an image
        api_response = await api_instance.delete_image_comment(image_id, comment_id)
        print("The response of CommentsApi->delete_image_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->delete_image_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_id** | **int**| ID of the image. |
 **comment_id** | **int**| ID of the comment to delete. |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment deleted successfully. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
**404** | Image or comment not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_model_comment**
> DeveloperMessageResponse delete_model_comment(model_id, comment_id)

**Synchronous variant:** `delete_model_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete a comment on a model

Delete a caller-owned comment from a model while preserving ownership and target checks. Repeating the deletion cannot recreate the comment.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    comment_id = 1 # int | Comment Id provided in the path.

    try:
        # Delete a comment on a model
        api_response = await api_instance.delete_model_comment(model_id, comment_id)
        print("The response of CommentsApi->delete_model_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->delete_model_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **comment_id** | **int**| Comment Id provided in the path. |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment deleted successfully. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
**404** | Model or comment not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_video_comment**
> DeveloperMessageResponse delete_video_comment(video_id, comment_id)

**Synchronous variant:** `delete_video_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete a comment on a video

Delete a caller-owned comment from a video while validating both identifiers and ownership. Repeated calls leave the same final resource state.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    video_id = 1 # int | Video Id provided in the path.
    comment_id = 1 # int | Comment Id provided in the path.

    try:
        # Delete a comment on a video
        api_response = await api_instance.delete_video_comment(video_id, comment_id)
        print("The response of CommentsApi->delete_video_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->delete_video_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **int**| Video Id provided in the path. |
 **comment_id** | **int**| Comment Id provided in the path. |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment deleted successfully. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
**404** | Video or comment not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_article_comments**
> List[DeveloperComment] list_article_comments(article_id)

**Synchronous variant:** `list_article_comments_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List all comments for a specific article

List comments visible on one article. This read accepts anonymous callers, while an ArticlesRead API key may be used for consistent attribution and support diagnostics.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_comment import DeveloperComment
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    article_id = 1 # int | The ID of the article.

    try:
        # List all comments for a specific article
        api_response = await api_instance.list_article_comments(article_id)
        print("The response of CommentsApi->list_article_comments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->list_article_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_id** | **int**| The ID of the article. |

### Return type

[**List[DeveloperComment]**](DeveloperComment.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of comments. |  * X-Request-ID -  <br>  |
**404** | Article not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_image_comments**
> List[DeveloperComment] list_image_comments(image_id)

**Synchronous variant:** `list_image_comments_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get all comments for a specific image

List comments visible on one image without requiring a write-capable credential. Image visibility and moderation rules are applied before any comment records are returned.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_comment import DeveloperComment
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    image_id = 1 # int | ID of the image.

    try:
        # Get all comments for a specific image
        api_response = await api_instance.list_image_comments(image_id)
        print("The response of CommentsApi->list_image_comments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->list_image_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_id** | **int**| ID of the image. |

### Return type

[**List[DeveloperComment]**](DeveloperComment.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of comments. |  * X-Request-ID -  <br>  |
**404** | Image not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_model_comments**
> List[DeveloperComment] list_model_comments(model_id)

**Synchronous variant:** `list_model_comments_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List all comments for a specific model

List comments visible on one model using the domain read scope rather than SocialWrite. The target model must remain visible to the current caller.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_comment import DeveloperComment
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    model_id = 1 # int | The ID of the model.

    try:
        # List all comments for a specific model
        api_response = await api_instance.list_model_comments(model_id)
        print("The response of CommentsApi->list_model_comments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->list_model_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| The ID of the model. |

### Return type

[**List[DeveloperComment]**](DeveloperComment.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of comments. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_video_comments**
> List[DeveloperComment] list_video_comments(video_id)

**Synchronous variant:** `list_video_comments_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List all comments for a specific video

List comments visible on one video using a VideosRead credential when API-key authentication is selected. Inaccessible videos do not leak comment metadata.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_comment import DeveloperComment
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    video_id = 1 # int | The ID of the video.

    try:
        # List all comments for a specific video
        api_response = await api_instance.list_video_comments(video_id)
        print("The response of CommentsApi->list_video_comments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->list_video_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **int**| The ID of the video. |

### Return type

[**List[DeveloperComment]**](DeveloperComment.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of comments. |  * X-Request-ID -  <br>  |
**404** | Video not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_article_comment**
> DeveloperCommentMutationResponse update_article_comment(article_id, comment_id, update_article_comment_request)

**Synchronous variant:** `update_article_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update an existing comment on an article

Replace the editable content of the caller-owned article comment. Ownership is enforced by the runtime and other users cannot update the record.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_comment_mutation_response import DeveloperCommentMutationResponse
from arcenciel.generated.models.update_article_comment_request import UpdateArticleCommentRequest
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    article_id = 1 # int | Article Id provided in the path.
    comment_id = 1 # int | Comment Id provided in the path.
    update_article_comment_request = {"content":"Beautiful composition!"} # UpdateArticleCommentRequest | Replacement comment text.

    try:
        # Update an existing comment on an article
        api_response = await api_instance.update_article_comment(article_id, comment_id, update_article_comment_request)
        print("The response of CommentsApi->update_article_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->update_article_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_id** | **int**| Article Id provided in the path. |
 **comment_id** | **int**| Comment Id provided in the path. |
 **update_article_comment_request** | [**UpdateArticleCommentRequest**](UpdateArticleCommentRequest.md)| Replacement comment text. |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment updated successfully. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
**404** | Article or comment not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_image_comment**
> DeveloperCommentMutationResponse update_image_comment(image_id, comment_id, update_article_comment_request)

**Synchronous variant:** `update_image_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update an existing comment on an image

Replace the editable content of the caller-owned image comment. The target image and comment relationship are both validated before mutation.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_comment_mutation_response import DeveloperCommentMutationResponse
from arcenciel.generated.models.update_article_comment_request import UpdateArticleCommentRequest
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    image_id = 1 # int | ID of the image.
    comment_id = 1 # int | ID of the comment to update.
    update_article_comment_request = {"content":"Beautiful composition!"} # UpdateArticleCommentRequest | Replacement comment text.

    try:
        # Update an existing comment on an image
        api_response = await api_instance.update_image_comment(image_id, comment_id, update_article_comment_request)
        print("The response of CommentsApi->update_image_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->update_image_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_id** | **int**| ID of the image. |
 **comment_id** | **int**| ID of the comment to update. |
 **update_article_comment_request** | [**UpdateArticleCommentRequest**](UpdateArticleCommentRequest.md)| Replacement comment text. |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment updated successfully. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
**404** | Image or comment not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_model_comment**
> DeveloperCommentMutationResponse update_model_comment(model_id, comment_id, update_article_comment_request)

**Synchronous variant:** `update_model_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update an existing comment on a model

Replace the editable content of the caller-owned model comment. The operation never permits an API key to edit another user’s comment.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_comment_mutation_response import DeveloperCommentMutationResponse
from arcenciel.generated.models.update_article_comment_request import UpdateArticleCommentRequest
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    model_id = 1 # int | Model Id provided in the path.
    comment_id = 1 # int | Comment Id provided in the path.
    update_article_comment_request = {"content":"Beautiful composition!"} # UpdateArticleCommentRequest | Replacement comment text.

    try:
        # Update an existing comment on a model
        api_response = await api_instance.update_model_comment(model_id, comment_id, update_article_comment_request)
        print("The response of CommentsApi->update_model_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->update_model_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **int**| Model Id provided in the path. |
 **comment_id** | **int**| Comment Id provided in the path. |
 **update_article_comment_request** | [**UpdateArticleCommentRequest**](UpdateArticleCommentRequest.md)| Replacement comment text. |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment updated successfully. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
**404** | Model or comment not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_video_comment**
> DeveloperCommentMutationResponse update_video_comment(video_id, comment_id, update_article_comment_request)

**Synchronous variant:** `update_video_comment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update an existing comment on a video

Replace the editable content of the caller-owned video comment. Video visibility and comment ownership are checked independently by the runtime.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_comment_mutation_response import DeveloperCommentMutationResponse
from arcenciel.generated.models.update_article_comment_request import UpdateArticleCommentRequest
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
    api_instance = arcenciel.generated.CommentsApi(api_client)
    video_id = 1 # int | Video Id provided in the path.
    comment_id = 1 # int | Comment Id provided in the path.
    update_article_comment_request = {"content":"Beautiful composition!"} # UpdateArticleCommentRequest | Replacement comment text.

    try:
        # Update an existing comment on a video
        api_response = await api_instance.update_video_comment(video_id, comment_id, update_article_comment_request)
        print("The response of CommentsApi->update_video_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->update_video_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **video_id** | **int**| Video Id provided in the path. |
 **comment_id** | **int**| Comment Id provided in the path. |
 **update_article_comment_request** | [**UpdateArticleCommentRequest**](UpdateArticleCommentRequest.md)| Replacement comment text. |

### Return type

[**DeveloperCommentMutationResponse**](DeveloperCommentMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment updated successfully. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Forbidden (not the comment author or admin). |  * X-Request-ID -  <br>  |
**404** | Video or comment not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
