# DeveloperNotificationSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by_category** | [**Dict[str, DeveloperNotificationCount]**](DeveloperNotificationCount.md) |  |
**by_type** | [**Dict[str, DeveloperNotificationCount]**](DeveloperNotificationCount.md) |  |
**total** | **int** |  |
**unread** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_notification_summary import DeveloperNotificationSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperNotificationSummary from a JSON string
developer_notification_summary_instance = DeveloperNotificationSummary.from_json(json)
# print the JSON string representation of the object
print(DeveloperNotificationSummary.to_json())

# convert the object into a dict
developer_notification_summary_dict = developer_notification_summary_instance.to_dict()
# create an instance of DeveloperNotificationSummary from a dict
developer_notification_summary_from_dict = DeveloperNotificationSummary.from_dict(developer_notification_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
