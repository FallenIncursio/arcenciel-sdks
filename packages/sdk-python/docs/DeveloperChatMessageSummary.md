# DeveloperChatMessageSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[DeveloperChatAttachment]**](DeveloperChatAttachment.md) |  |
**content** | **str** |  |
**created_at** | **datetime** |  |
**id** | **int** |  |
**sender_id** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_message_summary import DeveloperChatMessageSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatMessageSummary from a JSON string
developer_chat_message_summary_instance = DeveloperChatMessageSummary.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatMessageSummary.to_json())

# convert the object into a dict
developer_chat_message_summary_dict = developer_chat_message_summary_instance.to_dict()
# create an instance of DeveloperChatMessageSummary from a dict
developer_chat_message_summary_from_dict = DeveloperChatMessageSummary.from_dict(developer_chat_message_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
