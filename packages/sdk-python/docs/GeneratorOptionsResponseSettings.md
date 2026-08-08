# GeneratorOptionsResponseSettings

Structured settings details for this generator options response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaults** | **Dict[str, object]** | Structured defaults details for this settings. |
**retention_options** | **List[int]** | Ordered retention options entries included with this settings; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.generator_options_response_settings import GeneratorOptionsResponseSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponseSettings from a JSON string
generator_options_response_settings_instance = GeneratorOptionsResponseSettings.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponseSettings.to_json())

# convert the object into a dict
generator_options_response_settings_dict = generator_options_response_settings_instance.to_dict()
# create an instance of GeneratorOptionsResponseSettings from a dict
generator_options_response_settings_from_dict = GeneratorOptionsResponseSettings.from_dict(generator_options_response_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
