# GeneratorVideoJobWithQuotaResponse

Fields describing generator video job with quota response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**GeneratorVideoJob**](GeneratorVideoJob.md) |  |
**quota** | [**GeneratorVideoQuota**](GeneratorVideoQuota.md) |  |

## Example

```python
from arcenciel.generated.models.generator_video_job_with_quota_response import GeneratorVideoJobWithQuotaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoJobWithQuotaResponse from a JSON string
generator_video_job_with_quota_response_instance = GeneratorVideoJobWithQuotaResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoJobWithQuotaResponse.to_json())

# convert the object into a dict
generator_video_job_with_quota_response_dict = generator_video_job_with_quota_response_instance.to_dict()
# create an instance of GeneratorVideoJobWithQuotaResponse from a dict
generator_video_job_with_quota_response_from_dict = GeneratorVideoJobWithQuotaResponse.from_dict(generator_video_job_with_quota_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
