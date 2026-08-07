# DeveloperChatDirectStateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_status** | **str** |  | [optional]
**thread_id** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_direct_state_response import DeveloperChatDirectStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatDirectStateResponse from a JSON string
developer_chat_direct_state_response_instance = DeveloperChatDirectStateResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatDirectStateResponse.to_json())

# convert the object into a dict
developer_chat_direct_state_response_dict = developer_chat_direct_state_response_instance.to_dict()
# create an instance of DeveloperChatDirectStateResponse from a dict
developer_chat_direct_state_response_from_dict = DeveloperChatDirectStateResponse.from_dict(developer_chat_direct_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
