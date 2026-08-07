# AttachModelVersionDiscordImagesRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_ids** | **List[int]** | Image Ids accepted or returned by this contract. | [optional]

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
