# arcenciel.generated.NotificationsApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_notification_summary**](NotificationsApi.md#get_notification_summary) | **GET** /api/notifications/summary | Retrieve notification totals and per-type counts
[**list_notifications**](NotificationsApi.md#list_notifications) | **GET** /api/notifications | Retrieve your notifications
[**mark_all_notifications_read**](NotificationsApi.md#mark_all_notifications_read) | **POST** /api/notifications/readAll | Mark notifications as read (optionally scoped by category)
[**mark_notification_read**](NotificationsApi.md#mark_notification_read) | **PATCH** /api/notifications/{notificationId}/read | Mark a specific notification as read
[**mark_notifications_read**](NotificationsApi.md#mark_notifications_read) | **POST** /api/notifications/readMany | Mark specific notifications as read


# **get_notification_summary**
> DeveloperNotificationSummary get_notification_summary()

**Synchronous variant:** `get_notification_summary_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve notification totals and per-type counts

Return total and unread notification counts for the authenticated caller, grouped by current server types and user-facing categories.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_notification_summary import DeveloperNotificationSummary
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
    api_instance = arcenciel.generated.NotificationsApi(api_client)

    try:
        # Retrieve notification totals and per-type counts
        api_response = await api_instance.get_notification_summary()
        print("The response of NotificationsApi->get_notification_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->get_notification_summary: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DeveloperNotificationSummary**](DeveloperNotificationSummary.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Aggregate notification counts for the current user. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_notifications**
> DeveloperNotificationPage list_notifications(limit=limit, cursor=cursor, unread_only=unread_only, category=category)

**Synchronous variant:** `list_notifications_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve your notifications

List only the authenticated caller’s notifications with opaque cursor pagination, unread filtering, and the documented category taxonomy.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_notification_page import DeveloperNotificationPage
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
    api_instance = arcenciel.generated.NotificationsApi(api_client)
    limit = 1 # int | Max number of notifications to return (default 50). (optional)
    cursor = 'next-page' # str | Opaque cursor for pagination. (optional)
    unread_only = true # bool | When true, only unread notifications are returned. (optional)
    category = 'all' # str | Server-side category filter. Works with cursor pagination. (optional)

    try:
        # Retrieve your notifications
        api_response = await api_instance.list_notifications(limit=limit, cursor=cursor, unread_only=unread_only, category=category)
        print("The response of NotificationsApi->list_notifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->list_notifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Max number of notifications to return (default 50). | [optional]
 **cursor** | **str**| Opaque cursor for pagination. | [optional]
 **unread_only** | **bool**| When true, only unread notifications are returned. | [optional]
 **category** | **str**| Server-side category filter. Works with cursor pagination. | [optional]

### Return type

[**DeveloperNotificationPage**](DeveloperNotificationPage.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of notification objects. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mark_all_notifications_read**
> DeveloperMessageResponse mark_all_notifications_read(mark_all_notifications_read_request=mark_all_notifications_read_request)

**Synchronous variant:** `mark_all_notifications_read_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Mark notifications as read (optionally scoped by category)

Mark all matching notifications for the authenticated caller as read, optionally restricted to a documented notification category.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.mark_all_notifications_read_request import MarkAllNotificationsReadRequest
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
    api_instance = arcenciel.generated.NotificationsApi(api_client)
    mark_all_notifications_read_request = {"category":"all","unreadOnly":true} # MarkAllNotificationsReadRequest | Request payload for this operation. (optional)

    try:
        # Mark notifications as read (optionally scoped by category)
        api_response = await api_instance.mark_all_notifications_read(mark_all_notifications_read_request=mark_all_notifications_read_request)
        print("The response of NotificationsApi->mark_all_notifications_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->mark_all_notifications_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mark_all_notifications_read_request** | [**MarkAllNotificationsReadRequest**](MarkAllNotificationsReadRequest.md)| Request payload for this operation. | [optional]

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
**200** | All notifications marked as read successfully. |  * X-Request-ID -  <br>  |
**400** | Invalid category. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mark_notification_read**
> DeveloperMessageResponse mark_notification_read(notification_id)

**Synchronous variant:** `mark_notification_read_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Mark a specific notification as read

Mark one notification owned by the authenticated caller as read. Other users’ notification identifiers always remain inaccessible.

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
    api_instance = arcenciel.generated.NotificationsApi(api_client)
    notification_id = 1 # int | The ID of the notification to mark as read.

    try:
        # Mark a specific notification as read
        api_response = await api_instance.mark_notification_read(notification_id)
        print("The response of NotificationsApi->mark_notification_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->mark_notification_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification_id** | **int**| The ID of the notification to mark as read. |

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
**200** | Notification marked as read successfully. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Notification not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mark_notifications_read**
> DeveloperMessageResponse mark_notifications_read(mark_notifications_read_request)

**Synchronous variant:** `mark_notifications_read_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Mark specific notifications as read

Mark a bounded set of notification identifiers owned by the authenticated caller as read. Identifiers belonging to other users are never changed.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_message_response import DeveloperMessageResponse
from arcenciel.generated.models.mark_notifications_read_request import MarkNotificationsReadRequest
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
    api_instance = arcenciel.generated.NotificationsApi(api_client)
    mark_notifications_read_request = {"notificationIds":[1]} # MarkNotificationsReadRequest | Request payload for this operation.

    try:
        # Mark specific notifications as read
        api_response = await api_instance.mark_notifications_read(mark_notifications_read_request)
        print("The response of NotificationsApi->mark_notifications_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationsApi->mark_notifications_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mark_notifications_read_request** | [**MarkNotificationsReadRequest**](MarkNotificationsReadRequest.md)| Request payload for this operation. |

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
**200** | Notifications marked as read successfully. |  * X-Request-ID -  <br>  |
**400** | No notification IDs provided. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
