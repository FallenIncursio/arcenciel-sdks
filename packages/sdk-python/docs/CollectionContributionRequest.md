# CollectionContributionRequest

Fields describing collection contribution request in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when this collection contribution request was created. Format: date-time. |
**id** | **int** | Stable identifier for the collection contribution request; use it in subsequent API calls instead of a display name. Minimum: 1. |
**message** | **str** | Message associated with this collection contribution request; preserve server-returned values when passing them to another operation. |
**responded_at** | **datetime** | UTC timestamp for the responded at transition of this collection contribution request. Format: date-time. |
**responded_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Responded By associated with this collection contribution request; preserve server-returned values when passing them to another operation. |
**status** | **str** | Current request status. Clients must tolerate new workflow states. |
**user** | [**DeveloperUserSummary**](DeveloperUserSummary.md) |  |

## Example

```python
from arcenciel.generated.models.collection_contribution_request import CollectionContributionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionContributionRequest from a JSON string
collection_contribution_request_instance = CollectionContributionRequest.from_json(json)
# print the JSON string representation of the object
print(CollectionContributionRequest.to_json())

# convert the object into a dict
collection_contribution_request_dict = collection_contribution_request_instance.to_dict()
# create an instance of CollectionContributionRequest from a dict
collection_contribution_request_from_dict = CollectionContributionRequest.from_dict(collection_contribution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
