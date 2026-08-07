# GeneratorVideoResolutionBucketOption

Generator Video Resolution Bucket Option used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimate** | [**GeneratorVideoEstimateRange**](GeneratorVideoEstimateRange.md) |  |
**label** | **str** | Human-readable quality label. |
**value** | **int** | Nominal short-edge resolution bucket. |

## Example

```python
from arcenciel.generated.models.generator_video_resolution_bucket_option import GeneratorVideoResolutionBucketOption

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoResolutionBucketOption from a JSON string
generator_video_resolution_bucket_option_instance = GeneratorVideoResolutionBucketOption.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoResolutionBucketOption.to_json())

# convert the object into a dict
generator_video_resolution_bucket_option_dict = generator_video_resolution_bucket_option_instance.to_dict()
# create an instance of GeneratorVideoResolutionBucketOption from a dict
generator_video_resolution_bucket_option_from_dict = GeneratorVideoResolutionBucketOption.from_dict(generator_video_resolution_bucket_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
