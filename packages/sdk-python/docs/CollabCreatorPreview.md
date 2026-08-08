# CollabCreatorPreview

Fields describing collab creator preview in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Human-readable display name for this collab creator preview; it is not a stable identifier. |
**local_user** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Local User associated with this collab creator preview; preserve server-returned values when passing them to another operation. | [optional]

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
