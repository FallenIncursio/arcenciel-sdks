# DeveloperIllegalContentNoticeSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged_at** | **datetime** |  | [optional]
**category** | **str** | Alleged illegal-content category. Known values: SCAM_OR_FRAUD, COUNTERFEIT_OR_ILLEGAL_GOODS, CHILD_SAFETY, SEXUAL_CONTENT_INVOLVING_MINORS, ILLEGAL_HATE_OR_HARASSMENT, PRIVACY_OR_DOOXING, IMPERSONATION_OR_DECEPTION, VIOLENCE_OR_THREATS, INTELLECTUAL_PROPERTY, OTHER_ILLEGAL_CONTENT. Clients must tolerate future values. |
**created_at** | **datetime** |  |
**decided_at** | **datetime** |  | [optional]
**decision_action** | **str** | Recorded moderation action. Known values: NONE, REMOVE_CONTENT, RESTRICT_ACCESS, AGE_RESTRICT, GEO_BLOCK, SUSPEND_ACCOUNT, ESCALATE_TO_AUTHORITIES, OTHER. Clients must tolerate future values. | [optional]
**public_id** | **str** |  |
**reporter_message** | **str** |  | [optional]
**review_requested_at** | **datetime** |  | [optional]
**review_requested_by** | **str** |  | [optional]
**status** | **str** | Current case state. Known values: SUBMITTED, IN_REVIEW, ACTION_TAKEN, NO_ACTION, ESCALATED. Clients must tolerate future values. |
**target_label** | **str** |  | [optional]
**target_type** | **str** | Resolved notice target type. Known values: GENERIC_URL, MODEL, IMAGE, VIDEO, USER_PROFILE, AVATAR, BANNER, ARTICLE, COMMENT, COLLECTION. Clients must tolerate future values. |
**target_url** | **str** |  |
**updated_at** | **datetime** |  |

## Example

```python
from arcenciel.generated.models.developer_illegal_content_notice_summary import DeveloperIllegalContentNoticeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperIllegalContentNoticeSummary from a JSON string
developer_illegal_content_notice_summary_instance = DeveloperIllegalContentNoticeSummary.from_json(json)
# print the JSON string representation of the object
print(DeveloperIllegalContentNoticeSummary.to_json())

# convert the object into a dict
developer_illegal_content_notice_summary_dict = developer_illegal_content_notice_summary_instance.to_dict()
# create an instance of DeveloperIllegalContentNoticeSummary from a dict
developer_illegal_content_notice_summary_from_dict = DeveloperIllegalContentNoticeSummary.from_dict(developer_illegal_content_notice_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
