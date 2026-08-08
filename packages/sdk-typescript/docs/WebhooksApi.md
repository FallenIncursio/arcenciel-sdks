# WebhooksApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhookEndpoint**](WebhooksApi.md#createwebhookendpointoperation) | **POST** /api/webhooks/endpoints | Create an unverified webhook endpoint |
| [**deleteWebhookEndpoint**](WebhooksApi.md#deletewebhookendpoint) | **DELETE** /api/webhooks/endpoints/{endpointId} | Delete one owned webhook endpoint |
| [**getWebhookDelivery**](WebhooksApi.md#getwebhookdelivery) | **GET** /api/webhooks/deliveries/{deliveryId} | Get one owned delivery and its event |
| [**getWebhookEndpoint**](WebhooksApi.md#getwebhookendpoint) | **GET** /api/webhooks/endpoints/{endpointId} | Get one owned webhook endpoint |
| [**listWebhookDeliveries**](WebhooksApi.md#listwebhookdeliveries) | **GET** /api/webhooks/endpoints/{endpointId}/deliveries | List deliveries for one owned endpoint |
| [**listWebhookEndpoints**](WebhooksApi.md#listwebhookendpoints) | **GET** /api/webhooks/endpoints | List owned webhook endpoints |
| [**listWebhookEventTypes**](WebhooksApi.md#listwebhookeventtypes) | **GET** /api/webhooks/event-types | List supported webhook event types |
| [**retryWebhookDelivery**](WebhooksApi.md#retrywebhookdelivery) | **POST** /api/webhooks/deliveries/{deliveryId}/retry | Retry one failed owned delivery |
| [**rotateWebhookSecret**](WebhooksApi.md#rotatewebhooksecret) | **POST** /api/webhooks/endpoints/{endpointId}/rotate-secret | Rotate the signing secret with 24-hour overlap |
| [**testWebhookEndpoint**](WebhooksApi.md#testwebhookendpoint) | **POST** /api/webhooks/endpoints/{endpointId}/test | Queue a signed test delivery |
| [**updateWebhookEndpoint**](WebhooksApi.md#updatewebhookendpointoperation) | **PATCH** /api/webhooks/endpoints/{endpointId} | Update one owned webhook endpoint |
| [**verifyWebhookEndpoint**](WebhooksApi.md#verifywebhookendpoint) | **POST** /api/webhooks/endpoints/{endpointId}/verify | Verify ownership and reachability using a challenge |



## createWebhookEndpoint

> CreateWebhookEndpoint201Response createWebhookEndpoint(createWebhookEndpointRequest, idempotencyKey)

Create an unverified webhook endpoint

Create a disabled endpoint for an HTTPS port-443 receiver. The signing secret is returned exactly once; store it before completing URL verification.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { CreateWebhookEndpointOperationRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // CreateWebhookEndpointRequest | Request payload for this operation.
    createWebhookEndpointRequest: {"eventTypes":["model.published"],"name":"Production events","url":"https://example.com/webhooks/arcenciel"},
    // string | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    idempotencyKey: request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8,
  } satisfies CreateWebhookEndpointOperationRequest;

  try {
    const data = await api.createWebhookEndpoint(body);
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
| **createWebhookEndpointRequest** | [CreateWebhookEndpointRequest](CreateWebhookEndpointRequest.md) | Request payload for this operation. | |
| **idempotencyKey** | `string` | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateWebhookEndpoint201Response**](CreateWebhookEndpoint201Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Endpoint plus its one-time signing secret. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid endpoint input |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **409** | Endpoint limit reached The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |
| **503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWebhookEndpoint

> deleteWebhookEndpoint(endpointId)

Delete one owned webhook endpoint

Delete one caller-owned endpoint and its retained delivery history. Repeating the logical deletion is safe for clients.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { DeleteWebhookEndpointRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | endpointId path identifier.
    endpointId: example,
  } satisfies DeleteWebhookEndpointRequest;

  try {
    const data = await api.deleteWebhookEndpoint(body);
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
| **endpointId** | `string` | endpointId path identifier. | [Defaults to `undefined`] |

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
| **204** | Endpoint and its delivery history deleted |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Endpoint not found |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhookDelivery

> DeveloperWebhookDeliveryResponse getWebhookDelivery(deliveryId)

Get one owned delivery and its event

Inspect one caller-owned delivery, its event envelope, attempts, status code, and bounded response snippet.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { GetWebhookDeliveryRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Delivery Id provided in the path.
    deliveryId: example-delivery-id,
  } satisfies GetWebhookDeliveryRequest;

  try {
    const data = await api.getWebhookDelivery(body);
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
| **deliveryId** | `string` | Delivery Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperWebhookDeliveryResponse**](DeveloperWebhookDeliveryResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Delivery detail. |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Delivery not found |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhookEndpoint

> DeveloperWebhookEndpointResponse getWebhookEndpoint(endpointId)

Get one owned webhook endpoint

Read one caller-owned endpoint and its bounded health state without exposing signing secrets.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { GetWebhookEndpointRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | endpointId path identifier.
    endpointId: example,
  } satisfies GetWebhookEndpointRequest;

  try {
    const data = await api.getWebhookEndpoint(body);
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
| **endpointId** | `string` | endpointId path identifier. | [Defaults to `undefined`] |

### Return type

[**DeveloperWebhookEndpointResponse**](DeveloperWebhookEndpointResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Endpoint details without signing-secret material. |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Endpoint not found |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookDeliveries

> ListWebhookDeliveries200Response listWebhookDeliveries(endpointId, cursor, limit)

List deliveries for one owned endpoint

List 30-day delivery history for one caller-owned endpoint using an opaque cursor. Response bodies are truncated and must not be treated as a receiver log.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { ListWebhookDeliveriesRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Endpoint Id provided in the path.
    endpointId: example-endpoint-id,
    // string | Cursor provided in the query. (optional)
    cursor: next-page,
    // number | Limit provided in the query. (optional)
    limit: 25,
  } satisfies ListWebhookDeliveriesRequest;

  try {
    const data = await api.listWebhookDeliveries(body);
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
| **endpointId** | `string` | Endpoint Id provided in the path. | [Defaults to `undefined`] |
| **cursor** | `string` | Cursor provided in the query. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Limit provided in the query. | [Optional] [Defaults to `25`] |

### Return type

[**ListWebhookDeliveries200Response**](ListWebhookDeliveries200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cursor-paginated delivery history retained for 30 days. |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Endpoint not found |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookEndpoints

> ListWebhookEndpoints200Response listWebhookEndpoints()

List owned webhook endpoints

List webhook endpoints owned by the authenticated caller. Signing-secret material and every other user’s endpoints are always excluded.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { ListWebhookEndpointsRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  try {
    const data = await api.listWebhookEndpoints();
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

[**ListWebhookEndpoints200Response**](ListWebhookEndpoints200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Owner-isolated endpoint list. |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookEventTypes

> ListWebhookEventTypes200Response listWebhookEventTypes()

List supported webhook event types

List the public event names and payload versions supported by Developer Webhooks. Discover this catalog instead of using undocumented staff event names.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { ListWebhookEventTypesRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  try {
    const data = await api.listWebhookEventTypes();
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

[**ListWebhookEventTypes200Response**](ListWebhookEventTypes200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Versioned event types. |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## retryWebhookDelivery

> DeveloperWebhookDeliveryResponse retryWebhookDelivery(deliveryId)

Retry one failed owned delivery

Return one failed caller-owned delivery to the queue. Receivers must deduplicate by event or delivery identifier because delivery is at least once.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { RetryWebhookDeliveryRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Delivery Id provided in the path.
    deliveryId: example-delivery-id,
  } satisfies RetryWebhookDeliveryRequest;

  try {
    const data = await api.retryWebhookDelivery(body);
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
| **deliveryId** | `string` | Delivery Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperWebhookDeliveryResponse**](DeveloperWebhookDeliveryResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Delivery returned to the pending queue. |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Delivery not found |  * X-Request-ID -  <br>  |
| **409** | Only failed deliveries can be retried |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateWebhookSecret

> RotateWebhookSecret200Response rotateWebhookSecret(endpointId)

Rotate the signing secret with 24-hour overlap

Generate a new one-time signing secret while retaining the previous signature for a 24-hour overlap. Do not retry automatically after an ambiguous response.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { RotateWebhookSecretRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Endpoint Id provided in the path.
    endpointId: example-endpoint-id,
  } satisfies RotateWebhookSecretRequest;

  try {
    const data = await api.rotateWebhookSecret(body);
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
| **endpointId** | `string` | Endpoint Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**RotateWebhookSecret200Response**](RotateWebhookSecret200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Endpoint, one-time new secret, and old-secret expiry. |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Endpoint not found |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testWebhookEndpoint

> TestWebhookEndpoint202Response testWebhookEndpoint(endpointId)

Queue a signed test delivery

Queue a signed webhook.test delivery through the normal dispatcher so receivers can validate headers and duplicate handling.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { TestWebhookEndpointRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Endpoint Id provided in the path.
    endpointId: example-endpoint-id,
  } satisfies TestWebhookEndpointRequest;

  try {
    const data = await api.testWebhookEndpoint(body);
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
| **endpointId** | `string` | Endpoint Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**TestWebhookEndpoint202Response**](TestWebhookEndpoint202Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Test delivery accepted. |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Endpoint not found |  * X-Request-ID -  <br>  |
| **409** | Endpoint is not active |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWebhookEndpoint

> DeveloperWebhookEndpointResponse updateWebhookEndpoint(endpointId, updateWebhookEndpointRequest)

Update one owned webhook endpoint

Update endpoint metadata, subscriptions, state, or URL. A URL change disables the endpoint and requires a fresh verification challenge.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { UpdateWebhookEndpointOperationRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | endpointId path identifier.
    endpointId: example,
    // UpdateWebhookEndpointRequest | Request payload for this operation.
    updateWebhookEndpointRequest: {"enabled":false,"eventTypes":["model.published","article.published"]},
  } satisfies UpdateWebhookEndpointOperationRequest;

  try {
    const data = await api.updateWebhookEndpoint(body);
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
| **endpointId** | `string` | endpointId path identifier. | [Defaults to `undefined`] |
| **updateWebhookEndpointRequest** | [UpdateWebhookEndpointRequest](UpdateWebhookEndpointRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperWebhookEndpointResponse**](DeveloperWebhookEndpointResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated endpoint. |  * X-Request-ID -  <br>  |
| **400** | Invalid update |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Endpoint not found |  * X-Request-ID -  <br>  |
| **409** | Endpoint must be verified before enabling |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyWebhookEndpoint

> DeveloperWebhookEndpointResponse verifyWebhookEndpoint(endpointId)

Verify ownership and reachability using a challenge

Send a one-time URL-verification challenge. The receiver must return the exact challenge in a successful JSON response before deliveries are enabled.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@arcenciel/sdk';
import type { VerifyWebhookEndpointRequest } from '@arcenciel/sdk';

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
  const api = new WebhooksApi(config);

  const body = {
    // string | Endpoint Id provided in the path.
    endpointId: example-endpoint-id,
  } satisfies VerifyWebhookEndpointRequest;

  try {
    const data = await api.verifyWebhookEndpoint(body);
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
| **endpointId** | `string` | Endpoint Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DeveloperWebhookEndpointResponse**](DeveloperWebhookEndpointResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verified and enabled endpoint. |  * X-Request-ID -  <br>  |
| **400** | Endpoint URL is no longer safe |  * X-Request-ID -  <br>  |
| **401** | Authentication required |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Endpoint not found |  * X-Request-ID -  <br>  |
| **422** | Challenge response did not validate |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
