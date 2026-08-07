# AddCollectionItemsRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **List[int]** | Items accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.add_collection_items_request import AddCollectionItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddCollectionItemsRequest from a JSON string
add_collection_items_request_instance = AddCollectionItemsRequest.from_json(json)
# print the JSON string representation of the object
print(AddCollectionItemsRequest.to_json())

# convert the object into a dict
add_collection_items_request_dict = add_collection_items_request_instance.to_dict()
# create an instance of AddCollectionItemsRequest from a dict
add_collection_items_request_from_dict = AddCollectionItemsRequest.from_dict(add_collection_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
