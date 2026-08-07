# DeleteGeneratorPreset200Response

200 response for api generator presets id used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | Deleted accepted or returned by this contract. |
**id** | **int** | Id accepted or returned by this contract. |

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
