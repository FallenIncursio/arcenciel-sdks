# UpdateVideoRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfg** | **float** | Cfg accepted or returned by this contract. | [optional]
**description** | **str** | Description accepted or returned by this contract. | [optional]
**negative_prompt** | **str** | Negative Prompt accepted or returned by this contract. | [optional]
**prompt** | **str** | Prompt accepted or returned by this contract. | [optional]
**rating** | **str** | safe, questionable, sensitive or explicit | [optional]
**sampler** | **str** | Sampler accepted or returned by this contract. | [optional]
**seed** | **str** | Seed accepted or returned by this contract. | [optional]
**steps** | **float** | Steps accepted or returned by this contract. | [optional]
**tags** | **str** | Comma-separated list of tags. | [optional]
**title** | **str** | Title accepted or returned by this contract. | [optional]

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
