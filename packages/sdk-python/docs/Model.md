# Model

Model used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Sanitized rich HTML model description. Existing legacy Markdown remains render-compatible during migration. | [optional] 
**description_images** | [**List[ModelDescriptionImage]**](ModelDescriptionImage.md) | Description Images accepted or returned by this contract. | [optional] 
**id** | **int** | Id accepted or returned by this contract. | [optional] 
**tags** | [**List[Tag]**](Tag.md) | Tags accepted or returned by this contract. | [optional] 
**title** | **str** | Title accepted or returned by this contract. | [optional] 
**type** | **str** | Type accepted or returned by this contract. | [optional] 
**uploader** | [**User**](User.md) |  | [optional] 
**uploader_id** | **int** | Uploader Id accepted or returned by this contract. | [optional] 
**versions** | [**List[Version]**](Version.md) | Versions accepted or returned by this contract. | [optional] 

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


