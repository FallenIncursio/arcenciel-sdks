# GetGeneratorPreset200Response

200 response for api generator presets id used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preset** | [**GeneratorPreset**](GeneratorPreset.md) |  |

## Example

```python
from arcenciel.generated.models.get_generator_preset200_response import GetGeneratorPreset200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetGeneratorPreset200Response from a JSON string
get_generator_preset200_response_instance = GetGeneratorPreset200Response.from_json(json)
# print the JSON string representation of the object
print(GetGeneratorPreset200Response.to_json())

# convert the object into a dict
get_generator_preset200_response_dict = get_generator_preset200_response_instance.to_dict()
# create an instance of GetGeneratorPreset200Response from a dict
get_generator_preset200_response_from_dict = GetGeneratorPreset200Response.from_dict(get_generator_preset200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
