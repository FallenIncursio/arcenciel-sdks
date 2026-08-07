# ProfileApi

All URIs are relative to *https://arcenciel.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clearMyDownloads**](ProfileApi.md#clearmydownloads) | **DELETE** /api/users/me/downloads | Remove all downloads |
| [**deleteMyDownload**](ProfileApi.md#deletemydownload) | **DELETE** /api/users/me/downloads/{id} | Remove a specific download entry |
| [**exportMyData**](ProfileApi.md#exportmydata) | **GET** /api/users/me/export | Export all your account data |
| [**getMyProfile**](ProfileApi.md#getmyprofile) | **GET** /api/users/me | Retrieve the current user\&#39;s profile |
| [**listMyDownloads**](ProfileApi.md#listmydownloads) | **GET** /api/users/me/downloads | List your recent downloads |
| [**listMyUploads**](ProfileApi.md#listmyuploads) | **GET** /api/users/me/uploads | Retrieve your uploaded content (models, images, videos, articles) |
| [**listPinnedTemplates**](ProfileApi.md#listpinnedtemplates) | **GET** /api/users/me/pinned-template | Retrieve the model ids pinned as quick upload templates |
| [**removeMyProfileBanner**](ProfileApi.md#removemyprofilebanner) | **DELETE** /api/users/me/banner | Remove your profile banner. |
| [**removeMyProfilePicture**](ProfileApi.md#removemyprofilepicture) | **DELETE** /api/users/me/profile-picture | Remove your profile picture. |
| [**togglePinnedTemplate**](ProfileApi.md#togglepinnedtemplateoperation) | **PATCH** /api/users/me/pinned-template | Toggle a model as pinned upload template |
| [**updateMyProfile**](ProfileApi.md#updatemyprofileoperation) | **PATCH** /api/users/me | Update your own profile fields (e.g. username, bio, sfwMode, trackDownloads) |
| [**updateMyProfileBanner**](ProfileApi.md#updatemyprofilebanner) | **PATCH** /api/users/me/banner | Upload or change your profile banner. |
| [**updateMyProfilePicture**](ProfileApi.md#updatemyprofilepicture) | **PATCH** /api/users/me/profile-picture | Upload or change your profile picture. |
| [**updateMySocialLinks**](ProfileApi.md#updatemysociallinksoperation) | **PATCH** /api/users/me/social-links | Update your social links |



## clearMyDownloads

> DeveloperMessageResponse clearMyDownloads()

Remove all downloads

Clear all tracked download-history entries for the authenticated caller. This does not remove models, versions, files, or global aggregate statistics.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { ClearMyDownloadsRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  try {
    const data = await api.clearMyDownloads();
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

[**DeveloperMessageResponse**](DeveloperMessageResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Downloads cleared. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMyDownload

> DeveloperMessageResponse deleteMyDownload(id)

Remove a specific download entry

Delete one tracked download-history entry owned by the authenticated caller. The underlying model file and aggregate download counts are unaffected.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { DeleteMyDownloadRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  const body = {
    // number | Id provided in the path.
    id: 1,
  } satisfies DeleteMyDownloadRequest;

  try {
    const data = await api.deleteMyDownload(body);
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
| **200** | Download removed. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | Download not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportMyData

> DeveloperDataExport exportMyData()

Export all your account data

Export the authenticated caller’s account data, uploads, comments, and audit records. The privacy-sensitive export is limited to one request per 24 hours.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { ExportMyDataRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  try {
    const data = await api.exportMyData();
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

[**DeveloperDataExport**](DeveloperDataExport.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns profile, uploads, comments and audit logs. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | Too many requests. |  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMyProfile

> UserProfile getMyProfile()

Retrieve the current user\&#39;s profile

Return the authenticated caller’s own profile and account preferences without exposing write-only credentials or raw authentication secrets.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { GetMyProfileRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  try {
    const data = await api.getMyProfile();
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

[**UserProfile**](UserProfile.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the profile of the current user. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized – user not logged in. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMyDownloads

> Array&lt;DeveloperDownloadHistoryEntry&gt; listMyDownloads()

List your recent downloads

List the authenticated caller’s tracked model download history with model and version context. This operation never returns another user’s records.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { ListMyDownloadsRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  try {
    const data = await api.listMyDownloads();
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

[**Array&lt;DeveloperDownloadHistoryEntry&gt;**](DeveloperDownloadHistoryEntry.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of downloads. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMyUploads

> Uploads listMyUploads()

Retrieve your uploaded content (models, images, videos, articles)

Return models, images, videos, and articles owned by the authenticated caller, including non-public items available through owner visibility.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { ListMyUploadsRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  try {
    const data = await api.listMyUploads();
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

[**Uploads**](Uploads.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns an object containing arrays of your uploads. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPinnedTemplates

> DeveloperPinnedTemplatesResponse listPinnedTemplates(compact, versionLimit)

Retrieve the model ids pinned as quick upload templates

List the model identifiers pinned by the authenticated caller as quick upload templates. At most the current configured limit is returned.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { ListPinnedTemplatesRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  const body = {
    // boolean | Include compact model records in addition to identifiers. (optional)
    compact: false,
    // number | Maximum versions included per compact model. (optional)
    versionLimit: 20,
  } satisfies ListPinnedTemplatesRequest;

  try {
    const data = await api.listPinnedTemplates(body);
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
| **compact** | `boolean` | Include compact model records in addition to identifiers. | [Optional] [Defaults to `false`] |
| **versionLimit** | `number` | Maximum versions included per compact model. | [Optional] [Defaults to `20`] |

### Return type

[**DeveloperPinnedTemplatesResponse**](DeveloperPinnedTemplatesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the list of pinned models. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeMyProfileBanner

> RemoveMyProfileBanner200Response removeMyProfileBanner()

Remove your profile banner.

Remove the authenticated caller’s current profile banner and managed derivative files. The operation cannot affect another user’s media.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { RemoveMyProfileBannerRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  try {
    const data = await api.removeMyProfileBanner();
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

[**RemoveMyProfileBanner200Response**](RemoveMyProfileBanner200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Profile banner removed. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeMyProfilePicture

> RemoveMyProfilePicture200Response removeMyProfilePicture()

Remove your profile picture.

Remove the authenticated caller’s current profile picture and its managed derivative files. Repeating the request leaves the profile without an image.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { RemoveMyProfilePictureRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  try {
    const data = await api.removeMyProfilePicture();
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

[**RemoveMyProfilePicture200Response**](RemoveMyProfilePicture200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Profile picture removed. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## togglePinnedTemplate

> DeveloperPinnedTemplatesResponse togglePinnedTemplate(togglePinnedTemplateRequest)

Toggle a model as pinned upload template

Toggle a model in the authenticated caller’s quick-upload template list. Automatic retries are disabled because the endpoint toggles state.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { TogglePinnedTemplateOperationRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  const body = {
    // TogglePinnedTemplateRequest | Request payload for this operation.
    togglePinnedTemplateRequest: {"modelId":1},
  } satisfies TogglePinnedTemplateOperationRequest;

  try {
    const data = await api.togglePinnedTemplate(body);
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
| **togglePinnedTemplateRequest** | [TogglePinnedTemplateRequest](TogglePinnedTemplateRequest.md) | Request payload for this operation. | |

### Return type

[**DeveloperPinnedTemplatesResponse**](DeveloperPinnedTemplatesResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pinned templates updated. |  * X-Request-ID -  <br>  |
| **400** | Invalid model id or limit reached. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | Forbidden. |  * X-Request-ID -  <br>  |
| **404** | Model not found. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMyProfile

> SelfProfile updateMyProfile(updateMyProfileRequest)

Update your own profile fields (e.g. username, bio, sfwMode, trackDownloads)

Update supported fields on the authenticated caller’s profile. Username conflicts, validation failures, and preference constraints are returned explicitly.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { UpdateMyProfileOperationRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  const body = {
    // UpdateMyProfileRequest | Fields to update in your profile.
    updateMyProfileRequest: {"bio":"value","nsfwAgeVerified":true,"sfwMode":true,"trackDownloads":true,"username":"value"},
  } satisfies UpdateMyProfileOperationRequest;

  try {
    const data = await api.updateMyProfile(body);
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
| **updateMyProfileRequest** | [UpdateMyProfileRequest](UpdateMyProfileRequest.md) | Fields to update in your profile. | |

### Return type

[**SelfProfile**](SelfProfile.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Profile updated successfully. |  * X-Request-ID -  <br>  |
| **400** | Bad request – invalid data. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **409** | The request conflicts with the current state of the target resource. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMyProfileBanner

> UpdateMyProfileBanner200Response updateMyProfileBanner(bannerFile)

Upload or change your profile banner.

Upload and replace the authenticated caller’s profile banner using validated multipart image content. Clients must not retry uploads automatically.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { UpdateMyProfileBannerRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  const body = {
    // Blob | Banner File accepted or returned by this contract. (optional)
    bannerFile: BINARY_DATA_HERE,
  } satisfies UpdateMyProfileBannerRequest;

  try {
    const data = await api.updateMyProfileBanner(body);
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
| **bannerFile** | `Blob` | Banner File accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |

### Return type

[**UpdateMyProfileBanner200Response**](UpdateMyProfileBanner200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Profile banner updated. |  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMyProfilePicture

> UpdateMyProfilePicture200Response updateMyProfilePicture(profilePictureFile)

Upload or change your profile picture.

Upload and replace the authenticated caller’s profile picture using validated multipart image content. Clients must not retry uploads automatically.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { UpdateMyProfilePictureRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  const body = {
    // Blob | Profile Picture File accepted or returned by this contract. (optional)
    profilePictureFile: BINARY_DATA_HERE,
  } satisfies UpdateMyProfilePictureRequest;

  try {
    const data = await api.updateMyProfilePicture(body);
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
| **profilePictureFile** | `Blob` | Profile Picture File accepted or returned by this contract. | [Optional] [Defaults to `undefined`] |

### Return type

[**UpdateMyProfilePicture200Response**](UpdateMyProfilePicture200Response.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Profile picture updated. |  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **404** | The requested resource does not exist or is not visible to the current principal. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMySocialLinks

> DeveloperMessageResponse updateMySocialLinks(updateMySocialLinksRequest)

Update your social links

Replace the authenticated caller’s supported public social links after URL normalization and platform validation. Unknown platforms are rejected.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from '@arcenciel/sdk';
import type { UpdateMySocialLinksOperationRequest } from '@arcenciel/sdk';

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
  const api = new ProfileApi(config);

  const body = {
    // UpdateMySocialLinksRequest
    updateMySocialLinksRequest: {"links":[{"icon":"ri-github-fill","url":"https://github.com/arcenciel"}]},
  } satisfies UpdateMySocialLinksOperationRequest;

  try {
    const data = await api.updateMySocialLinks(body);
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
| **updateMySocialLinksRequest** | [UpdateMySocialLinksRequest](UpdateMySocialLinksRequest.md) |  | |

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
| **200** | Social links updated. |  * X-Request-ID -  <br>  |
| **400** | Bad request. |  * X-Request-ID -  <br>  |
| **401** | Unauthorized. |  * X-Request-ID -  <br>  |
| **403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
| **429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
| **500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
