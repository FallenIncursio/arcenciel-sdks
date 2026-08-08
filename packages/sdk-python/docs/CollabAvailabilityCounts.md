# CollabAvailabilityCounts

Fields describing collab availability counts in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arc** | **int** | Numeric arc reported for this collab availability counts. Minimum: 0. |
**archive** | **int** | Numeric archive reported for this collab availability counts. Minimum: 0. |
**source** | **int** | Numeric source reported for this collab availability counts. Minimum: 0. |
**unavailable** | **int** | Numeric unavailable reported for this collab availability counts. Minimum: 0. |

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
