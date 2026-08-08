# CollabShowcaseEntry

Fields describing collab showcase entry in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_name** | **str** | Human-readable character name for this collab showcase entry; it is not a stable identifier. | [optional]
**entry_id** | **str** | Stable identifier for the entry; use it in subsequent API calls instead of a display name. |
**model_id** | **int** | Stable identifier for the model; use it in subsequent API calls instead of a display name. | [optional]
**model_title** | **str** | Model Title associated with this collab showcase entry; preserve server-returned values when passing them to another operation. | [optional]
**model_url** | **str** | URL for the model url associated with this collab showcase entry; do not persist temporary signed query parameters. Format: uri. | [optional]
**participant_id** | **int** | Stable identifier for the participant; use it in subsequent API calls instead of a display name. | [optional]
**profile_picture_path** | **str** | Server-provided path for the profile picture path associated with this collab showcase entry; treat it as opaque. | [optional]
**profile_picture_url** | **str** | URL for the profile picture url associated with this collab showcase entry; do not persist temporary signed query parameters. Format: uri. | [optional]
**profile_url** | **str** | URL for the profile url associated with this collab showcase entry; do not persist temporary signed query parameters. Format: uri. | [optional]
**source_kind** | **str** | Source Kind associated with this collab showcase entry; preserve server-returned values when passing them to another operation. |
**source_title** | **str** | Source Title associated with this collab showcase entry; preserve server-returned values when passing them to another operation. | [optional]
**status** | **str** | Current lifecycle state of this collab showcase entry; clients should tolerate future values. |
**submission_id** | **int** | Stable identifier for the submission; use it in subsequent API calls instead of a display name. | [optional]
**thumbnail_path** | **str** | Server-provided path for the thumbnail path associated with this collab showcase entry; treat it as opaque. | [optional]
**thumbnail_url** | **str** | URL for the thumbnail url associated with this collab showcase entry; do not persist temporary signed query parameters. Format: uri. | [optional]
**user_id** | **int** | Stable identifier for the user; use it in subsequent API calls instead of a display name. | [optional]
**username** | **str** | Username associated with this collab showcase entry; preserve server-returned values when passing them to another operation. | [optional]

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
