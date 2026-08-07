# arcenciel.generated.ChatApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accept_chat_request**](ChatApi.md#accept_chat_request) | **POST** /api/chat/threads/{threadId}/accept | Accept a pending direct request
[**archive_chat_thread**](ChatApi.md#archive_chat_thread) | **POST** /api/chat/threads/{threadId}/archive | Archive a thread
[**create_chat_group**](ChatApi.md#create_chat_group) | **POST** /api/chat/groups | Create a group thread
[**create_chat_message**](ChatApi.md#create_chat_message) | **POST** /api/chat/threads/{threadId}/messages | Post a message to a thread
[**create_chat_request**](ChatApi.md#create_chat_request) | **POST** /api/chat/requests | Create a direct chat request
[**decline_chat_request**](ChatApi.md#decline_chat_request) | **POST** /api/chat/threads/{threadId}/decline | Decline a pending direct request
[**get_chat_link_preview**](ChatApi.md#get_chat_link_preview) | **GET** /api/chat/link-preview | Resolve a link preview for a URL
[**get_chat_presence**](ChatApi.md#get_chat_presence) | **GET** /api/chat/presence | Get presence information for chat contacts
[**get_chat_thread**](ChatApi.md#get_chat_thread) | **GET** /api/chat/threads/{threadId} | Get a chat thread by id
[**get_chat_unread_count**](ChatApi.md#get_chat_unread_count) | **GET** /api/chat/unread-count | Get unread chat count
[**invite_chat_participants**](ChatApi.md#invite_chat_participants) | **POST** /api/chat/threads/{threadId}/invite | Invite a participant to a group thread
[**leave_chat_group**](ChatApi.md#leave_chat_group) | **POST** /api/chat/threads/{threadId}/leave | Leave a group thread
[**list_chat_messages**](ChatApi.md#list_chat_messages) | **GET** /api/chat/threads/{threadId}/messages | List messages for a thread
[**list_chat_threads**](ChatApi.md#list_chat_threads) | **GET** /api/chat/threads | List chat threads for the current user
[**mark_chat_thread_read**](ChatApi.md#mark_chat_thread_read) | **PATCH** /api/chat/threads/{threadId}/read | Mark a thread as read
[**remove_chat_group_avatar**](ChatApi.md#remove_chat_group_avatar) | **DELETE** /api/chat/threads/{threadId}/avatar | Remove a group avatar
[**remove_chat_participant**](ChatApi.md#remove_chat_participant) | **DELETE** /api/chat/threads/{threadId}/participants/{userId} | Remove a participant from a group thread
[**toggle_chat_message_reaction**](ChatApi.md#toggle_chat_message_reaction) | **POST** /api/chat/messages/{messageId}/reactions | Toggle a reaction for a message
[**unarchive_chat_thread**](ChatApi.md#unarchive_chat_thread) | **POST** /api/chat/threads/{threadId}/unarchive | Unarchive a thread
[**update_chat_group_avatar**](ChatApi.md#update_chat_group_avatar) | **PATCH** /api/chat/threads/{threadId}/avatar | Upload or replace a group avatar
[**update_chat_group_title**](ChatApi.md#update_chat_group_title) | **PATCH** /api/chat/threads/{threadId}/title | Update a group thread title


# **accept_chat_request**
> DeveloperChatOkResponse accept_chat_request(thread_id)

**Synchronous variant:** `accept_chat_request_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Accept a pending direct request

Accept an incoming direct-message request or pending group invitation for the authenticated caller after validating its current state and recipient ownership.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_ok_response import DeveloperChatOkResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.

    try:
        # Accept a pending direct request
        api_response = await api_instance.accept_chat_request(thread_id)
        print("The response of ChatApi->accept_chat_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->accept_chat_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request accepted. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **archive_chat_thread**
> DeveloperChatOkResponse archive_chat_thread(thread_id)

**Synchronous variant:** `archive_chat_thread_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Archive a thread

Archive a caller-accessible conversation for the authenticated caller only. Repeating the operation leaves the conversation archived without affecting other participants.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_ok_response import DeveloperChatOkResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.

    try:
        # Archive a thread
        api_response = await api_instance.archive_chat_thread(thread_id)
        print("The response of ChatApi->archive_chat_thread:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->archive_chat_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Thread archived. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_chat_group**
> DeveloperChatThread create_chat_group(create_chat_group_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_chat_group_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create a group thread

Create a group conversation owned by an eligible creator or staff caller and invite a deduplicated set of existing users. Idempotency prevents duplicate groups on retry.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_chat_group_request import CreateChatGroupRequest
from arcenciel.generated.models.developer_chat_thread import DeveloperChatThread
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    create_chat_group_request = {"title":"Release artwork","userIds":[18,27]} # CreateChatGroupRequest |
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Create a group thread
        api_response = await api_instance.create_chat_group(create_chat_group_request, idempotency_key=idempotency_key)
        print("The response of ChatApi->create_chat_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->create_chat_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_chat_group_request** | [**CreateChatGroupRequest**](CreateChatGroupRequest.md)|  |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperChatThread**](DeveloperChatThread.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Group thread created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_chat_message**
> DeveloperChatMessage create_chat_message(thread_id, idempotency_key=idempotency_key, attachments=attachments, content=content, reply_to_message_id=reply_to_message_id)

**Synchronous variant:** `create_chat_message_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Post a message to a thread

Create a text, attachment, or reply message in a caller-accessible active conversation. Idempotency prevents duplicate messages and attachment records on retry.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_message import DeveloperChatMessage
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    attachments = None # List[bytes] | Optional validated image, GIF, or video files. (optional)
    content = 'content_example' # str | Optional message text, including supported @mentions. (optional)
    reply_to_message_id = 56 # int | Optional message in the same thread to quote and reply to. (optional)

    try:
        # Post a message to a thread
        api_response = await api_instance.create_chat_message(thread_id, idempotency_key=idempotency_key, attachments=attachments, content=content, reply_to_message_id=reply_to_message_id)
        print("The response of ChatApi->create_chat_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->create_chat_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **attachments** | **List[bytes]**| Optional validated image, GIF, or video files. | [optional]
 **content** | **str**| Optional message text, including supported @mentions. | [optional]
 **reply_to_message_id** | **int**| Optional message in the same thread to quote and reply to. | [optional]

### Return type

[**DeveloperChatMessage**](DeveloperChatMessage.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Message created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_chat_request**
> DeveloperChatRequestResponse create_chat_request(to_user_id, idempotency_key=idempotency_key, attachments=attachments, content=content)

**Synchronous variant:** `create_chat_request_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create a direct chat request

Open or reuse a direct conversation with another available user and optionally send its first text and validated attachments. Idempotency prevents duplicate requests or messages on retry.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_request_response import DeveloperChatRequestResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    to_user_id = 56 # int | Recipient user identifier.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    attachments = None # List[bytes] | Optional validated image, GIF, or video files for the initial message. (optional)
    content = 'content_example' # str | Optional initial direct-message text. (optional)

    try:
        # Create a direct chat request
        api_response = await api_instance.create_chat_request(to_user_id, idempotency_key=idempotency_key, attachments=attachments, content=content)
        print("The response of ChatApi->create_chat_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->create_chat_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **to_user_id** | **int**| Recipient user identifier. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **attachments** | **List[bytes]**| Optional validated image, GIF, or video files for the initial message. | [optional]
 **content** | **str**| Optional initial direct-message text. | [optional]

### Return type

[**DeveloperChatRequestResponse**](DeveloperChatRequestResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Existing direct thread or repeated request returned. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**201** | New direct request created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid payload. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decline_chat_request**
> DeveloperChatOkResponse decline_chat_request(thread_id)

**Synchronous variant:** `decline_chat_request_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Decline a pending direct request

Decline an incoming direct-message request or pending group invitation for the authenticated caller and archive that caller’s participation state.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_ok_response import DeveloperChatOkResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.

    try:
        # Decline a pending direct request
        api_response = await api_instance.decline_chat_request(thread_id)
        print("The response of ChatApi->decline_chat_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->decline_chat_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request declined. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chat_link_preview**
> DeveloperChatLinkPreview get_chat_link_preview(url)

**Synchronous variant:** `get_chat_link_preview_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Resolve a link preview for a URL

Resolve a visibility-checked Arc en Ciel resource or guarded external URL into a compact preview suitable for composing a chat message without exposing private content.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_link_preview import DeveloperChatLinkPreview
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    url = 'https://arcenciel.io/images/108' # str | Absolute HTTP(S) URL to preview. Internal resources remain subject to caller visibility checks.

    try:
        # Resolve a link preview for a URL
        api_response = await api_instance.get_chat_link_preview(url)
        print("The response of ChatApi->get_chat_link_preview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->get_chat_link_preview: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| Absolute HTTP(S) URL to preview. Internal resources remain subject to caller visibility checks. |

### Return type

[**DeveloperChatLinkPreview**](DeveloperChatLinkPreview.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Preview resolved. |  * X-Request-ID -  <br>  |
**400** | Missing or invalid URL. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chat_presence**
> DeveloperChatPresenceResponse get_chat_presence(user_ids)

**Synchronous variant:** `get_chat_presence_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get presence information for chat contacts

Return a bounded presence snapshot for explicitly requested user identifiers. Presence is caller-authenticated and clients must treat timestamps and online state as transient hints.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_presence_response import DeveloperChatPresenceResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    user_ids = [[18,42]] # List[int] | One to 200 decimal user identifiers, encoded as a comma-separated list.

    try:
        # Get presence information for chat contacts
        api_response = await api_instance.get_chat_presence(user_ids)
        print("The response of ChatApi->get_chat_presence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->get_chat_presence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_ids** | [**List[int]**](int.md)| One to 200 decimal user identifiers, encoded as a comma-separated list. |

### Return type

[**DeveloperChatPresenceResponse**](DeveloperChatPresenceResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Presence payload returned. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chat_thread**
> DeveloperChatThread get_chat_thread(thread_id)

**Synchronous variant:** `get_chat_thread_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get a chat thread by id

Return one conversation in which the authenticated caller is an active participant, including caller-relative state, participants, and the latest message summary.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_thread import DeveloperChatThread
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.

    try:
        # Get a chat thread by id
        api_response = await api_instance.get_chat_thread(thread_id)
        print("The response of ChatApi->get_chat_thread:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->get_chat_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |

### Return type

[**DeveloperChatThread**](DeveloperChatThread.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Thread found. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chat_unread_count**
> DeveloperChatUnreadCountResponse get_chat_unread_count()

**Synchronous variant:** `get_chat_unread_count_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get unread chat count

Return the authenticated caller’s number of unarchived conversations whose latest message was sent by another participant after the caller’s read marker.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_unread_count_response import DeveloperChatUnreadCountResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)

    try:
        # Get unread chat count
        api_response = await api_instance.get_chat_unread_count()
        print("The response of ChatApi->get_chat_unread_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->get_chat_unread_count: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DeveloperChatUnreadCountResponse**](DeveloperChatUnreadCountResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unread count payload returned. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invite_chat_participants**
> DeveloperChatOkResponse invite_chat_participants(thread_id, invite_chat_participants_request)

**Synchronous variant:** `invite_chat_participants_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Invite a participant to a group thread

Invite existing users to a caller-owned group conversation. Existing active participants remain active and prior left or declined participants return to pending state.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_ok_response import DeveloperChatOkResponse
from arcenciel.generated.models.invite_chat_participants_request import InviteChatParticipantsRequest
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.
    invite_chat_participants_request = {"userIds":[27]} # InviteChatParticipantsRequest |

    try:
        # Invite a participant to a group thread
        api_response = await api_instance.invite_chat_participants(thread_id, invite_chat_participants_request)
        print("The response of ChatApi->invite_chat_participants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->invite_chat_participants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |
 **invite_chat_participants_request** | [**InviteChatParticipantsRequest**](InviteChatParticipantsRequest.md)|  |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Participant invited. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **leave_chat_group**
> DeveloperChatOkResponse leave_chat_group(thread_id)

**Synchronous variant:** `leave_chat_group_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Leave a group thread

Leave a group conversation as a non-owner participant and archive the caller’s membership. Group owners must transfer or close ownership through supported product controls.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_ok_response import DeveloperChatOkResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.

    try:
        # Leave a group thread
        api_response = await api_instance.leave_chat_group(thread_id)
        print("The response of ChatApi->leave_chat_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->leave_chat_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Left thread successfully. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_chat_messages**
> DeveloperChatMessageListResponse list_chat_messages(thread_id, cursor=cursor, limit=limit)

**Synchronous variant:** `list_chat_messages_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List messages for a thread

List one caller-accessible conversation’s messages in chronological order using a bounded descending cursor, including signed attachments, replies, mentions, and reaction summaries.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_message_list_response import DeveloperChatMessageListResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.
    cursor = 500 # int | Return messages with identifiers lower than this cursor. (optional)
    limit = 50 # int | Maximum number of messages returned. (optional) (default to 50)

    try:
        # List messages for a thread
        api_response = await api_instance.list_chat_messages(thread_id, cursor=cursor, limit=limit)
        print("The response of ChatApi->list_chat_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->list_chat_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |
 **cursor** | **int**| Return messages with identifiers lower than this cursor. | [optional]
 **limit** | **int**| Maximum number of messages returned. | [optional] [default to 50]

### Return type

[**DeveloperChatMessageListResponse**](DeveloperChatMessageListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message list returned. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_chat_threads**
> DeveloperChatThreadListResponse list_chat_threads(folder=folder, limit=limit)

**Synchronous variant:** `list_chat_threads_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List chat threads for the current user

List the authenticated caller’s visible inbox, incoming requests, outgoing requests, or archived conversations with participant-safe summaries and unread state.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_thread_list_response import DeveloperChatThreadListResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    folder = 'inbox' # str | Caller-relative conversation folder. (optional) (default to 'inbox')
    limit = 30 # int | Maximum number of conversations returned. (optional) (default to 30)

    try:
        # List chat threads for the current user
        api_response = await api_instance.list_chat_threads(folder=folder, limit=limit)
        print("The response of ChatApi->list_chat_threads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->list_chat_threads: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder** | **str**| Caller-relative conversation folder. | [optional] [default to &#39;inbox&#39;]
 **limit** | **int**| Maximum number of conversations returned. | [optional] [default to 30]

### Return type

[**DeveloperChatThreadListResponse**](DeveloperChatThreadListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Thread list returned. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mark_chat_thread_read**
> DeveloperChatOkResponse mark_chat_thread_read(thread_id, mark_chat_thread_read_request)

**Synchronous variant:** `mark_chat_thread_read_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Mark a thread as read

Advance the authenticated caller’s read marker to a supplied message in the conversation or to the latest current message when no identifier is supplied.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_ok_response import DeveloperChatOkResponse
from arcenciel.generated.models.mark_chat_thread_read_request import MarkChatThreadReadRequest
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.
    mark_chat_thread_read_request = {"messageId":501} # MarkChatThreadReadRequest |

    try:
        # Mark a thread as read
        api_response = await api_instance.mark_chat_thread_read(thread_id, mark_chat_thread_read_request)
        print("The response of ChatApi->mark_chat_thread_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->mark_chat_thread_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |
 **mark_chat_thread_read_request** | [**MarkChatThreadReadRequest**](MarkChatThreadReadRequest.md)|  |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Read marker updated. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_chat_group_avatar**
> DeveloperChatOkResponse remove_chat_group_avatar(thread_id)

**Synchronous variant:** `remove_chat_group_avatar_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove a group avatar

Remove the custom avatar from a group conversation owned by the authenticated caller. Repeating the operation leaves the avatar absent.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_ok_response import DeveloperChatOkResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.

    try:
        # Remove a group avatar
        api_response = await api_instance.remove_chat_group_avatar(thread_id)
        print("The response of ChatApi->remove_chat_group_avatar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->remove_chat_group_avatar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Avatar removed. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_chat_participant**
> DeveloperChatOkResponse remove_chat_participant(thread_id, user_id)

**Synchronous variant:** `remove_chat_participant_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove a participant from a group thread

Remove a non-owner participant from a group conversation owned by the authenticated caller without exposing or changing unrelated participant state.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_ok_response import DeveloperChatOkResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.
    user_id = 18 # int | User Id provided in the path.

    try:
        # Remove a participant from a group thread
        api_response = await api_instance.remove_chat_participant(thread_id, user_id)
        print("The response of ChatApi->remove_chat_participant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->remove_chat_participant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |
 **user_id** | **int**| User Id provided in the path. |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Participant removed. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread or user not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggle_chat_message_reaction**
> DeveloperChatReactionResponse toggle_chat_message_reaction(message_id, toggle_chat_message_reaction_request)

**Synchronous variant:** `toggle_chat_message_reaction_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Toggle a reaction for a message

Toggle the authenticated caller’s validated emote reaction on an accessible message and return the complete caller-relative reaction summary. This toggle is not retry-safe.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_reaction_response import DeveloperChatReactionResponse
from arcenciel.generated.models.toggle_chat_message_reaction_request import ToggleChatMessageReactionRequest
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    message_id = 81 # int | Message Id provided in the path.
    toggle_chat_message_reaction_request = {"emoteName":"heart"} # ToggleChatMessageReactionRequest |

    try:
        # Toggle a reaction for a message
        api_response = await api_instance.toggle_chat_message_reaction(message_id, toggle_chat_message_reaction_request)
        print("The response of ChatApi->toggle_chat_message_reaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->toggle_chat_message_reaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **int**| Message Id provided in the path. |
 **toggle_chat_message_reaction_request** | [**ToggleChatMessageReactionRequest**](ToggleChatMessageReactionRequest.md)|  |

### Return type

[**DeveloperChatReactionResponse**](DeveloperChatReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reaction state updated. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Message not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unarchive_chat_thread**
> DeveloperChatOkResponse unarchive_chat_thread(thread_id)

**Synchronous variant:** `unarchive_chat_thread_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Unarchive a thread

Remove the authenticated caller’s archive marker from an accessible conversation. Repeating the operation leaves it unarchived without changing other participants.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_ok_response import DeveloperChatOkResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.

    try:
        # Unarchive a thread
        api_response = await api_instance.unarchive_chat_thread(thread_id)
        print("The response of ChatApi->unarchive_chat_thread:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->unarchive_chat_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Thread unarchived. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_chat_group_avatar**
> DeveloperChatAvatarResponse update_chat_group_avatar(thread_id, avatar)

**Synchronous variant:** `update_chat_group_avatar_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upload or replace a group avatar

Upload and replace the validated avatar of a group conversation owned by the authenticated caller. Clients must not automatically retry this multipart mutation.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_avatar_response import DeveloperChatAvatarResponse
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.
    avatar = None # bytes | Avatar accepted or returned by this contract.

    try:
        # Upload or replace a group avatar
        api_response = await api_instance.update_chat_group_avatar(thread_id, avatar)
        print("The response of ChatApi->update_chat_group_avatar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->update_chat_group_avatar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |
 **avatar** | **bytes**| Avatar accepted or returned by this contract. |

### Return type

[**DeveloperChatAvatarResponse**](DeveloperChatAvatarResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Avatar updated. |  * X-Request-ID -  <br>  |
**400** | Invalid file payload. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_chat_group_title**
> DeveloperChatTitleResponse update_chat_group_title(thread_id, update_chat_group_title_request)

**Synchronous variant:** `update_chat_group_title_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update a group thread title

Replace or clear the display title of a group conversation owned by the authenticated caller while preserving all participant and message state.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_chat_title_response import DeveloperChatTitleResponse
from arcenciel.generated.models.update_chat_group_title_request import UpdateChatGroupTitleRequest
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
    api_instance = arcenciel.generated.ChatApi(api_client)
    thread_id = 81 # int | Thread Id provided in the path.
    update_chat_group_title_request = {"title":"Release artwork"} # UpdateChatGroupTitleRequest |

    try:
        # Update a group thread title
        api_response = await api_instance.update_chat_group_title(thread_id, update_chat_group_title_request)
        print("The response of ChatApi->update_chat_group_title:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChatApi->update_chat_group_title: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **int**| Thread Id provided in the path. |
 **update_chat_group_title_request** | [**UpdateChatGroupTitleRequest**](UpdateChatGroupTitleRequest.md)|  |

### Return type

[**DeveloperChatTitleResponse**](DeveloperChatTitleResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Thread title updated. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Thread not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
