# GeneratorJobRemixRequestControlnetsInner

Structured controlnets item details for this controlnets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **float** | Numeric end reported for this controlnets item. Minimum: 0. Maximum: 1. | [optional]
**image_path** | **str** | Server-provided path for the image path associated with this controlnets item; treat it as opaque. | [optional]
**model** | **str** | Model associated with this controlnets item; preserve server-returned values when passing them to another operation. | [optional]
**model_name** | **str** | Human-readable model name for this controlnets item; it is not a stable identifier. | [optional]
**start** | **float** | Numeric start reported for this controlnets item. Minimum: 0. Maximum: 1. | [optional]
**strength** | **float** | Numeric strength reported for this controlnets item. Minimum: 0. Maximum: 2. | [optional]

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
