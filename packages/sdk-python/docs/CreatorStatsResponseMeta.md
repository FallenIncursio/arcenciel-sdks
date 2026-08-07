# CreatorStatsResponseMeta

Meta accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tier** | **str** | Current access tier. Known values are STANDARD, SUPPORTER, and STAFF; clients must tolerate additions. |
**advanced_access** | **bool** | Advanced Access accepted or returned by this contract. |
**cache** | [**CreatorStatsResponseMetaCache**](CreatorStatsResponseMetaCache.md) |  |
**max_window_days** | **int** | Max Window Days accepted or returned by this contract. |
**range_clamped** | **bool** | Range Clamped accepted or returned by this contract. |
**standard_window_days** | **int** | Standard Window Days accepted or returned by this contract. |

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
