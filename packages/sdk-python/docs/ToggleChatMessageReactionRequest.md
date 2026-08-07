# ToggleChatMessageReactionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emote_name** | **str** | Existing public emote name whose caller reaction is toggled. |

## Example

```python
from arcenciel.generated.models.toggle_chat_message_reaction_request import ToggleChatMessageReactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ToggleChatMessageReactionRequest from a JSON string
toggle_chat_message_reaction_request_instance = ToggleChatMessageReactionRequest.from_json(json)
# print the JSON string representation of the object
print(ToggleChatMessageReactionRequest.to_json())

# convert the object into a dict
toggle_chat_message_reaction_request_dict = toggle_chat_message_reaction_request_instance.to_dict()
# create an instance of ToggleChatMessageReactionRequest from a dict
toggle_chat_message_reaction_request_from_dict = ToggleChatMessageReactionRequest.from_dict(toggle_chat_message_reaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
