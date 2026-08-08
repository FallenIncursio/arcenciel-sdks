# GeneratorVideoEstimateModifiers

Fields describing generator video estimate modifiers in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | **float** | Audio render-time multiplier. |
**default_steps** | **int** | Step count represented by base estimates. |
**image_to_video** | **float** | I2V render-time multiplier. |
**last_frame** | **float** | Ending-frame render-time multiplier. |

## Example

```python
from arcenciel.generated.models.generator_video_estimate_modifiers import GeneratorVideoEstimateModifiers

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoEstimateModifiers from a JSON string
generator_video_estimate_modifiers_instance = GeneratorVideoEstimateModifiers.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoEstimateModifiers.to_json())

# convert the object into a dict
generator_video_estimate_modifiers_dict = generator_video_estimate_modifiers_instance.to_dict()
# create an instance of GeneratorVideoEstimateModifiers from a dict
generator_video_estimate_modifiers_from_dict = GeneratorVideoEstimateModifiers.from_dict(generator_video_estimate_modifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
