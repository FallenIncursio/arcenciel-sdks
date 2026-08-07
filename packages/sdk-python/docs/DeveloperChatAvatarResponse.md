# DeveloperChatAvatarResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_path** | **str** | Caller-bound signed group-avatar URL. Clients must not persist signed query parameters. |

## Example

```python
from arcenciel.generated.models.developer_chat_avatar_response import DeveloperChatAvatarResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatAvatarResponse from a JSON string
developer_chat_avatar_response_instance = DeveloperChatAvatarResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatAvatarResponse.to_json())

# convert the object into a dict
developer_chat_avatar_response_dict = developer_chat_avatar_response_instance.to_dict()
# create an instance of DeveloperChatAvatarResponse from a dict
developer_chat_avatar_response_from_dict = DeveloperChatAvatarResponse.from_dict(developer_chat_avatar_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
