# GeneratorOptionsResponseModelDetails

Model Details accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**List[GeneratorOptionsResponseModelDetailsAdetailerInner]**](GeneratorOptionsResponseModelDetailsAdetailerInner.md) | Adetailer accepted or returned by this contract. |
**checkpoints** | [**List[GeneratorOptionsResponseModelDetailsCheckpointsInner]**](GeneratorOptionsResponseModelDetailsCheckpointsInner.md) | Checkpoints accepted or returned by this contract. |
**controlnets** | [**List[GeneratorOptionsResponseModelDetailsControlnetsInner]**](GeneratorOptionsResponseModelDetailsControlnetsInner.md) | Controlnets accepted or returned by this contract. |
**loras** | [**List[GeneratorOptionsResponseModelDetailsLorasInner]**](GeneratorOptionsResponseModelDetailsLorasInner.md) | Loras accepted or returned by this contract. |
**upscale** | [**List[GeneratorOptionsResponseModelDetailsUpscaleInner]**](GeneratorOptionsResponseModelDetailsUpscaleInner.md) | Upscale accepted or returned by this contract. |
**vae** | [**List[GeneratorOptionsResponseModelDetailsVaeInner]**](GeneratorOptionsResponseModelDetailsVaeInner.md) | Vae accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_options_response_model_details import GeneratorOptionsResponseModelDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponseModelDetails from a JSON string
generator_options_response_model_details_instance = GeneratorOptionsResponseModelDetails.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponseModelDetails.to_json())

# convert the object into a dict
generator_options_response_model_details_dict = generator_options_response_model_details_instance.to_dict()
# create an instance of GeneratorOptionsResponseModelDetails from a dict
generator_options_response_model_details_from_dict = GeneratorOptionsResponseModelDetails.from_dict(generator_options_response_model_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
