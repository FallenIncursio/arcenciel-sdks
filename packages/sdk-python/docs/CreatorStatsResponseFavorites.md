# CreatorStatsResponseFavorites

Structured favorites details for this creator stats response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**articles** | **int** | Numeric articles reported for this favorites. |
**models** | **int** | Numeric models reported for this favorites. |

## Example

```python
from arcenciel.generated.models.creator_stats_response_favorites import CreatorStatsResponseFavorites

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsResponseFavorites from a JSON string
creator_stats_response_favorites_instance = CreatorStatsResponseFavorites.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsResponseFavorites.to_json())

# convert the object into a dict
creator_stats_response_favorites_dict = creator_stats_response_favorites_instance.to_dict()
# create an instance of CreatorStatsResponseFavorites from a dict
creator_stats_response_favorites_from_dict = CreatorStatsResponseFavorites.from_dict(creator_stats_response_favorites_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
