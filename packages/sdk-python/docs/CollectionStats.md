# CollectionStats

Collection Stats used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_count** | **int** | Image Count accepted or returned by this contract. |
**last_updated** | **datetime** | Last Updated accepted or returned by this contract. |
**model_count** | **int** | Model Count accepted or returned by this contract. |
**total_items** | **int** | Total Items accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.collection_stats import CollectionStats

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionStats from a JSON string
collection_stats_instance = CollectionStats.from_json(json)
# print the JSON string representation of the object
print(CollectionStats.to_json())

# convert the object into a dict
collection_stats_dict = collection_stats_instance.to_dict()
# create an instance of CollectionStats from a dict
collection_stats_from_dict = CollectionStats.from_dict(collection_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
