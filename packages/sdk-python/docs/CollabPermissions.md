# CollabPermissions

Collab Permissions used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_accept_invite** | **bool** | Can Accept Invite accepted or returned by this contract. |
**can_cancel_own_request** | **bool** | Can Cancel Own Request accepted or returned by this contract. |
**can_decline_invite** | **bool** | Can Decline Invite accepted or returned by this contract. |
**can_edit_own_participant** | **bool** | Can Edit Own Participant accepted or returned by this contract. |
**can_manage** | **bool** | Can Manage accepted or returned by this contract. |
**can_request_join** | **bool** | Can Request Join accepted or returned by this contract. |

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
