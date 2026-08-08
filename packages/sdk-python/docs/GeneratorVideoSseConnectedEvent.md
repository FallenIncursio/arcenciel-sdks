# GeneratorVideoSseConnectedEvent

Fields describing generator video sse connected event in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** | Confirms that the authenticated event stream is connected. |

## Example

```python
from arcenciel.generated.models.generator_video_sse_connected_event import GeneratorVideoSseConnectedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoSseConnectedEvent from a JSON string
generator_video_sse_connected_event_instance = GeneratorVideoSseConnectedEvent.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoSseConnectedEvent.to_json())

# convert the object into a dict
generator_video_sse_connected_event_dict = generator_video_sse_connected_event_instance.to_dict()
# create an instance of GeneratorVideoSseConnectedEvent from a dict
generator_video_sse_connected_event_from_dict = GeneratorVideoSseConnectedEvent.from_dict(generator_video_sse_connected_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
