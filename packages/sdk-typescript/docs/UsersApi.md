# UsersApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCreatorStats**](UsersApi.md#getcreatorstats) | **GET** /api/creators/{id}/stats | Retrieve aggregated statistics for a creator. |
| [**getUser**](UsersApi.md#getuser) | **GET** /api/users/{id} | Retrieve a specific user\&#39;s profile. |
| [**listUserUploads**](UsersApi.md#listuseruploads) | **GET** /api/users/{id}/uploads | Retrieve uploads for a specific user |
| [**listUsers**](UsersApi.md#listusers) | **GET** /api/users | Retrieve a list of users. |
| [**searchUsers**](UsersApi.md#searchusers) | **GET** /api/users/search | Search for users by username |



## getCreatorStats

> CreatorStatsResponse getCreatorStats(id, startDate, endDate)

Retrieve aggregated statistics for a creator.

Return the authenticated creator statistics available to the caller. Standard creators receive a bounded preview, supporters receive advanced ranges, and staff may inspect another creator.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@arcenciel/sdk';
import type { GetCreatorStatsRequest } from '@arcenciel/sdk';

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
  const api = new UsersApi(config);

  const body = {
    // number | The creator\'s user ID.
    id: 1,
    // Date | ISO timestamp that marks the inclusive start of the range. Ignored for the standard seven-day preview. (optional)
    startDate: 2026-07-28T10:00:00.000Z,
    // Date | ISO timestamp that marks the inclusive end of the range. Ignored for the standard seven-day preview. (optional)
    endDate: 2026-07-28T10:00:00.000Z,
  } satisfies GetCreatorStatsRequest;

  try {
    const data = await api.getCreatorStats(body);
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
| **id** | `number` | The creator\&#39;s user ID. | [Defaults to `undefined`] |
| **startDate** | `Date` | ISO timestamp that marks the inclusive start of the range. Ignored for the standard seven-day preview. | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | ISO timestamp that marks the inclusive end of the range. Ignored for the standard seven-day preview. | [Optional] [Defaults to `undefined`] |

### Return type

[**CreatorStatsResponse**](CreatorStatsResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Aggregated statistics for the requested creator. |  * X-Creator-Stats-Cache - HIT when the response came from the short-lived private cache, otherwise MISS. <br>  * X-Creator-Stats-Window - Maximum number of days available to this caller. <br>  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Creator not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUser

> UserProfile getUser(id)

Retrieve a specific user\&#39;s profile.

Return the public profile for one visible user, including only fields approved for external integrations. Account-security and private contact data remains outside this contract.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@arcenciel/sdk';
import type { GetUserRequest } from '@arcenciel/sdk';

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
  const api = new UsersApi(config);

  const body = {
    // number | The user ID.
    id: 1,
  } satisfies GetUserRequest;

  try {
    const data = await api.getUser(body);
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
| **id** | `number` | The user ID. | [Defaults to `undefined`] |

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the user\&#39;s profile. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **404** | User not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listUserUploads

> Uploads listUserUploads(id, sort)

Retrieve uploads for a specific user

List models, images, videos, articles, and other upload groups visible on one public user profile. Every nested record is filtered using its domain visibility policy.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@arcenciel/sdk';
import type { ListUserUploadsRequest } from '@arcenciel/sdk';

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
  const api = new UsersApi(config);

  const body = {
    // number | The user ID.
    id: 1,
    // 'recent' | 'oldest' | Sort order for results. (optional)
    sort: recent,
  } satisfies ListUserUploadsRequest;

  try {
    const data = await api.listUserUploads(body);
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
| **id** | `number` | The user ID. | [Defaults to `undefined`] |
| **sort** | `recent`, `oldest` | Sort order for results. | [Optional] [Defaults to `undefined`] [Enum: recent, oldest] |

### Return type

[**Uploads**](Uploads.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lists of uploads grouped by type. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listUsers

> ListUsers200Response listUsers(search, role, followed, sort, direction, page, limit)

Retrieve a list of users.

List public user profiles with the documented pagination and filtering controls. Private account, security, email, and session data is never part of this Developer API response.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@arcenciel/sdk';
import type { ListUsersRequest } from '@arcenciel/sdk';

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
  const api = new UsersApi(config);

  const body = {
    // string | Filter by username (contains match). (optional)
    search: landscape,
    // 'ADMIN' | 'MODERATOR' | 'CREATOR' | 'ARTIST' | 'USER' | Filter by user role. (optional)
    role: ADMIN,
    // boolean | When true, return users followed by the current user (auth only). (optional)
    followed: true,
    // 'username' | 'role' | 'createdAt' | 'imageCount' | 'modelCount' | 'articleCount' | 'videoCount' | Sort field (default username). (optional)
    sort: username,
    // 'asc' | 'desc' | Sort direction (default desc). (optional)
    direction: asc,
    // number | Page number. (optional)
    page: 1,
    // number | Page size (min 10, max 100). (optional)
    limit: 40,
  } satisfies ListUsersRequest;

  try {
    const data = await api.listUsers(body);
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
| **search** | `string` | Filter by username (contains match). | [Optional] [Defaults to `undefined`] |
| **role** | `ADMIN`, `MODERATOR`, `CREATOR`, `ARTIST`, `USER` | Filter by user role. | [Optional] [Defaults to `undefined`] [Enum: ADMIN, MODERATOR, CREATOR, ARTIST, USER] |
| **followed** | `boolean` | When true, return users followed by the current user (auth only). | [Optional] [Defaults to `undefined`] |
| **sort** | `username`, `role`, `createdAt`, `imageCount`, `modelCount`, `articleCount`, `videoCount` | Sort field (default username). | [Optional] [Defaults to `undefined`] [Enum: username, role, createdAt, imageCount, modelCount, articleCount, videoCount] |
| **direction** | `asc`, `desc` | Sort direction (default desc). | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Page size (min 10, max 100). | [Optional] [Defaults to `40`] |

### Return type

[**ListUsers200Response**](ListUsers200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a paginated list of users. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchUsers

> Array&lt;SearchUsers200ResponseInner&gt; searchUsers(q, limit, includeCollaborators)

Search for users by username

Search public user profiles by username for attribution and creator-picking workflows. Results contain only public profile fields and clients must not infer account availability.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@arcenciel/sdk';
import type { SearchUsersRequest } from '@arcenciel/sdk';

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
  const api = new UsersApi(config);

  const body = {
    // string | Partial username to search for (min 2 characters). (optional)
    q: landscape,
    // number | Max number of users to return (default 10). (optional)
    limit: 1,
    // boolean | Include collection collaborators in results. (optional)
    includeCollaborators: true,
  } satisfies SearchUsersRequest;

  try {
    const data = await api.searchUsers(body);
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
| **q** | `string` | Partial username to search for (min 2 characters). | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Max number of users to return (default 10). | [Optional] [Defaults to `undefined`] |
| **includeCollaborators** | `boolean` | Include collection collaborators in results. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;SearchUsers200ResponseInner&gt;**](SearchUsers200ResponseInner.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of matching users. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
