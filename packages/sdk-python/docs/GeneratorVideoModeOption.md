# GeneratorVideoModeOption

Generator Video Mode Option used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the runtime currently supports this mode. |
**id** | **str** | Wire value submitted as the job mode. |
**label** | **str** | Human-readable mode label. |
**unavailable_reason** | **str** | Viewer-safe explanation when the mode is unavailable. | [optional]

## Example

```python
from arcenciel.generated.models.generator_video_mode_option import GeneratorVideoModeOption

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoModeOption from a JSON string
generator_video_mode_option_instance = GeneratorVideoModeOption.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoModeOption.to_json())

# convert the object into a dict
generator_video_mode_option_dict = generator_video_mode_option_instance.to_dict()
# create an instance of GeneratorVideoModeOption from a dict
generator_video_mode_option_from_dict = GeneratorVideoModeOption.from_dict(generator_video_mode_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
