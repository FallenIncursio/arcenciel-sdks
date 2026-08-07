# DeveloperChatPresenceEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_seen_at** | **datetime** |  |
**online** | **bool** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_presence_entry import DeveloperChatPresenceEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatPresenceEntry from a JSON string
developer_chat_presence_entry_instance = DeveloperChatPresenceEntry.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatPresenceEntry.to_json())

# convert the object into a dict
developer_chat_presence_entry_dict = developer_chat_presence_entry_instance.to_dict()
# create an instance of DeveloperChatPresenceEntry from a dict
developer_chat_presence_entry_from_dict = DeveloperChatPresenceEntry.from_dict(developer_chat_presence_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
