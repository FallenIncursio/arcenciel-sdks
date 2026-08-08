# UserProfile

Fields describing user profile in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_count** | **int** | Number of article records represented by this user profile. | [optional]
**bio** | **str** | Bio associated with this user profile; preserve server-returned values when passing them to another operation. | [optional]
**created_at** | **datetime** | UTC timestamp when this user profile was created. Format: date-time. | [optional]
**followers_count** | **int** | Number of followers records represented by this user profile. | [optional]
**id** | **int** | Stable identifier for the user profile; use it in subsequent API calls instead of a display name. | [optional]
**image_count** | **int** | Number of image records represented by this user profile. | [optional]
**is_followed** | **bool** | Whether is followed applies to this user profile. | [optional]
**model_count** | **int** | Number of model records represented by this user profile. | [optional]
**profile_banner** | **str** | Profile Banner associated with this user profile; preserve server-returned values when passing them to another operation. | [optional]
**profile_picture** | **str** | Profile Picture associated with this user profile; preserve server-returned values when passing them to another operation. | [optional]
**role** | **str** | Access role represented by this user profile; use it for display and capability checks, not authentication. | [optional]
**social_links** | [**List[SelfProfileSocialLinksInner]**](SelfProfileSocialLinksInner.md) | Ordered social links entries included with this user profile; an empty list means none are available. | [optional]
**username** | **str** | Username associated with this user profile; preserve server-returned values when passing them to another operation. | [optional]
**video_count** | **int** | Number of video records represented by this user profile. | [optional]

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
