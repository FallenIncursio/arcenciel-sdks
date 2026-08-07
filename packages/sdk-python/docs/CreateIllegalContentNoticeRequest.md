# CreateIllegalContentNoticeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | **List[bytes]** | Optional validated screenshots, documents, or short media evidence. | [optional]
**category** | **str** | Alleged illegal-content category. Known values: SCAM_OR_FRAUD, COUNTERFEIT_OR_ILLEGAL_GOODS, CHILD_SAFETY, SEXUAL_CONTENT_INVOLVING_MINORS, ILLEGAL_HATE_OR_HARASSMENT, PRIVACY_OR_DOOXING, IMPERSONATION_OR_DECEPTION, VIOLENCE_OR_THREATS, INTELLECTUAL_PROPERTY, OTHER_ILLEGAL_CONTENT. Clients must tolerate future values. |
**description** | **str** | Concrete explanation of the allegedly illegal content and where it appears. |
**evidence** | **str** | Optional textual evidence or supporting context. | [optional]
**good_faith_confirmed** | **bool** | Explicit confirmation that the notice is submitted in good faith. |
**jurisdiction** | **str** | Optional relevant country or jurisdiction. | [optional]
**legal_basis** | **str** | Optional legal basis supplied by the reporter. | [optional]
**reporter_email** | **str** | Required for guests; authenticated reporters may use the email stored on their account. | [optional]
**reporter_name** | **str** | Optional reporter name used for case correspondence. | [optional]
**target_type_hint** | **str** | Resolved notice target type. Known values: GENERIC_URL, MODEL, IMAGE, VIDEO, USER_PROFILE, AVATAR, BANNER, ARTICLE, COMMENT, COLLECTION. Clients must tolerate future values. | [optional]
**target_url** | **str** | Arc en Ciel HTTPS URL or relative content path. |

## Example

```python
from arcenciel.generated.models.create_illegal_content_notice_request import CreateIllegalContentNoticeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIllegalContentNoticeRequest from a JSON string
create_illegal_content_notice_request_instance = CreateIllegalContentNoticeRequest.from_json(json)
# print the JSON string representation of the object
print(CreateIllegalContentNoticeRequest.to_json())

# convert the object into a dict
create_illegal_content_notice_request_dict = create_illegal_content_notice_request_instance.to_dict()
# create an instance of CreateIllegalContentNoticeRequest from a dict
create_illegal_content_notice_request_from_dict = CreateIllegalContentNoticeRequest.from_dict(create_illegal_content_notice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
