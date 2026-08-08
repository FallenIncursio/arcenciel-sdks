# ModelVersionResourceBaseManagement

Present only for a caller allowed to manage this resource graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when this management was created. Format: date-time. |
**created_by_id** | **int** | Stable identifier for the created by; use it in subsequent API calls instead of a display name. |
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this management. Format: date-time. |

## Example

```python
from arcenciel.generated.models.model_version_resource_base_management import ModelVersionResourceBaseManagement

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionResourceBaseManagement from a JSON string
model_version_resource_base_management_instance = ModelVersionResourceBaseManagement.from_json(json)
# print the JSON string representation of the object
print(ModelVersionResourceBaseManagement.to_json())

# convert the object into a dict
model_version_resource_base_management_dict = model_version_resource_base_management_instance.to_dict()
# create an instance of ModelVersionResourceBaseManagement from a dict
model_version_resource_base_management_from_dict = ModelVersionResourceBaseManagement.from_dict(model_version_resource_base_management_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
