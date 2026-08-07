# NotificationsApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getNotificationSummary**](NotificationsApi.md#getnotificationsummary) | **GET** /api/notifications/summary | Retrieve notification totals and per-type counts |
| [**listNotifications**](NotificationsApi.md#listnotifications) | **GET** /api/notifications | Retrieve your notifications |
| [**markAllNotificationsRead**](NotificationsApi.md#markallnotificationsreadoperation) | **POST** /api/notifications/readAll | Mark notifications as read (optionally scoped by category) |
| [**markNotificationRead**](NotificationsApi.md#marknotificationread) | **PATCH** /api/notifications/{notificationId}/read | Mark a specific notification as read |
| [**markNotificationsRead**](NotificationsApi.md#marknotificationsreadoperation) | **POST** /api/notifications/readMany | Mark specific notifications as read |



## getNotificationSummary

> DeveloperNotificationSummary getNotificationSummary()

Retrieve notification totals and per-type counts

Return total and unread notification counts for the authenticated caller, grouped by current server types and user-facing categories.

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@arcenciel/sdk';
import type { GetNotificationSummaryRequest } from '@arcenciel/sdk';

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
  const api = new NotificationsApi(config);

  try {
    const data = await api.getNotificationSummary();
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

[**DeveloperNotificationSummary**](DeveloperNotificationSummary.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Aggregate notification counts for the current user. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listNotifications

> DeveloperNotificationPage listNotifications(limit, cursor, unreadOnly, category)

Retrieve your notifications

List only the authenticated caller’s notifications with opaque cursor pagination, unread filtering, and the documented category taxonomy.

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@arcenciel/sdk';
import type { ListNotificationsRequest } from '@arcenciel/sdk';

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
  const api = new NotificationsApi(config);

  const body = {
    // number | Max number of notifications to return (default 50). (optional)
    limit: 1,
    // string | Opaque cursor for pagination. (optional)
    cursor: next-page,
    // boolean | When true, only unread notifications are returned. (optional)
    unreadOnly: true,
    // 'all' | 'unread' | 'following' | 'comments' | 'reactions' | 'updates' | 'collections' | 'collabs' | 'system' | 'moderation' | Server-side category filter. Works with cursor pagination. (optional)
    category: all,
  } satisfies ListNotificationsRequest;

  try {
    const data = await api.listNotifications(body);
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
| **limit** | `number` | Max number of notifications to return (default 50). | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Opaque cursor for pagination. | [Optional] [Defaults to `undefined`] |
| **unreadOnly** | `boolean` | When true, only unread notifications are returned. | [Optional] [Defaults to `undefined`] |
| **category** | `all`, `unread`, `following`, `comments`, `reactions`, `updates`, `collections`, `collabs`, `system`, `moderation` | Server-side category filter. Works with cursor pagination. | [Optional] [Defaults to `undefined`] [Enum: all, unread, following, comments, reactions, updates, collections, collabs, system, moderation] |

### Return type

[**DeveloperNotificationPage**](DeveloperNotificationPage.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of notification objects. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## markAllNotificationsRead

> DeveloperMessageResponse markAllNotificationsRead(markAllNotificationsReadRequest)

Mark notifications as read (optionally scoped by category)

Mark all matching notifications for the authenticated caller as read, optionally restricted to a documented notification category.

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@arcenciel/sdk';
import type { MarkAllNotificationsReadOperationRequest } from '@arcenciel/sdk';

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
  const api = new NotificationsApi(config);

  const body = {
    // MarkAllNotificationsReadRequest | Request payload for this operation. (optional)
    markAllNotificationsReadRequest: {"category":"all","unreadOnly":true},
  } satisfies MarkAllNotificationsReadOperationRequest;

  try {
    const data = await api.markAllNotificationsRead(body);
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
| **markAllNotificationsReadRequest** | [MarkAllNotificationsReadRequest](MarkAllNotificationsReadRequest.md) | Request payload for this operation. | [Optional] |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | All notifications marked as read successfully. |  * X-Request-ID -  <br>  |
| **400** | Invalid category. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## markNotificationRead

> DeveloperMessageResponse markNotificationRead(notificationId)

Mark a specific notification as read

Mark one notification owned by the authenticated caller as read. Other users’ notification identifiers always remain inaccessible.

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@arcenciel/sdk';
import type { MarkNotificationReadRequest } from '@arcenciel/sdk';

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
  const api = new NotificationsApi(config);

  const body = {
    // number | The ID of the notification to mark as read.
    notificationId: 1,
  } satisfies MarkNotificationReadRequest;

  try {
    const data = await api.markNotificationRead(body);
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
| **notificationId** | `number` | The ID of the notification to mark as read. | [Defaults to `undefined`] |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Notification marked as read successfully. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Notification not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## markNotificationsRead

> DeveloperMessageResponse markNotificationsRead(markNotificationsReadRequest)

Mark specific notifications as read

Mark a bounded set of notification identifiers owned by the authenticated caller as read. Identifiers belonging to other users are never changed.

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '@arcenciel/sdk';
import type { MarkNotificationsReadOperationRequest } from '@arcenciel/sdk';

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
  const api = new NotificationsApi(config);

  const body = {
    // MarkNotificationsReadRequest | Request payload for this operation.
    markNotificationsReadRequest: {"notificationIds":[1]},
  } satisfies MarkNotificationsReadOperationRequest;

  try {
    const data = await api.markNotificationsRead(body);
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
| **markNotificationsReadRequest** | [MarkNotificationsReadRequest](MarkNotificationsReadRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Notifications marked as read successfully. |  * X-Request-ID -  <br>  |
| **400** | No notification IDs provided. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
