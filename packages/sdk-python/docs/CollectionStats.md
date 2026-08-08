# CollectionStats

Fields describing collection stats in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_count** | **int** | Number of image records represented by this collection stats. Minimum: 0. |
**last_updated** | **datetime** | Last Updated associated with this collection stats; preserve server-returned values when passing them to another operation. Format: date-time. |
**model_count** | **int** | Number of model records represented by this collection stats. Minimum: 0. |
**total_items** | **int** | Numeric total items reported for this collection stats. Minimum: 0. |

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
