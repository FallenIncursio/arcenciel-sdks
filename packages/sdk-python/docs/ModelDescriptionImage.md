# ModelDescriptionImage

Structured description images item details for this description images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when this description images item was created. Format: date-time. | [optional]
**file_name** | **str** | Human-readable file name for this description images item; it is not a stable identifier. | [optional]
**file_path** | **str** | Server-provided path for the file path associated with this description images item; treat it as opaque. | [optional]
**height** | **int** | Numeric height reported for this description images item. | [optional]
**id** | **int** | Stable identifier for the description images item; use it in subsequent API calls instead of a display name. | [optional]
**model_id** | **int** | Stable identifier for the model; use it in subsequent API calls instead of a display name. | [optional]
**rating** | **str** | Content-safety rating assigned to this description images item; callers must still apply their own audience policy. | [optional]
**variants** | [**List[ModelDescriptionImageVariantsInner]**](ModelDescriptionImageVariantsInner.md) | Ordered variants entries included with this description images item; an empty list means none are available. | [optional]
**width** | **int** | Numeric width reported for this description images item. | [optional]

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
