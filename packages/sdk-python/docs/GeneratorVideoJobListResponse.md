# GeneratorVideoJobListResponse

Fields describing generator video job list response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[GeneratorVideoJob]**](GeneratorVideoJob.md) | Ordered jobs entries included with this generator video job list response; an empty list means none are available. |
**next_cursor** | **UUID** | Cursor for the next page. |
**quota** | [**GeneratorVideoQuota**](GeneratorVideoQuota.md) |  |

## Example

```python
from arcenciel.generated.models.generator_video_job_list_response import GeneratorVideoJobListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoJobListResponse from a JSON string
generator_video_job_list_response_instance = GeneratorVideoJobListResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoJobListResponse.to_json())

# convert the object into a dict
generator_video_job_list_response_dict = generator_video_job_list_response_instance.to_dict()
# create an instance of GeneratorVideoJobListResponse from a dict
generator_video_job_list_response_from_dict = GeneratorVideoJobListResponse.from_dict(generator_video_job_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
