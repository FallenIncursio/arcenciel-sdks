# GeneratorVideoSafetyOutput

Generator Video Safety Output used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocklist_matches** | **List[str]** | Tags matching blocklist rules. |
**blocklisted** | **bool** | Whether the scan matched the configured blocklist. |
**csam** | **bool** | Whether the scan matched minor-safety rules. |
**csam_minor_matches** | **List[str]** | Tags matching minor indicators. |
**csam_sexual_matches** | **List[str]** | Tags matching sexual-content indicators. |
**error** | **str** | Output-specific scan error. | [optional]
**nsfw** | **bool** | Whether the scan matched NSFW rules. |
**nsfw_matches** | **List[str]** | Tags matching NSFW rules. |
**path** | **str** | Server-side output basename used as the scan key. |
**rating** | **str** | Automated sampled-frame rating. |
**tags** | **List[str]** | Normalized sampled-frame tags. |

## Example

```python
from arcenciel.generated.models.generator_video_safety_output import GeneratorVideoSafetyOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoSafetyOutput from a JSON string
generator_video_safety_output_instance = GeneratorVideoSafetyOutput.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoSafetyOutput.to_json())

# convert the object into a dict
generator_video_safety_output_dict = generator_video_safety_output_instance.to_dict()
# create an instance of GeneratorVideoSafetyOutput from a dict
generator_video_safety_output_from_dict = GeneratorVideoSafetyOutput.from_dict(generator_video_safety_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
