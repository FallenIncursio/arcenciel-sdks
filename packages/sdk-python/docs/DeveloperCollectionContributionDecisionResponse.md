# DeveloperCollectionContributionDecisionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collaborator** | [**CollectionCollaboratorSummary**](CollectionCollaboratorSummary.md) |  |
**request** | [**CollectionContributionRequest**](CollectionContributionRequest.md) |  |

## Example

```python
from arcenciel.generated.models.developer_collection_contribution_decision_response import DeveloperCollectionContributionDecisionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperCollectionContributionDecisionResponse from a JSON string
developer_collection_contribution_decision_response_instance = DeveloperCollectionContributionDecisionResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperCollectionContributionDecisionResponse.to_json())

# convert the object into a dict
developer_collection_contribution_decision_response_dict = developer_collection_contribution_decision_response_instance.to_dict()
# create an instance of DeveloperCollectionContributionDecisionResponse from a dict
developer_collection_contribution_decision_response_from_dict = DeveloperCollectionContributionDecisionResponse.from_dict(developer_collection_contribution_decision_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
