# DeveloperVersionCreatedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  |
**version_id** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_version_created_response import DeveloperVersionCreatedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperVersionCreatedResponse from a JSON string
developer_version_created_response_instance = DeveloperVersionCreatedResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperVersionCreatedResponse.to_json())

# convert the object into a dict
developer_version_created_response_dict = developer_version_created_response_instance.to_dict()
# create an instance of DeveloperVersionCreatedResponse from a dict
developer_version_created_response_from_dict = DeveloperVersionCreatedResponse.from_dict(developer_version_created_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
