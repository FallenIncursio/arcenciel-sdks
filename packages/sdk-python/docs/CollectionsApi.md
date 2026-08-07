# arcenciel.generated.CollectionsApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_collection_collaborator**](CollectionsApi.md#add_collection_collaborator) | **POST** /api/collections/{collectionId}/collaborators | Add or update a collaborator
[**add_collection_items**](CollectionsApi.md#add_collection_items) | **POST** /api/collections/{collectionId}/items | Add items to a collection
[**cancel_collection_contribution_request**](CollectionsApi.md#cancel_collection_contribution_request) | **DELETE** /api/collections/{collectionId}/contribution-requests/self | Cancel the current user&#39;s pending collaboration request
[**create_collection**](CollectionsApi.md#create_collection) | **POST** /api/collections | Create a new collection
[**delete_collection**](CollectionsApi.md#delete_collection) | **DELETE** /api/collections/{collectionId} | Delete a collection
[**get_collection**](CollectionsApi.md#get_collection) | **GET** /api/collections/{collectionId} | Fetch a single collection
[**leave_collection**](CollectionsApi.md#leave_collection) | **DELETE** /api/collections/{collectionId}/collaborators/self | Leave a collection as collaborator
[**list_collection_contribution_requests**](CollectionsApi.md#list_collection_contribution_requests) | **GET** /api/collections/{collectionId}/contribution-requests | List pending contribution requests
[**list_collections**](CollectionsApi.md#list_collections) | **GET** /api/collections | List collections
[**remove_collection_collaborator**](CollectionsApi.md#remove_collection_collaborator) | **DELETE** /api/collections/{collectionId}/collaborators/{collaboratorId} | Remove a collaborator from a collection
[**remove_collection_item**](CollectionsApi.md#remove_collection_item) | **DELETE** /api/collections/{collectionId}/items/{itemId} | Remove an item from a collection
[**reorder_collection_items**](CollectionsApi.md#reorder_collection_items) | **PATCH** /api/collections/{collectionId}/items/order | Override the item ordering for a collection
[**request_collection_contribution**](CollectionsApi.md#request_collection_contribution) | **POST** /api/collections/{collectionId}/contribution-requests | Request collaborator access for a collection
[**resequence_collection_items**](CollectionsApi.md#resequence_collection_items) | **POST** /api/collections/{collectionId}/items/resequence | Reapply an automatic ordering to existing collection items
[**respond_collection_contribution_request**](CollectionsApi.md#respond_collection_contribution_request) | **PATCH** /api/collections/{collectionId}/contribution-requests/{requestId} | Approve or decline a contribution request
[**update_collection**](CollectionsApi.md#update_collection) | **PATCH** /api/collections/{collectionId} | Update collection metadata
[**upload_collection_cover**](CollectionsApi.md#upload_collection_cover) | **POST** /api/collections/cover | Upload and analyse a provisional collection cover


# **add_collection_collaborator**
> CollectionCollaboratorSummary add_collection_collaborator(collection_id, add_collection_collaborator_request)

**Synchronous variant:** `add_collection_collaborator_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Add or update a collaborator

Add or update a collection collaborator with an explicit role while preserving owner and manager authorization rules. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.add_collection_collaborator_request import AddCollectionCollaboratorRequest
from arcenciel.generated.models.collection_collaborator_summary import CollectionCollaboratorSummary
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
    add_collection_collaborator_request = {"role":"CONTRIBUTOR","userId":1} # AddCollectionCollaboratorRequest | Request payload for this operation.

    try:
        # Add or update a collaborator
        api_response = await api_instance.add_collection_collaborator(collection_id, add_collection_collaborator_request)
        print("The response of CollectionsApi->add_collection_collaborator:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->add_collection_collaborator: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **add_collection_collaborator_request** | [**AddCollectionCollaboratorRequest**](AddCollectionCollaboratorRequest.md)| Request payload for this operation. |

### Return type

[**CollectionCollaboratorSummary**](CollectionCollaboratorSummary.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collaborator added or updated. |  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Not allowed to manage collaborators. |  * X-Request-ID -  <br>  |
**404** | Collection not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_collection_items**
> DeveloperCollectionItemsMutationResponse add_collection_items(collection_id, add_collection_items_request)

**Synchronous variant:** `add_collection_items_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Add items to a collection

Add a bounded set of visible model or image identifiers to a collection and report added, skipped, and rejected identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.add_collection_items_request import AddCollectionItemsRequest
from arcenciel.generated.models.developer_collection_items_mutation_response import DeveloperCollectionItemsMutationResponse
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
    add_collection_items_request = {"items":[1]} # AddCollectionItemsRequest | Request payload for this operation.

    try:
        # Add items to a collection
        api_response = await api_instance.add_collection_items(collection_id, add_collection_items_request)
        print("The response of CollectionsApi->add_collection_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->add_collection_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **add_collection_items_request** | [**AddCollectionItemsRequest**](AddCollectionItemsRequest.md)| Request payload for this operation. |

### Return type

[**DeveloperCollectionItemsMutationResponse**](DeveloperCollectionItemsMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Items processed for the collection. |  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Not allowed to modify this collection. |  * X-Request-ID -  <br>  |
**404** | Collection not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_collection_contribution_request**
> cancel_collection_contribution_request(collection_id)

**Synchronous variant:** `cancel_collection_contribution_request_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Cancel the current user's pending collaboration request

Cancel the caller’s pending contribution request for one collection without changing collaborator access. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

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
    api_instance = arcenciel.generated.CollectionsApi(api_client)
    collection_id = 1 # int | Collection Id provided in the path.

    try:
        # Cancel the current user's pending collaboration request
        await api_instance.cancel_collection_contribution_request(collection_id)
    except Exception as e:
        print("Exception when calling CollectionsApi->cancel_collection_contribution_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |

### Return type

void (empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Request cancelled. |  * X-Request-ID -  <br>  |
**400** | Invalid identifier. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | No pending request to cancel or collection not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_collection**
> DeveloperCollectionIdentity create_collection(create_collection_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_collection_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create a new collection

Create a model or image collection with a generated slug, caller ownership, visibility, cover, and collaboration preferences. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_collection_request import CreateCollectionRequest
from arcenciel.generated.models.developer_collection_identity import DeveloperCollectionIdentity
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
    create_collection_request = {"allowCollaborators":true,"coverImage":"value","coverImageRating":"safe","description":"value","itemPlacement":"APPEND","name":"value","type":"MODEL","visibility":"PUBLIC"} # CreateCollectionRequest | Request payload for this operation.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Create a new collection
        api_response = await api_instance.create_collection(create_collection_request, idempotency_key=idempotency_key)
        print("The response of CollectionsApi->create_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->create_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_collection_request** | [**CreateCollectionRequest**](CreateCollectionRequest.md)| Request payload for this operation. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperCollectionIdentity**](DeveloperCollectionIdentity.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Collection created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Visibility not permitted for the user role. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_collection**
> delete_collection(collection_id)

**Synchronous variant:** `delete_collection_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete a collection

Delete a caller-managed collection and its association records without deleting the referenced models or images. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

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
    api_instance = arcenciel.generated.CollectionsApi(api_client)
    collection_id = 1 # int | Collection Id provided in the path.

    try:
        # Delete a collection
        await api_instance.delete_collection(collection_id)
    except Exception as e:
        print("Exception when calling CollectionsApi->delete_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |

### Return type

void (empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Collection deleted. |  * X-Request-ID -  <br>  |
**400** | Invalid identifier. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Not allowed to delete this collection. |  * X-Request-ID -  <br>  |
**404** | Collection not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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

# **leave_collection**
> leave_collection(collection_id)

**Synchronous variant:** `leave_collection_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Leave a collection as collaborator

Remove the caller’s own non-owner collaborator relationship from a collection without altering its items. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

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
    api_instance = arcenciel.generated.CollectionsApi(api_client)
    collection_id = 1 # int | Collection Id provided in the path.

    try:
        # Leave a collection as collaborator
        await api_instance.leave_collection(collection_id)
    except Exception as e:
        print("Exception when calling CollectionsApi->leave_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |

### Return type

void (empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Collaborator removed. |  * X-Request-ID -  <br>  |
**400** | Invalid request. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Collection not found. |  * X-Request-ID -  <br>  |
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

# **remove_collection_collaborator**
> remove_collection_collaborator(collection_id, collaborator_id)

**Synchronous variant:** `remove_collection_collaborator_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove a collaborator from a collection

Remove one non-owner collaborator after manager authorization while preserving the collection and referenced content. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

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
    api_instance = arcenciel.generated.CollectionsApi(api_client)
    collection_id = 1 # int | Collection Id provided in the path.
    collaborator_id = 1 # int | Collaborator Id provided in the path.

    try:
        # Remove a collaborator from a collection
        await api_instance.remove_collection_collaborator(collection_id, collaborator_id)
    except Exception as e:
        print("Exception when calling CollectionsApi->remove_collection_collaborator: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **collaborator_id** | **int**| Collaborator Id provided in the path. |

### Return type

void (empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Collaborator removed. |  * X-Request-ID -  <br>  |
**400** | Invalid identifiers or action. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Not allowed to manage collaborators. |  * X-Request-ID -  <br>  |
**404** | Collection or collaborator not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_collection_item**
> remove_collection_item(collection_id, item_id)

**Synchronous variant:** `remove_collection_item_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove an item from a collection

Remove one model or image association from a caller-managed collection without deleting the referenced resource. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

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
    api_instance = arcenciel.generated.CollectionsApi(api_client)
    collection_id = 1 # int | Collection Id provided in the path.
    item_id = 1 # int | Item Id provided in the path.

    try:
        # Remove an item from a collection
        await api_instance.remove_collection_item(collection_id, item_id)
    except Exception as e:
        print("Exception when calling CollectionsApi->remove_collection_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **item_id** | **int**| Item Id provided in the path. |

### Return type

void (empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Item removed from the collection. |  * X-Request-ID -  <br>  |
**400** | Invalid identifiers. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Not allowed to modify this collection. |  * X-Request-ID -  <br>  |
**404** | Collection or item not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reorder_collection_items**
> reorder_collection_items(collection_id, reorder_collection_items_request)

**Synchronous variant:** `reorder_collection_items_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Override the item ordering for a collection

Apply explicit sequence values to existing collection items after validating that every identifier belongs to the collection. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.reorder_collection_items_request import ReorderCollectionItemsRequest
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
    reorder_collection_items_request = {"order":[{"id":1,"order":1}]} # ReorderCollectionItemsRequest | Request payload for this operation.

    try:
        # Override the item ordering for a collection
        await api_instance.reorder_collection_items(collection_id, reorder_collection_items_request)
    except Exception as e:
        print("Exception when calling CollectionsApi->reorder_collection_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **reorder_collection_items_request** | [**ReorderCollectionItemsRequest**](ReorderCollectionItemsRequest.md)| Request payload for this operation. |

### Return type

void (empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Order updated. |  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Not allowed to modify this collection. |  * X-Request-ID -  <br>  |
**404** | Collection or an item was not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_collection_contribution**
> CollectionContributionRequest request_collection_contribution(collection_id, request_collection_contribution_request=request_collection_contribution_request)

**Synchronous variant:** `request_collection_contribution_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Request collaborator access for a collection

Create or return the caller’s contribution request for a collection that currently accepts community contributors. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.collection_contribution_request import CollectionContributionRequest
from arcenciel.generated.models.request_collection_contribution_request import RequestCollectionContributionRequest
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
    request_collection_contribution_request = {"message":"value"} # RequestCollectionContributionRequest | Request payload for this operation. (optional)

    try:
        # Request collaborator access for a collection
        api_response = await api_instance.request_collection_contribution(collection_id, request_collection_contribution_request=request_collection_contribution_request)
        print("The response of CollectionsApi->request_collection_contribution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->request_collection_contribution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **request_collection_contribution_request** | [**RequestCollectionContributionRequest**](RequestCollectionContributionRequest.md)| Request payload for this operation. | [optional]

### Return type

[**CollectionContributionRequest**](CollectionContributionRequest.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Existing pending request returned. |  * X-Request-ID -  <br>  |
**201** | Contribution request created. |  * X-Request-ID -  <br>  |
**400** | Request not allowed. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Collection not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resequence_collection_items**
> resequence_collection_items(collection_id, resequence_collection_items_request=resequence_collection_items_request)

**Synchronous variant:** `resequence_collection_items_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reapply an automatic ordering to existing collection items

Reassign collection item sequence values from their current order to restore a compact deterministic ordering. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.resequence_collection_items_request import ResequenceCollectionItemsRequest
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
    resequence_collection_items_request = {"mode":"newest"} # ResequenceCollectionItemsRequest | Request payload for this operation. (optional)

    try:
        # Reapply an automatic ordering to existing collection items
        await api_instance.resequence_collection_items(collection_id, resequence_collection_items_request=resequence_collection_items_request)
    except Exception as e:
        print("Exception when calling CollectionsApi->resequence_collection_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **resequence_collection_items_request** | [**ResequenceCollectionItemsRequest**](ResequenceCollectionItemsRequest.md)| Request payload for this operation. | [optional]

### Return type

void (empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Resequencing completed. |  * X-Request-ID -  <br>  |
**400** | Invalid request. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Not allowed to modify this collection. |  * X-Request-ID -  <br>  |
**404** | Collection not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respond_collection_contribution_request**
> DeveloperCollectionContributionDecisionResponse respond_collection_contribution_request(collection_id, request_id, respond_collection_contribution_request_request)

**Synchronous variant:** `respond_collection_contribution_request_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Approve or decline a contribution request

Approve or decline one pending contribution request and return the resulting request and optional collaborator. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_collection_contribution_decision_response import DeveloperCollectionContributionDecisionResponse
from arcenciel.generated.models.respond_collection_contribution_request_request import RespondCollectionContributionRequestRequest
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
    request_id = 1 # int | Request Id provided in the path.
    respond_collection_contribution_request_request = {"action":"approve"} # RespondCollectionContributionRequestRequest | Request payload for this operation.

    try:
        # Approve or decline a contribution request
        api_response = await api_instance.respond_collection_contribution_request(collection_id, request_id, respond_collection_contribution_request_request)
        print("The response of CollectionsApi->respond_collection_contribution_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->respond_collection_contribution_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **request_id** | **int**| Request Id provided in the path. |
 **respond_collection_contribution_request_request** | [**RespondCollectionContributionRequestRequest**](RespondCollectionContributionRequestRequest.md)| Request payload for this operation. |

### Return type

[**DeveloperCollectionContributionDecisionResponse**](DeveloperCollectionContributionDecisionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request processed. |  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Not allowed to manage collaborators. |  * X-Request-ID -  <br>  |
**404** | Request or collection not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_collection**
> DeveloperCollectionIdentity update_collection(collection_id, update_collection_request)

**Synchronous variant:** `update_collection_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update collection metadata

Update supported collection metadata, visibility, slug, cover, collaboration flag, and item placement. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_collection_identity import DeveloperCollectionIdentity
from arcenciel.generated.models.update_collection_request import UpdateCollectionRequest
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
    update_collection_request = {"allowCollaborators":true,"coverImage":"value","coverImageRating":"safe","description":"value","name":"value","slug":"value","visibility":"PUBLIC"} # UpdateCollectionRequest | Request payload for this operation.

    try:
        # Update collection metadata
        api_response = await api_instance.update_collection(collection_id, update_collection_request)
        print("The response of CollectionsApi->update_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->update_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_id** | **int**| Collection Id provided in the path. |
 **update_collection_request** | [**UpdateCollectionRequest**](UpdateCollectionRequest.md)| Request payload for this operation. |

### Return type

[**DeveloperCollectionIdentity**](DeveloperCollectionIdentity.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection updated. |  * X-Request-ID -  <br>  |
**400** | Invalid payload or no changes supplied. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | Not allowed to update this collection. |  * X-Request-ID -  <br>  |
**404** | Collection not found. |  * X-Request-ID -  <br>  |
**409** | Slug already in use. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_collection_cover**
> DeveloperCollectionCoverUploadResponse upload_collection_cover(cover_image, idempotency_key=idempotency_key)

**Synchronous variant:** `upload_collection_cover_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload and analyse a provisional collection cover

Upload one validated collection-cover image and return the managed relative path plus its safety rating. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_collection_cover_upload_response import DeveloperCollectionCoverUploadResponse
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
    cover_image = None # bytes | Cover Image accepted or returned by this contract.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Upload and analyse a provisional collection cover
        api_response = await api_instance.upload_collection_cover(cover_image, idempotency_key=idempotency_key)
        print("The response of CollectionsApi->upload_collection_cover:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->upload_collection_cover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cover_image** | **bytes**| Cover Image accepted or returned by this contract. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperCollectionCoverUploadResponse**](DeveloperCollectionCoverUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Cover processed and rated. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | No file uploaded. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
