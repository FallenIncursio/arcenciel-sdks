# arcenciel.generated.SocialApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**follow_user**](SocialApi.md#follow_user) | **POST** /api/users/{id}/follow | Follow a user.
[**remove_image_reaction**](SocialApi.md#remove_image_reaction) | **DELETE** /api/images/{id}/reactions | Remove the user&#39;s reaction from an image
[**remove_video_reaction**](SocialApi.md#remove_video_reaction) | **DELETE** /api/videos/{id}/reactions | Remove your reaction from a video
[**set_article_favorite**](SocialApi.md#set_article_favorite) | **PATCH** /api/articles/{id}/favorited | Favorite or unfavorite an article
[**set_collection_favorite**](SocialApi.md#set_collection_favorite) | **PATCH** /api/collections/{collectionId}/favorited | Favorite or unfavorite a collection
[**set_image_reaction**](SocialApi.md#set_image_reaction) | **POST** /api/images/{id}/reactions | Add or update a reaction to an image
[**set_model_favorite**](SocialApi.md#set_model_favorite) | **PATCH** /api/models/{id}/favorited | Favorite or unfavorite a model
[**set_video_reaction**](SocialApi.md#set_video_reaction) | **POST** /api/videos/{id}/reactions | React to a video
[**unfollow_user**](SocialApi.md#unfollow_user) | **DELETE** /api/users/{id}/follow | Unfollow a user.


# **follow_user**
> DeveloperMessageResponse follow_user(id)

**Synchronous variant:** `follow_user_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Follow a user.

Follow a visible user as the authenticated caller. The runtime prevents self-following and duplicate relationships and emits the normal notification workflow.

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
    api_instance = arcenciel.generated.SocialApi(api_client)
    id = 1 # int | The ID of the user to follow.

    try:
        # Follow a user.
        api_response = await api_instance.follow_user(id)
        print("The response of SocialApi->follow_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->follow_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the user to follow. |

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
**200** | Follow successful. |  * X-Request-ID -  <br>  |
**400** | Bad request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_image_reaction**
> DeveloperImageReactionResponse remove_image_reaction(id)

**Synchronous variant:** `remove_image_reaction_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove the user's reaction from an image

Remove the current caller’s reaction from a visible image. The final state is stable when the request is repeated after an ambiguous response.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_image_reaction_response import DeveloperImageReactionResponse
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
    api_instance = arcenciel.generated.SocialApi(api_client)
    id = 1 # int | Unique identifier of the image.

    try:
        # Remove the user's reaction from an image
        api_response = await api_instance.remove_image_reaction(id)
        print("The response of SocialApi->remove_image_reaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->remove_image_reaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the image. |

### Return type

[**DeveloperImageReactionResponse**](DeveloperImageReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reaction removed successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_video_reaction**
> DeveloperVideoReactionResponse remove_video_reaction(id)

**Synchronous variant:** `remove_video_reaction_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove your reaction from a video

Remove the current caller’s reaction from a visible video. The response includes the updated video representation for UI reconciliation.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_video_reaction_response import DeveloperVideoReactionResponse
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
    api_instance = arcenciel.generated.SocialApi(api_client)
    id = 'example-id' # str | The ID of the video.

    try:
        # Remove your reaction from a video
        api_response = await api_instance.remove_video_reaction(id)
        print("The response of SocialApi->remove_video_reaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->remove_video_reaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the video. |

### Return type

[**DeveloperVideoReactionResponse**](DeveloperVideoReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reaction removed successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Video not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_article_favorite**
> DeveloperMessageResponse set_article_favorite(id, set_article_favorite_request)

**Synchronous variant:** `set_article_favorite_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Favorite or unfavorite an article

Set the current caller’s favorite state for a visible article using an explicit boolean. Repeating the same desired state cannot reverse the result.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.set_article_favorite_request import SetArticleFavoriteRequest
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
    api_instance = arcenciel.generated.SocialApi(api_client)
    id = 1 # int | The article ID.
    set_article_favorite_request = {"favorite":true} # SetArticleFavoriteRequest |

    try:
        # Favorite or unfavorite an article
        api_response = await api_instance.set_article_favorite(id, set_article_favorite_request)
        print("The response of SocialApi->set_article_favorite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->set_article_favorite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The article ID. |
 **set_article_favorite_request** | [**SetArticleFavoriteRequest**](SetArticleFavoriteRequest.md)|  |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Favorite state updated. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Article not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_collection_favorite**
> DeveloperMessageResponse set_collection_favorite(collection_id, set_article_favorite_request)

**Synchronous variant:** `set_collection_favorite_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Favorite or unfavorite a collection

Set the current caller’s favorite state for a visible collection using an explicit boolean. Repeating the same desired state cannot reverse it.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.set_article_favorite_request import SetArticleFavoriteRequest
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
    api_instance = arcenciel.generated.SocialApi(api_client)
    collection_id = 1 # int | Collection Id provided in the path.
    set_article_favorite_request = {"favorite":true} # SetArticleFavoriteRequest |

    try:
        # Favorite or unfavorite a collection
        api_response = await api_instance.set_collection_favorite(collection_id, set_article_favorite_request)
        print("The response of SocialApi->set_collection_favorite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->set_collection_favorite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **set_article_favorite_request** | [**SetArticleFavoriteRequest**](SetArticleFavoriteRequest.md)|  |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Favorite status updated. |  * X-Request-ID -  <br>  |
**400** | Invalid request. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Collection not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_image_reaction**
> DeveloperImageReactionResponse set_image_reaction(id, set_image_reaction_request)

**Synchronous variant:** `set_image_reaction_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Add or update a reaction to an image

Set or replace the current caller’s reaction on a visible image. Sending the same reaction again leaves the resource in the same state.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_image_reaction_response import DeveloperImageReactionResponse
from arcenciel.generated.models.set_image_reaction_request import SetImageReactionRequest
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
    api_instance = arcenciel.generated.SocialApi(api_client)
    id = 1 # int | Unique identifier of the image.
    set_image_reaction_request = {"reactionType":"heart"} # SetImageReactionRequest | Reaction type to apply.

    try:
        # Add or update a reaction to an image
        api_response = await api_instance.set_image_reaction(id, set_image_reaction_request)
        print("The response of SocialApi->set_image_reaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->set_image_reaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Unique identifier of the image. |
 **set_image_reaction_request** | [**SetImageReactionRequest**](SetImageReactionRequest.md)| Reaction type to apply. |

### Return type

[**DeveloperImageReactionResponse**](DeveloperImageReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reaction updated successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_model_favorite**
> DeveloperMessageResponse set_model_favorite(id, set_article_favorite_request)

**Synchronous variant:** `set_model_favorite_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Favorite or unfavorite a model

Set the current caller’s favorite state for a visible model using an explicit boolean. Repeating the same desired state cannot reverse the result.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.set_article_favorite_request import SetArticleFavoriteRequest
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
    api_instance = arcenciel.generated.SocialApi(api_client)
    id = 1 # int | Id provided in the path.
    set_article_favorite_request = {"favorite":true} # SetArticleFavoriteRequest |

    try:
        # Favorite or unfavorite a model
        api_response = await api_instance.set_model_favorite(id, set_article_favorite_request)
        print("The response of SocialApi->set_model_favorite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->set_model_favorite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id provided in the path. |
 **set_article_favorite_request** | [**SetArticleFavoriteRequest**](SetArticleFavoriteRequest.md)|  |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Favorite state updated. |  * X-Request-ID -  <br>  |
**400** | Missing/invalid favorite value or no state change possible. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_video_reaction**
> DeveloperVideoReactionResponse set_video_reaction(id, set_video_reaction_request)

**Synchronous variant:** `set_video_reaction_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

React to a video

Set or replace the current caller’s reaction on a visible video. The returned video representation includes the reaction counts after the mutation.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_video_reaction_response import DeveloperVideoReactionResponse
from arcenciel.generated.models.set_video_reaction_request import SetVideoReactionRequest
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
    api_instance = arcenciel.generated.SocialApi(api_client)
    id = 'example-id' # str | The ID of the video.
    set_video_reaction_request = {"reactionType":"heart"} # SetVideoReactionRequest | Reaction details.

    try:
        # React to a video
        api_response = await api_instance.set_video_reaction(id, set_video_reaction_request)
        print("The response of SocialApi->set_video_reaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->set_video_reaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the video. |
 **set_video_reaction_request** | [**SetVideoReactionRequest**](SetVideoReactionRequest.md)| Reaction details. |

### Return type

[**DeveloperVideoReactionResponse**](DeveloperVideoReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reaction updated successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Video not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unfollow_user**
> DeveloperMessageResponse unfollow_user(id)

**Synchronous variant:** `unfollow_user_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Unfollow a user.

Remove the authenticated caller’s follow relationship with a user. Repeating the operation cannot recreate the relationship.

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
    api_instance = arcenciel.generated.SocialApi(api_client)
    id = 1 # int | The ID of the user to unfollow.

    try:
        # Unfollow a user.
        api_response = await api_instance.unfollow_user(id)
        print("The response of SocialApi->unfollow_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SocialApi->unfollow_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the user to unfollow. |

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
**200** | Unfollow successful. |  * X-Request-ID -  <br>  |
**400** | Bad request. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
