# GetImagesBulk200ResponseImagesInner

Structured images item details for this images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfg** | **float** | Numeric cfg reported for this images item. | [optional]
**file_path** | **str** | Server-provided path for the file path associated with this images item; treat it as opaque. | [optional]
**id** | **int** | Stable identifier for the images item; use it in subsequent API calls instead of a display name. | [optional]
**negative_prompt** | **str** | Negative Prompt text associated with generation of this images item; availability depends on visibility and privacy rules. | [optional]
**prompt** | **str** | Prompt text associated with generation of this images item; availability depends on visibility and privacy rules. | [optional]
**sampler** | **str** | Sampler associated with this images item; preserve server-returned values when passing them to another operation. | [optional]
**seed** | **str** | Seed associated with this images item; preserve server-returned values when passing them to another operation. | [optional]
**steps** | **float** | Numeric steps reported for this images item. | [optional]

## Example

```python
from arcenciel.generated.models.get_images_bulk200_response_images_inner import GetImagesBulk200ResponseImagesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetImagesBulk200ResponseImagesInner from a JSON string
get_images_bulk200_response_images_inner_instance = GetImagesBulk200ResponseImagesInner.from_json(json)
# print the JSON string representation of the object
print(GetImagesBulk200ResponseImagesInner.to_json())

# convert the object into a dict
get_images_bulk200_response_images_inner_dict = get_images_bulk200_response_images_inner_instance.to_dict()
# create an instance of GetImagesBulk200ResponseImagesInner from a dict
get_images_bulk200_response_images_inner_from_dict = GetImagesBulk200ResponseImagesInner.from_dict(get_images_bulk200_response_images_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
