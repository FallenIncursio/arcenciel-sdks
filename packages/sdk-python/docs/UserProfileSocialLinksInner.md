# UserProfileSocialLinksInner

Social Links item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | **str** | Icon accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**order** | **int** | Order accepted or returned by this contract. | [optional]
**url** | **str** | Url accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.user_profile_social_links_inner import UserProfileSocialLinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileSocialLinksInner from a JSON string
user_profile_social_links_inner_instance = UserProfileSocialLinksInner.from_json(json)
# print the JSON string representation of the object
print(UserProfileSocialLinksInner.to_json())

# convert the object into a dict
user_profile_social_links_inner_dict = user_profile_social_links_inner_instance.to_dict()
# create an instance of UserProfileSocialLinksInner from a dict
user_profile_social_links_inner_from_dict = UserProfileSocialLinksInner.from_dict(user_profile_social_links_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
