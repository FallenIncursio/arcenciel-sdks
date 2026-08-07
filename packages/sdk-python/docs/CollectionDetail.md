# CollectionDetail

Collection detail filtered for the caller. Manager-only pendingRequests may be absent for other callers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_collaborators** | **bool** | Allow Collaborators accepted or returned by this contract. |
**collaborators** | [**List[CollectionCollaboratorSummary]**](CollectionCollaboratorSummary.md) | Collaborators accepted or returned by this contract. |
**contribution_request** | [**CollectionContributionRequest**](CollectionContributionRequest.md) | Contribution Request accepted or returned by this contract. |
**cover_image** | **str** | Cover Image accepted or returned by this contract. | [optional]
**cover_image_rating** | **str** | Cover Image Rating accepted or returned by this contract. | [optional]
**created_at** | **datetime** | Created At accepted or returned by this contract. |
**description** | **str** | Description accepted or returned by this contract. | [optional]
**favorite_count** | **int** | Favorite Count accepted or returned by this contract. |
**favorited_by** | [**List[CollectionDetailFavoritedByInner]**](CollectionDetailFavoritedByInner.md) | Favorited By accepted or returned by this contract. | [optional]
**featured** | **str** | Featured accepted or returned by this contract. |
**id** | **int** | Id accepted or returned by this contract. |
**image_items** | [**List[CollectionImageItem]**](CollectionImageItem.md) | Image Items accepted or returned by this contract. |
**item_placement** | **str** | Item Placement accepted or returned by this contract. |
**model_items** | [**List[CollectionModelItem]**](CollectionModelItem.md) | Model Items accepted or returned by this contract. |
**name** | **str** | Name accepted or returned by this contract. |
**owner** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Owner accepted or returned by this contract. | [optional]
**pagination** | [**CollectionPagination**](CollectionPagination.md) |  |
**pending_requests** | [**List[CollectionContributionRequest]**](CollectionContributionRequest.md) | Pending Requests accepted or returned by this contract. | [optional]
**permissions** | [**CollectionPermissions**](CollectionPermissions.md) |  |
**self_favorited** | **bool** | Self Favorited accepted or returned by this contract. |
**slug** | **str** | Slug accepted or returned by this contract. |
**stats** | [**CollectionStats**](CollectionStats.md) |  |
**type** | **str** | Type accepted or returned by this contract. |
**visibility** | **str** | Visibility accepted or returned by this contract. |

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
