# GeneratorVideoOptionsResponse

Fields describing generator video options response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratios** | [**List[GeneratorVideoAspectRatioOption]**](GeneratorVideoAspectRatioOption.md) | Ordered aspect ratios entries included with this generator video options response; an empty list means none are available. |
**capabilities** | [**GeneratorVideoCapabilities**](GeneratorVideoCapabilities.md) |  |
**defaults** | [**GeneratorVideoDefaults**](GeneratorVideoDefaults.md) |  |
**duration_options** | [**List[GeneratorVideoDurationOption]**](GeneratorVideoDurationOption.md) | Ordered duration options entries included with this generator video options response; an empty list means none are available. |
**estimate_modifiers** | [**GeneratorVideoEstimateModifiers**](GeneratorVideoEstimateModifiers.md) |  |
**limits** | [**GeneratorVideoLimits**](GeneratorVideoLimits.md) |  |
**modes** | [**List[GeneratorVideoModeOption]**](GeneratorVideoModeOption.md) | Ordered modes entries included with this generator video options response; an empty list means none are available. |
**prompt_presets** | [**List[GeneratorVideoPromptPreset]**](GeneratorVideoPromptPreset.md) | Ordered prompt presets entries included with this generator video options response; an empty list means none are available. |
**quota** | [**GeneratorVideoQuota**](GeneratorVideoQuota.md) |  |
**resolution_buckets** | [**List[GeneratorVideoResolutionBucketOption]**](GeneratorVideoResolutionBucketOption.md) | Ordered resolution buckets entries included with this generator video options response; an empty list means none are available. |
**resolutions** | [**List[GeneratorVideoLegacyResolution]**](GeneratorVideoLegacyResolution.md) | Former exact presets retained temporarily for cached product clients. | [optional]

## Example

```python
from arcenciel.generated.models.generator_video_options_response import GeneratorVideoOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoOptionsResponse from a JSON string
generator_video_options_response_instance = GeneratorVideoOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoOptionsResponse.to_json())

# convert the object into a dict
generator_video_options_response_dict = generator_video_options_response_instance.to_dict()
# create an instance of GeneratorVideoOptionsResponse from a dict
generator_video_options_response_from_dict = GeneratorVideoOptionsResponse.from_dict(generator_video_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
