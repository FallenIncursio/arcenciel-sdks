# GeneratorVideoAspectRatioOption

Fields describing generator video aspect ratio option in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Relative height for a fixed ratio. | [optional]
**id** | **str** | Aspect-ratio wire value. |
**label** | **str** | Human-readable ratio label. |
**source_only** | **bool** | Whether the option is restricted to image-to-video. | [optional]
**width** | **int** | Relative width for a fixed ratio. | [optional]

## Example

```python
from arcenciel.generated.models.generator_video_aspect_ratio_option import GeneratorVideoAspectRatioOption

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoAspectRatioOption from a JSON string
generator_video_aspect_ratio_option_instance = GeneratorVideoAspectRatioOption.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoAspectRatioOption.to_json())

# convert the object into a dict
generator_video_aspect_ratio_option_dict = generator_video_aspect_ratio_option_instance.to_dict()
# create an instance of GeneratorVideoAspectRatioOption from a dict
generator_video_aspect_ratio_option_from_dict = GeneratorVideoAspectRatioOption.from_dict(generator_video_aspect_ratio_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
