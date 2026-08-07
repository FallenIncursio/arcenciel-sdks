# GetImagesBulk200ResponseImagesInner

Images item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfg** | **float** | Cfg accepted or returned by this contract. | [optional]
**file_path** | **str** | File Path accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**negative_prompt** | **str** | Negative Prompt accepted or returned by this contract. | [optional]
**prompt** | **str** | Prompt accepted or returned by this contract. | [optional]
**sampler** | **str** | Sampler accepted or returned by this contract. | [optional]
**seed** | **str** | Seed accepted or returned by this contract. | [optional]
**steps** | **float** | Steps accepted or returned by this contract. | [optional]

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
