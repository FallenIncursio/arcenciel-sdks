# ScheduleVideoRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publish_at** | **datetime** | Timestamp when the video should be published. |

## Example

```python
from arcenciel.generated.models.schedule_video_request import ScheduleVideoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleVideoRequest from a JSON string
schedule_video_request_instance = ScheduleVideoRequest.from_json(json)
# print the JSON string representation of the object
print(ScheduleVideoRequest.to_json())

# convert the object into a dict
schedule_video_request_dict = schedule_video_request_instance.to_dict()
# create an instance of ScheduleVideoRequest from a dict
schedule_video_request_from_dict = ScheduleVideoRequest.from_dict(schedule_video_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
