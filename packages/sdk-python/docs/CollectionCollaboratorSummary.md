# CollectionCollaboratorSummary

Collection Collaborator Summary used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Id accepted or returned by this contract. |
**role** | **str** | Current collection collaborator role. Clients must tolerate new roles. |
**user** | [**DeveloperUserSummary**](DeveloperUserSummary.md) |  |
**user_id** | **int** | User Id accepted or returned by this contract. | [optional]

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
