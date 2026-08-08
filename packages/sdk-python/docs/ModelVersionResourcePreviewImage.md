# ModelVersionResourcePreviewImage

Structured preview image details for this required item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_path** | **str** | Server-provided path for the file path associated with this preview image; treat it as opaque. |
**height** | **int** | Numeric height reported for this preview image. |
**id** | **int** | Stable identifier for the preview image; use it in subsequent API calls instead of a display name. |
**rating** | **str** | Content-safety rating assigned to this preview image; callers must still apply their own audience policy. |
**variants** | **List[object]** | Generated image variants as stored for the public image response. |
**width** | **int** | Numeric width reported for this preview image. |

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
