# DeveloperChatThread


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  |
**created_by_id** | **int** |  |
**direct_requester_id** | **int** |  |
**direct_status** | **str** |  |
**has_unread** | **bool** |  |
**id** | **int** |  |
**image_path** | **str** |  |
**kind** | **str** | Conversation kind. Clients must tolerate future values. |
**last_message** | [**DeveloperChatMessageSummary**](DeveloperChatMessageSummary.md) |  |
**last_message_at** | **datetime** |  |
**participants** | [**List[DeveloperChatParticipant]**](DeveloperChatParticipant.md) |  |
**title** | **str** |  |
**updated_at** | **datetime** |  |
**viewer** | [**DeveloperChatViewerState**](DeveloperChatViewerState.md) |  |

## Example

```python
from arcenciel.generated.models.developer_chat_thread import DeveloperChatThread

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatThread from a JSON string
developer_chat_thread_instance = DeveloperChatThread.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatThread.to_json())

# convert the object into a dict
developer_chat_thread_dict = developer_chat_thread_instance.to_dict()
# create an instance of DeveloperChatThread from a dict
developer_chat_thread_from_dict = DeveloperChatThread.from_dict(developer_chat_thread_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
