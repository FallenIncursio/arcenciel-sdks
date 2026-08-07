# ModelDescriptionImageVariantsInner

Variants item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes** | **int** | Bytes accepted or returned by this contract. | [optional] 
**format** | **str** | Format accepted or returned by this contract. | [optional] 
**height** | **int** | Height accepted or returned by this contract. | [optional] 
**label** | **str** | Label accepted or returned by this contract. | [optional] 
**path** | **str** | Path accepted or returned by this contract. | [optional] 
**width** | **int** | Width accepted or returned by this contract. | [optional] 

## Example

```python
from arcenciel.generated.models.model_description_image_variants_inner import ModelDescriptionImageVariantsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDescriptionImageVariantsInner from a JSON string
model_description_image_variants_inner_instance = ModelDescriptionImageVariantsInner.from_json(json)
# print the JSON string representation of the object
print(ModelDescriptionImageVariantsInner.to_json())

# convert the object into a dict
model_description_image_variants_inner_dict = model_description_image_variants_inner_instance.to_dict()
# create an instance of ModelDescriptionImageVariantsInner from a dict
model_description_image_variants_inner_from_dict = ModelDescriptionImageVariantsInner.from_dict(model_description_image_variants_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


