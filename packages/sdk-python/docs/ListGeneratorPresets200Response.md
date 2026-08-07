# ListGeneratorPresets200Response

200 response for api generator presets used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**presets** | [**List[GeneratorPreset]**](GeneratorPreset.md) | Presets accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.list_generator_presets200_response import ListGeneratorPresets200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListGeneratorPresets200Response from a JSON string
list_generator_presets200_response_instance = ListGeneratorPresets200Response.from_json(json)
# print the JSON string representation of the object
print(ListGeneratorPresets200Response.to_json())

# convert the object into a dict
list_generator_presets200_response_dict = list_generator_presets200_response_instance.to_dict()
# create an instance of ListGeneratorPresets200Response from a dict
list_generator_presets200_response_from_dict = ListGeneratorPresets200Response.from_dict(list_generator_presets200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
