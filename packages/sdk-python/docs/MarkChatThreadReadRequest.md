# MarkChatThreadReadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **int** | Message in this thread to use as the new read marker; omitted selects the latest message. | [optional]

## Example

```python
from arcenciel.generated.models.mark_chat_thread_read_request import MarkChatThreadReadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MarkChatThreadReadRequest from a JSON string
mark_chat_thread_read_request_instance = MarkChatThreadReadRequest.from_json(json)
# print the JSON string representation of the object
print(MarkChatThreadReadRequest.to_json())

# convert the object into a dict
mark_chat_thread_read_request_dict = mark_chat_thread_read_request_instance.to_dict()
# create an instance of MarkChatThreadReadRequest from a dict
mark_chat_thread_read_request_from_dict = MarkChatThreadReadRequest.from_dict(mark_chat_thread_read_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
