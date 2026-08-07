# ReorderCollectionItemsRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**List[ReorderCollectionItemsRequestOrderInner]**](ReorderCollectionItemsRequestOrderInner.md) | Order accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.reorder_collection_items_request import ReorderCollectionItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReorderCollectionItemsRequest from a JSON string
reorder_collection_items_request_instance = ReorderCollectionItemsRequest.from_json(json)
# print the JSON string representation of the object
print(ReorderCollectionItemsRequest.to_json())

# convert the object into a dict
reorder_collection_items_request_dict = reorder_collection_items_request_instance.to_dict()
# create an instance of ReorderCollectionItemsRequest from a dict
reorder_collection_items_request_from_dict = ReorderCollectionItemsRequest.from_dict(reorder_collection_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
