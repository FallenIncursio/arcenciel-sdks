# GeneratorOptionsResponseModels

Structured models details for this generator options response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | **List[str]** | Ordered adetailer entries included with this models; an empty list means none are available. |
**checkpoints** | **List[str]** | Ordered checkpoints entries included with this models; an empty list means none are available. |
**controlnets** | **List[str]** | Ordered controlnets entries included with this models; an empty list means none are available. |
**loras** | **List[str]** | Ordered loras entries included with this models; an empty list means none are available. |
**upscale** | **List[str]** | Ordered upscale entries included with this models; an empty list means none are available. |
**vae** | **List[str]** | Ordered vae entries included with this models; an empty list means none are available. |

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
