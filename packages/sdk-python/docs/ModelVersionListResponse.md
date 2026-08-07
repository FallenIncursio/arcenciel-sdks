# ModelVersionListResponse

Stable response envelope for versions visible to the current caller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**versions** | [**List[Version]**](Version.md) | Versions visible to the current caller in the model&#39;s configured order. |

## Example

```python
from arcenciel.generated.models.model_version_list_response import ModelVersionListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionListResponse from a JSON string
model_version_list_response_instance = ModelVersionListResponse.from_json(json)
# print the JSON string representation of the object
print(ModelVersionListResponse.to_json())

# convert the object into a dict
model_version_list_response_dict = model_version_list_response_instance.to_dict()
# create an instance of ModelVersionListResponse from a dict
model_version_list_response_from_dict = ModelVersionListResponse.from_dict(model_version_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
