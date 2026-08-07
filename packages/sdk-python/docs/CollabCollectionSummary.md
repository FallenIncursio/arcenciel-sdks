# CollabCollectionSummary

Collab Collection Summary used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cover_image** | **str** | Cover Image accepted or returned by this contract. | [optional]
**cover_image_rating** | **str** | Cover Image Rating accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. |
**model_count** | **int** | Model Count accepted or returned by this contract. |
**name** | **str** | Name accepted or returned by this contract. |
**slug** | **str** | Slug accepted or returned by this contract. |
**visibility** | **str** | Visibility accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.collab_collection_summary import CollabCollectionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CollabCollectionSummary from a JSON string
collab_collection_summary_instance = CollabCollectionSummary.from_json(json)
# print the JSON string representation of the object
print(CollabCollectionSummary.to_json())

# convert the object into a dict
collab_collection_summary_dict = collab_collection_summary_instance.to_dict()
# create an instance of CollabCollectionSummary from a dict
collab_collection_summary_from_dict = CollabCollectionSummary.from_dict(collab_collection_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
