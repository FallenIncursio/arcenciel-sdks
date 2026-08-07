# CollabsApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadCollabShowcaseImage**](CollabsApi.md#downloadcollabshowcaseimage) | **GET** /api/collabs/{collabId}/showcase/image | Download a collaboration showcase image |
| [**getCollab**](CollabsApi.md#getcollab) | **GET** /api/collabs/{collabId} | Get a collaboration event |
| [**getCollabAnnouncement**](CollabsApi.md#getcollabannouncement) | **GET** /api/collabs/announcement | Get the active collaboration announcement |
| [**getCollabShowcase**](CollabsApi.md#getcollabshowcase) | **GET** /api/collabs/{collabId}/showcase | Get collaboration showcase data |
| [**getHistoricalCollabOverview**](CollabsApi.md#gethistoricalcollaboverview) | **GET** /api/collabs/history/overview | Get the public historical collaboration overview |
| [**leaveCollab**](CollabsApi.md#leavecollab) | **DELETE** /api/collabs/{collabId}/participants/self | Remove the current user\&#39;s collaboration participant record |
| [**listCollabs**](CollabsApi.md#listcollabs) | **GET** /api/collabs | List collaboration events |
| [**requestCollabJoin**](CollabsApi.md#requestcollabjoin) | **POST** /api/collabs/{collabId}/requests | Request to join a collaboration |
| [**updateMyCollabParticipant**](CollabsApi.md#updatemycollabparticipant) | **PATCH** /api/collabs/{collabId}/participants/self | Update the current user\&#39;s collaboration participant record |
| [**uploadMyCollabParticipantPlaceholder**](CollabsApi.md#uploadmycollabparticipantplaceholder) | **POST** /api/collabs/{collabId}/participants/placeholder | Upload a participant placeholder image |



## downloadCollabShowcaseImage

> Blob downloadCollabShowcaseImage(collabId, style, width, includePlaceholders, includeUnreleased)

Download a collaboration showcase image

Transfer a generated PNG showcase for an eligible released collaboration. Clients may use byte ranges, must honor Content-Range and the inline filename, and must not automatically retry an unchanged invalid range.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { DownloadCollabShowcaseImageRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  const body = {
    // string | Collab Id provided in the path.
    collabId: example-collab-id,
    // string | Server-supported layout. Unknown values fall back to the default layout. (optional)
    style: example-style,
    // number | Requested output width; the runtime clamps values to the supported range. (optional)
    width: 1,
    // boolean | Include Placeholders provided in the query. (optional)
    includePlaceholders: true,
    // boolean | Include Unreleased provided in the query. (optional)
    includeUnreleased: true,
  } satisfies DownloadCollabShowcaseImageRequest;

  try {
    const data = await api.downloadCollabShowcaseImage(body);
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
| **collabId** | `string` | Collab Id provided in the path. | [Defaults to `undefined`] |
| **style** | `string` | Server-supported layout. Unknown values fall back to the default layout. | [Optional] [Defaults to `undefined`] |
| **width** | `number` | Requested output width; the runtime clamps values to the supported range. | [Optional] [Defaults to `undefined`] |
| **includePlaceholders** | `boolean` | Include Placeholders provided in the query. | [Optional] [Defaults to `undefined`] |
| **includeUnreleased** | `boolean` | Include Unreleased provided in the query. | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/png`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Showcase PNG returned. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * Content-Length -  <br>  * X-Request-ID -  <br>  |
| **206** | Requested PNG byte range returned. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * Content-Length -  <br>  * Content-Range -  <br>  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
| **416** | Requested byte range is not satisfiable for the current PNG representation. |  * Content-Range -  <br>  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollab

> CollabDetail getCollab(collabId)

Get a collaboration event

Return a visible live or historical collaboration by numeric identifier or slug. Participant, submission, evidence, management, and invitation fields are filtered according to the anonymous, member, owner, and staff visibility matrix.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { GetCollabRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  const body = {
    // string | Collab Id provided in the path.
    collabId: example-collab-id,
  } satisfies GetCollabRequest;

  try {
    const data = await api.getCollab(body);
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
| **collabId** | `string` | Collab Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**CollabDetail**](CollabDetail.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collaboration detail returned. |  * X-Request-ID -  <br>  |
| **403** | The authenticated principal does not have access to this operation. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollabAnnouncement

> CollabSummary getCollabAnnouncement()

Get the active collaboration announcement

Return the current public collaboration announcement, or null when no eligible live event is active. Authentication is optional and never expands this announcement response beyond the public summary.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { GetCollabAnnouncementRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  try {
    const data = await api.getCollabAnnouncement();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CollabSummary**](CollabSummary.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active announcement returned. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollabShowcase

> CollabShowcase getCollabShowcase(collabId, includePlaceholders, includeUnreleased)

Get collaboration showcase data

Return the public showcase entries for an eligible released collaboration. Placeholder and unreleased entries remain disabled for ordinary callers and can only be requested by authenticated staff.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { GetCollabShowcaseRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  const body = {
    // string | Collab Id provided in the path.
    collabId: example-collab-id,
    // boolean | Include Placeholders provided in the query. (optional)
    includePlaceholders: true,
    // boolean | Include Unreleased provided in the query. (optional)
    includeUnreleased: true,
  } satisfies GetCollabShowcaseRequest;

  try {
    const data = await api.getCollabShowcase(body);
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
| **collabId** | `string` | Collab Id provided in the path. | [Defaults to `undefined`] |
| **includePlaceholders** | `boolean` | Include Placeholders provided in the query. | [Optional] [Defaults to `undefined`] |
| **includeUnreleased** | `boolean` | Include Unreleased provided in the query. | [Optional] [Defaults to `undefined`] |

### Return type

[**CollabShowcase**](CollabShowcase.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Showcase data returned. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHistoricalCollabOverview

> GetHistoricalCollabOverview200Response getHistoricalCollabOverview()

Get the public historical collaboration overview

Return aggregate counts and the recorded year range for public historical collaborations. This anonymous-safe overview contains no participant contact information or staff-only evidence.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { GetHistoricalCollabOverviewRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  try {
    const data = await api.getHistoricalCollabOverview();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetHistoricalCollabOverview200Response**](GetHistoricalCollabOverview200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Historical catalog totals and recorded year range returned. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## leaveCollab

> leaveCollab(collabId)

Remove the current user\&#39;s collaboration participant record

Cancel the caller’s pending request or invitation to an active collaboration without affecting accepted participants. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { LeaveCollabRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  const body = {
    // string | Collab Id provided in the path.
    collabId: example-collab-id,
  } satisfies LeaveCollabRequest;

  try {
    const data = await api.leaveCollab(body);
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
| **collabId** | `string` | Collab Id provided in the path. | [Defaults to `undefined`] |

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
| **204** | Participant removed. |  * X-Request-ID -  <br>  |
| **400** | Participant state does not allow self-removal. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Collaboration or participant not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCollabs

> CollabPage listCollabs(page, limit, search, scope, status, category, userId, mode, scale, year)

List collaboration events

List public live or historical collaboration events with pagination, availability counts, creator previews, and optional filters. Staff may explicitly request the management view while other callers remain on the public visibility policy.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { ListCollabsRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  const body = {
    // number | Page provided in the query. (optional)
    page: 1,
    // number | Limit provided in the query. (optional)
    limit: 1,
    // string | Search provided in the query. (optional)
    search: landscape,
    // 'public' | 'manage' | Staff-only `manage` view; all other callers receive the public view. (optional)
    scope: public,
    // string | Filter by the current collaboration status. Unknown values are ignored. (optional)
    status: example-status,
    // string | Filter by collaboration category. Unknown values are ignored. (optional)
    category: example-category,
    // number | Return collaborations containing the selected accepted participant or historical creator. (optional)
    userId: 1,
    // 'LIVE' | 'HISTORICAL' | Select live events or the historical archive. Defaults to `LIVE`. (optional)
    mode: LIVE,
    // 'MAJOR' | 'MINI' | Optional historical scale filter. (optional)
    scale: MAJOR,
    // number | Optional UTC release year filter. (optional)
    year: 1970,
  } satisfies ListCollabsRequest;

  try {
    const data = await api.listCollabs(body);
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
| **page** | `number` | Page provided in the query. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Limit provided in the query. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | Search provided in the query. | [Optional] [Defaults to `undefined`] |
| **scope** | `public`, `manage` | Staff-only &#x60;manage&#x60; view; all other callers receive the public view. | [Optional] [Defaults to `undefined`] [Enum: public, manage] |
| **status** | `string` | Filter by the current collaboration status. Unknown values are ignored. | [Optional] [Defaults to `undefined`] |
| **category** | `string` | Filter by collaboration category. Unknown values are ignored. | [Optional] [Defaults to `undefined`] |
| **userId** | `number` | Return collaborations containing the selected accepted participant or historical creator. | [Optional] [Defaults to `undefined`] |
| **mode** | `LIVE`, `HISTORICAL` | Select live events or the historical archive. Defaults to &#x60;LIVE&#x60;. | [Optional] [Defaults to `undefined`] [Enum: LIVE, HISTORICAL] |
| **scale** | `MAJOR`, `MINI` | Optional historical scale filter. | [Optional] [Defaults to `undefined`] [Enum: MAJOR, MINI] |
| **year** | `number` | Optional UTC release year filter. | [Optional] [Defaults to `undefined`] |

### Return type

[**CollabPage**](CollabPage.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collaboration list returned. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestCollabJoin

> DeveloperCollabParticipantResponse requestCollabJoin(collabId, body)

Request to join a collaboration

Request participation in an open live collaboration or return the caller’s existing request without creating a duplicate participant. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { RequestCollabJoinRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  const body = {
    // string | Collab Id provided in the path.
    collabId: example-collab-id,
    // object | Request payload for this operation. (optional)
    body: {},
  } satisfies RequestCollabJoinRequest;

  try {
    const data = await api.requestCollabJoin(body);
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
| **collabId** | `string` | Collab Id provided in the path. | [Defaults to `undefined`] |
| **body** | `object` | Request payload for this operation. | [Optional] |

### Return type

[**DeveloperCollabParticipantResponse**](DeveloperCollabParticipantResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Existing join request or invitation updated. |  * X-Request-ID -  <br>  |
| **201** | New join request recorded. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | The caller cannot request access to this collaboration. |  * X-Request-ID -  <br>  |
| **404** | Collaboration not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMyCollabParticipant

> DeveloperCollabParticipantResponse updateMyCollabParticipant(collabId, body)

Update the current user\&#39;s collaboration participant record

Update the caller’s own character, source, notes, and placeholder-description fields in an active collaboration. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { UpdateMyCollabParticipantRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  const body = {
    // string | Collab Id provided in the path.
    collabId: example-collab-id,
    // object | Request payload for this operation.
    body: {},
  } satisfies UpdateMyCollabParticipantRequest;

  try {
    const data = await api.updateMyCollabParticipant(body);
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
| **collabId** | `string` | Collab Id provided in the path. | [Defaults to `undefined`] |
| **body** | `object` | Request payload for this operation. | |

### Return type

[**DeveloperCollabParticipantResponse**](DeveloperCollabParticipantResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Participant updated. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadMyCollabParticipantPlaceholder

> DeveloperCollabPlaceholderUploadResponse uploadMyCollabParticipantPlaceholder(collabId, idempotencyKey, placeholderImage)

Upload a participant placeholder image

Upload and safety-check placeholder artwork for the caller’s participant record in an active collaboration. The documented owner/staff checks, API-key scope, rate policy, and retry classification apply to every call.

### Example

```ts
import {
  Configuration,
  CollabsApi,
} from '@arcenciel/sdk';
import type { UploadMyCollabParticipantPlaceholderRequest } from '@arcenciel/sdk';

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
  const api = new CollabsApi(config);

  const body = {
    // string | Collab Id provided in the path.
    collabId: example-collab-id,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
    // Blob | Placeholder Image accepted or returned by this contract. (optional)
    placeholderImage: BINARY_DATA_HERE,
  } satisfies UploadMyCollabParticipantPlaceholderRequest;

  try {
    const data = await api.uploadMyCollabParticipantPlaceholder(body);
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
| **collabId** | `string` | Collab Id provided in the path. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **placeholderImage** | `Blob` | Placeholder Image accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperCollabPlaceholderUploadResponse**](DeveloperCollabPlaceholderUploadResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Placeholder image uploaded. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The operation is temporarily unavailable because a required service, dependency, or integration is unavailable. The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
