# CreatorStatsResponseDownloadPerformance

Download Performance accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returning_downloader_rate** | **float** | Ratio from zero through one. |
**returning_downloaders** | **int** | Returning Downloaders accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.creator_stats_response_download_performance import CreatorStatsResponseDownloadPerformance

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsResponseDownloadPerformance from a JSON string
creator_stats_response_download_performance_instance = CreatorStatsResponseDownloadPerformance.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsResponseDownloadPerformance.to_json())

# convert the object into a dict
creator_stats_response_download_performance_dict = creator_stats_response_download_performance_instance.to_dict()
# create an instance of CreatorStatsResponseDownloadPerformance from a dict
creator_stats_response_download_performance_from_dict = CreatorStatsResponseDownloadPerformance.from_dict(creator_stats_response_download_performance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
