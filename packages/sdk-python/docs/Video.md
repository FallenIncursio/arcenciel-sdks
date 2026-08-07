# Video

Video used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At accepted or returned by this contract. | [optional]
**description** | **str** | Description accepted or returned by this contract. | [optional]
**dislike** | **float** | Dislike accepted or returned by this contract. | [optional]
**file_path** | **str** | File Path accepted or returned by this contract. | [optional]
**heart** | **float** | Heart accepted or returned by this contract. | [optional]
**id** | **str** | Id accepted or returned by this contract. | [optional]
**like** | **float** | Like accepted or returned by this contract. | [optional]
**stream_manifest_path** | **str** | Stream Manifest Path accepted or returned by this contract. | [optional]
**tags** | **List[str]** | Tags accepted or returned by this contract. | [optional]
**title** | **str** | Title accepted or returned by this contract. | [optional]
**updated_at** | **datetime** | Updated At accepted or returned by this contract. | [optional]
**uploader** | [**User**](User.md) |  | [optional]

## Example

```python
from arcenciel.generated.models.video import Video

# TODO update the JSON string below
json = "{}"
# create an instance of Video from a JSON string
video_instance = Video.from_json(json)
# print the JSON string representation of the object
print(Video.to_json())

# convert the object into a dict
video_dict = video_instance.to_dict()
# create an instance of Video from a dict
video_from_dict = Video.from_dict(video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
