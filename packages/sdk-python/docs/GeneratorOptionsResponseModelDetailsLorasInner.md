# GeneratorOptionsResponseModelDetailsLorasInner

Structured loras item details for this loras.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model associated with this loras item; preserve server-returned values when passing them to another operation. | [optional]
**display_name** | **str** | Human-readable display name for this loras item; it is not a stable identifier. | [optional]
**name** | **str** | Human-readable name for this loras item; it is not a stable identifier. |
**precision** | **str** | Precision associated with this loras item; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.generator_options_response_model_details_loras_inner import GeneratorOptionsResponseModelDetailsLorasInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponseModelDetailsLorasInner from a JSON string
generator_options_response_model_details_loras_inner_instance = GeneratorOptionsResponseModelDetailsLorasInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponseModelDetailsLorasInner.to_json())

# convert the object into a dict
generator_options_response_model_details_loras_inner_dict = generator_options_response_model_details_loras_inner_instance.to_dict()
# create an instance of GeneratorOptionsResponseModelDetailsLorasInner from a dict
generator_options_response_model_details_loras_inner_from_dict = GeneratorOptionsResponseModelDetailsLorasInner.from_dict(generator_options_response_model_details_loras_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
