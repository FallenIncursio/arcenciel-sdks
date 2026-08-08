# DownloadGeneratorVideoJob403Response

403 response for api generator video jobs id download value documented for this operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Human-readable error message. |
**error_code** | **str** | Stable machine-readable error code. |
**safety_reason** | **str** | Current safety reason. |
**safety_status** | **str** | Current blocking safety state. |
**details** | **Dict[str, object]** | Optional structured error details. | [optional]
**message** | **str** | Additional human-readable context. | [optional]
**retryable** | **bool** | Whether retrying the request may succeed. | [optional]

## Example

```python
from arcenciel.generated.models.download_generator_video_job403_response import DownloadGeneratorVideoJob403Response

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadGeneratorVideoJob403Response from a JSON string
download_generator_video_job403_response_instance = DownloadGeneratorVideoJob403Response.from_json(json)
# print the JSON string representation of the object
print(DownloadGeneratorVideoJob403Response.to_json())

# convert the object into a dict
download_generator_video_job403_response_dict = download_generator_video_job403_response_instance.to_dict()
# create an instance of DownloadGeneratorVideoJob403Response from a dict
download_generator_video_job403_response_from_dict = DownloadGeneratorVideoJob403Response.from_dict(download_generator_video_job403_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
