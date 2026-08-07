# MarkAllNotificationsReadRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Optional category scope. Defaults to &#x60;all&#x60;. | [optional]
**unread_only** | **bool** | Optional flag for clients that only want unread scope. | [optional]

## Example

```python
from arcenciel.generated.models.mark_all_notifications_read_request import MarkAllNotificationsReadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MarkAllNotificationsReadRequest from a JSON string
mark_all_notifications_read_request_instance = MarkAllNotificationsReadRequest.from_json(json)
# print the JSON string representation of the object
print(MarkAllNotificationsReadRequest.to_json())

# convert the object into a dict
mark_all_notifications_read_request_dict = mark_all_notifications_read_request_instance.to_dict()
# create an instance of MarkAllNotificationsReadRequest from a dict
mark_all_notifications_read_request_from_dict = MarkAllNotificationsReadRequest.from_dict(mark_all_notifications_read_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
