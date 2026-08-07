# DeveloperChatBadge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | **str** |  |
**id** | **int** |  |
**name** | **str** |  |
**type** | **str** | Badge category. Clients must tolerate future values. |

## Example

```python
from arcenciel.generated.models.developer_chat_badge import DeveloperChatBadge

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatBadge from a JSON string
developer_chat_badge_instance = DeveloperChatBadge.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatBadge.to_json())

# convert the object into a dict
developer_chat_badge_dict = developer_chat_badge_instance.to_dict()
# create an instance of DeveloperChatBadge from a dict
developer_chat_badge_from_dict = DeveloperChatBadge.from_dict(developer_chat_badge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
