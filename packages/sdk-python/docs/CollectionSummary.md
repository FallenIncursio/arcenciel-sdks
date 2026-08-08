# CollectionSummary

Caller-safe collection summary. Integrations must ignore new presentation and aggregate fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_collaborators** | **bool** | Whether allow collaborators applies to this collection summary. |
**collaborator_count** | **int** | Number of collaborator records represented by this collection summary. Minimum: 0. |
**collaborators** | [**List[CollectionCollaboratorSummary]**](CollectionCollaboratorSummary.md) | Ordered collaborators entries included with this collection summary; an empty list means none are available. |
**cover_image** | **str** | Cover Image associated with this collection summary; preserve server-returned values when passing them to another operation. | [optional]
**cover_image_rating** | **str** | Cover Image Rating associated with this collection summary; preserve server-returned values when passing them to another operation. | [optional]
**created_at** | **datetime** | UTC timestamp when this collection summary was created. Format: date-time. |
**description** | **str** | User-facing description of this collection summary; it may contain an empty string when no description was supplied. | [optional]
**favorite_count** | **int** | Number of favorite records represented by this collection summary. Minimum: 0. |
**favorited_by** | [**List[CollectionDetailFavoritedByInner]**](CollectionDetailFavoritedByInner.md) | Ordered favorited by entries included with this collection summary; an empty list means none are available. | [optional]
**featured** | **str** | Featured associated with this collection summary; preserve server-returned values when passing them to another operation. |
**id** | **int** | Stable identifier for the collection summary; use it in subsequent API calls instead of a display name. Minimum: 1. |
**image_count** | **int** | Number of image records represented by this collection summary. Minimum: 0. |
**item_count** | **int** | Number of item records represented by this collection summary. Minimum: 0. |
**item_placement** | **str** | Item Placement associated with this collection summary; preserve server-returned values when passing them to another operation. Supported values: &#x60;APPEND&#x60;, &#x60;PREPEND&#x60;. |
**last_updated** | **datetime** | Last Updated associated with this collection summary; preserve server-returned values when passing them to another operation. Format: date-time. | [optional]
**model_count** | **int** | Number of model records represented by this collection summary. Minimum: 0. |
**name** | **str** | Human-readable name for this collection summary; it is not a stable identifier. |
**owner** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Owner associated with this collection summary; preserve server-returned values when passing them to another operation. | [optional]
**self_favorited** | **bool** | Whether self favorited applies to this collection summary. |
**slug** | **str** | Slug associated with this collection summary; preserve server-returned values when passing them to another operation. |
**type** | **str** | Discriminator identifying the kind of collection summary; clients should tolerate future values. Supported values: &#x60;MODEL&#x60;, &#x60;IMAGE&#x60;. |
**visibility** | **str** | Visibility associated with this collection summary; preserve server-returned values when passing them to another operation. Supported values: &#x60;PUBLIC&#x60;, &#x60;UNLISTED&#x60;, &#x60;PRIVATE&#x60;. |

## Example

```python
from arcenciel.generated.models.collection_summary import CollectionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionSummary from a JSON string
collection_summary_instance = CollectionSummary.from_json(json)
# print the JSON string representation of the object
print(CollectionSummary.to_json())

# convert the object into a dict
collection_summary_dict = collection_summary_instance.to_dict()
# create an instance of CollectionSummary from a dict
collection_summary_from_dict = CollectionSummary.from_dict(collection_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
