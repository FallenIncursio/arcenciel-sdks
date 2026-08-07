# DeveloperCommentMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | [**DeveloperComment**](DeveloperComment.md) |  |
**message** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_comment_mutation_response import DeveloperCommentMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperCommentMutationResponse from a JSON string
developer_comment_mutation_response_instance = DeveloperCommentMutationResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperCommentMutationResponse.to_json())

# convert the object into a dict
developer_comment_mutation_response_dict = developer_comment_mutation_response_instance.to_dict()
# create an instance of DeveloperCommentMutationResponse from a dict
developer_comment_mutation_response_from_dict = DeveloperCommentMutationResponse.from_dict(developer_comment_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
