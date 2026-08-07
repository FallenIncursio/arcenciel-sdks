# CollabDetail

Collab Detail used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**announcement_enabled** | **bool** | Announcement Enabled accepted or returned by this contract. | [optional]
**availability_counts** | [**CollabAvailabilityCounts**](CollabAvailabilityCounts.md) |  | [optional]
**banner_image** | **str** | Banner Image accepted or returned by this contract. | [optional]
**banner_image_rating** | **str** | Banner Image Rating accepted or returned by this contract. | [optional]
**category** | **str** | Category accepted or returned by this contract. | [optional]
**category_label** | **str** | Category Label accepted or returned by this contract. | [optional]
**collection** | [**CollabCollectionSummary**](CollabCollectionSummary.md) | Collection accepted or returned by this contract. | [optional]
**collection_managed_by_collab** | **bool** | Collection Managed By Collab accepted or returned by this contract. | [optional]
**completeness** | **str** | Completeness accepted or returned by this contract. | [optional]
**cover_images** | [**List[CollabCoverImage]**](CollabCoverImage.md) | Cover Images accepted or returned by this contract. | [optional]
**created_at** | **datetime** | Created At accepted or returned by this contract. |
**created_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Created By accepted or returned by this contract. | [optional]
**creator_previews** | [**List[CollabCreatorPreview]**](CollabCreatorPreview.md) | Creator Previews accepted or returned by this contract. | [optional]
**description** | **str** | Description accepted or returned by this contract. | [optional]
**discord_message_url** | **str** | Discord Message Url accepted or returned by this contract. | [optional]
**evidence_level** | **str** | Evidence Level accepted or returned by this contract. | [optional]
**historical_scale** | **str** | Historical Scale accepted or returned by this contract. | [optional]
**history_summary** | **str** | History Summary accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. |
**match_window_end** | **datetime** | Match Window End accepted or returned by this contract. | [optional]
**match_window_start** | **datetime** | Match Window Start accepted or returned by this contract. | [optional]
**matching_mode** | **str** | Matching Mode accepted or returned by this contract. | [optional]
**mode** | **str** | Mode accepted or returned by this contract. |
**participant_count** | **int** | Participant Count accepted or returned by this contract. |
**release_at** | **datetime** | Release At accepted or returned by this contract. | [optional]
**release_end_at** | **datetime** | Release End At accepted or returned by this contract. | [optional]
**rules** | **str** | Rules accepted or returned by this contract. | [optional]
**slug** | **str** | Slug accepted or returned by this contract. |
**status** | **str** | Status accepted or returned by this contract. |
**submission_count** | **int** | Submission Count accepted or returned by this contract. |
**title** | **str** | Title accepted or returned by this contract. |
**updated_at** | **datetime** | Updated At accepted or returned by this contract. |
**visibility** | **str** | Visibility accepted or returned by this contract. |
**current_participant** | [**CollabParticipant**](CollabParticipant.md) | Current Participant accepted or returned by this contract. |
**evidence** | **List[Dict[str, object]]** | Evidence accepted or returned by this contract. | [optional]
**historical_participants** | **List[Dict[str, object]]** | Historical Participants accepted or returned by this contract. | [optional]
**participants** | [**List[CollabParticipant]**](CollabParticipant.md) | Participants accepted or returned by this contract. |
**permissions** | [**CollabPermissions**](CollabPermissions.md) |  |
**updated_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Updated By accepted or returned by this contract. | [optional]

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
