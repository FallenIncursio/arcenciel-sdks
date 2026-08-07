# SearchUsers200ResponseInner

200 response for api users search item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badges** | [**List[SearchUsers200ResponseInnerBadgesInner]**](SearchUsers200ResponseInnerBadgesInner.md) | Badges accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**profile_picture** | **str** | Profile Picture accepted or returned by this contract. | [optional]
**profile_picture_rating** | **str** | Profile Picture Rating accepted or returned by this contract. | [optional]
**relation_label** | **str** | Relation Label accepted or returned by this contract. | [optional]
**username** | **str** | Username accepted or returned by this contract. | [optional]

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
