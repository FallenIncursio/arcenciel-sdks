# ModelVersionResourcePreviewImage

Preview Image used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_path** | **str** | File Path accepted or returned by this contract. |
**height** | **int** | Height accepted or returned by this contract. |
**id** | **int** | Id accepted or returned by this contract. |
**rating** | **str** | Rating accepted or returned by this contract. |
**variants** | **List[object]** | Generated image variants as stored for the public image response. |
**width** | **int** | Width accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.model_version_resource_preview_image import ModelVersionResourcePreviewImage

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionResourcePreviewImage from a JSON string
model_version_resource_preview_image_instance = ModelVersionResourcePreviewImage.from_json(json)
# print the JSON string representation of the object
print(ModelVersionResourcePreviewImage.to_json())

# convert the object into a dict
model_version_resource_preview_image_dict = model_version_resource_preview_image_instance.to_dict()
# create an instance of ModelVersionResourcePreviewImage from a dict
model_version_resource_preview_image_from_dict = ModelVersionResourcePreviewImage.from_dict(model_version_resource_preview_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
