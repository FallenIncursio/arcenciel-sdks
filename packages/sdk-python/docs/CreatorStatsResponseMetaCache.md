# CreatorStatsResponseMetaCache

Structured cache details for this meta.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **datetime** | UTC timestamp for the expires at transition of this cache. Format: date-time. |
**hit** | **bool** | Whether hit applies to this cache. |
**ttl_ms** | **int** | Numeric ttl ms reported for this cache. |

## Example

```python
from arcenciel.generated.models.creator_stats_response_meta_cache import CreatorStatsResponseMetaCache

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsResponseMetaCache from a JSON string
creator_stats_response_meta_cache_instance = CreatorStatsResponseMetaCache.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsResponseMetaCache.to_json())

# convert the object into a dict
creator_stats_response_meta_cache_dict = creator_stats_response_meta_cache_instance.to_dict()
# create an instance of CreatorStatsResponseMetaCache from a dict
creator_stats_response_meta_cache_from_dict = CreatorStatsResponseMetaCache.from_dict(creator_stats_response_meta_cache_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
