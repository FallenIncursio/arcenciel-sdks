# CollectionModelItem

Fields describing collection model item in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_at** | **datetime** | UTC timestamp for the added at transition of this collection model item. Format: date-time. |
**added_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Added By associated with this collection model item; preserve server-returned values when passing them to another operation. | [optional]
**id** | **int** | Stable identifier for the collection model item; use it in subsequent API calls instead of a display name. Minimum: 1. |
**model** | [**Model**](Model.md) |  |
**note** | **str** | Note associated with this collection model item; preserve server-returned values when passing them to another operation. | [optional]
**order** | **int** | Numeric order reported for this collection model item. |

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
