# GeneratorVideoCreateText5Request

Text-to-video request for the default approximately five-second duration.

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
**aspect_ratio** | **str** | Fixed output ratio. | [optional] [default to '4:3']
**frames** | **int** | Approximately five seconds for one credit. | [optional] [default to 124]
**mode** | **str** | Text-to-video mode. |
**resolution_bucket** | **int** | Requested resolution bucket. |

## Example

```python
from arcenciel.generated.models.generator_video_create_text5_request import GeneratorVideoCreateText5Request

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoCreateText5Request from a JSON string
generator_video_create_text5_request_instance = GeneratorVideoCreateText5Request.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoCreateText5Request.to_json())

# convert the object into a dict
generator_video_create_text5_request_dict = generator_video_create_text5_request_instance.to_dict()
# create an instance of GeneratorVideoCreateText5Request from a dict
generator_video_create_text5_request_from_dict = GeneratorVideoCreateText5Request.from_dict(generator_video_create_text5_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
