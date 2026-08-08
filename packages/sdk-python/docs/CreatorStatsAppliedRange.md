# CreatorStatsAppliedRange

Structured applied range details for this creator stats response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **datetime** | Inclusive applied range end. |
**start** | **datetime** | Inclusive applied range start. |

## Example

```python
from arcenciel.generated.models.creator_stats_applied_range import CreatorStatsAppliedRange

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsAppliedRange from a JSON string
creator_stats_applied_range_instance = CreatorStatsAppliedRange.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsAppliedRange.to_json())

# convert the object into a dict
creator_stats_applied_range_dict = creator_stats_applied_range_instance.to_dict()
# create an instance of CreatorStatsAppliedRange from a dict
creator_stats_applied_range_from_dict = CreatorStatsAppliedRange.from_dict(creator_stats_applied_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
