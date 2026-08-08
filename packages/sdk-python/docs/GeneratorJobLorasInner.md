# GeneratorJobLorasInner

Structured loras item details for this loras.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Human-readable name for this loras item; it is not a stable identifier. |
**weight** | **float** | Numeric weight reported for this loras item. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_loras_inner import GeneratorJobLorasInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobLorasInner from a JSON string
generator_job_loras_inner_instance = GeneratorJobLorasInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobLorasInner.to_json())

# convert the object into a dict
generator_job_loras_inner_dict = generator_job_loras_inner_instance.to_dict()
# create an instance of GeneratorJobLorasInner from a dict
generator_job_loras_inner_from_dict = GeneratorJobLorasInner.from_dict(generator_job_loras_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
