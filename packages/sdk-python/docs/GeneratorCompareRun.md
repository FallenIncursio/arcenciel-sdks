# GeneratorCompareRun

Generator Compare Run used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_count** | **int** | Completed Count accepted or returned by this contract. |
**cost** | [**GeneratorCompareCost**](GeneratorCompareCost.md) |  |
**count** | **int** | Count accepted or returned by this contract. |
**created_at** | **int** | Created At accepted or returned by this contract. | [optional]
**failed_count** | **int** | Failed Count accepted or returned by this contract. |
**grid** | [**GeneratorCompareGrid**](GeneratorCompareGrid.md) |  |
**id** | **UUID** | Id accepted or returned by this contract. |
**model_names** | **List[str]** | Model Names accepted or returned by this contract. |
**pending_count** | **int** | Pending Count accepted or returned by this contract. |
**seed** | [**GeneratorCompareRunSeed**](GeneratorCompareRunSeed.md) |  | [optional]
**status** | **str** | Status accepted or returned by this contract. |
**updated_at** | **int** | Updated At accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_compare_run import GeneratorCompareRun

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorCompareRun from a JSON string
generator_compare_run_instance = GeneratorCompareRun.from_json(json)
# print the JSON string representation of the object
print(GeneratorCompareRun.to_json())

# convert the object into a dict
generator_compare_run_dict = generator_compare_run_instance.to_dict()
# create an instance of GeneratorCompareRun from a dict
generator_compare_run_from_dict = GeneratorCompareRun.from_dict(generator_compare_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
