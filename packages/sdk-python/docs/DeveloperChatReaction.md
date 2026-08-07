# DeveloperChatReaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  |
**emote_name** | **str** |  |
**me** | **bool** | Whether the authenticated caller contributed this reaction. | [optional]
**users** | [**List[DeveloperChatUser]**](DeveloperChatUser.md) |  |

## Example

```python
from arcenciel.generated.models.developer_chat_reaction import DeveloperChatReaction

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatReaction from a JSON string
developer_chat_reaction_instance = DeveloperChatReaction.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatReaction.to_json())

# convert the object into a dict
developer_chat_reaction_dict = developer_chat_reaction_instance.to_dict()
# create an instance of DeveloperChatReaction from a dict
developer_chat_reaction_from_dict = DeveloperChatReaction.from_dict(developer_chat_reaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
