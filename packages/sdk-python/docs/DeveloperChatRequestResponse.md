# DeveloperChatRequestResponse

An existing direct-state summary, a newly or previously resolved thread, or a newly created message when the convenience route sends into an active thread.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_status** | **str** |  |
**thread_id** | **int** |  |
**created_at** | **datetime** |  |
**created_by_id** | **int** |  |
**direct_requester_id** | **int** |  |
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
**attachments** | [**List[DeveloperChatAttachment]**](DeveloperChatAttachment.md) |  |
**content** | **str** |  |
**mentions** | **Dict[str, int]** |  |
**reactions** | [**List[DeveloperChatReaction]**](DeveloperChatReaction.md) |  |
**reply_to** | [**DeveloperChatReply**](DeveloperChatReply.md) |  |
**sender** | [**DeveloperChatUser**](DeveloperChatUser.md) |  | [optional]
**sender_id** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_request_response import DeveloperChatRequestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatRequestResponse from a JSON string
developer_chat_request_response_instance = DeveloperChatRequestResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatRequestResponse.to_json())

# convert the object into a dict
developer_chat_request_response_dict = developer_chat_request_response_instance.to_dict()
# create an instance of DeveloperChatRequestResponse from a dict
developer_chat_request_response_from_dict = DeveloperChatRequestResponse.from_dict(developer_chat_request_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
