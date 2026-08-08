# CollectionDetail

Collection detail filtered for the caller. Manager-only pendingRequests may be absent for other callers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_collaborators** | **bool** | Whether allow collaborators applies to this collection detail. |
**collaborators** | [**List[CollectionCollaboratorSummary]**](CollectionCollaboratorSummary.md) | Ordered collaborators entries included with this collection detail; an empty list means none are available. |
**contribution_request** | [**CollectionContributionRequest**](CollectionContributionRequest.md) | Contribution Request associated with this collection detail; preserve server-returned values when passing them to another operation. |
**cover_image** | **str** | Cover Image associated with this collection detail; preserve server-returned values when passing them to another operation. | [optional]
**cover_image_rating** | **str** | Cover Image Rating associated with this collection detail; preserve server-returned values when passing them to another operation. | [optional]
**created_at** | **datetime** | UTC timestamp when this collection detail was created. Format: date-time. |
**description** | **str** | User-facing description of this collection detail; it may contain an empty string when no description was supplied. | [optional]
**favorite_count** | **int** | Number of favorite records represented by this collection detail. Minimum: 0. |
**favorited_by** | [**List[CollectionDetailFavoritedByInner]**](CollectionDetailFavoritedByInner.md) | Ordered favorited by entries included with this collection detail; an empty list means none are available. | [optional]
**featured** | **str** | Featured associated with this collection detail; preserve server-returned values when passing them to another operation. |
**id** | **int** | Stable identifier for the collection detail; use it in subsequent API calls instead of a display name. Minimum: 1. |
**image_items** | [**List[CollectionImageItem]**](CollectionImageItem.md) | Ordered image items entries included with this collection detail; an empty list means none are available. |
**item_placement** | **str** | Item Placement associated with this collection detail; preserve server-returned values when passing them to another operation. Supported values: &#x60;APPEND&#x60;, &#x60;PREPEND&#x60;. |
**model_items** | [**List[CollectionModelItem]**](CollectionModelItem.md) | Ordered model items entries included with this collection detail; an empty list means none are available. |
**name** | **str** | Human-readable name for this collection detail; it is not a stable identifier. |
**owner** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Owner associated with this collection detail; preserve server-returned values when passing them to another operation. | [optional]
**pagination** | [**CollectionPagination**](CollectionPagination.md) |  |
**pending_requests** | [**List[CollectionContributionRequest]**](CollectionContributionRequest.md) | Ordered pending requests entries included with this collection detail; an empty list means none are available. | [optional]
**permissions** | [**CollectionPermissions**](CollectionPermissions.md) |  |
**self_favorited** | **bool** | Whether self favorited applies to this collection detail. |
**slug** | **str** | Slug associated with this collection detail; preserve server-returned values when passing them to another operation. |
**stats** | [**CollectionStats**](CollectionStats.md) |  |
**type** | **str** | Discriminator identifying the kind of collection detail; clients should tolerate future values. Supported values: &#x60;MODEL&#x60;, &#x60;IMAGE&#x60;. |
**visibility** | **str** | Visibility associated with this collection detail; preserve server-returned values when passing them to another operation. Supported values: &#x60;PUBLIC&#x60;, &#x60;UNLISTED&#x60;, &#x60;PRIVATE&#x60;. |

## Example

```python
from arcenciel.generated.models.collection_detail import CollectionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionDetail from a JSON string
collection_detail_instance = CollectionDetail.from_json(json)
# print the JSON string representation of the object
print(CollectionDetail.to_json())

# convert the object into a dict
collection_detail_dict = collection_detail_instance.to_dict()
# create an instance of CollectionDetail from a dict
collection_detail_from_dict = CollectionDetail.from_dict(collection_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
