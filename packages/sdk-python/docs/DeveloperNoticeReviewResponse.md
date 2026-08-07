# DeveloperNoticeReviewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  |
**public_id** | **str** |  |
**status** | **str** | Current case state. Known values: SUBMITTED, IN_REVIEW, ACTION_TAKEN, NO_ACTION, ESCALATED. Clients must tolerate future values. |

## Example

```python
from arcenciel.generated.models.developer_notice_review_response import DeveloperNoticeReviewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperNoticeReviewResponse from a JSON string
developer_notice_review_response_instance = DeveloperNoticeReviewResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperNoticeReviewResponse.to_json())

# convert the object into a dict
developer_notice_review_response_dict = developer_notice_review_response_instance.to_dict()
# create an instance of DeveloperNoticeReviewResponse from a dict
developer_notice_review_response_from_dict = DeveloperNoticeReviewResponse.from_dict(developer_notice_review_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
