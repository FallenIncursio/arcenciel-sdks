# CollectionImageItem

Fields describing collection image item in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_at** | **datetime** | UTC timestamp for the added at transition of this collection image item. Format: date-time. |
**added_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Added By associated with this collection image item; preserve server-returned values when passing them to another operation. | [optional]
**id** | **int** | Stable identifier for the collection image item; use it in subsequent API calls instead of a display name. Minimum: 1. |
**image** | [**Image**](Image.md) |  |
**note** | **str** | Note associated with this collection image item; preserve server-returned values when passing them to another operation. | [optional]
**order** | **int** | Numeric order reported for this collection image item. |

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
