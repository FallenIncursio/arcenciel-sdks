# DeveloperArticleMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article** | [**Article**](Article.md) |  |
**message** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_article_mutation_response import DeveloperArticleMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperArticleMutationResponse from a JSON string
developer_article_mutation_response_instance = DeveloperArticleMutationResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperArticleMutationResponse.to_json())

# convert the object into a dict
developer_article_mutation_response_dict = developer_article_mutation_response_instance.to_dict()
# create an instance of DeveloperArticleMutationResponse from a dict
developer_article_mutation_response_from_dict = DeveloperArticleMutationResponse.from_dict(developer_article_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
