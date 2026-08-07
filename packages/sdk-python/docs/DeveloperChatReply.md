# DeveloperChatReply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  |
**created_at** | **datetime** |  |
**id** | **int** |  |
**sender** | [**DeveloperChatUser**](DeveloperChatUser.md) |  | [optional]
**sender_id** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_reply import DeveloperChatReply

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatReply from a JSON string
developer_chat_reply_instance = DeveloperChatReply.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatReply.to_json())

# convert the object into a dict
developer_chat_reply_dict = developer_chat_reply_instance.to_dict()
# create an instance of DeveloperChatReply from a dict
developer_chat_reply_from_dict = DeveloperChatReply.from_dict(developer_chat_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
