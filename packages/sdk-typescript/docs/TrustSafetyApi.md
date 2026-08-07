# TrustSafetyApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createIllegalContentNotice**](TrustSafetyApi.md#createillegalcontentnoticeoperation) | **POST** /api/illegal-content-notices | Submit a public illegal-content notice |
| [**downloadIllegalContentNoticeAttachment**](TrustSafetyApi.md#downloadillegalcontentnoticeattachment) | **GET** /api/illegal-content-notices/{publicId}/attachments/{attachmentId} | Download an evidence attachment for a notice |
| [**getIllegalContentNotice**](TrustSafetyApi.md#getillegalcontentnotice) | **GET** /api/illegal-content-notices/{publicId} | Retrieve a single illegal-content notice by case id |
| [**listMyIllegalContentNotices**](TrustSafetyApi.md#listmyillegalcontentnotices) | **GET** /api/illegal-content-notices/me | List the current user\&#39;s recent illegal-content notices |
| [**reportImage**](TrustSafetyApi.md#reportimage) | **POST** /api/images/{id}/report | Report an image |
| [**reportModel**](TrustSafetyApi.md#reportmodeloperation) | **POST** /api/models/{id}/report | Report a model for moderation review |
| [**reportUserAvatar**](TrustSafetyApi.md#reportuseravatar) | **POST** /api/users/{id}/profile-picture/report | Report a user\&#39;s avatar for moderation |
| [**reportVideo**](TrustSafetyApi.md#reportvideo) | **POST** /api/videos/{id}/report | Report a video |
| [**requestIllegalContentNoticeReview**](TrustSafetyApi.md#requestillegalcontentnoticereviewoperation) | **POST** /api/illegal-content-notices/{publicId}/review-request | Request another review for a finalized illegal-content notice |



## createIllegalContentNotice

> DeveloperIllegalContentNoticeCreateResponse createIllegalContentNotice(createIllegalContentNoticeRequest, idempotencyKey)

Submit a public illegal-content notice

Submit a good-faith illegal-content notice as a guest or authenticated caller with up to four evidence files. Authenticated retries may reuse an Idempotency-Key; guest clients must not automatically retry an ambiguous submission.

### Example

```ts
import {
  Configuration,
  TrustSafetyApi,
} from '@arcenciel/sdk';
import type { CreateIllegalContentNoticeOperationRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrustSafetyApi(config);

  const body = {
    // CreateIllegalContentNoticeRequest
    createIllegalContentNoticeRequest: {"category":"PRIVACY_OR_DOOXING","description":"The published image contains personal information without consent.","goodFaithConfirmed":true,"reporterEmail":"reporter@example.com","targetTypeHint":"IMAGE","targetUrl":"https://arcenciel.io/images/108"},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateIllegalContentNoticeOperationRequest;

  try {
    const data = await api.createIllegalContentNotice(body);
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
| **createIllegalContentNoticeRequest** | [CreateIllegalContentNoticeRequest](CreateIllegalContentNoticeRequest.md) |  | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperIllegalContentNoticeCreateResponse**](DeveloperIllegalContentNoticeCreateResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Notice accepted and a trackable case identifier was created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Missing or invalid notice fields. |  * X-Request-ID -  <br>  |
| **401** | Authentication failed when an invalid bearer token was supplied. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | Too many notice submissions from the same client. |  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadIllegalContentNoticeAttachment

> Blob downloadIllegalContentNoticeAttachment(publicId, attachmentId, accessToken)

Download an evidence attachment for a notice

Download a private evidence attachment after applying the same reporter, affected-owner, staff, or guest-code visibility decision as the parent case. Do not persist guest access codes in logs.

### Example

```ts
import {
  Configuration,
  TrustSafetyApi,
} from '@arcenciel/sdk';
import type { DownloadIllegalContentNoticeAttachmentRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrustSafetyApi(config);

  const body = {
    // string | Public case id returned when the notice was created.
    publicId: ICN-9A2C13,
    // string | Attachment id from the notice detail payload.
    attachmentId: ev-01HZX3,
    // string | Guest lookup secret. Never persist or emit this value in application logs. (optional)
    accessToken: accessToken_example,
  } satisfies DownloadIllegalContentNoticeAttachmentRequest;

  try {
    const data = await api.downloadIllegalContentNoticeAttachment(body);
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
| **publicId** | `string` | Public case id returned when the notice was created. | [Defaults to `undefined`] |
| **attachmentId** | `string` | Attachment id from the notice detail payload. | [Defaults to `undefined`] |
| **accessToken** | `string` | Guest lookup secret. Never persist or emit this value in application logs. | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`, `application/pdf`, `image/gif`, `image/jpeg`, `image/png`, `image/webp`, `text/plain`, `video/mp4`, `video/webm`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complete private attachment stream. |  * Accept-Ranges - Indicates byte-range support when available. <br>  * Content-Disposition - Sanitized original filename and inline or attachment disposition. <br>  * X-Request-ID -  <br>  |
| **206** | Requested byte range of the private attachment. |  * Content-Disposition - Sanitized original filename. <br>  * Content-Range - Returned byte range and complete attachment size. <br>  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **403** | The requested attachment is not available to the current viewer. |  * X-Request-ID -  <br>  |
| **404** | Notice or attachment not found. |  * X-Request-ID -  <br>  |
| **416** | Requested byte range is not satisfiable. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIllegalContentNotice

> DeveloperIllegalContentNoticeDetail getIllegalContentNotice(publicId, accessToken)

Retrieve a single illegal-content notice by case id

Retrieve a case using the reporter account, affected-owner account, staff access, or the unguessable guest access code. The response is filtered for that viewer and never exposes staff-only contact or internal-note fields.

### Example

```ts
import {
  Configuration,
  TrustSafetyApi,
} from '@arcenciel/sdk';
import type { GetIllegalContentNoticeRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrustSafetyApi(config);

  const body = {
    // string | Public case id returned when the notice was created.
    publicId: ICN-9A2C13,
    // string | Guest lookup secret. Prefer authenticated access where possible because query strings may be logged by clients. (optional)
    accessToken: accessToken_example,
  } satisfies GetIllegalContentNoticeRequest;

  try {
    const data = await api.getIllegalContentNotice(body);
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
| **publicId** | `string` | Public case id returned when the notice was created. | [Defaults to `undefined`] |
| **accessToken** | `string` | Guest lookup secret. Prefer authenticated access where possible because query strings may be logged by clients. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperIllegalContentNoticeDetail**](DeveloperIllegalContentNoticeDetail.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Notice detail visible to the current viewer. |  * X-Request-ID -  <br>  |
| **400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
| **403** | The requested notice is not available to the current viewer. |  * X-Request-ID -  <br>  |
| **404** | Notice not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMyIllegalContentNotices

> Array&lt;DeveloperIllegalContentNoticeSummary&gt; listMyIllegalContentNotices()

List the current user\&#39;s recent illegal-content notices

List the 25 most recent illegal-content notices linked to the authenticated reporter. Staff-only identity, evidence, and moderation fields are excluded.

### Example

```ts
import {
  Configuration,
  TrustSafetyApi,
} from '@arcenciel/sdk';
import type { ListMyIllegalContentNoticesRequest } from '@arcenciel/sdk';

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
  const api = new TrustSafetyApi(config);

  try {
    const data = await api.listMyIllegalContentNotices();
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

[**Array&lt;DeveloperIllegalContentNoticeSummary&gt;**](DeveloperIllegalContentNoticeSummary.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recent account-linked notices ordered by most recently updated first. |  * X-Request-ID -  <br>  |
| **401** | Authentication required. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reportImage

> DeveloperReportResponse reportImage(id, idempotencyKey)

Report an image

Report one image for moderation. Reuse an Idempotency-Key for safe retries; a caller’s existing report returns 204 and no response body.

### Example

```ts
import {
  Configuration,
  TrustSafetyApi,
} from '@arcenciel/sdk';
import type { ReportImageRequest } from '@arcenciel/sdk';

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
  const api = new TrustSafetyApi(config);

  const body = {
    // number | ID of the image to report.
    id: 108,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies ReportImageRequest;

  try {
    const data = await api.reportImage(body);
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
| **id** | `number` | ID of the image to report. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperReportResponse**](DeveloperReportResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Image reported successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **204** | You have already reported this image. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Image not found. |  * X-Request-ID -  <br>  |
| **409** | Image already moderated and cannot be reported. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reportModel

> DeveloperReportResponse reportModel(id, reportModelRequest, idempotencyKey)

Report a model for moderation review

Report another creator’s model with a reason and moderator-facing context. Reuse an Idempotency-Key for retries; resolved targets reject further reports.

### Example

```ts
import {
  Configuration,
  TrustSafetyApi,
} from '@arcenciel/sdk';
import type { ReportModelOperationRequest } from '@arcenciel/sdk';

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
  const api = new TrustSafetyApi(config);

  const body = {
    // number | Model identifier.
    id: 108,
    // ReportModelRequest
    reportModelRequest: {"comment":"This upload impersonates another creator and copies their metadata.","reason":"MISLEADING","subReason":"IMPERSONATION"},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies ReportModelOperationRequest;

  try {
    const data = await api.reportModel(body);
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
| **id** | `number` | Model identifier. | [Defaults to `undefined`] |
| **reportModelRequest** | [ReportModelRequest](ReportModelRequest.md) |  | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperReportResponse**](DeveloperReportResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model reported successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **204** | This user has already reported the model. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid model id, missing reason, or comment too short. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Reporting own model is not allowed. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **409** | Model already moderated; new reports are disabled. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reportUserAvatar

> DeveloperReportResponse reportUserAvatar(id, idempotencyKey)

Report a user\&#39;s avatar for moderation

Report a user avatar for moderation. Reuse an Idempotency-Key for safe retries; a duplicate caller report returns 204 without a response body.

### Example

```ts
import {
  Configuration,
  TrustSafetyApi,
} from '@arcenciel/sdk';
import type { ReportUserAvatarRequest } from '@arcenciel/sdk';

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
  const api = new TrustSafetyApi(config);

  const body = {
    // number | Id provided in the path.
    id: 108,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies ReportUserAvatarRequest;

  try {
    const data = await api.reportUserAvatar(body);
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
| **id** | `number` | Id provided in the path. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperReportResponse**](DeveloperReportResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Avatar reported successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **204** | Avatar already reported by this user. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid user id. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reportVideo

> DeveloperReportResponse reportVideo(id, idempotencyKey)

Report a video

Report one video for moderation. Reuse an Idempotency-Key for safe retries; an existing caller report returns 204 and resolved targets reject new reports.

### Example

```ts
import {
  Configuration,
  TrustSafetyApi,
} from '@arcenciel/sdk';
import type { ReportVideoRequest } from '@arcenciel/sdk';

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
  const api = new TrustSafetyApi(config);

  const body = {
    // number | ID of the video to report.
    id: 108,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies ReportVideoRequest;

  try {
    const data = await api.reportVideo(body);
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
| **id** | `number` | ID of the video to report. | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperReportResponse**](DeveloperReportResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Video reported successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **204** | You have already reported this video. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Video not found. |  * X-Request-ID -  <br>  |
| **409** | Video already moderated and cannot be reported. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## requestIllegalContentNoticeReview

> DeveloperNoticeReviewResponse requestIllegalContentNoticeReview(publicId, requestIllegalContentNoticeReviewRequest, accessToken, idempotencyKey)

Request another review for a finalized illegal-content notice

Reopen a finalized notice for review as its reporter or affected owner. Authenticated callers should reuse the same Idempotency-Key; guest callers use their access code and must not automatically retry.

### Example

```ts
import {
  Configuration,
  TrustSafetyApi,
} from '@arcenciel/sdk';
import type { RequestIllegalContentNoticeReviewOperationRequest } from '@arcenciel/sdk';

async function example() {
  console.log("🚀 Testing @arcenciel/sdk SDK...");
  const config = new Configuration({
    // To configure API key authorization: apiKeyAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrustSafetyApi(config);

  const body = {
    // string | Public case id returned when the notice was created.
    publicId: ICN-9A2C13,
    // RequestIllegalContentNoticeReviewRequest
    requestIllegalContentNoticeReviewRequest: {"message":"The decision did not address the personal information visible in the attachment."},
    // string | Optional guest access code if the request is not made while signed in. (optional)
    accessToken: example-access-token,
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies RequestIllegalContentNoticeReviewOperationRequest;

  try {
    const data = await api.requestIllegalContentNoticeReview(body);
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
| **publicId** | `string` | Public case id returned when the notice was created. | [Defaults to `undefined`] |
| **requestIllegalContentNoticeReviewRequest** | [RequestIllegalContentNoticeReviewRequest](RequestIllegalContentNoticeReviewRequest.md) |  | |
| **accessToken** | `string` | Optional guest access code if the request is not made while signed in. | [Optional] [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**DeveloperNoticeReviewResponse**](DeveloperNoticeReviewResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Review request recorded and the case was reopened for moderator review. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Review request message too short or invalid payload. |  * X-Request-ID -  <br>  |
| **403** | The current viewer is not allowed to request review for this case. |  * X-Request-ID -  <br>  |
| **404** | Notice not found. |  * X-Request-ID -  <br>  |
| **409** | Review is only available after a final decision has been recorded. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | Too many review requests from the same client. |  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
