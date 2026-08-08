# GeneratorJobComfy

Structured comfy details for this generator job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | **List[Dict[str, object]]** | Ordered messages entries included with this comfy; an empty list means none are available. | [optional]
**node_errors** | **List[Dict[str, object]]** | Ordered node errors entries included with this comfy; an empty list means none are available. | [optional]
**status** | **str** | Current lifecycle state of this comfy; clients should tolerate future values. | [optional]

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
