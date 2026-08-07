# GeneratorOptionsResponseModelDetailsVaeInner

Vae item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model accepted or returned by this contract. | [optional]
**display_name** | **str** | Display Name accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. |
**precision** | **str** | Precision accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_options_response_model_details_vae_inner import GeneratorOptionsResponseModelDetailsVaeInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponseModelDetailsVaeInner from a JSON string
generator_options_response_model_details_vae_inner_instance = GeneratorOptionsResponseModelDetailsVaeInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponseModelDetailsVaeInner.to_json())

# convert the object into a dict
generator_options_response_model_details_vae_inner_dict = generator_options_response_model_details_vae_inner_instance.to_dict()
# create an instance of GeneratorOptionsResponseModelDetailsVaeInner from a dict
generator_options_response_model_details_vae_inner_from_dict = GeneratorOptionsResponseModelDetailsVaeInner.from_dict(generator_options_response_model_details_vae_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
