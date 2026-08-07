# ModelVersionMediaPreviewResponseVersionsInner

Versions item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ModelVersionMediaPreviewEntry]**](ModelVersionMediaPreviewEntry.md) | Entries accepted or returned by this contract. |
**id** | **int** | Model version identifier. |

## Example

```python
from arcenciel.generated.models.model_version_media_preview_response_versions_inner import ModelVersionMediaPreviewResponseVersionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionMediaPreviewResponseVersionsInner from a JSON string
model_version_media_preview_response_versions_inner_instance = ModelVersionMediaPreviewResponseVersionsInner.from_json(json)
# print the JSON string representation of the object
print(ModelVersionMediaPreviewResponseVersionsInner.to_json())

# convert the object into a dict
model_version_media_preview_response_versions_inner_dict = model_version_media_preview_response_versions_inner_instance.to_dict()
# create an instance of ModelVersionMediaPreviewResponseVersionsInner from a dict
model_version_media_preview_response_versions_inner_from_dict = ModelVersionMediaPreviewResponseVersionsInner.from_dict(model_version_media_preview_response_versions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
