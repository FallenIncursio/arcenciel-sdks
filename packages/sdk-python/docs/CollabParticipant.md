# CollabParticipant

Collab Participant used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_name** | **str** | Character Name accepted or returned by this contract. | [optional]
**created_at** | **datetime** | Created At accepted or returned by this contract. | [optional]
**display_order** | **int** | Display Order accepted or returned by this contract. |
**id** | **int** | Id accepted or returned by this contract. |
**notes** | **str** | Notes accepted or returned by this contract. | [optional]
**placeholder_image** | **str** | Placeholder Image accepted or returned by this contract. | [optional]
**placeholder_image_description** | **str** | Placeholder Image Description accepted or returned by this contract. | [optional]
**placeholder_image_rating** | **str** | Placeholder Image Rating accepted or returned by this contract. | [optional]
**placeholder_image_source_url** | **str** | Placeholder Image Source Url accepted or returned by this contract. | [optional]
**requested_at** | **datetime** | Requested At accepted or returned by this contract. | [optional]
**responded_at** | **datetime** | Responded At accepted or returned by this contract. | [optional]
**source_title** | **str** | Source Title accepted or returned by this contract. | [optional]
**status** | **str** | Status accepted or returned by this contract. |
**submissions** | **List[Dict[str, object]]** | Submissions accepted or returned by this contract. |
**updated_at** | **datetime** | Updated At accepted or returned by this contract. | [optional]
**user** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | User accepted or returned by this contract. | [optional]
**user_id** | **int** | User Id accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.collab_participant import CollabParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of CollabParticipant from a JSON string
collab_participant_instance = CollabParticipant.from_json(json)
# print the JSON string representation of the object
print(CollabParticipant.to_json())

# convert the object into a dict
collab_participant_dict = collab_participant_instance.to_dict()
# create an instance of CollabParticipant from a dict
collab_participant_from_dict = CollabParticipant.from_dict(collab_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
