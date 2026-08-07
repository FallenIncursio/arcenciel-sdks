# SearchUsers200ResponseInnerBadgesInner

Badges item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | **str** | Icon accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. | [optional]
**type** | **str** | Type accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.search_users200_response_inner_badges_inner import SearchUsers200ResponseInnerBadgesInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchUsers200ResponseInnerBadgesInner from a JSON string
search_users200_response_inner_badges_inner_instance = SearchUsers200ResponseInnerBadgesInner.from_json(json)
# print the JSON string representation of the object
print(SearchUsers200ResponseInnerBadgesInner.to_json())

# convert the object into a dict
search_users200_response_inner_badges_inner_dict = search_users200_response_inner_badges_inner_instance.to_dict()
# create an instance of SearchUsers200ResponseInnerBadgesInner from a dict
search_users200_response_inner_badges_inner_from_dict = SearchUsers200ResponseInnerBadgesInner.from_dict(search_users200_response_inner_badges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
