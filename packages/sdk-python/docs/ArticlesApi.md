# arcenciel.generated.ArticlesApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_article**](ArticlesApi.md#get_article) | **GET** /api/articles/{id} | Retrieve an article by its ID
[**get_article_image**](ArticlesApi.md#get_article_image) | **GET** /api/articles/images/{imageId} | Retrieve an article image
[**search_articles**](ArticlesApi.md#search_articles) | **GET** /api/articles/search | Search articles


# **get_article**
> Article get_article(id)

**Synchronous variant:** `get_article_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve an article by its ID

Return one article visible to the caller, including its public author and media metadata. Draft and scheduled visibility continues to follow owner, staff, and publication-time rules.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.article import Article
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
    api_instance = arcenciel.generated.ArticlesApi(api_client)
    id = 1 # int | The unique ID of the article.

    try:
        # Retrieve an article by its ID
        api_response = await api_instance.get_article(id)
        print("The response of ArticlesApi->get_article:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The unique ID of the article. |

### Return type

[**Article**](Article.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested article. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**404** | Article not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_article_image**
> bytes get_article_image(image_id, variant=variant)

**Synchronous variant:** `get_article_image_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve an article image

Transfer an article image in an available web image format after applying article visibility rules. Clients should use the returned Content-Type instead of inferring a format from the URL.

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
    api_instance = arcenciel.generated.ArticlesApi(api_client)
    image_id = 1 # int | Image Id provided in the path.
    variant = 'example-variant' # str | Optional generated image variant name. (optional)

    try:
        # Retrieve an article image
        api_response = await api_instance.get_article_image(image_id, variant=variant)
        print("The response of ArticlesApi->get_article_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->get_article_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_id** | **int**| Image Id provided in the path. |
 **variant** | **str**| Optional generated image variant name. | [optional]

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
**200** | Article image file. |  * X-Request-ID -  <br>  |
**400** | Invalid image id. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Image not found or not visible to the viewer. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_articles**
> SearchArticles200Response search_articles(search=search, sort=sort, page=page, limit=limit, user_id=user_id, self_favorited=self_favorited, self_following=self_following)

**Synchronous variant:** `search_articles_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Search articles

Search visible articles with pagination and filters. Anonymous callers receive public articles; authenticated owners and staff may receive additional content allowed by the runtime visibility policy.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.search_articles200_response import SearchArticles200Response
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
    api_instance = arcenciel.generated.ArticlesApi(api_client)
    search = 'landscape' # str | Search query applied to title, content, and tags (supports (optional)
    sort = 'newest' # str | Sort order for articles (newest uses bumpedAt; manual content edits bump at most once per 24h; autosave excluded. hot = recent articles sorted by favorites). (optional)
    page = 1 # int | Page number. (optional) (default to 1)
    limit = 20 # int | Number of articles per page (max 1000). (optional) (default to 20)
    user_id = 1 # int | Filter articles by uploader id. (optional)
    self_favorited = true # bool | Auth only. Return articles favorited by the current user. (optional)
    self_following = true # bool | Auth only. Return articles uploaded by users the current user follows. (optional)

    try:
        # Search articles
        api_response = await api_instance.search_articles(search=search, sort=sort, page=page, limit=limit, user_id=user_id, self_favorited=self_favorited, self_following=self_following)
        print("The response of ArticlesApi->search_articles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->search_articles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Search query applied to title, content, and tags (supports | [optional]
 **sort** | **str**| Sort order for articles (newest uses bumpedAt; manual content edits bump at most once per 24h; autosave excluded. hot &#x3D; recent articles sorted by favorites). | [optional]
 **page** | **int**| Page number. | [optional] [default to 1]
 **limit** | **int**| Number of articles per page (max 1000). | [optional] [default to 20]
 **user_id** | **int**| Filter articles by uploader id. | [optional]
 **self_favorited** | **bool**| Auth only. Return articles favorited by the current user. | [optional]
 **self_following** | **bool**| Auth only. Return articles uploaded by users the current user follows. | [optional]

### Return type

[**SearchArticles200Response**](SearchArticles200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of articles. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
