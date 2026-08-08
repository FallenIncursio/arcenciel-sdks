# CreatorStatsResponseMeta

Structured meta details for this creator stats response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tier** | **str** | Current access tier. Known values are STANDARD, SUPPORTER, and STAFF; clients must tolerate additions. |
**advanced_access** | **bool** | Whether advanced access applies to this meta. |
**cache** | [**CreatorStatsResponseMetaCache**](CreatorStatsResponseMetaCache.md) |  |
**max_window_days** | **int** | Numeric max window days reported for this meta. |
**range_clamped** | **bool** | Whether range clamped applies to this meta. |
**standard_window_days** | **int** | Numeric standard window days reported for this meta. |

## Example

```python
from arcenciel.generated.models.creator_stats_response_meta import CreatorStatsResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsResponseMeta from a JSON string
creator_stats_response_meta_instance = CreatorStatsResponseMeta.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsResponseMeta.to_json())

# convert the object into a dict
creator_stats_response_meta_dict = creator_stats_response_meta_instance.to_dict()
# create an instance of CreatorStatsResponseMeta from a dict
creator_stats_response_meta_from_dict = CreatorStatsResponseMeta.from_dict(creator_stats_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
