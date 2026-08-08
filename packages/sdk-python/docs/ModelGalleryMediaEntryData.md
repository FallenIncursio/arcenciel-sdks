# ModelGalleryMediaEntryData

Image or video metadata for this gallery entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfg** | **float** | Numeric cfg reported for this images item. | [optional]
**created_at** | **datetime** | UTC timestamp when this video was created. Format: date-time. | [optional]
**description** | **str** | User-facing description of this video; it may contain an empty string when no description was supplied. | [optional]
**dislike_count** | **float** | Number of dislike records represented by this images item. | [optional]
**file_name** | **str** | Human-readable file name for this images item; it is not a stable identifier. | [optional]
**file_path** | **str** | Server-provided path for the file path associated with this video; treat it as opaque. | [optional]
**heart_count** | **float** | Number of heart records represented by this images item. | [optional]
**id** | **str** | Stable identifier for the video; use it in subsequent API calls instead of a display name. | [optional]
**like_count** | **float** | Number of like records represented by this images item. | [optional]
**metadata** | **str** | Metadata associated with this images item; preserve server-returned values when passing them to another operation. | [optional]
**negative_prompt** | **str** | Negative Prompt text associated with generation of this images item; availability depends on visibility and privacy rules. | [optional]
**prompt** | **str** | Prompt text associated with generation of this images item; availability depends on visibility and privacy rules. | [optional]
**rating** | **str** | Content-safety rating assigned to this images item; callers must still apply their own audience policy. | [optional]
**sampler** | **str** | Sampler associated with this images item; preserve server-returned values when passing them to another operation. | [optional]
**seed** | **float** | Numeric seed reported for this images item. | [optional]
**steps** | **float** | Numeric steps reported for this images item. | [optional]
**title** | **str** | Display title shown to users for this video. | [optional]
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this video. Format: date-time. | [optional]
**dislike** | **float** | Numeric dislike reported for this video. | [optional]
**heart** | **float** | Numeric heart reported for this video. | [optional]
**like** | **float** | Numeric like reported for this video. | [optional]
**stream_manifest_path** | **str** | Server-provided path for the stream manifest path associated with this video; treat it as opaque. | [optional]
**tags** | **List[str]** | Ordered tags entries included with this video; an empty list means none are available. | [optional]
**uploader** | [**User**](User.md) |  | [optional]

## Example

```python
from arcenciel.generated.models.model_gallery_media_entry_data import ModelGalleryMediaEntryData

# TODO update the JSON string below
json = "{}"
# create an instance of ModelGalleryMediaEntryData from a JSON string
model_gallery_media_entry_data_instance = ModelGalleryMediaEntryData.from_json(json)
# print the JSON string representation of the object
print(ModelGalleryMediaEntryData.to_json())

# convert the object into a dict
model_gallery_media_entry_data_dict = model_gallery_media_entry_data_instance.to_dict()
# create an instance of ModelGalleryMediaEntryData from a dict
model_gallery_media_entry_data_from_dict = ModelGalleryMediaEntryData.from_dict(model_gallery_media_entry_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
