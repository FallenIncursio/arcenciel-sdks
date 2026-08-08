# GeneratorOptionsResponseModelDetails

Structured model details details for this generator options response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**List[GeneratorOptionsResponseModelDetailsAdetailerInner]**](GeneratorOptionsResponseModelDetailsAdetailerInner.md) | Ordered adetailer entries included with this model details; an empty list means none are available. |
**checkpoints** | [**List[GeneratorOptionsResponseModelDetailsCheckpointsInner]**](GeneratorOptionsResponseModelDetailsCheckpointsInner.md) | Ordered checkpoints entries included with this model details; an empty list means none are available. |
**controlnets** | [**List[GeneratorOptionsResponseModelDetailsControlnetsInner]**](GeneratorOptionsResponseModelDetailsControlnetsInner.md) | Ordered controlnets entries included with this model details; an empty list means none are available. |
**loras** | [**List[GeneratorOptionsResponseModelDetailsLorasInner]**](GeneratorOptionsResponseModelDetailsLorasInner.md) | Ordered loras entries included with this model details; an empty list means none are available. |
**upscale** | [**List[GeneratorOptionsResponseModelDetailsUpscaleInner]**](GeneratorOptionsResponseModelDetailsUpscaleInner.md) | Ordered upscale entries included with this model details; an empty list means none are available. |
**vae** | [**List[GeneratorOptionsResponseModelDetailsVaeInner]**](GeneratorOptionsResponseModelDetailsVaeInner.md) | Ordered vae entries included with this model details; an empty list means none are available. |

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
