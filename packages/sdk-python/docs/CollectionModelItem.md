# CollectionModelItem

Collection Model Item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_at** | **datetime** | Added At accepted or returned by this contract. |
**added_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Added By accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. |
**model** | [**Model**](Model.md) |  |
**note** | **str** | Note accepted or returned by this contract. | [optional]
**order** | **int** | Order accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.collection_model_item import CollectionModelItem

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionModelItem from a JSON string
collection_model_item_instance = CollectionModelItem.from_json(json)
# print the JSON string representation of the object
print(CollectionModelItem.to_json())

# convert the object into a dict
collection_model_item_dict = collection_model_item_instance.to_dict()
# create an instance of CollectionModelItem from a dict
collection_model_item_from_dict = CollectionModelItem.from_dict(collection_model_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
