# DeveloperChatViewerState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  |
**last_read_at** | **datetime** |  |
**last_read_message_id** | **int** |  |
**role** | **str** |  |
**state** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_viewer_state import DeveloperChatViewerState

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatViewerState from a JSON string
developer_chat_viewer_state_instance = DeveloperChatViewerState.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatViewerState.to_json())

# convert the object into a dict
developer_chat_viewer_state_dict = developer_chat_viewer_state_instance.to_dict()
# create an instance of DeveloperChatViewerState from a dict
developer_chat_viewer_state_from_dict = DeveloperChatViewerState.from_dict(developer_chat_viewer_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
