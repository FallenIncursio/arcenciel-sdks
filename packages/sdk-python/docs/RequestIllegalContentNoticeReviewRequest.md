# RequestIllegalContentNoticeReviewRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Guest access code. Prefer the request body over a query string to avoid URL logs. | [optional]
**message** | **str** | Why the finalized decision should be reviewed again. |

## Example

```python
from arcenciel.generated.models.request_illegal_content_notice_review_request import RequestIllegalContentNoticeReviewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RequestIllegalContentNoticeReviewRequest from a JSON string
request_illegal_content_notice_review_request_instance = RequestIllegalContentNoticeReviewRequest.from_json(json)
# print the JSON string representation of the object
print(RequestIllegalContentNoticeReviewRequest.to_json())

# convert the object into a dict
request_illegal_content_notice_review_request_dict = request_illegal_content_notice_review_request_instance.to_dict()
# create an instance of RequestIllegalContentNoticeReviewRequest from a dict
request_illegal_content_notice_review_request_from_dict = RequestIllegalContentNoticeReviewRequest.from_dict(request_illegal_content_notice_review_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
