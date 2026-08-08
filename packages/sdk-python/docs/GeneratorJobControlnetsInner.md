# GeneratorJobControlnetsInner

Structured controlnets item details for this controlnets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **float** | Numeric end reported for this controlnets item. | [optional]
**image_path** | **str** | Server-provided path for the image path associated with this controlnets item; treat it as opaque. |
**model** | **str** | Model associated with this controlnets item; preserve server-returned values when passing them to another operation. |
**start** | **float** | Numeric start reported for this controlnets item. | [optional]
**strength** | **float** | Numeric strength reported for this controlnets item. | [optional]

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
