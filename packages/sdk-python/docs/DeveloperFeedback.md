# DeveloperFeedback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | [**DeveloperFeedbackActor**](DeveloperFeedbackActor.md) |  |
**attachments** | [**List[DeveloperFeedbackAttachment]**](DeveloperFeedbackAttachment.md) |  |
**category** | **str** | Feedback category. Known values: BUG, FEATURE, UX, PERFORMANCE, MODERATION, OTHER. Clients must tolerate future values. |
**contact_discord** | **str** |  |
**created_at** | **datetime** |  |
**description** | **str** |  |
**internal_notes** | **str** | Staff-only note. This is always null for the reporter and must never be inferred from absence. |
**priority** | **str** | Feedback triage priority. Known values: LOW, MEDIUM, HIGH. Clients must tolerate future values. |
**public_id** | **str** |  |
**reporter** | [**DeveloperFeedbackActor**](DeveloperFeedbackActor.md) |  |
**resolved_at** | **datetime** |  |
**source_path** | **str** |  |
**source_url** | **str** |  |
**status** | **str** | Feedback state. Known values: OPEN, TRIAGED, IN_PROGRESS, RESOLVED, DECLINED, DUPLICATE. Clients must tolerate future values. |
**title** | **str** |  |
**updated_at** | **datetime** |  |
**updated_by** | [**DeveloperFeedbackActor**](DeveloperFeedbackActor.md) |  |

## Example

```python
from arcenciel.generated.models.developer_feedback import DeveloperFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperFeedback from a JSON string
developer_feedback_instance = DeveloperFeedback.from_json(json)
# print the JSON string representation of the object
print(DeveloperFeedback.to_json())

# convert the object into a dict
developer_feedback_dict = developer_feedback_instance.to_dict()
# create an instance of DeveloperFeedback from a dict
developer_feedback_from_dict = DeveloperFeedback.from_dict(developer_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
