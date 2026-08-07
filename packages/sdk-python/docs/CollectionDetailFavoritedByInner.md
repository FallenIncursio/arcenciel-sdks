# CollectionDetailFavoritedByInner

Favorited By item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Id accepted or returned by this contract. |

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
