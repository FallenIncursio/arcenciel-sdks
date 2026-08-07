# DeveloperNotificationCount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  |
**unread** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_notification_count import DeveloperNotificationCount

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperNotificationCount from a JSON string
developer_notification_count_instance = DeveloperNotificationCount.from_json(json)
# print the JSON string representation of the object
print(DeveloperNotificationCount.to_json())

# convert the object into a dict
developer_notification_count_dict = developer_notification_count_instance.to_dict()
# create an instance of DeveloperNotificationCount from a dict
developer_notification_count_from_dict = DeveloperNotificationCount.from_dict(developer_notification_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
