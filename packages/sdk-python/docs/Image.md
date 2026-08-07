# Image

Images item used by the Arc en Ciel API contract.

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
**id** | **int** | Id accepted or returned by this contract. | [optional] 
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


