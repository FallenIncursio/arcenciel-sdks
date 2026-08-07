# ScheduleModelVersionRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publish_at** | **datetime** | Timestamp when the version should be published. |
**supporter_early_access_enabled** | **bool** | Set false to opt this hosted scheduled version out of supporter early access. | [optional] [default to True]

## Example

```python
from arcenciel.generated.models.schedule_model_version_request import ScheduleModelVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleModelVersionRequest from a JSON string
schedule_model_version_request_instance = ScheduleModelVersionRequest.from_json(json)
# print the JSON string representation of the object
print(ScheduleModelVersionRequest.to_json())

# convert the object into a dict
schedule_model_version_request_dict = schedule_model_version_request_instance.to_dict()
# create an instance of ScheduleModelVersionRequest from a dict
schedule_model_version_request_from_dict = ScheduleModelVersionRequest.from_dict(schedule_model_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
