# ModelVersionMediaPreviewEntry

Entries item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ModelVersionMediaPreviewEntryData**](ModelVersionMediaPreviewEntryData.md) |  |
**kind** | **str** | Media kind. Current values are image and video; clients must tolerate additions. |
**origin** | **str** | Media origin. Current values are version and community; clients must tolerate additions. |

## Example

```python
from arcenciel.generated.models.model_version_media_preview_entry import ModelVersionMediaPreviewEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionMediaPreviewEntry from a JSON string
model_version_media_preview_entry_instance = ModelVersionMediaPreviewEntry.from_json(json)
# print the JSON string representation of the object
print(ModelVersionMediaPreviewEntry.to_json())

# convert the object into a dict
model_version_media_preview_entry_dict = model_version_media_preview_entry_instance.to_dict()
# create an instance of ModelVersionMediaPreviewEntry from a dict
model_version_media_preview_entry_from_dict = ModelVersionMediaPreviewEntry.from_dict(model_version_media_preview_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
