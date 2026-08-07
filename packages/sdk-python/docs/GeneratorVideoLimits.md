# GeneratorVideoLimits

Generator Video Limits used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfg** | **float** | Server-owned guidance value. |
**fps** | **int** | Output frames per second. |
**frames** | **List[int]** | Supported frame counts. |
**max_output_bytes** | **int** | Maximum accepted generated-video size. |
**max_pixels** | **int** | Maximum resolved canvas area in pixels. |
**max_source_bytes** | **int** | Maximum bytes per source frame image. |
**max_source_pixels** | **int** | Maximum decoded pixels per source frame image. |
**max_steps** | **int** | Maximum accepted sampling step count. |
**min_steps** | **int** | Minimum accepted sampling step count. |
**negative_prompt_chars** | **int** | Maximum negative-prompt length in characters. |
**prompt_chars** | **int** | Maximum prompt length in characters. |
**retention_days** | **int** | Generated-output retention period in days. |

## Example

```python
from arcenciel.generated.models.generator_video_limits import GeneratorVideoLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoLimits from a JSON string
generator_video_limits_instance = GeneratorVideoLimits.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoLimits.to_json())

# convert the object into a dict
generator_video_limits_dict = generator_video_limits_instance.to_dict()
# create an instance of GeneratorVideoLimits from a dict
generator_video_limits_from_dict = GeneratorVideoLimits.from_dict(generator_video_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
