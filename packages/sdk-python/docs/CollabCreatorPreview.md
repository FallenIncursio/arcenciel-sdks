# CollabCreatorPreview

Collab Creator Preview used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display Name accepted or returned by this contract. |
**local_user** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Local User accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.collab_creator_preview import CollabCreatorPreview

# TODO update the JSON string below
json = "{}"
# create an instance of CollabCreatorPreview from a JSON string
collab_creator_preview_instance = CollabCreatorPreview.from_json(json)
# print the JSON string representation of the object
print(CollabCreatorPreview.to_json())

# convert the object into a dict
collab_creator_preview_dict = collab_creator_preview_instance.to_dict()
# create an instance of CollabCreatorPreview from a dict
collab_creator_preview_from_dict = CollabCreatorPreview.from_dict(collab_creator_preview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
