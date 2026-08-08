# ChatApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acceptChatRequest**](ChatApi.md#acceptchatrequest) | **POST** /api/chat/threads/{threadId}/accept | Accept a pending direct request |
| [**archiveChatThread**](ChatApi.md#archivechatthread) | **POST** /api/chat/threads/{threadId}/archive | Archive a thread |
| [**createChatGroup**](ChatApi.md#createchatgroupoperation) | **POST** /api/chat/groups | Create a group thread |
| [**createChatMessage**](ChatApi.md#createchatmessage) | **POST** /api/chat/threads/{threadId}/messages | Post a message to a thread |
| [**createChatRequest**](ChatApi.md#createchatrequest) | **POST** /api/chat/requests | Create a direct chat request |
| [**declineChatRequest**](ChatApi.md#declinechatrequest) | **POST** /api/chat/threads/{threadId}/decline | Decline a pending direct request |
| [**getChatLinkPreview**](ChatApi.md#getchatlinkpreview) | **GET** /api/chat/link-preview | Resolve a link preview for a URL |
| [**getChatPresence**](ChatApi.md#getchatpresence) | **GET** /api/chat/presence | Get presence information for chat contacts |
| [**getChatThread**](ChatApi.md#getchatthread) | **GET** /api/chat/threads/{threadId} | Get a chat thread by id |
| [**getChatUnreadCount**](ChatApi.md#getchatunreadcount) | **GET** /api/chat/unread-count | Get unread chat count |
| [**inviteChatParticipants**](ChatApi.md#invitechatparticipantsoperation) | **POST** /api/chat/threads/{threadId}/invite | Invite a participant to a group thread |
| [**leaveChatGroup**](ChatApi.md#leavechatgroup) | **POST** /api/chat/threads/{threadId}/leave | Leave a group thread |
| [**listChatMessages**](ChatApi.md#listchatmessages) | **GET** /api/chat/threads/{threadId}/messages | List messages for a thread |
| [**listChatThreads**](ChatApi.md#listchatthreads) | **GET** /api/chat/threads | List chat threads for the current user |
| [**markChatThreadRead**](ChatApi.md#markchatthreadreadoperation) | **PATCH** /api/chat/threads/{threadId}/read | Mark a thread as read |
| [**removeChatGroupAvatar**](ChatApi.md#removechatgroupavatar) | **DELETE** /api/chat/threads/{threadId}/avatar | Remove a group avatar |
| [**removeChatParticipant**](ChatApi.md#removechatparticipant) | **DELETE** /api/chat/threads/{threadId}/participants/{userId} | Remove a participant from a group thread |
| [**toggleChatMessageReaction**](ChatApi.md#togglechatmessagereactionoperation) | **POST** /api/chat/messages/{messageId}/reactions | Toggle a reaction for a message |
| [**unarchiveChatThread**](ChatApi.md#unarchivechatthread) | **POST** /api/chat/threads/{threadId}/unarchive | Unarchive a thread |
| [**updateChatGroupAvatar**](ChatApi.md#updatechatgroupavatar) | **PATCH** /api/chat/threads/{threadId}/avatar | Upload or replace a group avatar |
| [**updateChatGroupTitle**](ChatApi.md#updatechatgrouptitleoperation) | **PATCH** /api/chat/threads/{threadId}/title | Update a group thread title |



## acceptChatRequest

> DeveloperChatOkResponse acceptChatRequest(threadId)

Accept a pending direct request

Accept an incoming direct-message request or pending group invitation for the authenticated caller after validating its current state and recipient ownership.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { AcceptChatRequestRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
  } satisfies AcceptChatRequestRequest;

  try {
    const data = await api.acceptChatRequest(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request accepted. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## archiveChatThread

> DeveloperChatOkResponse archiveChatThread(threadId)

Archive a thread

Archive a caller-accessible conversation for the authenticated caller only. Repeating the operation leaves the conversation archived without affecting other participants.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { ArchiveChatThreadRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
  } satisfies ArchiveChatThreadRequest;

  try {
    const data = await api.archiveChatThread(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Thread archived. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createChatGroup

> DeveloperChatThread createChatGroup(createChatGroupRequest, idempotencyKey)

Create a group thread

Create a group conversation owned by an eligible creator or staff caller and invite a deduplicated set of existing users. Idempotency prevents duplicate groups on retry.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { CreateChatGroupOperationRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // CreateChatGroupRequest
    createChatGroupRequest: {"title":"Release artwork","userIds":[18,27]},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateChatGroupOperationRequest;

  try {
    const data = await api.createChatGroup(body);
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
| **createChatGroupRequest** | [CreateChatGroupRequest](CreateChatGroupRequest.md) |  | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperChatThread**](DeveloperChatThread.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Group thread created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createChatMessage

> DeveloperChatMessage createChatMessage(threadId, idempotencyKey, attachments, content, replyToMessageId)

Post a message to a thread

Create a text, attachment, or reply message in a caller-accessible active conversation. Idempotency prevents duplicate messages and attachment records on retry.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { CreateChatMessageRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8',
    // Array<Blob> | Optional validated image, GIF, or video files. (optional)
    attachments: [new Blob(['example file content'], { type: 'application/octet-stream' })],
    // string | Optional message text, including supported @mentions. (optional)
    content: 'content_example',
    // number | Optional message in the same thread to quote and reply to. (optional)
    replyToMessageId: 56,
  } satisfies CreateChatMessageRequest;

  try {
    const data = await api.createChatMessage(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **attachments** | `Array<Blob>` | Optional validated image, GIF, or video files. | [Optional] |
| **content** | `string` | Optional message text, including supported @mentions. | [Optional] [Defaults to `undefined`] |
| **replyToMessageId** | `number` | Optional message in the same thread to quote and reply to. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperChatMessage**](DeveloperChatMessage.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Message created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createChatRequest

> DeveloperChatRequestResponse createChatRequest(toUserId, idempotencyKey, attachments, content)

Create a direct chat request

Open or reuse a direct conversation with another available user and optionally send its first text and validated attachments. Idempotency prevents duplicate requests or messages on retry.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { CreateChatRequestRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Recipient user identifier.
    toUserId: 56,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8',
    // Array<Blob> | Optional validated image, GIF, or video files for the initial message. (optional)
    attachments: [new Blob(['example file content'], { type: 'application/octet-stream' })],
    // string | Optional initial direct-message text. (optional)
    content: 'content_example',
  } satisfies CreateChatRequestRequest;

  try {
    const data = await api.createChatRequest(body);
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
| **toUserId** | `number` | Recipient user identifier. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **attachments** | `Array<Blob>` | Optional validated image, GIF, or video files for the initial message. | [Optional] |
| **content** | `string` | Optional initial direct-message text. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperChatRequestResponse**](DeveloperChatRequestResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Existing direct thread or repeated request returned. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **201** | New direct request created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid payload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## declineChatRequest

> DeveloperChatOkResponse declineChatRequest(threadId)

Decline a pending direct request

Decline an incoming direct-message request or pending group invitation for the authenticated caller and archive that caller’s participation state.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { DeclineChatRequestRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
  } satisfies DeclineChatRequestRequest;

  try {
    const data = await api.declineChatRequest(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request declined. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChatLinkPreview

> DeveloperChatLinkPreview getChatLinkPreview(url)

Resolve a link preview for a URL

Resolve a visibility-checked Arc en Ciel resource or guarded external URL into a compact preview suitable for composing a chat message without exposing private content.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { GetChatLinkPreviewRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // string | Absolute HTTP(S) URL to preview. Internal resources remain subject to caller visibility checks.
    url: https://arcenciel.io/images/108,
  } satisfies GetChatLinkPreviewRequest;

  try {
    const data = await api.getChatLinkPreview(body);
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
| **url** | `string` | Absolute HTTP(S) URL to preview. Internal resources remain subject to caller visibility checks. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatLinkPreview**](DeveloperChatLinkPreview.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Preview resolved. |  * X-Request-ID -  <br>  |
| **400** | Missing or invalid URL. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChatPresence

> DeveloperChatPresenceResponse getChatPresence(userIds)

Get presence information for chat contacts

Return a bounded presence snapshot for explicitly requested user identifiers. Presence is caller-authenticated and clients must treat timestamps and online state as transient hints.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { GetChatPresenceRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // Set<number> | One to 200 decimal user identifiers, encoded as a comma-separated list.
    userIds: [18,42],
  } satisfies GetChatPresenceRequest;

  try {
    const data = await api.getChatPresence(body);
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
| **userIds** | `Set<number>` | One to 200 decimal user identifiers, encoded as a comma-separated list. | |

### Return type

[**DeveloperChatPresenceResponse**](DeveloperChatPresenceResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Presence payload returned. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChatThread

> DeveloperChatThread getChatThread(threadId)

Get a chat thread by id

Return one conversation in which the authenticated caller is an active participant, including caller-relative state, participants, and the latest message summary.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { GetChatThreadRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
  } satisfies GetChatThreadRequest;

  try {
    const data = await api.getChatThread(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatThread**](DeveloperChatThread.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Thread found. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChatUnreadCount

> DeveloperChatUnreadCountResponse getChatUnreadCount()

Get unread chat count

Return the authenticated caller’s number of unarchived conversations whose latest message was sent by another participant after the caller’s read marker.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { GetChatUnreadCountRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  try {
    const data = await api.getChatUnreadCount();
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

[**DeveloperChatUnreadCountResponse**](DeveloperChatUnreadCountResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Unread count payload returned. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## inviteChatParticipants

> DeveloperChatOkResponse inviteChatParticipants(threadId, inviteChatParticipantsRequest)

Invite a participant to a group thread

Invite existing users to a caller-owned group conversation. Existing active participants remain active and prior left or declined participants return to pending state.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { InviteChatParticipantsOperationRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
    // InviteChatParticipantsRequest
    inviteChatParticipantsRequest: {"userIds":[27]},
  } satisfies InviteChatParticipantsOperationRequest;

  try {
    const data = await api.inviteChatParticipants(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |
| **inviteChatParticipantsRequest** | [InviteChatParticipantsRequest](InviteChatParticipantsRequest.md) |  | |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Participant invited. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## leaveChatGroup

> DeveloperChatOkResponse leaveChatGroup(threadId)

Leave a group thread

Leave a group conversation as a non-owner participant and archive the caller’s membership. Group owners must transfer or close ownership through supported product controls.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { LeaveChatGroupRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
  } satisfies LeaveChatGroupRequest;

  try {
    const data = await api.leaveChatGroup(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Left thread successfully. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listChatMessages

> DeveloperChatMessageListResponse listChatMessages(threadId, cursor, limit)

List messages for a thread

List one caller-accessible conversation’s messages in chronological order using a bounded descending cursor, including signed attachments, replies, mentions, and reaction summaries.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { ListChatMessagesRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
    // number | Return messages with identifiers lower than this cursor. (optional)
    cursor: 500,
    // number | Maximum number of messages returned. (optional)
    limit: 50,
  } satisfies ListChatMessagesRequest;

  try {
    const data = await api.listChatMessages(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |
| **cursor** | `number` | Return messages with identifiers lower than this cursor. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of messages returned. | [Optional] [Defaults to `50`] |

### Return type

[**DeveloperChatMessageListResponse**](DeveloperChatMessageListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message list returned. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listChatThreads

> DeveloperChatThreadListResponse listChatThreads(folder, limit)

List chat threads for the current user

List the authenticated caller’s visible inbox, incoming requests, outgoing requests, or archived conversations with participant-safe summaries and unread state.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { ListChatThreadsRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // 'inbox' | 'requests_in' | 'requests_out' | 'archived' | Caller-relative conversation folder. (optional)
    folder: inbox,
    // number | Maximum number of conversations returned. (optional)
    limit: 30,
  } satisfies ListChatThreadsRequest;

  try {
    const data = await api.listChatThreads(body);
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
| **folder** | `inbox`, `requests_in`, `requests_out`, `archived` | Caller-relative conversation folder. | [Optional] [Defaults to `&#39;inbox&#39;`] [Enum: inbox, requests_in, requests_out, archived] |
| **limit** | `number` | Maximum number of conversations returned. | [Optional] [Defaults to `30`] |

### Return type

[**DeveloperChatThreadListResponse**](DeveloperChatThreadListResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Thread list returned. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## markChatThreadRead

> DeveloperChatOkResponse markChatThreadRead(threadId, markChatThreadReadRequest)

Mark a thread as read

Advance the authenticated caller’s read marker to a supplied message in the conversation or to the latest current message when no identifier is supplied.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { MarkChatThreadReadOperationRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
    // MarkChatThreadReadRequest
    markChatThreadReadRequest: {"messageId":501},
  } satisfies MarkChatThreadReadOperationRequest;

  try {
    const data = await api.markChatThreadRead(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |
| **markChatThreadReadRequest** | [MarkChatThreadReadRequest](MarkChatThreadReadRequest.md) |  | |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Read marker updated. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeChatGroupAvatar

> DeveloperChatOkResponse removeChatGroupAvatar(threadId)

Remove a group avatar

Remove the custom avatar from a group conversation owned by the authenticated caller. Repeating the operation leaves the avatar absent.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { RemoveChatGroupAvatarRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
  } satisfies RemoveChatGroupAvatarRequest;

  try {
    const data = await api.removeChatGroupAvatar(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Avatar removed. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeChatParticipant

> DeveloperChatOkResponse removeChatParticipant(threadId, userId)

Remove a participant from a group thread

Remove a non-owner participant from a group conversation owned by the authenticated caller without exposing or changing unrelated participant state.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { RemoveChatParticipantRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
    // number | User Id provided in the path.
    userId: 18,
  } satisfies RemoveChatParticipantRequest;

  try {
    const data = await api.removeChatParticipant(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |
| **userId** | `number` | User Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Participant removed. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread or user not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## toggleChatMessageReaction

> DeveloperChatReactionResponse toggleChatMessageReaction(messageId, toggleChatMessageReactionRequest)

Toggle a reaction for a message

Toggle the authenticated caller’s validated emote reaction on an accessible message and return the complete caller-relative reaction summary. This toggle is not retry-safe.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { ToggleChatMessageReactionOperationRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Message Id provided in the path.
    messageId: 81,
    // ToggleChatMessageReactionRequest
    toggleChatMessageReactionRequest: {"emoteName":"heart"},
  } satisfies ToggleChatMessageReactionOperationRequest;

  try {
    const data = await api.toggleChatMessageReaction(body);
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
| **messageId** | `number` | Message Id provided in the path. | [Defaults to `undefined`] |
| **toggleChatMessageReactionRequest** | [ToggleChatMessageReactionRequest](ToggleChatMessageReactionRequest.md) |  | |

### Return type

[**DeveloperChatReactionResponse**](DeveloperChatReactionResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reaction state updated. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Message not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unarchiveChatThread

> DeveloperChatOkResponse unarchiveChatThread(threadId)

Unarchive a thread

Remove the authenticated caller’s archive marker from an accessible conversation. Repeating the operation leaves it unarchived without changing other participants.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { UnarchiveChatThreadRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
  } satisfies UnarchiveChatThreadRequest;

  try {
    const data = await api.unarchiveChatThread(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatOkResponse**](DeveloperChatOkResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Thread unarchived. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateChatGroupAvatar

> DeveloperChatAvatarResponse updateChatGroupAvatar(threadId, avatar)

Upload or replace a group avatar

Upload and replace the validated avatar of a group conversation owned by the authenticated caller. Clients must not automatically retry this multipart mutation.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { UpdateChatGroupAvatarRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
    // Blob | Avatar associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary.
    avatar: BINARY_DATA_HERE,
  } satisfies UpdateChatGroupAvatarRequest;

  try {
    const data = await api.updateChatGroupAvatar(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |
| **avatar** | `Blob` | Avatar associated with this request payload; preserve server-returned values when passing them to another operation. Format: binary. | [Defaults to `undefined`] |

### Return type

[**DeveloperChatAvatarResponse**](DeveloperChatAvatarResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Avatar updated. |  * X-Request-ID -  <br>  |
| **400** | Invalid file payload. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateChatGroupTitle

> DeveloperChatTitleResponse updateChatGroupTitle(threadId, updateChatGroupTitleRequest)

Update a group thread title

Replace or clear the display title of a group conversation owned by the authenticated caller while preserving all participant and message state.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@arcenciel/sdk';
import type { UpdateChatGroupTitleOperationRequest } from '@arcenciel/sdk';

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
  const api = new ChatApi(config);

  const body = {
    // number | Thread Id provided in the path.
    threadId: 81,
    // UpdateChatGroupTitleRequest
    updateChatGroupTitleRequest: {"title":"Release artwork"},
  } satisfies UpdateChatGroupTitleOperationRequest;

  try {
    const data = await api.updateChatGroupTitle(body);
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
| **threadId** | `number` | Thread Id provided in the path. | [Defaults to `undefined`] |
| **updateChatGroupTitleRequest** | [UpdateChatGroupTitleRequest](UpdateChatGroupTitleRequest.md) |  | |

### Return type

[**DeveloperChatTitleResponse**](DeveloperChatTitleResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Thread title updated. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Thread not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
