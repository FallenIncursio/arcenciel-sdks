# ModelVersionMediaPreviewResponse

Lightweight visible media grouped by model version for carousel and picker integrations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Maximum entries returned per version after server clamping. |
**model_id** | **int** | Model whose versions were queried. |
**versions** | [**List[ModelVersionMediaPreviewResponseVersionsInner]**](ModelVersionMediaPreviewResponseVersionsInner.md) | Ordered versions entries included with this model version media preview response; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.model_version_media_preview_response import ModelVersionMediaPreviewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionMediaPreviewResponse from a JSON string
model_version_media_preview_response_instance = ModelVersionMediaPreviewResponse.from_json(json)
# print the JSON string representation of the object
print(ModelVersionMediaPreviewResponse.to_json())

# convert the object into a dict
model_version_media_preview_response_dict = model_version_media_preview_response_instance.to_dict()
# create an instance of ModelVersionMediaPreviewResponse from a dict
model_version_media_preview_response_from_dict = ModelVersionMediaPreviewResponse.from_dict(model_version_media_preview_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
