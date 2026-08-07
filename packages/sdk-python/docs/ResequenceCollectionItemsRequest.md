# ResequenceCollectionItemsRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Manually override the resequencing mode. Defaults to the collection preference. | [optional]

## Example

```python
from arcenciel.generated.models.resequence_collection_items_request import ResequenceCollectionItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResequenceCollectionItemsRequest from a JSON string
resequence_collection_items_request_instance = ResequenceCollectionItemsRequest.from_json(json)
# print the JSON string representation of the object
print(ResequenceCollectionItemsRequest.to_json())

# convert the object into a dict
resequence_collection_items_request_dict = resequence_collection_items_request_instance.to_dict()
# create an instance of ResequenceCollectionItemsRequest from a dict
resequence_collection_items_request_from_dict = ResequenceCollectionItemsRequest.from_dict(resequence_collection_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
