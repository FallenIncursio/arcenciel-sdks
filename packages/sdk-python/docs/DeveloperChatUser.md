# DeveloperChatUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badges** | [**List[DeveloperChatBadge]**](DeveloperChatBadge.md) |  |
**id** | **int** |  |
**namecard_preference** | **str** |  |
**profile_picture** | **str** |  |
**profile_picture_rating** | **str** |  |
**role** | **str** | Current public account role. Clients must tolerate future values. |
**username** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_user import DeveloperChatUser

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatUser from a JSON string
developer_chat_user_instance = DeveloperChatUser.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatUser.to_json())

# convert the object into a dict
developer_chat_user_dict = developer_chat_user_instance.to_dict()
# create an instance of DeveloperChatUser from a dict
developer_chat_user_from_dict = DeveloperChatUser.from_dict(developer_chat_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
