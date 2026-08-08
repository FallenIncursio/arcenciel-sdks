# Video

Fields describing video in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when this video was created. Format: date-time. | [optional]
**description** | **str** | User-facing description of this video; it may contain an empty string when no description was supplied. | [optional]
**dislike** | **float** | Numeric dislike reported for this video. | [optional]
**file_path** | **str** | Server-provided path for the file path associated with this video; treat it as opaque. | [optional]
**heart** | **float** | Numeric heart reported for this video. | [optional]
**id** | **str** | Stable identifier for the video; use it in subsequent API calls instead of a display name. | [optional]
**like** | **float** | Numeric like reported for this video. | [optional]
**stream_manifest_path** | **str** | Server-provided path for the stream manifest path associated with this video; treat it as opaque. | [optional]
**tags** | **List[str]** | Ordered tags entries included with this video; an empty list means none are available. | [optional]
**title** | **str** | Display title shown to users for this video. | [optional]
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this video. Format: date-time. | [optional]
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
