# CreatorStatsResponse

Aggregated creator engagement and download statistics for the applied time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_range** | [**CreatorStatsAppliedRange**](CreatorStatsAppliedRange.md) |  |
**comments** | **int** | Numeric comments reported for this creator stats response. |
**download_events_total** | **int** | Download events in the applied range; null when advanced download analytics are unavailable. |
**download_performance** | [**CreatorStatsResponseDownloadPerformance**](CreatorStatsResponseDownloadPerformance.md) |  |
**download_series** | [**List[CreatorStatsResponseDownloadSeriesInner]**](CreatorStatsResponseDownloadSeriesInner.md) | Ordered download series entries included with this creator stats response; an empty list means none are available. |
**downloads_total** | **int** | Compatibility alias for downloadEventsTotal. |
**favorites** | [**CreatorStatsResponseFavorites**](CreatorStatsResponseFavorites.md) |  |
**followers** | **int** | Numeric followers reported for this creator stats response. |
**meta** | [**CreatorStatsResponseMeta**](CreatorStatsResponseMeta.md) |  |
**range_bounds** | [**CreatorStatsRangeBounds**](CreatorStatsRangeBounds.md) |  |
**reactions** | [**CreatorStatsResponseReactions**](CreatorStatsResponseReactions.md) |  |
**top_models** | [**List[CreatorStatsResponseTopModelsInner]**](CreatorStatsResponseTopModelsInner.md) | Ordered top models entries included with this creator stats response; an empty list means none are available. |
**unique_downloaders_total** | **int** | Distinct tracked downloaders in the applied range. |
**unique_downloads** | **int** | Compatibility alias for uniqueDownloadersTotal. |

## Example

```python
from arcenciel.generated.models.creator_stats_response import CreatorStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsResponse from a JSON string
creator_stats_response_instance = CreatorStatsResponse.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsResponse.to_json())

# convert the object into a dict
creator_stats_response_dict = creator_stats_response_instance.to_dict()
# create an instance of CreatorStatsResponse from a dict
creator_stats_response_from_dict = CreatorStatsResponse.from_dict(creator_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
