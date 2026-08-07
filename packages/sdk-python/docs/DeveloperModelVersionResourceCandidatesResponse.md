# DeveloperModelVersionResourceCandidatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**List[DeveloperModelVersionResourceCandidate]**](DeveloperModelVersionResourceCandidate.md) |  |

## Example

```python
from arcenciel.generated.models.developer_model_version_resource_candidates_response import DeveloperModelVersionResourceCandidatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperModelVersionResourceCandidatesResponse from a JSON string
developer_model_version_resource_candidates_response_instance = DeveloperModelVersionResourceCandidatesResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperModelVersionResourceCandidatesResponse.to_json())

# convert the object into a dict
developer_model_version_resource_candidates_response_dict = developer_model_version_resource_candidates_response_instance.to_dict()
# create an instance of DeveloperModelVersionResourceCandidatesResponse from a dict
developer_model_version_resource_candidates_response_from_dict = DeveloperModelVersionResourceCandidatesResponse.from_dict(developer_model_version_resource_candidates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
