# DeveloperVersionMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  |
**version** | [**Version**](Version.md) |  |

## Example

```python
from arcenciel.generated.models.developer_version_mutation_response import DeveloperVersionMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperVersionMutationResponse from a JSON string
developer_version_mutation_response_instance = DeveloperVersionMutationResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperVersionMutationResponse.to_json())

# convert the object into a dict
developer_version_mutation_response_dict = developer_version_mutation_response_instance.to_dict()
# create an instance of DeveloperVersionMutationResponse from a dict
developer_version_mutation_response_from_dict = DeveloperVersionMutationResponse.from_dict(developer_version_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
