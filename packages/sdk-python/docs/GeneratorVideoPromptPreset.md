# GeneratorVideoPromptPreset

Generator Video Prompt Preset used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Preset identifier submitted with a job. |
**label** | **str** | Human-readable preset name. |
**prompt** | **str** | Server-maintained starting prompt. |

## Example

```python
from arcenciel.generated.models.generator_video_prompt_preset import GeneratorVideoPromptPreset

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoPromptPreset from a JSON string
generator_video_prompt_preset_instance = GeneratorVideoPromptPreset.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoPromptPreset.to_json())

# convert the object into a dict
generator_video_prompt_preset_dict = generator_video_prompt_preset_instance.to_dict()
# create an instance of GeneratorVideoPromptPreset from a dict
generator_video_prompt_preset_from_dict = GeneratorVideoPromptPreset.from_dict(generator_video_prompt_preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
