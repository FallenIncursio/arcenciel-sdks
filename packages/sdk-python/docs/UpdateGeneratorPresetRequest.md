# UpdateGeneratorPresetRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description accepted or returned by this contract. | [optional]
**is_public** | **bool** | Staff only. | [optional]
**name** | **str** | Name accepted or returned by this contract. | [optional]
**payload** | **Dict[str, object]** | Payload accepted or returned by this contract. | [optional]

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
