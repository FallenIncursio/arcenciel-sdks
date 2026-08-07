# DeveloperNoticeEvidenceAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_path** | **str** |  |
**file_name** | **str** |  |
**id** | **str** |  |
**mime_type** | **str** |  |
**size_bytes** | **int** |  |
**uploaded_at** | **datetime** |  |

## Example

```python
from arcenciel.generated.models.developer_notice_evidence_attachment import DeveloperNoticeEvidenceAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperNoticeEvidenceAttachment from a JSON string
developer_notice_evidence_attachment_instance = DeveloperNoticeEvidenceAttachment.from_json(json)
# print the JSON string representation of the object
print(DeveloperNoticeEvidenceAttachment.to_json())

# convert the object into a dict
developer_notice_evidence_attachment_dict = developer_notice_evidence_attachment_instance.to_dict()
# create an instance of DeveloperNoticeEvidenceAttachment from a dict
developer_notice_evidence_attachment_from_dict = DeveloperNoticeEvidenceAttachment.from_dict(developer_notice_evidence_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
