# CollabShowcaseEvent

Collab Showcase Event used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Id accepted or returned by this contract. |
**release_at** | **datetime** | Release At accepted or returned by this contract. | [optional]
**slug** | **str** | Slug accepted or returned by this contract. |
**status** | **str** | Status accepted or returned by this contract. |
**title** | **str** | Title accepted or returned by this contract. |
**url** | **str** | Url accepted or returned by this contract. |

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
