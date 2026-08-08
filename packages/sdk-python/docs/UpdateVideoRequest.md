# UpdateVideoRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfg** | **float** | Numeric cfg reported for this request payload. | [optional]
**description** | **str** | User-facing description of this request payload; it may contain an empty string when no description was supplied. | [optional]
**negative_prompt** | **str** | Negative Prompt text associated with generation of this request payload; availability depends on visibility and privacy rules. | [optional]
**prompt** | **str** | Prompt text associated with generation of this request payload; availability depends on visibility and privacy rules. | [optional]
**rating** | **str** | safe, questionable, sensitive or explicit | [optional]
**sampler** | **str** | Sampler associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]
**seed** | **str** | Seed associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]
**steps** | **float** | Numeric steps reported for this request payload. | [optional]
**tags** | **str** | Comma-separated list of tags. | [optional]
**title** | **str** | Display title shown to users for this request payload. | [optional]

## Example

```python
from arcenciel.generated.models.update_video_request import UpdateVideoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateVideoRequest from a JSON string
update_video_request_instance = UpdateVideoRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateVideoRequest.to_json())

# convert the object into a dict
update_video_request_dict = update_video_request_instance.to_dict()
# create an instance of UpdateVideoRequest from a dict
update_video_request_from_dict = UpdateVideoRequest.from_dict(update_video_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
