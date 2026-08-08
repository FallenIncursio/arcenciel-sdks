# GeneratorCompareRun

Fields describing generator compare run in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_count** | **int** | Number of completed records represented by this generator compare run. |
**cost** | [**GeneratorCompareCost**](GeneratorCompareCost.md) |  |
**count** | **int** | Number of count records represented by this generator compare run. |
**created_at** | **int** | UTC timestamp when this generator compare run was created. | [optional]
**failed_count** | **int** | Number of failed records represented by this generator compare run. |
**grid** | [**GeneratorCompareGrid**](GeneratorCompareGrid.md) |  |
**id** | **UUID** | Stable identifier for the generator compare run; use it in subsequent API calls instead of a display name. Format: uuid. |
**model_names** | **List[str]** | Ordered model names entries included with this generator compare run; an empty list means none are available. |
**pending_count** | **int** | Number of pending records represented by this generator compare run. |
**seed** | [**GeneratorCompareRunSeed**](GeneratorCompareRunSeed.md) |  | [optional]
**status** | **str** | Current lifecycle state of this generator compare run; clients should tolerate future values. Supported values: &#x60;queued&#x60;, &#x60;running&#x60;, &#x60;completed&#x60;, &#x60;failed&#x60;, &#x60;partial&#x60;. |
**updated_at** | **int** | UTC timestamp of the most recent persisted change to this generator compare run. | [optional]

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
