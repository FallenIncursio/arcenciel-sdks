# ReorderCollectionItemsRequestOrderInner

Structured order item details for this order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Stable identifier for the order item; use it in subsequent API calls instead of a display name. |
**order** | **int** | Numeric order reported for this order item. |

## Example

```python
from arcenciel.generated.models.reorder_collection_items_request_order_inner import ReorderCollectionItemsRequestOrderInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReorderCollectionItemsRequestOrderInner from a JSON string
reorder_collection_items_request_order_inner_instance = ReorderCollectionItemsRequestOrderInner.from_json(json)
# print the JSON string representation of the object
print(ReorderCollectionItemsRequestOrderInner.to_json())

# convert the object into a dict
reorder_collection_items_request_order_inner_dict = reorder_collection_items_request_order_inner_instance.to_dict()
# create an instance of ReorderCollectionItemsRequestOrderInner from a dict
reorder_collection_items_request_order_inner_from_dict = ReorderCollectionItemsRequestOrderInner.from_dict(reorder_collection_items_request_order_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
