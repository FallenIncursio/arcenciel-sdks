# ReorderModelVersionVideosRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**video_ids** | **List[int]** | New order of video IDs. | [optional]

## Example

```python
from arcenciel.generated.models.reorder_model_version_videos_request import ReorderModelVersionVideosRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReorderModelVersionVideosRequest from a JSON string
reorder_model_version_videos_request_instance = ReorderModelVersionVideosRequest.from_json(json)
# print the JSON string representation of the object
print(ReorderModelVersionVideosRequest.to_json())

# convert the object into a dict
reorder_model_version_videos_request_dict = reorder_model_version_videos_request_instance.to_dict()
# create an instance of ReorderModelVersionVideosRequest from a dict
reorder_model_version_videos_request_from_dict = ReorderModelVersionVideosRequest.from_dict(reorder_model_version_videos_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
