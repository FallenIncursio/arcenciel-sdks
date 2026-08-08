# UpdateGeneratorPresetRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User-facing description of this request payload; it may contain an empty string when no description was supplied. | [optional]
**is_public** | **bool** | Staff only. | [optional]
**name** | **str** | Human-readable name for this request payload; it is not a stable identifier. | [optional]
**payload** | **Dict[str, object]** | Structured payload details for this request payload. | [optional]

## Example

```python
from arcenciel.generated.models.update_generator_preset_request import UpdateGeneratorPresetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateGeneratorPresetRequest from a JSON string
update_generator_preset_request_instance = UpdateGeneratorPresetRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateGeneratorPresetRequest.to_json())

# convert the object into a dict
update_generator_preset_request_dict = update_generator_preset_request_instance.to_dict()
# create an instance of UpdateGeneratorPresetRequest from a dict
update_generator_preset_request_from_dict = UpdateGeneratorPresetRequest.from_dict(update_generator_preset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
