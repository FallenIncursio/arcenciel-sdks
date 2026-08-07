# GeneratorVideoEstimateRange

Generator Video Estimate Range used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **str** | Whether the estimate is a baseline or production-calibrated. |
**max_seconds** | **int** | Upper calibrated render-time estimate, excluding queue delay. |
**min_seconds** | **int** | Lower calibrated render-time estimate, excluding queue delay. |
**sample_count** | **int** | Production samples used for this calibration. |

## Example

```python
from arcenciel.generated.models.generator_video_estimate_range import GeneratorVideoEstimateRange

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoEstimateRange from a JSON string
generator_video_estimate_range_instance = GeneratorVideoEstimateRange.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoEstimateRange.to_json())

# convert the object into a dict
generator_video_estimate_range_dict = generator_video_estimate_range_instance.to_dict()
# create an instance of GeneratorVideoEstimateRange from a dict
generator_video_estimate_range_from_dict = GeneratorVideoEstimateRange.from_dict(generator_video_estimate_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
