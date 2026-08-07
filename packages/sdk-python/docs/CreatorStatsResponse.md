# CreatorStatsResponse

Aggregated creator engagement and download statistics for the applied time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_range** | [**CreatorStatsAppliedRange**](CreatorStatsAppliedRange.md) |  |
**comments** | **int** | Comments accepted or returned by this contract. |
**download_events_total** | **int** | Download events in the applied range; null when advanced download analytics are unavailable. |
**download_performance** | [**CreatorStatsResponseDownloadPerformance**](CreatorStatsResponseDownloadPerformance.md) |  |
**download_series** | [**List[CreatorStatsResponseDownloadSeriesInner]**](CreatorStatsResponseDownloadSeriesInner.md) | Download Series accepted or returned by this contract. |
**downloads_total** | **int** | Compatibility alias for downloadEventsTotal. |
**favorites** | [**CreatorStatsResponseFavorites**](CreatorStatsResponseFavorites.md) |  |
**followers** | **int** | Followers accepted or returned by this contract. |
**meta** | [**CreatorStatsResponseMeta**](CreatorStatsResponseMeta.md) |  |
**range_bounds** | [**CreatorStatsRangeBounds**](CreatorStatsRangeBounds.md) |  |
**reactions** | [**CreatorStatsResponseReactions**](CreatorStatsResponseReactions.md) |  |
**top_models** | [**List[CreatorStatsResponseTopModelsInner]**](CreatorStatsResponseTopModelsInner.md) | Top Models accepted or returned by this contract. |
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
