# GeneratorVideoSseHeartbeatEvent

Generator Video Sse Heartbeat Event used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ts** | **int** | Server time in Unix milliseconds. |

## Example

```python
from arcenciel.generated.models.generator_video_sse_heartbeat_event import GeneratorVideoSseHeartbeatEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoSseHeartbeatEvent from a JSON string
generator_video_sse_heartbeat_event_instance = GeneratorVideoSseHeartbeatEvent.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoSseHeartbeatEvent.to_json())

# convert the object into a dict
generator_video_sse_heartbeat_event_dict = generator_video_sse_heartbeat_event_instance.to_dict()
# create an instance of GeneratorVideoSseHeartbeatEvent from a dict
generator_video_sse_heartbeat_event_from_dict = GeneratorVideoSseHeartbeatEvent.from_dict(generator_video_sse_heartbeat_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
