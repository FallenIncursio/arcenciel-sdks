# CollectionSummary

Caller-safe collection summary. Integrations must ignore new presentation and aggregate fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_collaborators** | **bool** | Allow Collaborators accepted or returned by this contract. |
**collaborator_count** | **int** | Collaborator Count accepted or returned by this contract. |
**collaborators** | [**List[CollectionCollaboratorSummary]**](CollectionCollaboratorSummary.md) | Collaborators accepted or returned by this contract. |
**cover_image** | **str** | Cover Image accepted or returned by this contract. | [optional]
**cover_image_rating** | **str** | Cover Image Rating accepted or returned by this contract. | [optional]
**created_at** | **datetime** | Created At accepted or returned by this contract. |
**description** | **str** | Description accepted or returned by this contract. | [optional]
**favorite_count** | **int** | Favorite Count accepted or returned by this contract. |
**favorited_by** | [**List[CollectionDetailFavoritedByInner]**](CollectionDetailFavoritedByInner.md) | Favorited By accepted or returned by this contract. | [optional]
**featured** | **str** | Featured accepted or returned by this contract. |
**id** | **int** | Id accepted or returned by this contract. |
**image_count** | **int** | Image Count accepted or returned by this contract. |
**item_count** | **int** | Item Count accepted or returned by this contract. |
**item_placement** | **str** | Item Placement accepted or returned by this contract. |
**last_updated** | **datetime** | Last Updated accepted or returned by this contract. | [optional]
**model_count** | **int** | Model Count accepted or returned by this contract. |
**name** | **str** | Name accepted or returned by this contract. |
**owner** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Owner accepted or returned by this contract. | [optional]
**self_favorited** | **bool** | Self Favorited accepted or returned by this contract. |
**slug** | **str** | Slug accepted or returned by this contract. |
**type** | **str** | Type accepted or returned by this contract. |
**visibility** | **str** | Visibility accepted or returned by this contract. |

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
