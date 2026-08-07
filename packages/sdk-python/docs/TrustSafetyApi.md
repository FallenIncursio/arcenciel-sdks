# arcenciel.generated.TrustSafetyApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_illegal_content_notice**](TrustSafetyApi.md#create_illegal_content_notice) | **POST** /api/illegal-content-notices | Submit a public illegal-content notice
[**download_illegal_content_notice_attachment**](TrustSafetyApi.md#download_illegal_content_notice_attachment) | **GET** /api/illegal-content-notices/{publicId}/attachments/{attachmentId} | Download an evidence attachment for a notice
[**get_illegal_content_notice**](TrustSafetyApi.md#get_illegal_content_notice) | **GET** /api/illegal-content-notices/{publicId} | Retrieve a single illegal-content notice by case id
[**list_my_illegal_content_notices**](TrustSafetyApi.md#list_my_illegal_content_notices) | **GET** /api/illegal-content-notices/me | List the current user&#39;s recent illegal-content notices
[**report_image**](TrustSafetyApi.md#report_image) | **POST** /api/images/{id}/report | Report an image
[**report_model**](TrustSafetyApi.md#report_model) | **POST** /api/models/{id}/report | Report a model for moderation review
[**report_user_avatar**](TrustSafetyApi.md#report_user_avatar) | **POST** /api/users/{id}/profile-picture/report | Report a user&#39;s avatar for moderation
[**report_video**](TrustSafetyApi.md#report_video) | **POST** /api/videos/{id}/report | Report a video
[**request_illegal_content_notice_review**](TrustSafetyApi.md#request_illegal_content_notice_review) | **POST** /api/illegal-content-notices/{publicId}/review-request | Request another review for a finalized illegal-content notice


# **create_illegal_content_notice**
> DeveloperIllegalContentNoticeCreateResponse create_illegal_content_notice(create_illegal_content_notice_request, idempotency_key=idempotency_key)

**Synchronous variant:** `create_illegal_content_notice_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Submit a public illegal-content notice

Submit a good-faith illegal-content notice as a guest or authenticated caller with up to four evidence files. Authenticated retries may reuse an Idempotency-Key; guest clients must not automatically retry an ambiguous submission.

### Example

* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.create_illegal_content_notice_request import CreateIllegalContentNoticeRequest
from arcenciel.generated.models.developer_illegal_content_notice_create_response import DeveloperIllegalContentNoticeCreateResponse
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
    api_instance = arcenciel.generated.TrustSafetyApi(api_client)
    create_illegal_content_notice_request = {"category":"PRIVACY_OR_DOOXING","description":"The published image contains personal information without consent.","goodFaithConfirmed":true,"reporterEmail":"reporter@example.com","targetTypeHint":"IMAGE","targetUrl":"https://arcenciel.io/images/108"} # CreateIllegalContentNoticeRequest |
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Submit a public illegal-content notice
        api_response = await api_instance.create_illegal_content_notice(create_illegal_content_notice_request, idempotency_key=idempotency_key)
        print("The response of TrustSafetyApi->create_illegal_content_notice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustSafetyApi->create_illegal_content_notice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_illegal_content_notice_request** | [**CreateIllegalContentNoticeRequest**](CreateIllegalContentNoticeRequest.md)|  |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperIllegalContentNoticeCreateResponse**](DeveloperIllegalContentNoticeCreateResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Notice accepted and a trackable case identifier was created. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Missing or invalid notice fields. |  * X-Request-ID -  <br>  |
**401** | Authentication failed when an invalid bearer token was supplied. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | Too many notice submissions from the same client. |  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_illegal_content_notice_attachment**
> bytes download_illegal_content_notice_attachment(public_id, attachment_id, access_token=access_token)

**Synchronous variant:** `download_illegal_content_notice_attachment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Download an evidence attachment for a notice

Download a private evidence attachment after applying the same reporter, affected-owner, staff, or guest-code visibility decision as the parent case. Do not persist guest access codes in logs.

### Example

* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
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
    api_instance = arcenciel.generated.TrustSafetyApi(api_client)
    public_id = 'ICN-9A2C13' # str | Public case id returned when the notice was created.
    attachment_id = 'ev-01HZX3' # str | Attachment id from the notice detail payload.
    access_token = 'access_token_example' # str | Guest lookup secret. Never persist or emit this value in application logs. (optional)

    try:
        # Download an evidence attachment for a notice
        api_response = await api_instance.download_illegal_content_notice_attachment(public_id, attachment_id, access_token=access_token)
        print("The response of TrustSafetyApi->download_illegal_content_notice_attachment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustSafetyApi->download_illegal_content_notice_attachment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **public_id** | **str**| Public case id returned when the notice was created. |
 **attachment_id** | **str**| Attachment id from the notice detail payload. |
 **access_token** | **str**| Guest lookup secret. Never persist or emit this value in application logs. | [optional]

### Return type

**bytes**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/pdf, image/gif, image/jpeg, image/png, image/webp, text/plain, video/mp4, video/webm, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Complete private attachment stream. |  * Accept-Ranges - Present for directly streamed MP4 and WebM assets. <br>  * Content-Disposition -  <br>  * X-Request-ID -  <br>  |
**206** | Requested byte range of the private attachment. |  * Content-Disposition -  <br>  * Content-Range - Returned byte range and complete attachment size. <br>  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**403** | The requested attachment is not available to the current viewer. |  * X-Request-ID -  <br>  |
**404** | Notice or attachment not found. |  * X-Request-ID -  <br>  |
**416** | Requested byte range is not satisfiable. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_illegal_content_notice**
> DeveloperIllegalContentNoticeDetail get_illegal_content_notice(public_id, access_token=access_token)

**Synchronous variant:** `get_illegal_content_notice_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retrieve a single illegal-content notice by case id

Retrieve a case using the reporter account, affected-owner account, staff access, or the unguessable guest access code. The response is filtered for that viewer and never exposes staff-only contact or internal-note fields.

### Example

* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_illegal_content_notice_detail import DeveloperIllegalContentNoticeDetail
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
    api_instance = arcenciel.generated.TrustSafetyApi(api_client)
    public_id = 'ICN-9A2C13' # str | Public case id returned when the notice was created.
    access_token = 'access_token_example' # str | Guest lookup secret. Prefer authenticated access where possible because query strings may be logged by clients. (optional)

    try:
        # Retrieve a single illegal-content notice by case id
        api_response = await api_instance.get_illegal_content_notice(public_id, access_token=access_token)
        print("The response of TrustSafetyApi->get_illegal_content_notice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustSafetyApi->get_illegal_content_notice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **public_id** | **str**| Public case id returned when the notice was created. |
 **access_token** | **str**| Guest lookup secret. Prefer authenticated access where possible because query strings may be logged by clients. | [optional]

### Return type

[**DeveloperIllegalContentNoticeDetail**](DeveloperIllegalContentNoticeDetail.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Notice detail visible to the current viewer. |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**403** | The requested notice is not available to the current viewer. |  * X-Request-ID -  <br>  |
**404** | Notice not found. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_my_illegal_content_notices**
> List[DeveloperIllegalContentNoticeSummary] list_my_illegal_content_notices()

**Synchronous variant:** `list_my_illegal_content_notices_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List the current user's recent illegal-content notices

List the 25 most recent illegal-content notices linked to the authenticated reporter. Staff-only identity, evidence, and moderation fields are excluded.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_illegal_content_notice_summary import DeveloperIllegalContentNoticeSummary
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
    api_instance = arcenciel.generated.TrustSafetyApi(api_client)

    try:
        # List the current user's recent illegal-content notices
        api_response = await api_instance.list_my_illegal_content_notices()
        print("The response of TrustSafetyApi->list_my_illegal_content_notices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustSafetyApi->list_my_illegal_content_notices: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[DeveloperIllegalContentNoticeSummary]**](DeveloperIllegalContentNoticeSummary.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recent account-linked notices ordered by most recently updated first. |  * X-Request-ID -  <br>  |
**401** | Authentication required. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_image**
> DeveloperReportResponse report_image(id, idempotency_key=idempotency_key)

**Synchronous variant:** `report_image_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Report an image

Report one image for moderation. Reuse an Idempotency-Key for safe retries; a caller’s existing report returns 204 and no response body.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_report_response import DeveloperReportResponse
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
    api_instance = arcenciel.generated.TrustSafetyApi(api_client)
    id = 108 # int | ID of the image to report.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Report an image
        api_response = await api_instance.report_image(id, idempotency_key=idempotency_key)
        print("The response of TrustSafetyApi->report_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustSafetyApi->report_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the image to report. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperReportResponse**](DeveloperReportResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image reported successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**204** | You have already reported this image. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Image not found. |  * X-Request-ID -  <br>  |
**409** | Image already moderated and cannot be reported. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_model**
> DeveloperReportResponse report_model(id, report_model_request, idempotency_key=idempotency_key)

**Synchronous variant:** `report_model_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Report a model for moderation review

Report another creator’s model with a reason and moderator-facing context. Reuse an Idempotency-Key for retries; resolved targets reject further reports.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_report_response import DeveloperReportResponse
from arcenciel.generated.models.report_model_request import ReportModelRequest
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
    api_instance = arcenciel.generated.TrustSafetyApi(api_client)
    id = 108 # int | Model identifier.
    report_model_request = {"comment":"This upload impersonates another creator and copies their metadata.","reason":"MISLEADING","subReason":"IMPERSONATION"} # ReportModelRequest |
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Report a model for moderation review
        api_response = await api_instance.report_model(id, report_model_request, idempotency_key=idempotency_key)
        print("The response of TrustSafetyApi->report_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustSafetyApi->report_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Model identifier. |
 **report_model_request** | [**ReportModelRequest**](ReportModelRequest.md)|  |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperReportResponse**](DeveloperReportResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model reported successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**204** | This user has already reported the model. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid model id, missing reason, or comment too short. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | Reporting own model is not allowed. |  * X-Request-ID -  <br>  |
**404** | Model not found. |  * X-Request-ID -  <br>  |
**409** | Model already moderated; new reports are disabled. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_user_avatar**
> DeveloperReportResponse report_user_avatar(id, idempotency_key=idempotency_key)

**Synchronous variant:** `report_user_avatar_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Report a user's avatar for moderation

Report a user avatar for moderation. Reuse an Idempotency-Key for safe retries; a duplicate caller report returns 204 without a response body.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_report_response import DeveloperReportResponse
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
    api_instance = arcenciel.generated.TrustSafetyApi(api_client)
    id = 108 # int | Id provided in the path.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Report a user's avatar for moderation
        api_response = await api_instance.report_user_avatar(id, idempotency_key=idempotency_key)
        print("The response of TrustSafetyApi->report_user_avatar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustSafetyApi->report_user_avatar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id provided in the path. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperReportResponse**](DeveloperReportResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Avatar reported successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**204** | Avatar already reported by this user. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid user id. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_video**
> DeveloperReportResponse report_video(id, idempotency_key=idempotency_key)

**Synchronous variant:** `report_video_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Report a video

Report one video for moderation. Reuse an Idempotency-Key for safe retries; an existing caller report returns 204 and resolved targets reject new reports.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_report_response import DeveloperReportResponse
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
    api_instance = arcenciel.generated.TrustSafetyApi(api_client)
    id = 108 # int | ID of the video to report.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Report a video
        api_response = await api_instance.report_video(id, idempotency_key=idempotency_key)
        print("The response of TrustSafetyApi->report_video:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustSafetyApi->report_video: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of the video to report. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperReportResponse**](DeveloperReportResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Video reported successfully. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**204** | You have already reported this video. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**401** | Authentication credentials are missing or invalid. |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**404** | Video not found. |  * X-Request-ID -  <br>  |
**409** | Video already moderated and cannot be reported. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_illegal_content_notice_review**
> DeveloperNoticeReviewResponse request_illegal_content_notice_review(public_id, request_illegal_content_notice_review_request, access_token=access_token, idempotency_key=idempotency_key)

**Synchronous variant:** `request_illegal_content_notice_review_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Request another review for a finalized illegal-content notice

Reopen a finalized notice for review as its reporter or affected owner. Authenticated callers should reuse the same Idempotency-Key; guest callers use their access code and must not automatically retry.

### Example

* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_notice_review_response import DeveloperNoticeReviewResponse
from arcenciel.generated.models.request_illegal_content_notice_review_request import RequestIllegalContentNoticeReviewRequest
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
    api_instance = arcenciel.generated.TrustSafetyApi(api_client)
    public_id = 'ICN-9A2C13' # str | Public case id returned when the notice was created.
    request_illegal_content_notice_review_request = {"message":"The decision did not address the personal information visible in the attachment."} # RequestIllegalContentNoticeReviewRequest |
    access_token = 'example-access-token' # str | Optional guest access code if the request is not made while signed in. (optional)
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)

    try:
        # Request another review for a finalized illegal-content notice
        api_response = await api_instance.request_illegal_content_notice_review(public_id, request_illegal_content_notice_review_request, access_token=access_token, idempotency_key=idempotency_key)
        print("The response of TrustSafetyApi->request_illegal_content_notice_review:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrustSafetyApi->request_illegal_content_notice_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **public_id** | **str**| Public case id returned when the notice was created. |
 **request_illegal_content_notice_review_request** | [**RequestIllegalContentNoticeReviewRequest**](RequestIllegalContentNoticeReviewRequest.md)|  |
 **access_token** | **str**| Optional guest access code if the request is not made while signed in. | [optional]
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]

### Return type

[**DeveloperNoticeReviewResponse**](DeveloperNoticeReviewResponse.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Review request recorded and the case was reopened for moderator review. |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Review request message too short or invalid payload. |  * X-Request-ID -  <br>  |
**403** | The current viewer is not allowed to request review for this case. |  * X-Request-ID -  <br>  |
**404** | Notice not found. |  * X-Request-ID -  <br>  |
**409** | Review is only available after a final decision has been recorded. The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | Too many review requests from the same client. |  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
