# DownloadsApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadModelVersion**](DownloadsApi.md#downloadmodelversion) | **GET** /api/models/{modelId}/versions/{versionId}/download | Download the model version file |
| [**downloadModelVersionWithFilename**](DownloadsApi.md#downloadmodelversionwithfilename) | **GET** /api/models/{modelId}/versions/{versionId}/download/{downloadName} | Download the model version file with a stable filename |
| [**getModelVersionDownloadInfo**](DownloadsApi.md#getmodelversiondownloadinfo) | **GET** /api/models/{modelId}/versions/{versionId}/download-info | Inspect model version download metadata |
| [**registerModelVersionDownload**](DownloadsApi.md#registermodelversiondownload) | **POST** /api/models/{modelId}/versions/{versionId}/download/register | Register a model version download without streaming the file |



## downloadModelVersion

> DownloadModelVersion200Response downloadModelVersion(modelId, versionId)

Download the model version file

Download a hosted model file or register an external-only download. Clients must allow documented HTTPS redirects, preserve Range headers, and verify the full SHA-256 hash when provided.

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '@arcenciel/sdk';
import type { DownloadModelVersionRequest } from '@arcenciel/sdk';

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
  const api = new DownloadsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
  } satisfies DownloadModelVersionRequest;

  try {
    const data = await api.downloadModelVersion(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**DownloadModelVersion200Response**](DownloadModelVersion200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/octet-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Binary file download for hosted files, or JSON registration response for external-only versions. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * X-File-Scan-Reason - Present when a scan reason is available. <br>  * X-File-Scan-Status -  <br>  |
| **206** | Partial content for a valid byte range request. |  * Content-Length -  <br>  * Content-Range -  <br>  * X-File-Scan-Status -  <br>  |
| **302** | Production redirect to the dedicated transfer host for Arc-hosted files. |  * Location - Redirect target on https://uploads.arcenciel.io. <br>  |
| **304** | Cached file is still fresh. |  -  |
| **400** | Invalid model/version id, relationship mismatch, or no hosted file path is available. |  -  |
| **403** | Version is not public and the caller has no applicable early-access entitlement. |  -  |
| **404** | Version not found or file not available. |  -  |
| **416** | Requested byte range is not satisfiable. |  -  |
| **423** | File blocked due to malware, unsafe, or scan-error status. |  -  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadModelVersionWithFilename

> DownloadModelVersionWithFilename200Response downloadModelVersionWithFilename(modelId, versionId, downloadName)

Download the model version file with a stable filename

Download the selected model version using a client-friendly filename hint. The version identifier selects the file; clients must not treat downloadName as a trusted source of identity.

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '@arcenciel/sdk';
import type { DownloadModelVersionWithFilenameRequest } from '@arcenciel/sdk';

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
  const api = new DownloadsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
    // string | Filename slug used by clients and CDNs; the version id selects the actual file.
    downloadName: example-download-name,
  } satisfies DownloadModelVersionWithFilenameRequest;

  try {
    const data = await api.downloadModelVersionWithFilename(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |
| **downloadName** | `string` | Filename slug used by clients and CDNs; the version id selects the actual file. | [Defaults to `undefined`] |

### Return type

[**DownloadModelVersionWithFilename200Response**](DownloadModelVersionWithFilename200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/octet-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Binary file download for hosted files, or JSON registration response for external-only versions. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * X-File-Scan-Reason - Present when a scan reason is available. <br>  * X-File-Scan-Status -  <br>  |
| **206** | Partial content for a valid byte range request. |  * Content-Length -  <br>  * Content-Range -  <br>  * X-File-Scan-Status -  <br>  |
| **302** | Production redirect to the dedicated transfer host for Arc-hosted files. |  * Location - Redirect target on https://uploads.arcenciel.io. <br>  |
| **304** | Cached file is still fresh. |  -  |
| **400** | Invalid model/version id, relationship mismatch, or no hosted file path is available. |  -  |
| **404** | Version not found or file not available. |  -  |
| **416** | Requested byte range is not satisfiable. |  -  |
| **423** | File blocked due to malware, unsafe, or scan-error status. |  -  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getModelVersionDownloadInfo

> VersionDownloadInfo getModelVersionDownloadInfo(modelId, versionId)

Inspect model version download metadata

Inspect the supported download source, filename, hashes, redirect allowlist, file-safety state, and early-access decision before transferring a model file.

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '@arcenciel/sdk';
import type { GetModelVersionDownloadInfoRequest } from '@arcenciel/sdk';

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
  const api = new DownloadsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
  } satisfies GetModelVersionDownloadInfoRequest;

  try {
    const data = await api.getModelVersionDownloadInfo(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**VersionDownloadInfo**](VersionDownloadInfo.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Download metadata for the version. |  -  |
| **400** | Invalid model/version id or relationship mismatch. |  -  |
| **403** | Version is not published or is scheduled for the future. |  -  |
| **404** | Version not found. |  -  |
| **423** | A scheduled hosted file is not safety-cleared for supporter early access. |  -  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerModelVersionDownload

> RegisterModelVersionDownload200Response registerModelVersionDownload(modelId, versionId)

Register a model version download without streaming the file

Record a completed direct or external download without streaming the file through Arc en Ciel. Authentication is optional and associates the event with the caller when available.

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '@arcenciel/sdk';
import type { RegisterModelVersionDownloadRequest } from '@arcenciel/sdk';

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
  const api = new DownloadsApi(config);

  const body = {
    // number | Model Id provided in the path.
    modelId: 1,
    // number | Version Id provided in the path.
    versionId: 1,
  } satisfies RegisterModelVersionDownloadRequest;

  try {
    const data = await api.registerModelVersionDownload(body);
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
| **modelId** | `number` | Model Id provided in the path. | [Defaults to `undefined`] |
| **versionId** | `number` | Version Id provided in the path. | [Defaults to `undefined`] |

### Return type

[**RegisterModelVersionDownload200Response**](RegisterModelVersionDownload200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Download registration completed. |  -  |
| **400** | Invalid model/version id, relationship mismatch, or no file available. |  -  |
| **403** | Version is not publicly available and the caller has no applicable early-access entitlement. |  -  |
| **404** | Version not found or inaccessible. |  -  |
| **423** | File blocked due to malware, unsafe, or scan-error status. |  -  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  |
| **500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

