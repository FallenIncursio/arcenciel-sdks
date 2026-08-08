# GeneratorPreset

Fields describing generator preset in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when this generator preset was created. Format: date-time. | [optional]
**description** | **str** | User-facing description of this generator preset; it may contain an empty string when no description was supplied. | [optional]
**id** | **int** | Stable identifier for the generator preset; use it in subsequent API calls instead of a display name. |
**is_public** | **bool** | Whether is public applies to this generator preset. |
**name** | **str** | Human-readable name for this generator preset; it is not a stable identifier. |
**owner_id** | **int** | Stable identifier for the owner; use it in subsequent API calls instead of a display name. | [optional]
**payload** | **Dict[str, object]** | Structured payload details for this generator preset. |
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this generator preset. Format: date-time. | [optional]

## Example

```python
from arcenciel.generated.models.generator_preset import GeneratorPreset

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorPreset from a JSON string
generator_preset_instance = GeneratorPreset.from_json(json)
# print the JSON string representation of the object
print(GeneratorPreset.to_json())

# convert the object into a dict
generator_preset_dict = generator_preset_instance.to_dict()
# create an instance of GeneratorPreset from a dict
generator_preset_from_dict = GeneratorPreset.from_dict(generator_preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
