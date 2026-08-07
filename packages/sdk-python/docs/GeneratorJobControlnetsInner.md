# GeneratorJobControlnetsInner

Controlnets item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **float** | End accepted or returned by this contract. | [optional]
**image_path** | **str** | Image Path accepted or returned by this contract. |
**model** | **str** | Model accepted or returned by this contract. |
**start** | **float** | Start accepted or returned by this contract. | [optional]
**strength** | **float** | Strength accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_controlnets_inner import GeneratorJobControlnetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobControlnetsInner from a JSON string
generator_job_controlnets_inner_instance = GeneratorJobControlnetsInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobControlnetsInner.to_json())

# convert the object into a dict
generator_job_controlnets_inner_dict = generator_job_controlnets_inner_instance.to_dict()
# create an instance of GeneratorJobControlnetsInner from a dict
generator_job_controlnets_inner_from_dict = GeneratorJobControlnetsInner.from_dict(generator_job_controlnets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
