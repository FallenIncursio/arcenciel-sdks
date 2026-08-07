# GeneratorJobComfy

Comfy accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | **List[Dict[str, object]]** | Messages accepted or returned by this contract. | [optional]
**node_errors** | **List[Dict[str, object]]** | Node Errors accepted or returned by this contract. | [optional]
**status** | **str** | Status accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_comfy import GeneratorJobComfy

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobComfy from a JSON string
generator_job_comfy_instance = GeneratorJobComfy.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobComfy.to_json())

# convert the object into a dict
generator_job_comfy_dict = generator_job_comfy_instance.to_dict()
# create an instance of GeneratorJobComfy from a dict
generator_job_comfy_from_dict = GeneratorJobComfy.from_dict(generator_job_comfy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
