# CollectionPermissions

Fields describing collection permissions in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_contribute** | **bool** | Whether can contribute applies to this collection permissions. |
**can_manage_collaborators** | **bool** | Whether can manage collaborators applies to this collection permissions. |
**is_collaborator** | **bool** | Whether is collaborator applies to this collection permissions. |
**is_owner** | **bool** | Whether is owner applies to this collection permissions. |

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
