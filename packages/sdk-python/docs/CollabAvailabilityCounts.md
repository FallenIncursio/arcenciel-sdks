# CollabAvailabilityCounts

Collab Availability Counts used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arc** | **int** | Arc accepted or returned by this contract. |
**archive** | **int** | Archive accepted or returned by this contract. |
**source** | **int** | Source accepted or returned by this contract. |
**unavailable** | **int** | Unavailable accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.collab_availability_counts import CollabAvailabilityCounts

# TODO update the JSON string below
json = "{}"
# create an instance of CollabAvailabilityCounts from a JSON string
collab_availability_counts_instance = CollabAvailabilityCounts.from_json(json)
# print the JSON string representation of the object
print(CollabAvailabilityCounts.to_json())

# convert the object into a dict
collab_availability_counts_dict = collab_availability_counts_instance.to_dict()
# create an instance of CollabAvailabilityCounts from a dict
collab_availability_counts_from_dict = CollabAvailabilityCounts.from_dict(collab_availability_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
