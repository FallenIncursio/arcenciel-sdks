# DeveloperFeedbackAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_path** | **str** |  |
**expires_at** | **datetime** |  |
**file_name** | **str** |  |
**id** | **str** |  |
**mime_type** | **str** |  |
**size_bytes** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_feedback_attachment import DeveloperFeedbackAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperFeedbackAttachment from a JSON string
developer_feedback_attachment_instance = DeveloperFeedbackAttachment.from_json(json)
# print the JSON string representation of the object
print(DeveloperFeedbackAttachment.to_json())

# convert the object into a dict
developer_feedback_attachment_dict = developer_feedback_attachment_instance.to_dict()
# create an instance of DeveloperFeedbackAttachment from a dict
developer_feedback_attachment_from_dict = DeveloperFeedbackAttachment.from_dict(developer_feedback_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
