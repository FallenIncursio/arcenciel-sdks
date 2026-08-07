# DeveloperChatThreadListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DeveloperChatThread]**](DeveloperChatThread.md) |  |
**limit** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_thread_list_response import DeveloperChatThreadListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatThreadListResponse from a JSON string
developer_chat_thread_list_response_instance = DeveloperChatThreadListResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatThreadListResponse.to_json())

# convert the object into a dict
developer_chat_thread_list_response_dict = developer_chat_thread_list_response_instance.to_dict()
# create an instance of DeveloperChatThreadListResponse from a dict
developer_chat_thread_list_response_from_dict = DeveloperChatThreadListResponse.from_dict(developer_chat_thread_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
