# CollectionDetailFavoritedByInner

Structured favorited by item details for this favorited by.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Stable identifier for the favorited by item; use it in subsequent API calls instead of a display name. Minimum: 1. |

## Example

```python
from arcenciel.generated.models.collection_detail_favorited_by_inner import CollectionDetailFavoritedByInner

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionDetailFavoritedByInner from a JSON string
collection_detail_favorited_by_inner_instance = CollectionDetailFavoritedByInner.from_json(json)
# print the JSON string representation of the object
print(CollectionDetailFavoritedByInner.to_json())

# convert the object into a dict
collection_detail_favorited_by_inner_dict = collection_detail_favorited_by_inner_instance.to_dict()
# create an instance of CollectionDetailFavoritedByInner from a dict
collection_detail_favorited_by_inner_from_dict = CollectionDetailFavoritedByInner.from_dict(collection_detail_favorited_by_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
