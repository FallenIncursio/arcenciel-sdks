# DeveloperModelMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  |
**model** | [**Model**](Model.md) |  |

## Example

```python
from arcenciel.generated.models.developer_model_mutation_response import DeveloperModelMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperModelMutationResponse from a JSON string
developer_model_mutation_response_instance = DeveloperModelMutationResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperModelMutationResponse.to_json())

# convert the object into a dict
developer_model_mutation_response_dict = developer_model_mutation_response_instance.to_dict()
# create an instance of DeveloperModelMutationResponse from a dict
developer_model_mutation_response_from_dict = DeveloperModelMutationResponse.from_dict(developer_model_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
