# GeneratorQuotaBudgets

Structured budgets details for this quota.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gpu_ms** | [**GeneratorQuotaBudgetBucket**](GeneratorQuotaBudgetBucket.md) |  |
**profile** | **str** | Profile associated with this budgets; preserve server-returned values when passing them to another operation. |
**vram_mb** | [**GeneratorQuotaBudgetBucket**](GeneratorQuotaBudgetBucket.md) |  |

## Example

```python
from arcenciel.generated.models.generator_quota_budgets import GeneratorQuotaBudgets

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorQuotaBudgets from a JSON string
generator_quota_budgets_instance = GeneratorQuotaBudgets.from_json(json)
# print the JSON string representation of the object
print(GeneratorQuotaBudgets.to_json())

# convert the object into a dict
generator_quota_budgets_dict = generator_quota_budgets_instance.to_dict()
# create an instance of GeneratorQuotaBudgets from a dict
generator_quota_budgets_from_dict = GeneratorQuotaBudgets.from_dict(generator_quota_budgets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
