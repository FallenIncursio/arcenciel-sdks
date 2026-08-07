# GeneratorPreset

Generator Preset used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At accepted or returned by this contract. | [optional]
**description** | **str** | Description accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. |
**is_public** | **bool** | Is Public accepted or returned by this contract. |
**name** | **str** | Name accepted or returned by this contract. |
**owner_id** | **int** | Owner Id accepted or returned by this contract. | [optional]
**payload** | **Dict[str, object]** | Payload accepted or returned by this contract. |
**updated_at** | **datetime** | Updated At accepted or returned by this contract. | [optional]

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
