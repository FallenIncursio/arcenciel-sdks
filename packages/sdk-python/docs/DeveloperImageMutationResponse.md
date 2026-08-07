# DeveloperImageMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**Image**](Image.md) |  |
**message** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_image_mutation_response import DeveloperImageMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperImageMutationResponse from a JSON string
developer_image_mutation_response_instance = DeveloperImageMutationResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperImageMutationResponse.to_json())

# convert the object into a dict
developer_image_mutation_response_dict = developer_image_mutation_response_instance.to_dict()
# create an instance of DeveloperImageMutationResponse from a dict
developer_image_mutation_response_from_dict = DeveloperImageMutationResponse.from_dict(developer_image_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
