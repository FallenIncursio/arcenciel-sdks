# ModelDescriptionImage

Description Images item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At accepted or returned by this contract. | [optional] 
**file_name** | **str** | File Name accepted or returned by this contract. | [optional] 
**file_path** | **str** | File Path accepted or returned by this contract. | [optional] 
**height** | **int** | Height accepted or returned by this contract. | [optional] 
**id** | **int** | Id accepted or returned by this contract. | [optional] 
**model_id** | **int** | Model Id accepted or returned by this contract. | [optional] 
**rating** | **str** | Rating accepted or returned by this contract. | [optional] 
**variants** | [**List[ModelDescriptionImageVariantsInner]**](ModelDescriptionImageVariantsInner.md) | Variants accepted or returned by this contract. | [optional] 
**width** | **int** | Width accepted or returned by this contract. | [optional] 

## Example

```python
from arcenciel.generated.models.model_description_image import ModelDescriptionImage

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDescriptionImage from a JSON string
model_description_image_instance = ModelDescriptionImage.from_json(json)
# print the JSON string representation of the object
print(ModelDescriptionImage.to_json())

# convert the object into a dict
model_description_image_dict = model_description_image_instance.to_dict()
# create an instance of ModelDescriptionImage from a dict
model_description_image_from_dict = ModelDescriptionImage.from_dict(model_description_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


