# SelfProfileSocialLinksInner

Structured social links item details for this social links.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | **str** | Icon associated with this social links item; preserve server-returned values when passing them to another operation. | [optional]
**id** | **int** | Stable identifier for the social links item; use it in subsequent API calls instead of a display name. | [optional]
**order** | **int** | Numeric order reported for this social links item. | [optional]
**url** | **str** | URL for the url associated with this social links item; do not persist temporary signed query parameters. | [optional]

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
