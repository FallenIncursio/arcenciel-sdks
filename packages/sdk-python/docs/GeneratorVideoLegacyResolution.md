# GeneratorVideoLegacyResolution

Generator Video Legacy Resolution used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Legacy canvas height. |
**id** | **str** | Legacy preset identifier. |
**label** | **str** | Legacy preset label. |
**width** | **int** | Legacy canvas width. |

## Example

```python
from arcenciel.generated.models.generator_video_legacy_resolution import GeneratorVideoLegacyResolution

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoLegacyResolution from a JSON string
generator_video_legacy_resolution_instance = GeneratorVideoLegacyResolution.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoLegacyResolution.to_json())

# convert the object into a dict
generator_video_legacy_resolution_dict = generator_video_legacy_resolution_instance.to_dict()
# create an instance of GeneratorVideoLegacyResolution from a dict
generator_video_legacy_resolution_from_dict = GeneratorVideoLegacyResolution.from_dict(generator_video_legacy_resolution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
