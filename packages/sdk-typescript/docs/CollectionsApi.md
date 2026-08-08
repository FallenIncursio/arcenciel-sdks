# CollectionsApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addCollectionCollaborator**](CollectionsApi.md#addcollectioncollaboratoroperation) | **POST** /api/collections/{collectionId}/collaborators | Add or update a collaborator |
| [**addCollectionItems**](CollectionsApi.md#addcollectionitemsoperation) | **POST** /api/collections/{collectionId}/items | Add items to a collection |
| [**cancelCollectionContributionRequest**](CollectionsApi.md#cancelcollectioncontributionrequest) | **DELETE** /api/collections/{collectionId}/contribution-requests/self | Cancel the current user\&#39;s pending collaboration request |
| [**createCollection**](CollectionsApi.md#createcollectionoperation) | **POST** /api/collections | Create a new collection |
| [**deleteCollection**](CollectionsApi.md#deletecollection) | **DELETE** /api/collections/{collectionId} | Delete a collection |
| [**getCollection**](CollectionsApi.md#getcollection) | **GET** /api/collections/{collectionId} | Fetch a single collection |
| [**leaveCollection**](CollectionsApi.md#leavecollection) | **DELETE** /api/collections/{collectionId}/collaborators/self | Leave a collection as collaborator |
| [**listCollectionContributionRequests**](CollectionsApi.md#listcollectioncontributionrequests) | **GET** /api/collections/{collectionId}/contribution-requests | List pending contribution requests |
| [**listCollections**](CollectionsApi.md#listcollections) | **GET** /api/collections | List collections |
| [**removeCollectionCollaborator**](CollectionsApi.md#removecollectioncollaborator) | **DELETE** /api/collections/{collectionId}/collaborators/{collaboratorId} | Remove a collaborator from a collection |
| [**removeCollectionItem**](CollectionsApi.md#removecollectionitem) | **DELETE** /api/collections/{collectionId}/items/{itemId} | Remove an item from a collection |
| [**reorderCollectionItems**](CollectionsApi.md#reordercollectionitemsoperation) | **PATCH** /api/collections/{collectionId}/items/order | Override the item ordering for a collection |
| [**requestCollectionContribution**](CollectionsApi.md#requestcollectioncontributionoperation) | **POST** /api/collections/{collectionId}/contribution-requests | Request collaborator access for a collection |
| [**resequenceCollectionItems**](CollectionsApi.md#resequencecollectionitemsoperation) | **POST** /api/collections/{collectionId}/items/resequence | Reapply an automatic ordering to existing collection items |
| [**respondCollectionContributionRequest**](CollectionsApi.md#respondcollectioncontributionrequestoperation) | **PATCH** /api/collections/{collectionId}/contribution-requests/{requestId} | Approve or decline a contribution request |
| [**updateCollection**](CollectionsApi.md#updatecollectionoperation) | **PATCH** /api/collections/{collectionId} | Update collection metadata |
| [**uploadCollectionCover**](CollectionsApi.md#uploadcollectioncover) | **POST** /api/collections/cover | Upload and analyse a provisional collection cover |



## addCollectionCollaborator

> CollectionCollaboratorSummary addCollectionCollaborator(collectionId, addCollectionCollaboratorRequest)

Add or update a collaborator

Add or update a collection collaborator with an explicit role while preserving owner and manager authorization rules. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { AddCollectionCollaboratorOperationRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // AddCollectionCollaboratorRequest | Request payload for this operation.
    addCollectionCollaboratorRequest: {"role":"CONTRIBUTOR","userId":1},
  } satisfies AddCollectionCollaboratorOperationRequest;

  try {
    const data = await api.addCollectionCollaborator(body);
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
| **addCollectionCollaboratorRequest** | [AddCollectionCollaboratorRequest](AddCollectionCollaboratorRequest.md) | Request payload for this operation. | |

### Return type

[**CollectionCollaboratorSummary**](CollectionCollaboratorSummary.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collaborator added or updated. |  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to manage collaborators. |  * X-Request-ID -  <br>  |
| **404** | Collection not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addCollectionItems

> DeveloperCollectionItemsMutationResponse addCollectionItems(collectionId, addCollectionItemsRequest)

Add items to a collection

Add a bounded set of visible model or image identifiers to a collection and report added, skipped, and rejected identifiers. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { AddCollectionItemsOperationRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // AddCollectionItemsRequest | Request payload for this operation.
    addCollectionItemsRequest: {"items":[1]},
  } satisfies AddCollectionItemsOperationRequest;

  try {
    const data = await api.addCollectionItems(body);
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
| **addCollectionItemsRequest** | [AddCollectionItemsRequest](AddCollectionItemsRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperCollectionItemsMutationResponse**](DeveloperCollectionItemsMutationResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Items processed for the collection. |  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to modify this collection. |  * X-Request-ID -  <br>  |
| **404** | Collection not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelCollectionContributionRequest

> cancelCollectionContributionRequest(collectionId)

Cancel the current user\&#39;s pending collaboration request

Cancel the caller’s pending contribution request for one collection without changing collaborator access. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { CancelCollectionContributionRequestRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
  } satisfies CancelCollectionContributionRequestRequest;

  try {
    const data = await api.cancelCollectionContributionRequest(body);
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

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Request cancelled. |  * X-Request-ID -  <br>  |
| **400** | Invalid identifier. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | No pending request to cancel or collection not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCollection

> DeveloperCollectionIdentity createCollection(createCollectionRequest, idempotencyKey)

Create a new collection

Create a model or image collection with a generated slug, caller ownership, visibility, cover, and collaboration preferences. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { CreateCollectionOperationRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // CreateCollectionRequest | Request payload for this operation.
    createCollectionRequest: {"allowCollaborators":true,"coverImage":"value","coverImageRating":"safe","description":"value","itemPlacement":"APPEND","name":"value","type":"MODEL","visibility":"PUBLIC"},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateCollectionOperationRequest;

  try {
    const data = await api.createCollection(body);
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
| **createCollectionRequest** | [CreateCollectionRequest](CreateCollectionRequest.md) | Request payload for this operation. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperCollectionIdentity**](DeveloperCollectionIdentity.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Collection created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Visibility not permitted for the user role. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCollection

> deleteCollection(collectionId)

Delete a collection

Delete a caller-managed collection and its association records without deleting the referenced models or images. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { DeleteCollectionRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
  } satisfies DeleteCollectionRequest;

  try {
    const data = await api.deleteCollection(body);
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

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Collection deleted. |  * X-Request-ID -  <br>  |
| **400** | Invalid identifier. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to delete this collection. |  * X-Request-ID -  <br>  |
| **404** | Collection not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollection

> CollectionDetail getCollection(collectionId, includeItems, modelLimit, modelOffset, imageLimit, imageOffset)

Fetch a single collection

Return one collection visible to the caller with optional paged model and image items, collaborator summaries, counts, and caller-specific permissions. Private collections remain limited to members and privileged staff.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { GetCollectionRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // string | Collection Id provided in the path.
    collectionId: example-collection-id,
    // 'true' | 'false' | Include Items provided in the query. (optional)
    includeItems: true,
    // number | Model Limit provided in the query. (optional)
    modelLimit: 1,
    // number | Model Offset provided in the query. (optional)
    modelOffset: 1,
    // number | Image Limit provided in the query. (optional)
    imageLimit: 1,
    // number | Image Offset provided in the query. (optional)
    imageOffset: 1,
  } satisfies GetCollectionRequest;

  try {
    const data = await api.getCollection(body);
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
| **collectionId** | `string` | Collection Id provided in the path. | [Defaults to `undefined`] |
| **includeItems** | `true`, `false` | Include Items provided in the query. | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **modelLimit** | `number` | Model Limit provided in the query. | [Optional] [Defaults to `undefined`] |
| **modelOffset** | `number` | Model Offset provided in the query. | [Optional] [Defaults to `undefined`] |
| **imageLimit** | `number` | Image Limit provided in the query. | [Optional] [Defaults to `undefined`] |
| **imageOffset** | `number` | Image Offset provided in the query. | [Optional] [Defaults to `undefined`] |

### Return type

[**CollectionDetail**](CollectionDetail.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection detail payload. |  * X-Request-ID -  <br>  |
| **403** | The authenticated principal does not have access to this operation. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## leaveCollection

> leaveCollection(collectionId)

Leave a collection as collaborator

Remove the caller’s own non-owner collaborator relationship from a collection without altering its items. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { LeaveCollectionRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
  } satisfies LeaveCollectionRequest;

  try {
    const data = await api.leaveCollection(body);
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

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Collaborator removed. |  * X-Request-ID -  <br>  |
| **400** | Invalid request. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Collection not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCollectionContributionRequests

> Array&lt;CollectionContributionRequest&gt; listCollectionContributionRequests(collectionId)

List pending contribution requests

List contribution requests for a collection the authenticated caller may manage. The operation never exposes requests to anonymous callers, ordinary non-manager members, or API keys without the CollectionsRead scope.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { ListCollectionContributionRequestsRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
  } satisfies ListCollectionContributionRequestsRequest;

  try {
    const data = await api.listCollectionContributionRequests(body);
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

### Return type

[**Array&lt;CollectionContributionRequest&gt;**](CollectionContributionRequest.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contribution requests for the collection. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | The authenticated principal does not have access to this operation. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCollections

> CollectionPage listCollections(type, search, sort, collaborative, ownerId, scope, membership, self, visibility, userId, relationship, page, limit)

List collections

List collections visible to the caller with bounded pagination, discovery filters, relationship filters, item counts, and public owner metadata. Private and manageable views require the corresponding authenticated membership.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { ListCollectionsRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // 'MODEL' | 'IMAGE' | Type provided in the query. (optional)
    type: MODEL,
    // string | Filter by name, description, or slug. (optional)
    search: landscape,
    // 'newest' | 'updated' | 'items' | 'collaborators' | 'alpha' | Sorting strategy (default newest). (optional)
    sort: newest,
    // 'true' | 'false' | Filter for collaborative collections. (optional)
    collaborative: true,
    // number | Filter by owner id. (optional)
    ownerId: 1,
    // 'public' | 'manageable' | Use \"manageable\" to fetch collections you can manage (owner or collaborator). (optional)
    scope: public,
    // 'any' | 'owner' | 'collaborator' | When scope=manageable, limit results by your role. (optional)
    membership: any,
    // 'favorited' | 'followed' | Requires authentication. Filter for collections you favorited or by creators you follow. (optional)
    self: favorited,
    // 'PUBLIC' | 'UNLISTED' | 'PRIVATE' | Filter by visibility. (optional)
    visibility: PUBLIC,
    // number | Fetch collections where this user is an owner or collaborator. (optional)
    userId: 1,
    // 'any' | 'owner' | 'collaborator' | Relationship filter applied when userId is provided (default any). (optional)
    relationship: any,
    // number | Page provided in the query. (optional)
    page: 1,
    // number | Limit provided in the query. (optional)
    limit: 1,
  } satisfies ListCollectionsRequest;

  try {
    const data = await api.listCollections(body);
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
| **type** | `MODEL`, `IMAGE` | Type provided in the query. | [Optional] [Defaults to `undefined`] [Enum: MODEL, IMAGE] |
| **search** | `string` | Filter by name, description, or slug. | [Optional] [Defaults to `undefined`] |
| **sort** | `newest`, `updated`, `items`, `collaborators`, `alpha` | Sorting strategy (default newest). | [Optional] [Defaults to `undefined`] [Enum: newest, updated, items, collaborators, alpha] |
| **collaborative** | `true`, `false` | Filter for collaborative collections. | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **ownerId** | `number` | Filter by owner id. | [Optional] [Defaults to `undefined`] |
| **scope** | `public`, `manageable` | Use \&quot;manageable\&quot; to fetch collections you can manage (owner or collaborator). | [Optional] [Defaults to `undefined`] [Enum: public, manageable] |
| **membership** | `any`, `owner`, `collaborator` | When scope&#x3D;manageable, limit results by your role. | [Optional] [Defaults to `undefined`] [Enum: any, owner, collaborator] |
| **self** | `favorited`, `followed` | Requires authentication. Filter for collections you favorited or by creators you follow. | [Optional] [Defaults to `undefined`] [Enum: favorited, followed] |
| **visibility** | `PUBLIC`, `UNLISTED`, `PRIVATE` | Filter by visibility. | [Optional] [Defaults to `undefined`] [Enum: PUBLIC, UNLISTED, PRIVATE] |
| **userId** | `number` | Fetch collections where this user is an owner or collaborator. | [Optional] [Defaults to `undefined`] |
| **relationship** | `any`, `owner`, `collaborator` | Relationship filter applied when userId is provided (default any). | [Optional] [Defaults to `undefined`] [Enum: any, owner, collaborator] |
| **page** | `number` | Page provided in the query. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Limit provided in the query. | [Optional] [Defaults to `undefined`] |

### Return type

[**CollectionPage**](CollectionPage.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paged list of collections. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | The authenticated principal does not have access to this operation. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeCollectionCollaborator

> removeCollectionCollaborator(collectionId, collaboratorId)

Remove a collaborator from a collection

Remove one non-owner collaborator after manager authorization while preserving the collection and referenced content. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { RemoveCollectionCollaboratorRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // number | Collaborator Id provided in the path.
    collaboratorId: 1,
  } satisfies RemoveCollectionCollaboratorRequest;

  try {
    const data = await api.removeCollectionCollaborator(body);
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
| **collaboratorId** | `number` | Collaborator Id provided in the path. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Collaborator removed. |  * X-Request-ID -  <br>  |
| **400** | Invalid identifiers or action. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to manage collaborators. |  * X-Request-ID -  <br>  |
| **404** | Collection or collaborator not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeCollectionItem

> removeCollectionItem(collectionId, itemId)

Remove an item from a collection

Remove one model or image association from a caller-managed collection without deleting the referenced resource. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { RemoveCollectionItemRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // number | Item Id provided in the path.
    itemId: 1,
  } satisfies RemoveCollectionItemRequest;

  try {
    const data = await api.removeCollectionItem(body);
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
| **itemId** | `number` | Item Id provided in the path. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Item removed from the collection. |  * X-Request-ID -  <br>  |
| **400** | Invalid identifiers. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to modify this collection. |  * X-Request-ID -  <br>  |
| **404** | Collection or item not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reorderCollectionItems

> reorderCollectionItems(collectionId, reorderCollectionItemsRequest)

Override the item ordering for a collection

Apply explicit sequence values to existing collection items after validating that every identifier belongs to the collection. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { ReorderCollectionItemsOperationRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // ReorderCollectionItemsRequest | Request payload for this operation.
    reorderCollectionItemsRequest: {"order":[{"id":1,"order":1}]},
  } satisfies ReorderCollectionItemsOperationRequest;

  try {
    const data = await api.reorderCollectionItems(body);
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
| **reorderCollectionItemsRequest** | [ReorderCollectionItemsRequest](ReorderCollectionItemsRequest.md) | Request payload for this operation. | |

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Order updated. |  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to modify this collection. |  * X-Request-ID -  <br>  |
| **404** | Collection or an item was not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestCollectionContribution

> CollectionContributionRequest requestCollectionContribution(collectionId, requestCollectionContributionRequest)

Request collaborator access for a collection

Create or return the caller’s contribution request for a collection that currently accepts community contributors. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { RequestCollectionContributionOperationRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // RequestCollectionContributionRequest | Request payload for this operation. (optional)
    requestCollectionContributionRequest: {"message":"value"},
  } satisfies RequestCollectionContributionOperationRequest;

  try {
    const data = await api.requestCollectionContribution(body);
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
| **requestCollectionContributionRequest** | [RequestCollectionContributionRequest](RequestCollectionContributionRequest.md) | Request payload for this operation. | [Optional] |

### Return type

[**CollectionContributionRequest**](CollectionContributionRequest.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Existing pending request returned. |  * X-Request-ID -  <br>  |
| **201** | Contribution request created. |  * X-Request-ID -  <br>  |
| **400** | Request not allowed. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Collection not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resequenceCollectionItems

> resequenceCollectionItems(collectionId, resequenceCollectionItemsRequest)

Reapply an automatic ordering to existing collection items

Reassign collection item sequence values from their current order to restore a compact deterministic ordering. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { ResequenceCollectionItemsOperationRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // ResequenceCollectionItemsRequest | Request payload for this operation. (optional)
    resequenceCollectionItemsRequest: {"mode":"newest"},
  } satisfies ResequenceCollectionItemsOperationRequest;

  try {
    const data = await api.resequenceCollectionItems(body);
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
| **resequenceCollectionItemsRequest** | [ResequenceCollectionItemsRequest](ResequenceCollectionItemsRequest.md) | Request payload for this operation. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Resequencing completed. |  * X-Request-ID -  <br>  |
| **400** | Invalid request. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to modify this collection. |  * X-Request-ID -  <br>  |
| **404** | Collection not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## respondCollectionContributionRequest

> DeveloperCollectionContributionDecisionResponse respondCollectionContributionRequest(collectionId, requestId, respondCollectionContributionRequestRequest)

Approve or decline a contribution request

Approve or decline one pending contribution request and return the resulting request and optional collaborator. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { RespondCollectionContributionRequestOperationRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // number | Request Id provided in the path.
    requestId: 1,
    // RespondCollectionContributionRequestRequest | Request payload for this operation.
    respondCollectionContributionRequestRequest: {"action":"approve"},
  } satisfies RespondCollectionContributionRequestOperationRequest;

  try {
    const data = await api.respondCollectionContributionRequest(body);
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
| **requestId** | `number` | Request Id provided in the path. | [Defaults to `undefined`] |
| **respondCollectionContributionRequestRequest** | [RespondCollectionContributionRequestRequest](RespondCollectionContributionRequestRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperCollectionContributionDecisionResponse**](DeveloperCollectionContributionDecisionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request processed. |  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to manage collaborators. |  * X-Request-ID -  <br>  |
| **404** | Request or collection not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCollection

> DeveloperCollectionIdentity updateCollection(collectionId, updateCollectionRequest)

Update collection metadata

Update supported collection metadata, visibility, slug, cover, collaboration flag, and item placement. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { UpdateCollectionOperationRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // number | Collection Id provided in the path.
    collectionId: 1,
    // UpdateCollectionRequest | Request payload for this operation.
    updateCollectionRequest: {"allowCollaborators":true,"coverImage":"value","coverImageRating":"safe","description":"value","name":"value","slug":"value","visibility":"PUBLIC"},
  } satisfies UpdateCollectionOperationRequest;

  try {
    const data = await api.updateCollection(body);
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
| **updateCollectionRequest** | [UpdateCollectionRequest](UpdateCollectionRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperCollectionIdentity**](DeveloperCollectionIdentity.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection updated. |  * X-Request-ID -  <br>  |
| **400** | Invalid payload or no changes supplied. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | Not allowed to update this collection. |  * X-Request-ID -  <br>  |
| **404** | Collection not found. |  * X-Request-ID -  <br>  |
| **409** | Slug already in use. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadCollectionCover

> DeveloperCollectionCoverUploadResponse uploadCollectionCover(coverImage, idempotencyKey)

Upload and analyse a provisional collection cover

Upload one validated collection-cover image and return the managed relative path plus its safety rating. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '@arcenciel/sdk';
import type { UploadCollectionCoverRequest } from '@arcenciel/sdk';

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
  const api = new CollectionsApi(config);

  const body = {
    // Blob | Cover Image associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary.
    coverImage: BINARY_DATA_HERE,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies UploadCollectionCoverRequest;

  try {
    const data = await api.uploadCollectionCover(body);
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
| **coverImage** | `Blob` | Cover Image associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperCollectionCoverUploadResponse**](DeveloperCollectionCoverUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Cover processed and rated. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | No file uploaded. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
