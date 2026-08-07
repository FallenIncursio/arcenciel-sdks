# CollectionContributionRequest

Collection Contribution Request used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At accepted or returned by this contract. |
**id** | **int** | Id accepted or returned by this contract. |
**message** | **str** | Message accepted or returned by this contract. |
**responded_at** | **datetime** | Responded At accepted or returned by this contract. |
**responded_by** | [**DeveloperUserSummary**](DeveloperUserSummary.md) | Responded By accepted or returned by this contract. |
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
