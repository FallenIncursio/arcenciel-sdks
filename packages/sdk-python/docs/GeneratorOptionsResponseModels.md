# GeneratorOptionsResponseModels

Models accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | **List[str]** | Adetailer accepted or returned by this contract. |
**checkpoints** | **List[str]** | Checkpoints accepted or returned by this contract. |
**controlnets** | **List[str]** | Controlnets accepted or returned by this contract. |
**loras** | **List[str]** | Loras accepted or returned by this contract. |
**upscale** | **List[str]** | Upscale accepted or returned by this contract. |
**vae** | **List[str]** | Vae accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_options_response_models import GeneratorOptionsResponseModels

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponseModels from a JSON string
generator_options_response_models_instance = GeneratorOptionsResponseModels.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponseModels.to_json())

# convert the object into a dict
generator_options_response_models_dict = generator_options_response_models_instance.to_dict()
# create an instance of GeneratorOptionsResponseModels from a dict
generator_options_response_models_from_dict = GeneratorOptionsResponseModels.from_dict(generator_options_response_models_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
