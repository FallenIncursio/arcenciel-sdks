# CollabCollectionSummary

Fields describing collab collection summary in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cover_image** | **str** | Cover Image associated with this collab collection summary; preserve server-returned values when passing them to another operation. | [optional]
**cover_image_rating** | **str** | Cover Image Rating associated with this collab collection summary; preserve server-returned values when passing them to another operation. | [optional]
**id** | **int** | Stable identifier for the collab collection summary; use it in subsequent API calls instead of a display name. Minimum: 1. |
**model_count** | **int** | Number of model records represented by this collab collection summary. Minimum: 0. |
**name** | **str** | Human-readable name for this collab collection summary; it is not a stable identifier. |
**slug** | **str** | Slug associated with this collab collection summary; preserve server-returned values when passing them to another operation. |
**visibility** | **str** | Visibility associated with this collab collection summary; preserve server-returned values when passing them to another operation. Supported values: &#x60;PUBLIC&#x60;, &#x60;UNLISTED&#x60;, &#x60;PRIVATE&#x60;. |

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
