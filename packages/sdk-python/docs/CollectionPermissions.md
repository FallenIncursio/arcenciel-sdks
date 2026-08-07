# CollectionPermissions

Collection Permissions used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_contribute** | **bool** | Can Contribute accepted or returned by this contract. |
**can_manage_collaborators** | **bool** | Can Manage Collaborators accepted or returned by this contract. |
**is_collaborator** | **bool** | Is Collaborator accepted or returned by this contract. |
**is_owner** | **bool** | Is Owner accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.collection_permissions import CollectionPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionPermissions from a JSON string
collection_permissions_instance = CollectionPermissions.from_json(json)
# print the JSON string representation of the object
print(CollectionPermissions.to_json())

# convert the object into a dict
collection_permissions_dict = collection_permissions_instance.to_dict()
# create an instance of CollectionPermissions from a dict
collection_permissions_from_dict = CollectionPermissions.from_dict(collection_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
