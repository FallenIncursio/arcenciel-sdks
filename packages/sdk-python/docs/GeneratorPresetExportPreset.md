# GeneratorPresetExportPreset

Structured preset details for this generator preset export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User-facing description of this preset; it may contain an empty string when no description was supplied. | [optional]
**name** | **str** | Human-readable name for this preset; it is not a stable identifier. |
**payload** | **Dict[str, object]** | Structured payload details for this preset. |

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
