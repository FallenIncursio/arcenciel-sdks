# GeneratorVideoSseJobEvent

Generator Video Sse Job Event used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**GeneratorVideoJob**](GeneratorVideoJob.md) |  |

## Example

```python
from arcenciel.generated.models.generator_video_sse_job_event import GeneratorVideoSseJobEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoSseJobEvent from a JSON string
generator_video_sse_job_event_instance = GeneratorVideoSseJobEvent.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoSseJobEvent.to_json())

# convert the object into a dict
generator_video_sse_job_event_dict = generator_video_sse_job_event_instance.to_dict()
# create an instance of GeneratorVideoSseJobEvent from a dict
generator_video_sse_job_event_from_dict = GeneratorVideoSseJobEvent.from_dict(generator_video_sse_job_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
