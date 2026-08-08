# CreatorStatsResponseTopModelsInner

Structured top models item details for this top models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downloads** | **int** | Compatibility alias for events. |
**events** | **int** | Numeric events reported for this top models item. |
**model_id** | **int** | Stable identifier for the model; use it in subsequent API calls instead of a display name. |
**title** | **str** | Display title shown to users for this top models item. |
**unique_downloaders** | **int** | Numeric unique downloaders reported for this top models item. |

## Example

```python
from arcenciel.generated.models.creator_stats_response_top_models_inner import CreatorStatsResponseTopModelsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsResponseTopModelsInner from a JSON string
creator_stats_response_top_models_inner_instance = CreatorStatsResponseTopModelsInner.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsResponseTopModelsInner.to_json())

# convert the object into a dict
creator_stats_response_top_models_inner_dict = creator_stats_response_top_models_inner_instance.to_dict()
# create an instance of CreatorStatsResponseTopModelsInner from a dict
creator_stats_response_top_models_inner_from_dict = CreatorStatsResponseTopModelsInner.from_dict(creator_stats_response_top_models_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
