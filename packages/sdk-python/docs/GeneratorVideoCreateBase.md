# GeneratorVideoCreateBase

Generator Video Create Base used by the Arc en Ciel API contract.

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

## Example

```python
from arcenciel.generated.models.generator_video_create_base import GeneratorVideoCreateBase

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoCreateBase from a JSON string
generator_video_create_base_instance = GeneratorVideoCreateBase.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoCreateBase.to_json())

# convert the object into a dict
generator_video_create_base_dict = generator_video_create_base_instance.to_dict()
# create an instance of GeneratorVideoCreateBase from a dict
generator_video_create_base_from_dict = GeneratorVideoCreateBase.from_dict(generator_video_create_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
