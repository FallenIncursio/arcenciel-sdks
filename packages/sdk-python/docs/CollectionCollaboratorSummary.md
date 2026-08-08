# CollectionCollaboratorSummary

Fields describing collection collaborator summary in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Stable identifier for the collection collaborator summary; use it in subsequent API calls instead of a display name. Minimum: 1. |
**role** | **str** | Current collection collaborator role. Clients must tolerate new roles. |
**user** | [**DeveloperUserSummary**](DeveloperUserSummary.md) |  |
**user_id** | **int** | Stable identifier for the user; use it in subsequent API calls instead of a display name. Minimum: 1. | [optional]

## Example

```python
from arcenciel.generated.models.collection_collaborator_summary import CollectionCollaboratorSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionCollaboratorSummary from a JSON string
collection_collaborator_summary_instance = CollectionCollaboratorSummary.from_json(json)
# print the JSON string representation of the object
print(CollectionCollaboratorSummary.to_json())

# convert the object into a dict
collection_collaborator_summary_dict = collection_collaborator_summary_instance.to_dict()
# create an instance of CollectionCollaboratorSummary from a dict
collection_collaborator_summary_from_dict = CollectionCollaboratorSummary.from_dict(collection_collaborator_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
