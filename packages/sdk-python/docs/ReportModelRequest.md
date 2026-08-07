# ReportModelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Required moderator-facing context describing the concern. |
**reason** | **str** | Primary moderation reason. |
**sub_reason** | **str** | Optional refinement of the primary reason. | [optional]

## Example

```python
from arcenciel.generated.models.report_model_request import ReportModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportModelRequest from a JSON string
report_model_request_instance = ReportModelRequest.from_json(json)
# print the JSON string representation of the object
print(ReportModelRequest.to_json())

# convert the object into a dict
report_model_request_dict = report_model_request_instance.to_dict()
# create an instance of ReportModelRequest from a dict
report_model_request_from_dict = ReportModelRequest.from_dict(report_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
