# DeveloperChatLinkPreview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creator** | **str** |  | [optional]
**description** | **str** |  | [optional]
**domain** | **str** |  | [optional]
**favicon_url** | **str** |  | [optional]
**id** | **int** |  | [optional]
**image_path** | **str** |  | [optional]
**image_url** | **str** |  | [optional]
**kind** | **str** | Preview resource kind. Clients must tolerate future values. |
**original_domain** | **str** |  | [optional]
**original_url** | **str** |  | [optional]
**site_name** | **str** |  | [optional]
**title** | **str** |  | [optional]
**url** | **str** |  |
**was_shortened** | **bool** |  | [optional]

## Example

```python
from arcenciel.generated.models.developer_chat_link_preview import DeveloperChatLinkPreview

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperChatLinkPreview from a JSON string
developer_chat_link_preview_instance = DeveloperChatLinkPreview.from_json(json)
# print the JSON string representation of the object
print(DeveloperChatLinkPreview.to_json())

# convert the object into a dict
developer_chat_link_preview_dict = developer_chat_link_preview_instance.to_dict()
# create an instance of DeveloperChatLinkPreview from a dict
developer_chat_link_preview_from_dict = DeveloperChatLinkPreview.from_dict(developer_chat_link_preview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
