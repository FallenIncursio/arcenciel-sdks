# FeedbackApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFeedback**](FeedbackApi.md#createfeedback) | **POST** /api/feedback | Submit a feedback item |
| [**deleteFeedback**](FeedbackApi.md#deletefeedback) | **DELETE** /api/feedback/{publicId} | Delete one feedback item |
| [**downloadFeedbackAttachment**](FeedbackApi.md#downloadfeedbackattachment) | **GET** /api/feedback/{publicId}/attachments/{attachmentId} | View or download one feedback attachment |
| [**getFeedback**](FeedbackApi.md#getfeedback) | **GET** /api/feedback/{publicId} | Get one feedback item |
| [**listMyFeedback**](FeedbackApi.md#listmyfeedback) | **GET** /api/feedback/me | List feedback submitted by the current user |



## createFeedback

> DeveloperFeedback createFeedback(category, description, title, idempotencyKey, attachments, contactDiscord, source)

Submit a feedback item

Submit authenticated product feedback with up to six validated attachments. Reuse an Idempotency-Key and identical multipart payload when retrying an ambiguous request.

### Example

```ts
import {
  Configuration,
  FeedbackApi,
} from '@arcenciel/sdk';
import type { CreateFeedbackRequest } from '@arcenciel/sdk';

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
  const api = new FeedbackApi(config);

  const body = {
    // string | Feedback category. Known values: BUG, FEATURE, UX, PERFORMANCE, MODERATION, OTHER. Clients must tolerate future values.
    category: 'category_example',
    // string | Detailed feedback and reproduction context.
    description: 'description_example',
    // string | Short reproducible feedback title.
    title: 'title_example',
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8',
    // Array<Blob> | Optional validated screenshots, documents, archives, or short media evidence. (optional)
    attachments: [new Blob(['example file content'], { type: 'application/octet-stream' })],
    // string | Optional reporter contact hint. (optional)
    contactDiscord: 'contactDiscord_example',
    // string | Related HTTPS URL or Arc en Ciel path. (optional)
    source: 'source_example',
  } satisfies CreateFeedbackRequest;

  try {
    const data = await api.createFeedback(body);
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
| **category** | `string` | Feedback category. Known values: BUG, FEATURE, UX, PERFORMANCE, MODERATION, OTHER. Clients must tolerate future values. | [Defaults to `undefined`] |
| **description** | `string` | Detailed feedback and reproduction context. | [Defaults to `undefined`] |
| **title** | `string` | Short reproducible feedback title. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |
| **attachments** | `Array<Blob>` | Optional validated screenshots, documents, archives, or short media evidence. | [Optional] |
| **contactDiscord** | `string` | Optional reporter contact hint. | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Related HTTPS URL or Arc en Ciel path. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperFeedback**](DeveloperFeedback.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Feedback created |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid payload |  * X-Request-ID -  <br>  |
| **401** | Unauthorized |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFeedback

> DeveloperFeedbackDeleteResponse deleteFeedback(publicId)

Delete one feedback item

Delete a feedback case owned by the authenticated caller, including its stored attachment files. Staff may delete a case through the same audited operation.

### Example

```ts
import {
  Configuration,
  FeedbackApi,
} from '@arcenciel/sdk';
import type { DeleteFeedbackRequest } from '@arcenciel/sdk';

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
  const api = new FeedbackApi(config);

  const body = {
    // string | Public Id provided in the path.
    publicId: FB-9A2C13,
  } satisfies DeleteFeedbackRequest;

  try {
    const data = await api.deleteFeedback(body);
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
| **publicId** | `string` | Public Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperFeedbackDeleteResponse**](DeveloperFeedbackDeleteResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Feedback deleted |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized |  * X-Request-ID -  <br>  |
| **403** | Forbidden |  * X-Request-ID -  <br>  |
| **404** | Feedback not found |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadFeedbackAttachment

> Blob downloadFeedbackAttachment(publicId, attachmentId, download)

View or download one feedback attachment

Stream a non-expired feedback attachment to the original reporter or staff. Honor the returned media type and Content-Disposition filename; attachment URLs are private.

### Example

```ts
import {
  Configuration,
  FeedbackApi,
} from '@arcenciel/sdk';
import type { DownloadFeedbackAttachmentRequest } from '@arcenciel/sdk';

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
  const api = new FeedbackApi(config);

  const body = {
    // string | Public Id provided in the path.
    publicId: FB-9A2C13,
    // string | Attachment Id provided in the path.
    attachmentId: ev-01HZX3,
    // '1' | 'true' | 'yes' | Set to 1, true, or yes to request attachment disposition instead of inline preview. (optional)
    download: 1,
  } satisfies DownloadFeedbackAttachmentRequest;

  try {
    const data = await api.downloadFeedbackAttachment(body);
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
| **publicId** | `string` | Public Id provided in the path. | [Defaults to `undefined`] |
| **attachmentId** | `string` | Attachment Id provided in the path. | [Defaults to `undefined`] |
| **download** | `1`, `true`, `yes` | Set to 1, true, or yes to request attachment disposition instead of inline preview. | [Optional] [Defaults to `undefined`] [Enum: 1, true, yes] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/octet-stream`, `application/pdf`, `application/x-7z-compressed`, `application/x-rar-compressed`, `application/zip`, `image/gif`, `image/jpeg`, `image/png`, `image/webp`, `text/markdown`, `text/plain`, `video/mp4`, `video/quicktime`, `video/webm`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complete private attachment stream. |  * Accept-Ranges - Indicates byte-range support when available. <br>  * Content-Disposition - Sanitized original filename and inline or attachment disposition. <br>  * X-Request-ID -  <br>  |
| **206** | Requested byte range of the private attachment. |  * Content-Disposition - Sanitized original filename. <br>  * Content-Range - Returned byte range and complete attachment size. <br>  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized |  * X-Request-ID -  <br>  |
| **403** | Forbidden |  * X-Request-ID -  <br>  |
| **404** | Attachment not found |  * X-Request-ID -  <br>  |
| **410** | Attachment expired |  * X-Request-ID -  <br>  |
| **416** | Requested byte range is not satisfiable. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFeedback

> DeveloperFeedback getFeedback(publicId)

Get one feedback item

Return one feedback case to its reporter or staff. Reporter contact data is case-bound and internal moderation notes remain null for ordinary callers.

### Example

```ts
import {
  Configuration,
  FeedbackApi,
} from '@arcenciel/sdk';
import type { GetFeedbackRequest } from '@arcenciel/sdk';

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
  const api = new FeedbackApi(config);

  const body = {
    // string | Public Id provided in the path.
    publicId: FB-9A2C13,
  } satisfies GetFeedbackRequest;

  try {
    const data = await api.getFeedback(body);
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
| **publicId** | `string` | Public Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperFeedback**](DeveloperFeedback.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Feedback detail |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized |  * X-Request-ID -  <br>  |
| **403** | Forbidden |  * X-Request-ID -  <br>  |
| **404** | Feedback not found |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMyFeedback

> Array&lt;DeveloperFeedback&gt; listMyFeedback()

List feedback submitted by the current user

List up to 100 feedback cases submitted by the authenticated caller. Other users’ cases and staff-only internal notes are never returned.

### Example

```ts
import {
  Configuration,
  FeedbackApi,
} from '@arcenciel/sdk';
import type { ListMyFeedbackRequest } from '@arcenciel/sdk';

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
  const api = new FeedbackApi(config);

  try {
    const data = await api.listMyFeedback();
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

[**Array&lt;DeveloperFeedback&gt;**](DeveloperFeedback.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Feedback list |  * X-Request-ID -  <br>  |
| **401** | Unauthorized |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
