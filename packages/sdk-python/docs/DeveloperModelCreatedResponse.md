# DeveloperModelCreatedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  |
**model_id** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_model_created_response import DeveloperModelCreatedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperModelCreatedResponse from a JSON string
developer_model_created_response_instance = DeveloperModelCreatedResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperModelCreatedResponse.to_json())

# convert the object into a dict
developer_model_created_response_dict = developer_model_created_response_instance.to_dict()
# create an instance of DeveloperModelCreatedResponse from a dict
developer_model_created_response_from_dict = DeveloperModelCreatedResponse.from_dict(developer_model_created_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
