# ListTagUsage200ResponseInner

200 response for api tags usage item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.list_tag_usage200_response_inner import ListTagUsage200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListTagUsage200ResponseInner from a JSON string
list_tag_usage200_response_inner_instance = ListTagUsage200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ListTagUsage200ResponseInner.to_json())

# convert the object into a dict
list_tag_usage200_response_inner_dict = list_tag_usage200_response_inner_instance.to_dict()
# create an instance of ListTagUsage200ResponseInner from a dict
list_tag_usage200_response_inner_from_dict = ListTagUsage200ResponseInner.from_dict(list_tag_usage200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
