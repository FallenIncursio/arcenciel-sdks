# GeneratorOptionsResponseModelDetailsControlnetsInner

Structured controlnets item details for this controlnets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model associated with this controlnets item; preserve server-returned values when passing them to another operation. | [optional]
**display_name** | **str** | Human-readable display name for this controlnets item; it is not a stable identifier. | [optional]
**name** | **str** | Human-readable name for this controlnets item; it is not a stable identifier. |
**precision** | **str** | Precision associated with this controlnets item; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.generator_options_response_model_details_controlnets_inner import GeneratorOptionsResponseModelDetailsControlnetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponseModelDetailsControlnetsInner from a JSON string
generator_options_response_model_details_controlnets_inner_instance = GeneratorOptionsResponseModelDetailsControlnetsInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponseModelDetailsControlnetsInner.to_json())

# convert the object into a dict
generator_options_response_model_details_controlnets_inner_dict = generator_options_response_model_details_controlnets_inner_instance.to_dict()
# create an instance of GeneratorOptionsResponseModelDetailsControlnetsInner from a dict
generator_options_response_model_details_controlnets_inner_from_dict = GeneratorOptionsResponseModelDetailsControlnetsInner.from_dict(generator_options_response_model_details_controlnets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
