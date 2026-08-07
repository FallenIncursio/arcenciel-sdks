# DeveloperChatPresenceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Dict[str, DeveloperChatPresenceEntry]**](DeveloperChatPresenceEntry.md) | Presence entries keyed by the requested decimal user identifier. |

## Example

```python
from arcenciel.generated.models.developer_chat_presence_response import DeveloperChatPresenceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatPresenceResponse from a JSON string
developer_chat_presence_response_instance = DeveloperChatPresenceResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatPresenceResponse.to_json())

# convert the object into a dict
developer_chat_presence_response_dict = developer_chat_presence_response_instance.to_dict()
# create an instance of DeveloperChatPresenceResponse from a dict
developer_chat_presence_response_from_dict = DeveloperChatPresenceResponse.from_dict(developer_chat_presence_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
