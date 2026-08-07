# DeveloperChatAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes** | **int** |  |
**created_at** | **datetime** |  |
**duration_ms** | **int** |  |
**file_path** | **str** | Caller-bound signed media URL or stable relative path. Clients must not persist signed query parameters. |
**height** | **int** |  |
**id** | **int** |  |
**kind** | **str** | Attachment media kind. Clients must tolerate future values. |
**mime_type** | **str** |  |
**width** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_chat_attachment import DeveloperChatAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatAttachment from a JSON string
developer_chat_attachment_instance = DeveloperChatAttachment.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatAttachment.to_json())

# convert the object into a dict
developer_chat_attachment_dict = developer_chat_attachment_instance.to_dict()
# create an instance of DeveloperChatAttachment from a dict
developer_chat_attachment_from_dict = DeveloperChatAttachment.from_dict(developer_chat_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
