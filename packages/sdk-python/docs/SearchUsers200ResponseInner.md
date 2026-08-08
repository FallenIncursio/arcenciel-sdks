# SearchUsers200ResponseInner

Structured 200 response for api users search item details for this 200 response for api users search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badges** | [**List[SearchUsers200ResponseInnerBadgesInner]**](SearchUsers200ResponseInnerBadgesInner.md) | Ordered badges entries included with this 200 response for api users search item; an empty list means none are available. | [optional]
**id** | **int** | Stable identifier for the 200 response for api users search item; use it in subsequent API calls instead of a display name. | [optional]
**profile_picture** | **str** | Profile Picture associated with this 200 response for api users search item; preserve server-returned values when passing them to another operation. | [optional]
**profile_picture_rating** | **str** | Profile Picture Rating associated with this 200 response for api users search item; preserve server-returned values when passing them to another operation. | [optional]
**relation_label** | **str** | Relation Label associated with this 200 response for api users search item; preserve server-returned values when passing them to another operation. Supported values: &#x60;Owner&#x60;, &#x60;Collaborator&#x60;. | [optional]
**username** | **str** | Username associated with this 200 response for api users search item; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.search_users200_response_inner import SearchUsers200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchUsers200ResponseInner from a JSON string
search_users200_response_inner_instance = SearchUsers200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(SearchUsers200ResponseInner.to_json())

# convert the object into a dict
search_users200_response_inner_dict = search_users200_response_inner_instance.to_dict()
# create an instance of SearchUsers200ResponseInner from a dict
search_users200_response_inner_from_dict = SearchUsers200ResponseInner.from_dict(search_users200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
