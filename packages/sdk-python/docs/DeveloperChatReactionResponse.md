# DeveloperChatReactionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **int** |  |
**reactions** | [**List[DeveloperChatReaction]**](DeveloperChatReaction.md) |  |

## Example

```python
from arcenciel.generated.models.developer_chat_reaction_response import DeveloperChatReactionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatReactionResponse from a JSON string
developer_chat_reaction_response_instance = DeveloperChatReactionResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatReactionResponse.to_json())

# convert the object into a dict
developer_chat_reaction_response_dict = developer_chat_reaction_response_instance.to_dict()
# create an instance of DeveloperChatReactionResponse from a dict
developer_chat_reaction_response_from_dict = DeveloperChatReactionResponse.from_dict(developer_chat_reaction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
