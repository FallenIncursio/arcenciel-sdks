# Model

Fields describing model in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Sanitized rich HTML model description. Existing legacy Markdown remains render-compatible during migration. | [optional]
**description_images** | [**List[ModelDescriptionImage]**](ModelDescriptionImage.md) | Ordered description images entries included with this model; an empty list means none are available. | [optional]
**id** | **int** | Stable identifier for the model; use it in subsequent API calls instead of a display name. | [optional]
**tags** | [**List[Tag]**](Tag.md) | Ordered tags entries included with this model; an empty list means none are available. | [optional]
**title** | **str** | Display title shown to users for this model. | [optional]
**type** | **str** | Discriminator identifying the kind of model; clients should tolerate future values. | [optional]
**uploader** | [**User**](User.md) |  | [optional]
**uploader_id** | **int** | Stable identifier for the uploader; use it in subsequent API calls instead of a display name. | [optional]
**versions** | [**List[Version]**](Version.md) | Ordered versions entries included with this model; an empty list means none are available. | [optional]

## Example

```python
from arcenciel.generated.models.model import Model

# TODO update the JSON string below
json = "{}"
# create an instance of Model from a JSON string
model_instance = Model.from_json(json)
# print the JSON string representation of the object
print(Model.to_json())

# convert the object into a dict
model_dict = model_instance.to_dict()
# create an instance of Model from a dict
model_from_dict = Model.from_dict(model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
