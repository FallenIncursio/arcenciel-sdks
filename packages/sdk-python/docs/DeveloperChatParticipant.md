# DeveloperChatParticipant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  |
**role** | **str** | Conversation participant role. Clients must tolerate future values. |
**state** | **str** | Conversation participant state. Clients must tolerate future values. |
**user** | [**DeveloperChatUser**](DeveloperChatUser.md) |  |
**user_id** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_participant import DeveloperChatParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatParticipant from a JSON string
developer_chat_participant_instance = DeveloperChatParticipant.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatParticipant.to_json())

# convert the object into a dict
developer_chat_participant_dict = developer_chat_participant_instance.to_dict()
# create an instance of DeveloperChatParticipant from a dict
developer_chat_participant_from_dict = DeveloperChatParticipant.from_dict(developer_chat_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
