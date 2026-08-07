# CollectionImageItem

Collection Image Item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_at** | **datetime** | Added At accepted or returned by this contract. |
**added_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Added By accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. |
**image** | [**Image**](Image.md) |  |
**note** | **str** | Note accepted or returned by this contract. | [optional]
**order** | **int** | Order accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.collection_image_item import CollectionImageItem

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionImageItem from a JSON string
collection_image_item_instance = CollectionImageItem.from_json(json)
# print the JSON string representation of the object
print(CollectionImageItem.to_json())

# convert the object into a dict
collection_image_item_dict = collection_image_item_instance.to_dict()
# create an instance of CollectionImageItem from a dict
collection_image_item_from_dict = CollectionImageItem.from_dict(collection_image_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
