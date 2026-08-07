# GeneratorOptionsResponseModelDetailsAdetailerInner

Adetailer item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model accepted or returned by this contract. | [optional]
**display_name** | **str** | Display Name accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. |
**precision** | **str** | Precision accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_options_response_model_details_adetailer_inner import GeneratorOptionsResponseModelDetailsAdetailerInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponseModelDetailsAdetailerInner from a JSON string
generator_options_response_model_details_adetailer_inner_instance = GeneratorOptionsResponseModelDetailsAdetailerInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponseModelDetailsAdetailerInner.to_json())

# convert the object into a dict
generator_options_response_model_details_adetailer_inner_dict = generator_options_response_model_details_adetailer_inner_instance.to_dict()
# create an instance of GeneratorOptionsResponseModelDetailsAdetailerInner from a dict
generator_options_response_model_details_adetailer_inner_from_dict = GeneratorOptionsResponseModelDetailsAdetailerInner.from_dict(generator_options_response_model_details_adetailer_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
