# CollabParticipant

Fields describing collab participant in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_name** | **str** | Human-readable character name for this collab participant; it is not a stable identifier. | [optional]
**created_at** | **datetime** | UTC timestamp when this collab participant was created. Format: date-time. | [optional]
**display_order** | **int** | Numeric display order reported for this collab participant. |
**id** | **int** | Stable identifier for the collab participant; use it in subsequent API calls instead of a display name. |
**notes** | **str** | Notes associated with this collab participant; preserve server-returned values when passing them to another operation. | [optional]
**placeholder_image** | **str** | Placeholder Image associated with this collab participant; preserve server-returned values when passing them to another operation. | [optional]
**placeholder_image_description** | **str** | User-facing description of this collab participant; it may contain an empty string when no description was supplied. | [optional]
**placeholder_image_rating** | **str** | Placeholder Image Rating associated with this collab participant; preserve server-returned values when passing them to another operation. | [optional]
**placeholder_image_source_url** | **str** | URL for the placeholder image source url associated with this collab participant; do not persist temporary signed query parameters. Format: uri. | [optional]
**requested_at** | **datetime** | UTC timestamp for the requested at transition of this collab participant. Format: date-time. | [optional]
**responded_at** | **datetime** | UTC timestamp for the responded at transition of this collab participant. Format: date-time. | [optional]
**source_title** | **str** | Source Title associated with this collab participant; preserve server-returned values when passing them to another operation. | [optional]
**status** | **str** | Current lifecycle state of this collab participant; clients should tolerate future values. |
**submissions** | **List[Dict[str, object]]** | Ordered submissions entries included with this collab participant; an empty list means none are available. |
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this collab participant. Format: date-time. | [optional]
**user** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | User associated with this collab participant; preserve server-returned values when passing them to another operation. | [optional]
**user_id** | **int** | Stable identifier for the user; use it in subsequent API calls instead of a display name. | [optional]

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
