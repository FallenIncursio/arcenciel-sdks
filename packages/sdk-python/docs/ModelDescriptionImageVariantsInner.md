# ModelDescriptionImageVariantsInner

Structured variants item details for this variants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes** | **int** | Size of the associated variants item content in the unit indicated by the field name. | [optional]
**format** | **str** | Format associated with this variants item; preserve server-returned values when passing them to another operation. | [optional]
**height** | **int** | Numeric height reported for this variants item. | [optional]
**label** | **str** | Label associated with this variants item; preserve server-returned values when passing them to another operation. | [optional]
**path** | **str** | Server-provided path for the path associated with this variants item; treat it as opaque. | [optional]
**width** | **int** | Numeric width reported for this variants item. | [optional]

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
