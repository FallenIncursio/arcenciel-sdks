# SelfProfile

Self Profile used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_keys** | [**List[ApiKey]**](ApiKey.md) | Api Keys accepted or returned by this contract. | [optional]
**article_count** | **int** | Article Count accepted or returned by this contract. | [optional]
**bio** | **str** | Bio accepted or returned by this contract. | [optional]
**civitai_api_key** | **str** | Always null because the encrypted Civitai credential is write-only. | [optional] [readonly]
**created_at** | **datetime** | Created At accepted or returned by this contract. | [optional]
**date_format** | **str** | Date Format accepted or returned by this contract. | [optional]
**discord_linked** | **bool** | Discord Linked accepted or returned by this contract. | [optional]
**email** | **str** | Email accepted or returned by this contract. | [optional]
**followers_count** | **int** | Followers Count accepted or returned by this contract. | [optional]
**has_civitai_api_key** | **bool** | Whether a Civitai API key is configured. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**image_count** | **int** | Image Count accepted or returned by this contract. | [optional]
**is_followed** | **bool** | Is Followed accepted or returned by this contract. | [optional]
**model_count** | **int** | Model Count accepted or returned by this contract. | [optional]
**profile_banner** | **str** | Profile Banner accepted or returned by this contract. | [optional]
**profile_picture** | **str** | Profile Picture accepted or returned by this contract. | [optional]
**role** | **str** | Role accepted or returned by this contract. | [optional]
**sfw_mode** | **bool** | Sfw Mode accepted or returned by this contract. | [optional]
**social_links** | [**List[SelfProfileSocialLinksInner]**](SelfProfileSocialLinksInner.md) | Social Links accepted or returned by this contract. | [optional]
**track_downloads** | **bool** | Track Downloads accepted or returned by this contract. | [optional]
**uploads** | [**Uploads**](Uploads.md) |  | [optional]
**username** | **str** | Username accepted or returned by this contract. | [optional]
**video_count** | **int** | Video Count accepted or returned by this contract. | [optional]

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
