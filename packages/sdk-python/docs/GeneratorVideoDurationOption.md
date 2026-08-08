# GeneratorVideoDurationOption

Fields describing generator video duration option in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_cost** | **int** | Rolling-quota credits reserved by this duration. |
**duration_seconds** | **float** | Expected playback duration at the configured FPS. |
**estimate_factor** | **float** | Server-side multiplier used for queue estimates. |
**frames** | **int** | Requested workflow frame count. |
**label** | **str** | Human-readable approximate duration. |
**max_resolution_bucket** | **int** | Largest bucket accepted for this duration. |

## Example

```python
from arcenciel.generated.models.generator_video_duration_option import GeneratorVideoDurationOption

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoDurationOption from a JSON string
generator_video_duration_option_instance = GeneratorVideoDurationOption.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoDurationOption.to_json())

# convert the object into a dict
generator_video_duration_option_dict = generator_video_duration_option_instance.to_dict()
# create an instance of GeneratorVideoDurationOption from a dict
generator_video_duration_option_from_dict = GeneratorVideoDurationOption.from_dict(generator_video_duration_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
