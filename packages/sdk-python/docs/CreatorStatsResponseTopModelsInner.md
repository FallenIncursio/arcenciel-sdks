# CreatorStatsResponseTopModelsInner

Top Models item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downloads** | **int** | Compatibility alias for events. |
**events** | **int** | Events accepted or returned by this contract. |
**model_id** | **int** | Model Id accepted or returned by this contract. |
**title** | **str** | Title accepted or returned by this contract. |
**unique_downloaders** | **int** | Unique Downloaders accepted or returned by this contract. |

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
