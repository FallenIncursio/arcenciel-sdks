# ScheduleImageRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publish_at** | **datetime** | Timestamp when the image should be published. |

## Example

```python
from arcenciel.generated.models.schedule_image_request import ScheduleImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleImageRequest from a JSON string
schedule_image_request_instance = ScheduleImageRequest.from_json(json)
# print the JSON string representation of the object
print(ScheduleImageRequest.to_json())

# convert the object into a dict
schedule_image_request_dict = schedule_image_request_instance.to_dict()
# create an instance of ScheduleImageRequest from a dict
schedule_image_request_from_dict = ScheduleImageRequest.from_dict(schedule_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
