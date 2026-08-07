# GeneratorPresetExport

Generator Preset Export used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exported_at** | **datetime** | Exported At accepted or returned by this contract. |
**preset** | [**GeneratorPresetExportPreset**](GeneratorPresetExportPreset.md) |  |
**version** | **int** | Version accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_preset_export import GeneratorPresetExport

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorPresetExport from a JSON string
generator_preset_export_instance = GeneratorPresetExport.from_json(json)
# print the JSON string representation of the object
print(GeneratorPresetExport.to_json())

# convert the object into a dict
generator_preset_export_dict = generator_preset_export_instance.to_dict()
# create an instance of GeneratorPresetExport from a dict
generator_preset_export_from_dict = GeneratorPresetExport.from_dict(generator_preset_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
