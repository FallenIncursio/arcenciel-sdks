# arcenciel.generated.CollectionsApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_collection**](CollectionsApi.md#get_collection) | **GET** /api/collections/{collectionId} | Fetch a single collection
[**list_collection_contribution_requests**](CollectionsApi.md#list_collection_contribution_requests) | **GET** /api/collections/{collectionId}/contribution-requests | List pending contribution requests
[**list_collections**](CollectionsApi.md#list_collections) | **GET** /api/collections | List collections


# **get_collection**
> CollectionDetail get_collection(collection_id, include_items=include_items, model_limit=model_limit, model_offset=model_offset, image_limit=image_limit, image_offset=image_offset)

**Synchronous variant:** `get_collection_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Fetch a single collection

Return one collection visible to the caller with optional paged model and image items, collaborator summaries, counts, and caller-specific permissions. Private collections remain limited to members and privileged staff.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.collection_detail import CollectionDetail
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
    api_instance = arcenciel.generated.CollectionsApi(api_client)
    collection_id = 'example-collection-id' # str | Collection Id provided in the path.
    include_items = 'true' # str | Include Items provided in the query. (optional)
    model_limit = 1 # int | Model Limit provided in the query. (optional)
    model_offset = 1 # int | Model Offset provided in the query. (optional)
    image_limit = 1 # int | Image Limit provided in the query. (optional)
    image_offset = 1 # int | Image Offset provided in the query. (optional)

    try:
        # Fetch a single collection
        api_response = await api_instance.get_collection(collection_id, include_items=include_items, model_limit=model_limit, model_offset=model_offset, image_limit=image_limit, image_offset=image_offset)
        print("The response of CollectionsApi->get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **str**| Collection Id provided in the path. |
 **include_items** | **str**| Include Items provided in the query. | [optional]
 **model_limit** | **int**| Model Limit provided in the query. | [optional]
 **model_offset** | **int**| Model Offset provided in the query. | [optional]
 **image_limit** | **int**| Image Limit provided in the query. | [optional]
 **image_offset** | **int**| Image Offset provided in the query. | [optional]

### Return type

[**CollectionDetail**](CollectionDetail.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection detail payload. |  * X-Request-ID -  <br>  |
**403** | The authenticated principal does not have access to this operation. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_collection_contribution_requests**
> List[CollectionContributionRequest] list_collection_contribution_requests(collection_id)

**Synchronous variant:** `list_collection_contribution_requests_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List pending contribution requests

List contribution requests for a collection the authenticated caller may manage. The operation never exposes requests to anonymous callers, ordinary non-manager members, or API keys without the CollectionsRead scope.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.collection_contribution_request import CollectionContributionRequest
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
    api_instance = arcenciel.generated.CollectionsApi(api_client)
    collection_id = 1 # int | Collection Id provided in the path.

    try:
        # List pending contribution requests
        api_response = await api_instance.list_collection_contribution_requests(collection_id)
        print("The response of CollectionsApi->list_collection_contribution_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->list_collection_contribution_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |

### Return type

[**List[CollectionContributionRequest]**](CollectionContributionRequest.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contribution requests for the collection. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | The authenticated principal does not have access to this operation. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_collections**
> CollectionPage list_collections(type=type, search=search, sort=sort, collaborative=collaborative, owner_id=owner_id, scope=scope, membership=membership, var_self=var_self, visibility=visibility, user_id=user_id, relationship=relationship, page=page, limit=limit)

**Synchronous variant:** `list_collections_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List collections

List collections visible to the caller with bounded pagination, discovery filters, relationship filters, item counts, and public owner metadata. Private and manageable views require the corresponding authenticated membership.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.collection_page import CollectionPage
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
    api_instance = arcenciel.generated.CollectionsApi(api_client)
    type = 'MODEL' # str | Type provided in the query. (optional)
    search = 'landscape' # str | Filter by name, description, or slug. (optional)
    sort = 'newest' # str | Sorting strategy (default newest). (optional)
    collaborative = 'true' # str | Filter for collaborative collections. (optional)
    owner_id = 1 # int | Filter by owner id. (optional)
    scope = 'public' # str | Use \"manageable\" to fetch collections you can manage (owner or collaborator). (optional)
    membership = 'any' # str | When scope=manageable, limit results by your role. (optional)
    var_self = 'favorited' # str | Requires authentication. Filter for collections you favorited or by creators you follow. (optional)
    visibility = 'PUBLIC' # str | Filter by visibility. (optional)
    user_id = 1 # int | Fetch collections where this user is an owner or collaborator. (optional)
    relationship = 'any' # str | Relationship filter applied when userId is provided (default any). (optional)
    page = 1 # int | Page provided in the query. (optional)
    limit = 1 # int | Limit provided in the query. (optional)

    try:
        # List collections
        api_response = await api_instance.list_collections(type=type, search=search, sort=sort, collaborative=collaborative, owner_id=owner_id, scope=scope, membership=membership, var_self=var_self, visibility=visibility, user_id=user_id, relationship=relationship, page=page, limit=limit)
        print("The response of CollectionsApi->list_collections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->list_collections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Type provided in the query. | [optional]
 **search** | **str**| Filter by name, description, or slug. | [optional]
 **sort** | **str**| Sorting strategy (default newest). | [optional]
 **collaborative** | **str**| Filter for collaborative collections. | [optional]
 **owner_id** | **int**| Filter by owner id. | [optional]
 **scope** | **str**| Use \&quot;manageable\&quot; to fetch collections you can manage (owner or collaborator). | [optional]
 **membership** | **str**| When scope&#x3D;manageable, limit results by your role. | [optional]
 **var_self** | **str**| Requires authentication. Filter for collections you favorited or by creators you follow. | [optional]
 **visibility** | **str**| Filter by visibility. | [optional]
 **user_id** | **int**| Fetch collections where this user is an owner or collaborator. | [optional]
 **relationship** | **str**| Relationship filter applied when userId is provided (default any). | [optional]
 **page** | **int**| Page provided in the query. | [optional]
 **limit** | **int**| Limit provided in the query. | [optional]

### Return type

[**CollectionPage**](CollectionPage.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paged list of collections. |  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | The authenticated principal does not have access to this operation. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
