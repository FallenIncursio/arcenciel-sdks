# DeveloperUserSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badges** | **List[object]** |  | [optional]
**id** | **int** |  |
**namecard_preference** | **str** |  | [optional]
**preferred_badge** | **object** |  | [optional]
**preferred_badge_id** | **int** |  | [optional]
**profile_picture** | **str** |  | [optional]
**profile_picture_rating** | **str** |  | [optional]
**username** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_user_summary import DeveloperUserSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperUserSummary from a JSON string
developer_user_summary_instance = DeveloperUserSummary.from_json(json)
# print the JSON string representation of the object
print(DeveloperUserSummary.to_json())

# convert the object into a dict
developer_user_summary_dict = developer_user_summary_instance.to_dict()
# create an instance of DeveloperUserSummary from a dict
developer_user_summary_from_dict = DeveloperUserSummary.from_dict(developer_user_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
