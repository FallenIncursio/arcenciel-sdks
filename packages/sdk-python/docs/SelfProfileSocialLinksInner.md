# SelfProfileSocialLinksInner

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
from arcenciel.generated.models.self_profile_social_links_inner import SelfProfileSocialLinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of SelfProfileSocialLinksInner from a JSON string
self_profile_social_links_inner_instance = SelfProfileSocialLinksInner.from_json(json)
# print the JSON string representation of the object
print(SelfProfileSocialLinksInner.to_json())

# convert the object into a dict
self_profile_social_links_inner_dict = self_profile_social_links_inner_instance.to_dict()
# create an instance of SelfProfileSocialLinksInner from a dict
self_profile_social_links_inner_from_dict = SelfProfileSocialLinksInner.from_dict(self_profile_social_links_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
