# GeneratorVideoDefaults

Generator Video Defaults used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratio** | **str** | Default text-to-video ratio. |
**audio_enabled** | **bool** | Default synchronized-audio choice. |
**cfg** | **float** | Default server-owned guidance value. |
**fps** | **int** | Default output FPS. |
**frames** | **int** | Default frame count. |
**image_aspect_ratio** | **str** | Default image-to-video ratio behavior. |
**mode** | **str** | Default mode. |
**negative_prompt** | **str** | Default negative prompt. |
**resolution_bucket** | **int** | Default resolution bucket. |
**sampler_name** | **str** | Default server-owned sampler. |
**scheduler** | **str** | Default server-owned scheduler. |
**sfw_mode** | **bool** | Current account&#39;s default SFW choice. |
**steps** | **int** | Default sampling steps. |

## Example

```python
from arcenciel.generated.models.generator_video_defaults import GeneratorVideoDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoDefaults from a JSON string
generator_video_defaults_instance = GeneratorVideoDefaults.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoDefaults.to_json())

# convert the object into a dict
generator_video_defaults_dict = generator_video_defaults_instance.to_dict()
# create an instance of GeneratorVideoDefaults from a dict
generator_video_defaults_from_dict = GeneratorVideoDefaults.from_dict(generator_video_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
