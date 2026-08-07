# DownloadsApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadAllModelVersions**](DownloadsApi.md#downloadallmodelversions) | **GET** /api/models/{modelId}/versions/download-all | Download all downloadable version files of a model as a ZIP archive |
| [**downloadModelVersion**](DownloadsApi.md#downloadmodelversion) | **GET** /api/models/{modelId}/versions/{versionId}/download | Download the model version file |
| [**downloadModelVersionTrainingMetadataToml**](DownloadsApi.md#downloadmodelversiontrainingmetadatatoml) | **GET** /api/models/{modelId}/versions/{versionId}/training-metadata.toml | Download a redacted LoRA training TOML for a specific model version |
| [**downloadModelVersionWithFilename**](DownloadsApi.md#downloadmodelversionwithfilename) | **GET** /api/models/{modelId}/versions/{versionId}/download/{downloadName} | Download the model version file with a stable filename |
| [**getModelVersionDownloadInfo**](DownloadsApi.md#getmodelversiondownloadinfo) | **GET** /api/models/{modelId}/versions/{versionId}/download-info | Inspect model version download metadata |
| [**registerModelVersionDownload**](DownloadsApi.md#registermodelversiondownload) | **POST** /api/models/{modelId}/versions/{versionId}/download/register | Register a model version download without streaming the file |



## downloadAllModelVersions

> Blob downloadAllModelVersions(modelId)

Download all downloadable version files of a model as a ZIP archive

Stream a ZIP archive containing all downloadable files of a visible model. Unavailable or unsafe versions are omitted and described in an archive README when partial output is possible.

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '@arcenciel/sdk';
import type { DownloadAllModelVersionsRequest } from '@arcenciel/sdk';

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
    // number | Model identifier.
    modelId: 1,
  } satisfies DownloadAllModelVersionsRequest;

  try {
    const data = await api.downloadAllModelVersions(body);
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
| **modelId** | `number` | Model identifier. | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/zip`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ZIP archive stream. |  * Content-Disposition - Attachment disposition containing the generated model archive filename. <br>  * X-Request-ID -  <br>  |
| **404** | Model not found or no downloadable files available. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Failed to build archive. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


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
| **200** | Binary file download for hosted files, or JSON registration response for external-only versions. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * X-File-Scan-Reason - Present when a scan reason is available. <br>  * X-File-Scan-Status -  <br>  * X-Request-ID -  <br>  |
| **206** | Partial content for a valid byte range request. |  * Content-Length -  <br>  * Content-Range -  <br>  * X-File-Scan-Status -  <br>  * X-Request-ID -  <br>  |
| **302** | Production redirect to the dedicated transfer host for Arc-hosted files. |  * Location - Redirect target on https://uploads.arcenciel.io. <br>  * X-Request-ID -  <br>  |
| **304** | Cached file is still fresh. |  * X-Request-ID -  <br>  |
| **400** | Invalid model/version id, relationship mismatch, or no hosted file path is available. |  * X-Request-ID -  <br>  |
| **403** | Version is not public and the caller has no applicable early-access entitlement. |  * X-Request-ID -  <br>  |
| **404** | Version not found or file not available. |  * X-Request-ID -  <br>  |
| **416** | Requested byte range is not satisfiable. |  * X-Request-ID -  <br>  |
| **423** | File blocked due to malware, unsafe, or scan-error status. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadModelVersionTrainingMetadataToml

> string downloadModelVersionTrainingMetadataToml(modelId, versionId)

Download a redacted LoRA training TOML for a specific model version

Download a redacted LoRA training configuration as TOML for one visible model version. Callers should preserve the returned filename and treat omitted sensitive values as intentional.

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '@arcenciel/sdk';
import type { DownloadModelVersionTrainingMetadataTomlRequest } from '@arcenciel/sdk';

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
  } satisfies DownloadModelVersionTrainingMetadataTomlRequest;

  try {
    const data = await api.downloadModelVersionTrainingMetadataToml(body);
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

**string**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/toml`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Redacted TOML training configuration. |  * Content-Disposition - Attachment disposition containing the generated TOML filename. <br>  * X-Request-ID -  <br>  |
| **400** | Invalid model/version id or relationship mismatch. |  * X-Request-ID -  <br>  |
| **404** | Version not found, inaccessible, not a LoRA model, or no training metadata available. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

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
| **200** | Binary file download for hosted files, or JSON registration response for external-only versions. |  * Accept-Ranges -  <br>  * Content-Disposition -  <br>  * X-File-Scan-Reason - Present when a scan reason is available. <br>  * X-File-Scan-Status -  <br>  * X-Request-ID -  <br>  |
| **206** | Partial content for a valid byte range request. |  * Content-Length -  <br>  * Content-Range -  <br>  * X-File-Scan-Status -  <br>  * X-Request-ID -  <br>  |
| **302** | Production redirect to the dedicated transfer host for Arc-hosted files. |  * Location - Redirect target on https://uploads.arcenciel.io. <br>  * X-Request-ID -  <br>  |
| **304** | Cached file is still fresh. |  * X-Request-ID -  <br>  |
| **400** | Invalid model/version id, relationship mismatch, or no hosted file path is available. |  * X-Request-ID -  <br>  |
| **404** | Version not found or file not available. |  * X-Request-ID -  <br>  |
| **416** | Requested byte range is not satisfiable. |  * X-Request-ID -  <br>  |
| **423** | File blocked due to malware, unsafe, or scan-error status. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

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
| **200** | Download metadata for the version. |  * X-Request-ID -  <br>  |
| **400** | Invalid model/version id or relationship mismatch. |  * X-Request-ID -  <br>  |
| **403** | Version is not published or is scheduled for the future. |  * X-Request-ID -  <br>  |
| **404** | Version not found. |  * X-Request-ID -  <br>  |
| **423** | A scheduled hosted file is not safety-cleared for supporter early access. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

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
| **200** | Download registration completed. |  * X-Request-ID -  <br>  |
| **400** | Invalid model/version id, relationship mismatch, or no file available. |  * X-Request-ID -  <br>  |
| **403** | Version is not publicly available and the caller has no applicable early-access entitlement. |  * X-Request-ID -  <br>  |
| **404** | Version not found or inaccessible. |  * X-Request-ID -  <br>  |
| **423** | File blocked due to malware, unsafe, or scan-error status. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Internal server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
