# GeneratorVideoCapabilities

Generator Video Capabilities used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_output** | **bool** | Whether synchronized audio generation is available. |
**image_input** | **bool** | Whether image-to-video input is available. |
**last_frame_input** | **bool** | Whether ending-frame conditioning is available. |
**ready** | **bool** | Whether the remote video runtime is ready for base generation. |

## Example

```python
from arcenciel.generated.models.generator_video_capabilities import GeneratorVideoCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoCapabilities from a JSON string
generator_video_capabilities_instance = GeneratorVideoCapabilities.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoCapabilities.to_json())

# convert the object into a dict
generator_video_capabilities_dict = generator_video_capabilities_instance.to_dict()
# create an instance of GeneratorVideoCapabilities from a dict
generator_video_capabilities_from_dict = GeneratorVideoCapabilities.from_dict(generator_video_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
