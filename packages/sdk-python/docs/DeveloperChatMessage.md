# DeveloperChatMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[DeveloperChatAttachment]**](DeveloperChatAttachment.md) |  |
**content** | **str** |  |
**created_at** | **datetime** |  |
**id** | **int** |  |
**mentions** | **Dict[str, int]** |  |
**reactions** | [**List[DeveloperChatReaction]**](DeveloperChatReaction.md) |  |
**reply_to** | [**DeveloperChatReply**](DeveloperChatReply.md) |  |
**sender** | [**DeveloperChatUser**](DeveloperChatUser.md) |  | [optional]
**sender_id** | **int** |  |
**thread_id** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_message import DeveloperChatMessage

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatMessage from a JSON string
developer_chat_message_instance = DeveloperChatMessage.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatMessage.to_json())

# convert the object into a dict
developer_chat_message_dict = developer_chat_message_instance.to_dict()
# create an instance of DeveloperChatMessage from a dict
developer_chat_message_from_dict = DeveloperChatMessage.from_dict(developer_chat_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
