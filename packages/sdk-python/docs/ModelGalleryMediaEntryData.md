# ModelGalleryMediaEntryData

Image or video metadata for this gallery entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfg** | **float** | Cfg accepted or returned by this contract. | [optional] 
**created_at** | **datetime** | Created At accepted or returned by this contract. | [optional] 
**description** | **str** | Description accepted or returned by this contract. | [optional] 
**dislike_count** | **float** | Dislike Count accepted or returned by this contract. | [optional] 
**file_name** | **str** | File Name accepted or returned by this contract. | [optional] 
**file_path** | **str** | File Path accepted or returned by this contract. | [optional] 
**heart_count** | **float** | Heart Count accepted or returned by this contract. | [optional] 
**id** | **str** | Id accepted or returned by this contract. | [optional] 
**like_count** | **float** | Like Count accepted or returned by this contract. | [optional] 
**metadata** | **str** | Metadata accepted or returned by this contract. | [optional] 
**negative_prompt** | **str** | Negative Prompt accepted or returned by this contract. | [optional] 
**prompt** | **str** | Prompt accepted or returned by this contract. | [optional] 
**rating** | **str** | Rating accepted or returned by this contract. | [optional] 
**sampler** | **str** | Sampler accepted or returned by this contract. | [optional] 
**seed** | **float** | Seed accepted or returned by this contract. | [optional] 
**steps** | **float** | Steps accepted or returned by this contract. | [optional] 
**title** | **str** | Title accepted or returned by this contract. | [optional] 
**updated_at** | **datetime** | Updated At accepted or returned by this contract. | [optional] 
**dislike** | **float** | Dislike accepted or returned by this contract. | [optional] 
**heart** | **float** | Heart accepted or returned by this contract. | [optional] 
**like** | **float** | Like accepted or returned by this contract. | [optional] 
**stream_manifest_path** | **str** | Stream Manifest Path accepted or returned by this contract. | [optional] 
**tags** | **List[str]** | Tags accepted or returned by this contract. | [optional] 
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


