# UserProfile

User Profile used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_count** | **int** | Article Count accepted or returned by this contract. | [optional]
**bio** | **str** | Bio accepted or returned by this contract. | [optional]
**created_at** | **datetime** | Created At accepted or returned by this contract. | [optional]
**followers_count** | **int** | Followers Count accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**image_count** | **int** | Image Count accepted or returned by this contract. | [optional]
**is_followed** | **bool** | Is Followed accepted or returned by this contract. | [optional]
**model_count** | **int** | Model Count accepted or returned by this contract. | [optional]
**profile_banner** | **str** | Profile Banner accepted or returned by this contract. | [optional]
**profile_picture** | **str** | Profile Picture accepted or returned by this contract. | [optional]
**role** | **str** | Role accepted or returned by this contract. | [optional]
**social_links** | [**List[UserProfileSocialLinksInner]**](UserProfileSocialLinksInner.md) | Social Links accepted or returned by this contract. | [optional]
**username** | **str** | Username accepted or returned by this contract. | [optional]
**video_count** | **int** | Video Count accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.user_profile import UserProfile

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfile from a JSON string
user_profile_instance = UserProfile.from_json(json)
# print the JSON string representation of the object
print(UserProfile.to_json())

# convert the object into a dict
user_profile_dict = user_profile_instance.to_dict()
# create an instance of UserProfile from a dict
user_profile_from_dict = UserProfile.from_dict(user_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
