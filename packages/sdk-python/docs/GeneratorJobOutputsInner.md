# GeneratorJobOutputsInner

Outputs item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** | Filename accepted or returned by this contract. |
**subfolder** | **str** | Subfolder accepted or returned by this contract. |
**type** | **str** | Type accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_outputs_inner import GeneratorJobOutputsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobOutputsInner from a JSON string
generator_job_outputs_inner_instance = GeneratorJobOutputsInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobOutputsInner.to_json())

# convert the object into a dict
generator_job_outputs_inner_dict = generator_job_outputs_inner_instance.to_dict()
# create an instance of GeneratorJobOutputsInner from a dict
generator_job_outputs_inner_from_dict = GeneratorJobOutputsInner.from_dict(generator_job_outputs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
