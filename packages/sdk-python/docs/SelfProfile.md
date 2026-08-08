# SelfProfile

Fields describing self profile in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_keys** | [**List[ApiKey]**](ApiKey.md) | Ordered api keys entries included with this self profile; an empty list means none are available. | [optional]
**article_count** | **int** | Number of article records represented by this self profile. | [optional]
**bio** | **str** | Bio associated with this self profile; preserve server-returned values when passing them to another operation. | [optional]
**civitai_api_key** | **str** | Always null because the encrypted Civitai credential is write-only. | [optional] [readonly]
**created_at** | **datetime** | UTC timestamp when this self profile was created. Format: date-time. | [optional]
**date_format** | **str** | Date Format associated with this self profile; preserve server-returned values when passing them to another operation. | [optional]
**discord_linked** | **bool** | Whether discord linked applies to this self profile. | [optional]
**email** | **str** | Email associated with this self profile; preserve server-returned values when passing them to another operation. | [optional]
**followers_count** | **int** | Number of followers records represented by this self profile. | [optional]
**has_civitai_api_key** | **bool** | Whether a Civitai API key is configured. | [optional]
**id** | **int** | Stable identifier for the self profile; use it in subsequent API calls instead of a display name. | [optional]
**image_count** | **int** | Number of image records represented by this self profile. | [optional]
**is_followed** | **bool** | Whether is followed applies to this self profile. | [optional]
**model_count** | **int** | Number of model records represented by this self profile. | [optional]
**profile_banner** | **str** | Profile Banner associated with this self profile; preserve server-returned values when passing them to another operation. | [optional]
**profile_picture** | **str** | Profile Picture associated with this self profile; preserve server-returned values when passing them to another operation. | [optional]
**role** | **str** | Access role represented by this self profile; use it for display and capability checks, not authentication. | [optional]
**sfw_mode** | **bool** | Whether sfw mode applies to this self profile. | [optional]
**social_links** | [**List[SelfProfileSocialLinksInner]**](SelfProfileSocialLinksInner.md) | Ordered social links entries included with this self profile; an empty list means none are available. | [optional]
**track_downloads** | **bool** | Whether track downloads applies to this self profile. | [optional]
**uploads** | [**Uploads**](Uploads.md) |  | [optional]
**username** | **str** | Username associated with this self profile; preserve server-returned values when passing them to another operation. | [optional]
**video_count** | **int** | Number of video records represented by this self profile. | [optional]

## Example

```python
from arcenciel.generated.models.self_profile import SelfProfile

# TODO update the JSON string below
json = "{}"
# create an instance of SelfProfile from a JSON string
self_profile_instance = SelfProfile.from_json(json)
# print the JSON string representation of the object
print(SelfProfile.to_json())

# convert the object into a dict
self_profile_dict = self_profile_instance.to_dict()
# create an instance of SelfProfile from a dict
self_profile_from_dict = SelfProfile.from_dict(self_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
