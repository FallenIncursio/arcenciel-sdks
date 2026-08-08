# CollabPermissions

Fields describing collab permissions in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_accept_invite** | **bool** | Whether can accept invite applies to this collab permissions. |
**can_cancel_own_request** | **bool** | Whether can cancel own request applies to this collab permissions. |
**can_decline_invite** | **bool** | Whether can decline invite applies to this collab permissions. |
**can_edit_own_participant** | **bool** | Whether can edit own participant applies to this collab permissions. |
**can_manage** | **bool** | Whether can manage applies to this collab permissions. |
**can_request_join** | **bool** | Whether can request join applies to this collab permissions. |

## Example

```python
from arcenciel.generated.models.collab_permissions import CollabPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of CollabPermissions from a JSON string
collab_permissions_instance = CollabPermissions.from_json(json)
# print the JSON string representation of the object
print(CollabPermissions.to_json())

# convert the object into a dict
collab_permissions_dict = collab_permissions_instance.to_dict()
# create an instance of CollabPermissions from a dict
collab_permissions_from_dict = CollabPermissions.from_dict(collab_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
