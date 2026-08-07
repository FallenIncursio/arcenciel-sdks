# DeveloperNotificationPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DeveloperNotification]**](DeveloperNotification.md) |  |
**has_more** | **bool** |  |
**limit** | **int** |  |
**next_cursor** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_notification_page import DeveloperNotificationPage

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperNotificationPage from a JSON string
developer_notification_page_instance = DeveloperNotificationPage.from_json(json)
# print the JSON string representation of the object
print(DeveloperNotificationPage.to_json())

# convert the object into a dict
developer_notification_page_dict = developer_notification_page_instance.to_dict()
# create an instance of DeveloperNotificationPage from a dict
developer_notification_page_from_dict = DeveloperNotificationPage.from_dict(developer_notification_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
