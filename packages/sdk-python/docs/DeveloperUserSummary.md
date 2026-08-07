# DeveloperUserSummary

Public user identity fields safe for attribution. New presentation fields may be added.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badges** | **List[Dict[str, object]]** | Badges accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. |
**namecard_preference** | **str** | Namecard Preference accepted or returned by this contract. | [optional]
**preferred_badge** | **Dict[str, object]** | Preferred Badge accepted or returned by this contract. | [optional]
**preferred_badge_id** | **int** | Preferred Badge Id accepted or returned by this contract. | [optional]
**profile_picture** | **str** | Profile Picture accepted or returned by this contract. | [optional]
**profile_picture_rating** | **str** | Profile Picture Rating accepted or returned by this contract. | [optional]
**username** | **str** | Username accepted or returned by this contract. |

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
