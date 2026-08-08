# UpdateModelRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_wishes** | **str** | JSON array of author wishes. | [optional]
**description** | **str** | Sanitized rich HTML model description. Legacy Markdown or mixed Civitai-style HTML is accepted for compatibility and rendered by the rich-content pipeline. | [optional]
**tags** | **str** | Tags associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]
**title** | **str** | Display title shown to users for this request payload. | [optional]
**type** | **str** | Discriminator identifying the kind of request payload; clients should tolerate future values. | [optional]

## Example

```python
from arcenciel.generated.models.update_model_request import UpdateModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateModelRequest from a JSON string
update_model_request_instance = UpdateModelRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateModelRequest.to_json())

# convert the object into a dict
update_model_request_dict = update_model_request_instance.to_dict()
# create an instance of UpdateModelRequest from a dict
update_model_request_from_dict = UpdateModelRequest.from_dict(update_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
