# AddCollectionCollaboratorRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | Role accepted or returned by this contract. | [optional]
**user_id** | **int** | User Id accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.add_collection_collaborator_request import AddCollectionCollaboratorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddCollectionCollaboratorRequest from a JSON string
add_collection_collaborator_request_instance = AddCollectionCollaboratorRequest.from_json(json)
# print the JSON string representation of the object
print(AddCollectionCollaboratorRequest.to_json())

# convert the object into a dict
add_collection_collaborator_request_dict = add_collection_collaborator_request_instance.to_dict()
# create an instance of AddCollectionCollaboratorRequest from a dict
add_collection_collaborator_request_from_dict = AddCollectionCollaboratorRequest.from_dict(add_collection_collaborator_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
