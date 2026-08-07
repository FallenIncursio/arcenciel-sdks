# GeneratorQuotaBudgetBucket

Gpu Ms accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Limit accepted or returned by this contract. |
**remaining** | **int** | Remaining accepted or returned by this contract. |
**used** | **int** | Used accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_quota_budget_bucket import GeneratorQuotaBudgetBucket

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorQuotaBudgetBucket from a JSON string
generator_quota_budget_bucket_instance = GeneratorQuotaBudgetBucket.from_json(json)
# print the JSON string representation of the object
print(GeneratorQuotaBudgetBucket.to_json())

# convert the object into a dict
generator_quota_budget_bucket_dict = generator_quota_budget_bucket_instance.to_dict()
# create an instance of GeneratorQuotaBudgetBucket from a dict
generator_quota_budget_bucket_from_dict = GeneratorQuotaBudgetBucket.from_dict(generator_quota_budget_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
