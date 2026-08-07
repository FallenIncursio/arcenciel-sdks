# GeneratorCompareCost

Generator Compare Cost used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget_profile** | **str** | Budget Profile accepted or returned by this contract. |
**daily_usage** | **int** | Number of daily generator uses charged by this compare run. |
**estimated_gpu_ms** | **int** | Aggregate GPU budget estimate in milliseconds. |
**estimated_vram_mb** | **int** | Aggregate VRAM budget estimate in megabytes. |
**jobs** | **int** | Number of generator jobs consumed by this compare run. |
**queue_slots** | **int** | Number of pending queue slots reserved/consumed by this compare run. |
**weight** | **float** | Aggregate generator weight used for budget and priority calculations. |

## Example

```python
from arcenciel.generated.models.generator_compare_cost import GeneratorCompareCost

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorCompareCost from a JSON string
generator_compare_cost_instance = GeneratorCompareCost.from_json(json)
# print the JSON string representation of the object
print(GeneratorCompareCost.to_json())

# convert the object into a dict
generator_compare_cost_dict = generator_compare_cost_instance.to_dict()
# create an instance of GeneratorCompareCost from a dict
generator_compare_cost_from_dict = GeneratorCompareCost.from_dict(generator_compare_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
