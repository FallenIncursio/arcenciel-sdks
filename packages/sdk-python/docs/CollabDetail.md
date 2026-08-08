# CollabDetail

Collab Detail value documented for this operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**announcement_enabled** | **bool** | Whether announcement enabled applies to this collab summary. | [optional]
**availability_counts** | [**CollabAvailabilityCounts**](CollabAvailabilityCounts.md) |  | [optional]
**banner_image** | **str** | Banner Image associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**banner_image_rating** | **str** | Banner Image Rating associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**category** | **str** | Category associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**category_label** | **str** | Category Label associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**collection** | [**CollabCollectionSummary**](CollabCollectionSummary.md) | Collection associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**collection_managed_by_collab** | **bool** | Whether collection managed by collab applies to this collab summary. | [optional]
**completeness** | **str** | Completeness associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**cover_images** | [**List[CollabCoverImage]**](CollabCoverImage.md) | Ordered cover images entries included with this collab summary; an empty list means none are available. | [optional]
**created_at** | **datetime** | UTC timestamp when this collab summary was created. Format: date-time. |
**created_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Created By associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**creator_previews** | [**List[CollabCreatorPreview]**](CollabCreatorPreview.md) | Ordered creator previews entries included with this collab summary; an empty list means none are available. | [optional]
**description** | **str** | User-facing description of this collab summary; it may contain an empty string when no description was supplied. | [optional]
**discord_message_url** | **str** | URL for the discord message url associated with this collab summary; do not persist temporary signed query parameters. Format: uri. | [optional]
**evidence_level** | **str** | Evidence Level associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**historical_scale** | **str** | Historical Scale associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**history_summary** | **str** | History Summary associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**id** | **int** | Stable identifier for the collab summary; use it in subsequent API calls instead of a display name. Minimum: 1. |
**match_window_end** | **datetime** | Match Window End associated with this collab summary; preserve server-returned values when passing them to another operation. Format: date-time. | [optional]
**match_window_start** | **datetime** | Match Window Start associated with this collab summary; preserve server-returned values when passing them to another operation. Format: date-time. | [optional]
**matching_mode** | **str** | Matching Mode associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**mode** | **str** | Mode associated with this collab summary; preserve server-returned values when passing them to another operation. Supported values: &#x60;LIVE&#x60;, &#x60;HISTORICAL&#x60;. |
**participant_count** | **int** | Number of participant records represented by this collab summary. Minimum: 0. |
**release_at** | **datetime** | UTC timestamp for the release at transition of this collab summary. Format: date-time. | [optional]
**release_end_at** | **datetime** | UTC timestamp for the release end at transition of this collab summary. Format: date-time. | [optional]
**rules** | **str** | Rules associated with this collab summary; preserve server-returned values when passing them to another operation. | [optional]
**slug** | **str** | Slug associated with this collab summary; preserve server-returned values when passing them to another operation. |
**status** | **str** | Current lifecycle state of this collab summary; clients should tolerate future values. |
**submission_count** | **int** | Number of submission records represented by this collab summary. Minimum: 0. |
**title** | **str** | Display title shown to users for this collab summary. |
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this collab summary. Format: date-time. |
**visibility** | **str** | Visibility associated with this collab summary; preserve server-returned values when passing them to another operation. Supported values: &#x60;PUBLIC&#x60;, &#x60;UNLISTED&#x60;, &#x60;PRIVATE&#x60;. |
**current_participant** | [**CollabParticipant**](CollabParticipant.md) | Current Participant associated with this collab detail; preserve server-returned values when passing them to another operation. |
**evidence** | **List[Dict[str, object]]** | Ordered evidence entries included with this collab detail; an empty list means none are available. | [optional]
**historical_participants** | **List[Dict[str, object]]** | Ordered historical participants entries included with this collab detail; an empty list means none are available. | [optional]
**participants** | [**List[CollabParticipant]**](CollabParticipant.md) | Ordered participants entries included with this collab detail; an empty list means none are available. |
**permissions** | [**CollabPermissions**](CollabPermissions.md) |  |
**updated_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Updated By associated with this collab detail; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.collab_detail import CollabDetail

# TODO update the JSON string below
json = "{}"
# create an instance of CollabDetail from a JSON string
collab_detail_instance = CollabDetail.from_json(json)
# print the JSON string representation of the object
print(CollabDetail.to_json())

# convert the object into a dict
collab_detail_dict = collab_detail_instance.to_dict()
# create an instance of CollabDetail from a dict
collab_detail_from_dict = CollabDetail.from_dict(collab_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
