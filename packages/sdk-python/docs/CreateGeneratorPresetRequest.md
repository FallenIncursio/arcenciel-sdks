# CreateGeneratorPresetRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User-facing description of this request payload; it may contain an empty string when no description was supplied. | [optional]
**is_public** | **bool** | Only applied for staff roles. | [optional]
**name** | **str** | Human-readable name for this request payload; it is not a stable identifier. |
**payload** | **Dict[str, object]** | Structured payload details for this request payload. |

## Example

```python
from arcenciel.generated.models.create_generator_preset_request import CreateGeneratorPresetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorPresetRequest from a JSON string
create_generator_preset_request_instance = CreateGeneratorPresetRequest.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorPresetRequest.to_json())

# convert the object into a dict
create_generator_preset_request_dict = create_generator_preset_request_instance.to_dict()
# create an instance of CreateGeneratorPresetRequest from a dict
create_generator_preset_request_from_dict = CreateGeneratorPresetRequest.from_dict(create_generator_preset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
