# DeveloperNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | [**DeveloperNotificationComment**](DeveloperNotificationComment.md) |  | [optional]
**comment_id** | **int** |  | [optional]
**created_at** | **datetime** |  |
**id** | **int** |  |
**is_read** | **bool** |  |
**message** | **str** |  |
**type** | **str** | Forward-compatible notification type. |
**updated_at** | **datetime** |  |
**user_id** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_notification import DeveloperNotification

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperNotification from a JSON string
developer_notification_instance = DeveloperNotification.from_json(json)
# print the JSON string representation of the object
print(DeveloperNotification.to_json())

# convert the object into a dict
developer_notification_dict = developer_notification_instance.to_dict()
# create an instance of DeveloperNotification from a dict
developer_notification_from_dict = DeveloperNotification.from_dict(developer_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
