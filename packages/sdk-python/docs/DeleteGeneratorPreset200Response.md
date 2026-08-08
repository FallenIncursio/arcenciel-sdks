# DeleteGeneratorPreset200Response

Fields describing 200 response for api generator presets id in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | Whether deleted applies to this 200 response for api generator presets id. |
**id** | **int** | Stable identifier for the 200 response for api generator presets id; use it in subsequent API calls instead of a display name. |

## Example

```python
from arcenciel.generated.models.delete_generator_preset200_response import DeleteGeneratorPreset200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteGeneratorPreset200Response from a JSON string
delete_generator_preset200_response_instance = DeleteGeneratorPreset200Response.from_json(json)
# print the JSON string representation of the object
print(DeleteGeneratorPreset200Response.to_json())

# convert the object into a dict
delete_generator_preset200_response_dict = delete_generator_preset200_response_instance.to_dict()
# create an instance of DeleteGeneratorPreset200Response from a dict
delete_generator_preset200_response_from_dict = DeleteGeneratorPreset200Response.from_dict(delete_generator_preset200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
