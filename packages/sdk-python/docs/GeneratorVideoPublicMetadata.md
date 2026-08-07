# GeneratorVideoPublicMetadata

Generator Video Public Metadata used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratio** | **str** | Requested ratio behavior. |
**audio_enabled** | **bool** | Whether synchronized audio was requested. |
**credit_cost** | **int** | Credits reserved by the job. |
**resolution_bucket** | **int** | Requested resolution bucket. |
**sfw_mode** | **bool** | Whether stricter generator-only output moderation was requested. |
**source_fit** | **str** | I2V source-image fit behavior. |

## Example

```python
from arcenciel.generated.models.generator_video_public_metadata import GeneratorVideoPublicMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoPublicMetadata from a JSON string
generator_video_public_metadata_instance = GeneratorVideoPublicMetadata.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoPublicMetadata.to_json())

# convert the object into a dict
generator_video_public_metadata_dict = generator_video_public_metadata_instance.to_dict()
# create an instance of GeneratorVideoPublicMetadata from a dict
generator_video_public_metadata_from_dict = GeneratorVideoPublicMetadata.from_dict(generator_video_public_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
