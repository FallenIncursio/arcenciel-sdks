# arcenciel.generated.FeedbackApi

All URIs are relative to *https://arcenciel.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_feedback**](FeedbackApi.md#create_feedback) | **POST** /api/feedback | Submit a feedback item
[**delete_feedback**](FeedbackApi.md#delete_feedback) | **DELETE** /api/feedback/{publicId} | Delete one feedback item
[**download_feedback_attachment**](FeedbackApi.md#download_feedback_attachment) | **GET** /api/feedback/{publicId}/attachments/{attachmentId} | View or download one feedback attachment
[**get_feedback**](FeedbackApi.md#get_feedback) | **GET** /api/feedback/{publicId} | Get one feedback item
[**list_my_feedback**](FeedbackApi.md#list_my_feedback) | **GET** /api/feedback/me | List feedback submitted by the current user


# **create_feedback**
> DeveloperFeedback create_feedback(category, description, title, idempotency_key=idempotency_key, attachments=attachments, contact_discord=contact_discord, source=source)

**Synchronous variant:** `create_feedback_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Submit a feedback item

Submit authenticated product feedback with up to six validated attachments. Reuse an Idempotency-Key and identical multipart payload when retrying an ambiguous request.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_feedback import DeveloperFeedback
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
    api_instance = arcenciel.generated.FeedbackApi(api_client)
    category = 'category_example' # str | Feedback category. Known values: BUG, FEATURE, UX, PERFORMANCE, MODERATION, OTHER. Clients must tolerate future values.
    description = 'description_example' # str | Detailed feedback and reproduction context.
    title = 'title_example' # str | Short reproducible feedback title.
    idempotency_key = 'request-018f47f2-97e2-7a32-a693-3b1bc30c6ca8' # str | Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. (optional)
    attachments = None # List[bytes] | Optional validated screenshots, documents, archives, or short media evidence. (optional)
    contact_discord = 'contact_discord_example' # str | Optional reporter contact hint. (optional)
    source = 'source_example' # str | Related HTTPS URL or Arc en Ciel path. (optional)

    try:
        # Submit a feedback item
        api_response = await api_instance.create_feedback(category, description, title, idempotency_key=idempotency_key, attachments=attachments, contact_discord=contact_discord, source=source)
        print("The response of FeedbackApi->create_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->create_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **str**| Feedback category. Known values: BUG, FEATURE, UX, PERFORMANCE, MODERATION, OTHER. Clients must tolerate future values. |
 **description** | **str**| Detailed feedback and reproduction context. |
 **title** | **str**| Short reproducible feedback title. |
 **idempotency_key** | **str**| Visible ASCII key, 1-128 characters. Successful responses are retained per caller, method, and target path for 24 hours. | [optional]
 **attachments** | **List[bytes]**| Optional validated screenshots, documents, archives, or short media evidence. | [optional]
 **contact_discord** | **str**| Optional reporter contact hint. | [optional]
 **source** | **str**| Related HTTPS URL or Arc en Ciel path. | [optional]

### Return type

[**DeveloperFeedback**](DeveloperFeedback.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Feedback created |  * Idempotency-Replayed - True when the original successful response was replayed for this Idempotency-Key. <br>  * X-Request-ID -  <br>  |
**400** | Invalid payload |  * X-Request-ID -  <br>  |
**401** | Unauthorized |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**409** | The idempotency key conflicts with another payload or is still in progress. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |
**503** | The idempotency service is temporarily unavailable; retry later with the same key. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_feedback**
> DeveloperFeedbackDeleteResponse delete_feedback(public_id)

**Synchronous variant:** `delete_feedback_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete one feedback item

Delete a feedback case owned by the authenticated caller, including its stored attachment files. Staff may delete a case through the same audited operation.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_feedback_delete_response import DeveloperFeedbackDeleteResponse
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
    api_instance = arcenciel.generated.FeedbackApi(api_client)
    public_id = 'FB-9A2C13' # str | Public Id provided in the path.

    try:
        # Delete one feedback item
        api_response = await api_instance.delete_feedback(public_id)
        print("The response of FeedbackApi->delete_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->delete_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **public_id** | **str**| Public Id provided in the path. |

### Return type

[**DeveloperFeedbackDeleteResponse**](DeveloperFeedbackDeleteResponse.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Feedback deleted |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized |  * X-Request-ID -  <br>  |
**403** | Forbidden |  * X-Request-ID -  <br>  |
**404** | Feedback not found |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_feedback_attachment**
> bytes download_feedback_attachment(public_id, attachment_id, download=download)

**Synchronous variant:** `download_feedback_attachment_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

View or download one feedback attachment

Stream a non-expired feedback attachment to the original reporter or staff. Honor the returned media type and Content-Disposition filename; attachment URLs are private.

### Example

* Api Key Authentication (sessionCookieAuth):
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
    api_instance = arcenciel.generated.FeedbackApi(api_client)
    public_id = 'FB-9A2C13' # str | Public Id provided in the path.
    attachment_id = 'ev-01HZX3' # str | Attachment Id provided in the path.
    download = '1' # str | Set to 1, true, or yes to request attachment disposition instead of inline preview. (optional)

    try:
        # View or download one feedback attachment
        api_response = await api_instance.download_feedback_attachment(public_id, attachment_id, download=download)
        print("The response of FeedbackApi->download_feedback_attachment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->download_feedback_attachment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **public_id** | **str**| Public Id provided in the path. |
 **attachment_id** | **str**| Attachment Id provided in the path. |
 **download** | **str**| Set to 1, true, or yes to request attachment disposition instead of inline preview. | [optional]

### Return type

**bytes**

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream, application/pdf, application/x-7z-compressed, application/x-rar-compressed, application/zip, image/gif, image/jpeg, image/png, image/webp, text/markdown, text/plain, video/mp4, video/quicktime, video/webm

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Complete private attachment stream. |  * Accept-Ranges - Present for directly streamed MP4 and WebM assets. <br>  * Content-Disposition -  <br>  * X-Request-ID -  <br>  |
**206** | Requested byte range of the private attachment. |  * Content-Disposition -  <br>  * Content-Range - Returned byte range and complete attachment size. <br>  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized |  * X-Request-ID -  <br>  |
**403** | Forbidden |  * X-Request-ID -  <br>  |
**404** | Attachment not found |  * X-Request-ID -  <br>  |
**410** | Attachment expired |  * X-Request-ID -  <br>  |
**416** | Requested byte range is not satisfiable. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_feedback**
> DeveloperFeedback get_feedback(public_id)

**Synchronous variant:** `get_feedback_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get one feedback item

Return one feedback case to its reporter or staff. Reporter contact data is case-bound and internal moderation notes remain null for ordinary callers.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_feedback import DeveloperFeedback
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
    api_instance = arcenciel.generated.FeedbackApi(api_client)
    public_id = 'FB-9A2C13' # str | Public Id provided in the path.

    try:
        # Get one feedback item
        api_response = await api_instance.get_feedback(public_id)
        print("The response of FeedbackApi->get_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->get_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **public_id** | **str**| Public Id provided in the path. |

### Return type

[**DeveloperFeedback**](DeveloperFeedback.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Feedback detail |  * X-Request-ID -  <br>  |
**400** | The request is malformed or fails operation-specific validation. |  * X-Request-ID -  <br>  |
**401** | Unauthorized |  * X-Request-ID -  <br>  |
**403** | Forbidden |  * X-Request-ID -  <br>  |
**404** | Feedback not found |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_my_feedback**
> List[DeveloperFeedback] list_my_feedback()

**Synchronous variant:** `list_my_feedback_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List feedback submitted by the current user

List up to 100 feedback cases submitted by the authenticated caller. Other users’ cases and staff-only internal notes are never returned.

### Example

* Api Key Authentication (sessionCookieAuth):
* Api Key Authentication (apiKeyAuth):
* Bearer (JWT) Authentication (bearerAuth):

```python
import arcenciel.generated
from arcenciel.generated.models.developer_feedback import DeveloperFeedback
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
    api_instance = arcenciel.generated.FeedbackApi(api_client)

    try:
        # List feedback submitted by the current user
        api_response = await api_instance.list_my_feedback()
        print("The response of FeedbackApi->list_my_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->list_my_feedback: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[DeveloperFeedback]**](DeveloperFeedback.md)

### Authorization

[sessionCookieAuth](../README.md#sessionCookieAuth), [apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Feedback list |  * X-Request-ID -  <br>  |
**401** | Unauthorized |  * X-Request-ID -  <br>  |
**403** | API key is valid but does not include the required scope. |  * X-Request-ID -  <br>  |
**429** | The request exceeded an application or edge rate limit. |  * RateLimit-Limit -  <br>  * RateLimit-Policy -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Retry-After -  <br>  * X-Request-ID -  <br>  |
**500** | Unexpected server error. |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
