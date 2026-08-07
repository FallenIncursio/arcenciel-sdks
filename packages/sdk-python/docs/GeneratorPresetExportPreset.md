# GeneratorPresetExportPreset

Preset accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. |
**payload** | **Dict[str, object]** | Payload accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_preset_export_preset import GeneratorPresetExportPreset

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorPresetExportPreset from a JSON string
generator_preset_export_preset_instance = GeneratorPresetExportPreset.from_json(json)
# print the JSON string representation of the object
print(GeneratorPresetExportPreset.to_json())

# convert the object into a dict
generator_preset_export_preset_dict = generator_preset_export_preset_instance.to_dict()
# create an instance of GeneratorPresetExportPreset from a dict
generator_preset_export_preset_from_dict = GeneratorPresetExportPreset.from_dict(generator_preset_export_preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
