# CollabShowcaseEntry

Collab Showcase Entry used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_name** | **str** | Character Name accepted or returned by this contract. | [optional]
**entry_id** | **str** | Entry Id accepted or returned by this contract. |
**model_id** | **int** | Model Id accepted or returned by this contract. | [optional]
**model_title** | **str** | Model Title accepted or returned by this contract. | [optional]
**model_url** | **str** | Model Url accepted or returned by this contract. | [optional]
**participant_id** | **int** | Participant Id accepted or returned by this contract. | [optional]
**profile_picture_path** | **str** | Profile Picture Path accepted or returned by this contract. | [optional]
**profile_picture_url** | **str** | Profile Picture Url accepted or returned by this contract. | [optional]
**profile_url** | **str** | Profile Url accepted or returned by this contract. | [optional]
**source_kind** | **str** | Source Kind accepted or returned by this contract. |
**source_title** | **str** | Source Title accepted or returned by this contract. | [optional]
**status** | **str** | Status accepted or returned by this contract. |
**submission_id** | **int** | Submission Id accepted or returned by this contract. | [optional]
**thumbnail_path** | **str** | Thumbnail Path accepted or returned by this contract. | [optional]
**thumbnail_url** | **str** | Thumbnail Url accepted or returned by this contract. | [optional]
**user_id** | **int** | User Id accepted or returned by this contract. | [optional]
**username** | **str** | Username accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.collab_showcase_entry import CollabShowcaseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CollabShowcaseEntry from a JSON string
collab_showcase_entry_instance = CollabShowcaseEntry.from_json(json)
# print the JSON string representation of the object
print(CollabShowcaseEntry.to_json())

# convert the object into a dict
collab_showcase_entry_dict = collab_showcase_entry_instance.to_dict()
# create an instance of CollabShowcaseEntry from a dict
collab_showcase_entry_from_dict = CollabShowcaseEntry.from_dict(collab_showcase_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
