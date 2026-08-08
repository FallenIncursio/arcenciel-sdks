# AttachModelVersionDiscordImagesRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_ids** | **List[int]** | Ordered image ids entries included with this request payload; an empty list means none are available. | [optional]

## Example

```python
from arcenciel.generated.models.attach_model_version_discord_images_request import AttachModelVersionDiscordImagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AttachModelVersionDiscordImagesRequest from a JSON string
attach_model_version_discord_images_request_instance = AttachModelVersionDiscordImagesRequest.from_json(json)
# print the JSON string representation of the object
print(AttachModelVersionDiscordImagesRequest.to_json())

# convert the object into a dict
attach_model_version_discord_images_request_dict = attach_model_version_discord_images_request_instance.to_dict()
# create an instance of AttachModelVersionDiscordImagesRequest from a dict
attach_model_version_discord_images_request_from_dict = AttachModelVersionDiscordImagesRequest.from_dict(attach_model_version_discord_images_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
