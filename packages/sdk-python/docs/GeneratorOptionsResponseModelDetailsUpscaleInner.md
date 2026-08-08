# GeneratorOptionsResponseModelDetailsUpscaleInner

Structured upscale item details for this upscale.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model associated with this upscale item; preserve server-returned values when passing them to another operation. | [optional]
**display_name** | **str** | Human-readable display name for this upscale item; it is not a stable identifier. | [optional]
**name** | **str** | Human-readable name for this upscale item; it is not a stable identifier. |
**precision** | **str** | Precision associated with this upscale item; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.generator_options_response_model_details_upscale_inner import GeneratorOptionsResponseModelDetailsUpscaleInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponseModelDetailsUpscaleInner from a JSON string
generator_options_response_model_details_upscale_inner_instance = GeneratorOptionsResponseModelDetailsUpscaleInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponseModelDetailsUpscaleInner.to_json())

# convert the object into a dict
generator_options_response_model_details_upscale_inner_dict = generator_options_response_model_details_upscale_inner_instance.to_dict()
# create an instance of GeneratorOptionsResponseModelDetailsUpscaleInner from a dict
generator_options_response_model_details_upscale_inner_from_dict = GeneratorOptionsResponseModelDetailsUpscaleInner.from_dict(generator_options_response_model_details_upscale_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
