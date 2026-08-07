# CreateGeneratorPreset201Response

201 response for api generator presets used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preset** | [**GeneratorPreset**](GeneratorPreset.md) |  |

## Example

```python
from arcenciel.generated.models.create_generator_preset201_response import CreateGeneratorPreset201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorPreset201Response from a JSON string
create_generator_preset201_response_instance = CreateGeneratorPreset201Response.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorPreset201Response.to_json())

# convert the object into a dict
create_generator_preset201_response_dict = create_generator_preset201_response_instance.to_dict()
# create an instance of CreateGeneratorPreset201Response from a dict
create_generator_preset201_response_from_dict = CreateGeneratorPreset201Response.from_dict(create_generator_preset201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
