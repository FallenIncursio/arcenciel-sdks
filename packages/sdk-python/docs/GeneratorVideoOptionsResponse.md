# GeneratorVideoOptionsResponse

Generator Video Options Response used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratios** | [**List[GeneratorVideoAspectRatioOption]**](GeneratorVideoAspectRatioOption.md) | Aspect Ratios accepted or returned by this contract. |
**capabilities** | [**GeneratorVideoCapabilities**](GeneratorVideoCapabilities.md) |  |
**defaults** | [**GeneratorVideoDefaults**](GeneratorVideoDefaults.md) |  |
**duration_options** | [**List[GeneratorVideoDurationOption]**](GeneratorVideoDurationOption.md) | Duration Options accepted or returned by this contract. |
**estimate_modifiers** | [**GeneratorVideoEstimateModifiers**](GeneratorVideoEstimateModifiers.md) |  |
**limits** | [**GeneratorVideoLimits**](GeneratorVideoLimits.md) |  |
**modes** | [**List[GeneratorVideoModeOption]**](GeneratorVideoModeOption.md) | Modes accepted or returned by this contract. |
**prompt_presets** | [**List[GeneratorVideoPromptPreset]**](GeneratorVideoPromptPreset.md) | Prompt Presets accepted or returned by this contract. |
**quota** | [**GeneratorVideoQuota**](GeneratorVideoQuota.md) |  |
**resolution_buckets** | [**List[GeneratorVideoResolutionBucketOption]**](GeneratorVideoResolutionBucketOption.md) | Resolution Buckets accepted or returned by this contract. |
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
