# DeveloperIllegalContentNoticeDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged_at** | **datetime** |  | [optional]
**category** | **str** | Alleged illegal-content category. Known values: SCAM_OR_FRAUD, COUNTERFEIT_OR_ILLEGAL_GOODS, CHILD_SAFETY, SEXUAL_CONTENT_INVOLVING_MINORS, ILLEGAL_HATE_OR_HARASSMENT, PRIVACY_OR_DOOXING, IMPERSONATION_OR_DECEPTION, VIOLENCE_OR_THREATS, INTELLECTUAL_PROPERTY, OTHER_ILLEGAL_CONTENT. Clients must tolerate future values. |
**created_at** | **datetime** |  |
**decided_at** | **datetime** |  | [optional]
**decision_action** | **str** | Recorded moderation action. Known values: NONE, REMOVE_CONTENT, RESTRICT_ACCESS, AGE_RESTRICT, GEO_BLOCK, SUSPEND_ACCOUNT, ESCALATE_TO_AUTHORITIES, OTHER. Clients must tolerate future values. | [optional]
**public_id** | **str** |  |
**reporter_message** | **str** | Present only for the reporter or staff. | [optional]
**review_requested_at** | **datetime** |  | [optional]
**review_requested_by** | **str** |  | [optional]
**status** | **str** | Current case state. Known values: SUBMITTED, IN_REVIEW, ACTION_TAKEN, NO_ACTION, ESCALATED. Clients must tolerate future values. |
**target_label** | **str** |  | [optional]
**target_type** | **str** | Resolved notice target type. Known values: GENERIC_URL, MODEL, IMAGE, VIDEO, USER_PROFILE, AVATAR, BANNER, ARTICLE, COMMENT, COLLECTION. Clients must tolerate future values. |
**target_url** | **str** |  |
**updated_at** | **datetime** |  |
**affected_user_message** | **str** | Present only for the affected owner or staff. | [optional]
**can_request_review** | **bool** |  |
**decision_reason** | **str** |  |
**description** | **str** |  |
**evidence** | **str** |  |
**evidence_attachments** | [**List[DeveloperNoticeEvidenceAttachment]**](DeveloperNoticeEvidenceAttachment.md) |  |
**jurisdiction** | **str** |  |
**legal_basis** | **str** |  |
**review_request_message** | **str** |  |
**reviewed_by** | [**DeveloperNoticeReviewer**](DeveloperNoticeReviewer.md) |  | [optional]
**target_id** | **int** |  |
**target_type_hint** | **str** | Resolved notice target type. Known values: GENERIC_URL, MODEL, IMAGE, VIDEO, USER_PROFILE, AVATAR, BANNER, ARTICLE, COMMENT, COLLECTION. Clients must tolerate future values. |

## Example

```python
from arcenciel.generated.models.developer_illegal_content_notice_detail import DeveloperIllegalContentNoticeDetail

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperIllegalContentNoticeDetail from a JSON string
developer_illegal_content_notice_detail_instance = DeveloperIllegalContentNoticeDetail.from_json(json)
# print the JSON string representation of the object
print(DeveloperIllegalContentNoticeDetail.to_json())

# convert the object into a dict
developer_illegal_content_notice_detail_dict = developer_illegal_content_notice_detail_instance.to_dict()
# create an instance of DeveloperIllegalContentNoticeDetail from a dict
developer_illegal_content_notice_detail_from_dict = DeveloperIllegalContentNoticeDetail.from_dict(developer_illegal_content_notice_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
