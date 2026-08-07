# CollectionsApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCollection**](CollectionsApi.md#getcollection) | **GET** /api/collections/{collectionId} | Fetch a single collection |
| [**listCollectionContributionRequests**](CollectionsApi.md#listcollectioncontributionrequests) | **GET** /api/collections/{collectionId}/contribution-requests | List pending contribution requests |
| [**listCollections**](CollectionsApi.md#listcollections) | **GET** /api/collections | List collections |



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
