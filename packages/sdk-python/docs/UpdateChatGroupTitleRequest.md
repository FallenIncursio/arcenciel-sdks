# UpdateChatGroupTitleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | New group display title; null or blank clears the custom title. |

## Example

```python
from arcenciel.generated.models.update_chat_group_title_request import UpdateChatGroupTitleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChatGroupTitleRequest from a JSON string
update_chat_group_title_request_instance = UpdateChatGroupTitleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateChatGroupTitleRequest.to_json())

# convert the object into a dict
update_chat_group_title_request_dict = update_chat_group_title_request_instance.to_dict()
# create an instance of UpdateChatGroupTitleRequest from a dict
update_chat_group_title_request_from_dict = UpdateChatGroupTitleRequest.from_dict(update_chat_group_title_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
