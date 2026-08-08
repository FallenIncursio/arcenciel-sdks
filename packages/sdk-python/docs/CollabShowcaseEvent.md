# CollabShowcaseEvent

Fields describing collab showcase event in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Stable identifier for the collab showcase event; use it in subsequent API calls instead of a display name. Minimum: 1. |
**release_at** | **datetime** | UTC timestamp for the release at transition of this collab showcase event. Format: date-time. | [optional]
**slug** | **str** | Slug associated with this collab showcase event; preserve server-returned values when passing them to another operation. |
**status** | **str** | Current lifecycle state of this collab showcase event; clients should tolerate future values. |
**title** | **str** | Display title shown to users for this collab showcase event. |
**url** | **str** | URL for the url associated with this collab showcase event; do not persist temporary signed query parameters. Format: uri. |

## Example

```python
from arcenciel.generated.models.collab_showcase_event import CollabShowcaseEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CollabShowcaseEvent from a JSON string
collab_showcase_event_instance = CollabShowcaseEvent.from_json(json)
# print the JSON string representation of the object
print(CollabShowcaseEvent.to_json())

# convert the object into a dict
collab_showcase_event_dict = collab_showcase_event_instance.to_dict()
# create an instance of CollabShowcaseEvent from a dict
collab_showcase_event_from_dict = CollabShowcaseEvent.from_dict(collab_showcase_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
