# CreatorStatsResponseDownloadSeriesInner

Download Series item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Compatibility alias for events. |
**var_date** | **date** | Date accepted or returned by this contract. |
**events** | **int** | Events accepted or returned by this contract. |
**unique_downloaders** | **int** | Unique Downloaders accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.creator_stats_response_download_series_inner import CreatorStatsResponseDownloadSeriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsResponseDownloadSeriesInner from a JSON string
creator_stats_response_download_series_inner_instance = CreatorStatsResponseDownloadSeriesInner.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsResponseDownloadSeriesInner.to_json())

# convert the object into a dict
creator_stats_response_download_series_inner_dict = creator_stats_response_download_series_inner_instance.to_dict()
# create an instance of CreatorStatsResponseDownloadSeriesInner from a dict
creator_stats_response_download_series_inner_from_dict = CreatorStatsResponseDownloadSeriesInner.from_dict(creator_stats_response_download_series_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
