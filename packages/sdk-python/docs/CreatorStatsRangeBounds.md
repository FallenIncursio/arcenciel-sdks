# CreatorStatsRangeBounds

Structured range bounds details for this creator stats response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **datetime** | Latest available timestamp. |
**min** | **datetime** | Earliest available timestamp. |

## Example

```python
from arcenciel.generated.models.creator_stats_range_bounds import CreatorStatsRangeBounds

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsRangeBounds from a JSON string
creator_stats_range_bounds_instance = CreatorStatsRangeBounds.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsRangeBounds.to_json())

# convert the object into a dict
creator_stats_range_bounds_dict = creator_stats_range_bounds_instance.to_dict()
# create an instance of CreatorStatsRangeBounds from a dict
creator_stats_range_bounds_from_dict = CreatorStatsRangeBounds.from_dict(creator_stats_range_bounds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
