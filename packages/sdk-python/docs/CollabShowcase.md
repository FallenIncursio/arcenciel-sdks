# CollabShowcase

Collab Showcase used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collab** | [**CollabShowcaseEvent**](CollabShowcaseEvent.md) |  |
**entries** | [**List[CollabShowcaseEntry]**](CollabShowcaseEntry.md) | Entries accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.collab_showcase import CollabShowcase

# TODO update the JSON string below
json = "{}"
# create an instance of CollabShowcase from a JSON string
collab_showcase_instance = CollabShowcase.from_json(json)
# print the JSON string representation of the object
print(CollabShowcase.to_json())

# convert the object into a dict
collab_showcase_dict = collab_showcase_instance.to_dict()
# create an instance of CollabShowcase from a dict
collab_showcase_from_dict = CollabShowcase.from_dict(collab_showcase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
