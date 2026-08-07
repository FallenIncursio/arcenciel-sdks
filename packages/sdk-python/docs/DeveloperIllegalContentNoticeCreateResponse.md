# DeveloperIllegalContentNoticeCreateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_code** | **str** | One-time guest lookup secret. Null for authenticated reporters; store it securely and never log it. |
**lookup_url** | **str** |  |
**public_id** | **str** |  |
**status** | **str** | Current case state. Known values: SUBMITTED, IN_REVIEW, ACTION_TAKEN, NO_ACTION, ESCALATED. Clients must tolerate future values. |
**target_label** | **str** |  |
**target_type** | **str** | Resolved notice target type. Known values: GENERIC_URL, MODEL, IMAGE, VIDEO, USER_PROFILE, AVATAR, BANNER, ARTICLE, COMMENT, COLLECTION. Clients must tolerate future values. |

## Example

```python
from arcenciel.generated.models.developer_illegal_content_notice_create_response import DeveloperIllegalContentNoticeCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperIllegalContentNoticeCreateResponse from a JSON string
developer_illegal_content_notice_create_response_instance = DeveloperIllegalContentNoticeCreateResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperIllegalContentNoticeCreateResponse.to_json())

# convert the object into a dict
developer_illegal_content_notice_create_response_dict = developer_illegal_content_notice_create_response_instance.to_dict()
# create an instance of DeveloperIllegalContentNoticeCreateResponse from a dict
developer_illegal_content_notice_create_response_from_dict = DeveloperIllegalContentNoticeCreateResponse.from_dict(developer_illegal_content_notice_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
