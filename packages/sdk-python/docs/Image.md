# Image

Structured images item details for this images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfg** | **float** | Numeric cfg reported for this images item. | [optional]
**created_at** | **datetime** | UTC timestamp when this images item was created. Format: date-time. | [optional]
**description** | **str** | User-facing description of this images item; it may contain an empty string when no description was supplied. | [optional]
**dislike_count** | **float** | Number of dislike records represented by this images item. | [optional]
**file_name** | **str** | Human-readable file name for this images item; it is not a stable identifier. | [optional]
**file_path** | **str** | Server-provided path for the file path associated with this images item; treat it as opaque. | [optional]
**heart_count** | **float** | Number of heart records represented by this images item. | [optional]
**id** | **int** | Stable identifier for the images item; use it in subsequent API calls instead of a display name. | [optional]
**like_count** | **float** | Number of like records represented by this images item. | [optional]
**metadata** | **str** | Metadata associated with this images item; preserve server-returned values when passing them to another operation. | [optional]
**negative_prompt** | **str** | Negative Prompt text associated with generation of this images item; availability depends on visibility and privacy rules. | [optional]
**prompt** | **str** | Prompt text associated with generation of this images item; availability depends on visibility and privacy rules. | [optional]
**rating** | **str** | Content-safety rating assigned to this images item; callers must still apply their own audience policy. | [optional]
**sampler** | **str** | Sampler associated with this images item; preserve server-returned values when passing them to another operation. | [optional]
**seed** | **float** | Numeric seed reported for this images item. | [optional]
**steps** | **float** | Numeric steps reported for this images item. | [optional]
**title** | **str** | Display title shown to users for this images item. | [optional]
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this images item. Format: date-time. | [optional]

## Example

```python
from arcenciel.generated.models.image import Image

# TODO update the JSON string below
json = "{}"
# create an instance of Image from a JSON string
image_instance = Image.from_json(json)
# print the JSON string representation of the object
print(Image.to_json())

# convert the object into a dict
image_dict = image_instance.to_dict()
# create an instance of Image from a dict
image_from_dict = Image.from_dict(image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
