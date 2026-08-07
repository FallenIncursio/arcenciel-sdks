# GeneratorJobRemixRequestControlnetsInner

Controlnets item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **float** | End accepted or returned by this contract. | [optional]
**image_path** | **str** | Image Path accepted or returned by this contract. | [optional]
**model** | **str** | Model accepted or returned by this contract. | [optional]
**model_name** | **str** | Model Name accepted or returned by this contract. | [optional]
**start** | **float** | Start accepted or returned by this contract. | [optional]
**strength** | **float** | Strength accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_remix_request_controlnets_inner import GeneratorJobRemixRequestControlnetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobRemixRequestControlnetsInner from a JSON string
generator_job_remix_request_controlnets_inner_instance = GeneratorJobRemixRequestControlnetsInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobRemixRequestControlnetsInner.to_json())

# convert the object into a dict
generator_job_remix_request_controlnets_inner_dict = generator_job_remix_request_controlnets_inner_instance.to_dict()
# create an instance of GeneratorJobRemixRequestControlnetsInner from a dict
generator_job_remix_request_controlnets_inner_from_dict = GeneratorJobRemixRequestControlnetsInner.from_dict(generator_job_remix_request_controlnets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
