# DeveloperChatMessageListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DeveloperChatMessage]**](DeveloperChatMessage.md) |  |
**limit** | **int** |  |
**next_cursor** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_message_list_response import DeveloperChatMessageListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatMessageListResponse from a JSON string
developer_chat_message_list_response_instance = DeveloperChatMessageListResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatMessageListResponse.to_json())

# convert the object into a dict
developer_chat_message_list_response_dict = developer_chat_message_list_response_instance.to_dict()
# create an instance of DeveloperChatMessageListResponse from a dict
developer_chat_message_list_response_from_dict = DeveloperChatMessageListResponse.from_dict(developer_chat_message_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
