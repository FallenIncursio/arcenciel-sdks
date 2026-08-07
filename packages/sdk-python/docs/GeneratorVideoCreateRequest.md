# GeneratorVideoCreateRequest

Mode- and duration-specific video request. Unsupported mode, source-frame, duration, and bucket combinations are excluded by the schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_enabled** | **bool** | Request synchronized audio when the capability is available. | [optional] [default to False]
**negative_prompt** | **str** | Optional negative prompt; the server default is used when omitted. | [optional]
**prompt** | **str** | Positive video prompt. |
**prompt_preset** | **str** | Optional server-provided prompt-preset ID. | [optional]
**seed** | **str** | Optional safe non-negative decimal seed; generated when omitted. | [optional]
**sfw_mode** | **bool** | Apply stricter generator-only output moderation; mandatory minor-safety checks always apply. | [optional]
**steps** | **int** | Sampling steps. | [optional] [default to 25]
**aspect_ratio** | **str** | Match the first frame by default or explicitly crop to a fixed ratio. | [optional] [default to 'source']
**frames** | **int** | Approximately ten seconds for two credits. |
**mode** | **str** | Image-to-video mode. |
**resolution_bucket** | **int** | Ten-second clips are limited to buckets up to 512. |
**last_frame_image_path** | **str** | Optional owned generator-upload path used as Picture2. | [optional]
**source_image_path** | **str** | Active generator-upload path owned by the caller and used as Picture1. |

## Example

```python
from arcenciel.generated.models.generator_video_create_request import GeneratorVideoCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoCreateRequest from a JSON string
generator_video_create_request_instance = GeneratorVideoCreateRequest.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoCreateRequest.to_json())

# convert the object into a dict
generator_video_create_request_dict = generator_video_create_request_instance.to_dict()
# create an instance of GeneratorVideoCreateRequest from a dict
generator_video_create_request_from_dict = GeneratorVideoCreateRequest.from_dict(generator_video_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
