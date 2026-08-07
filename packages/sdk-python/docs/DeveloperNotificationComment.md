# DeveloperNotificationComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  |
**target_id** | **int** |  |
**target_type** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_notification_comment import DeveloperNotificationComment

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperNotificationComment from a JSON string
developer_notification_comment_instance = DeveloperNotificationComment.from_json(json)
# print the JSON string representation of the object
print(DeveloperNotificationComment.to_json())

# convert the object into a dict
developer_notification_comment_dict = developer_notification_comment_instance.to_dict()
# create an instance of DeveloperNotificationComment from a dict
developer_notification_comment_from_dict = DeveloperNotificationComment.from_dict(developer_notification_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
