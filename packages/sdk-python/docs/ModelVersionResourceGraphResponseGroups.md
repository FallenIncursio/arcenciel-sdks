# ModelVersionResourceGraphResponseGroups

Groups accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatible** | [**List[ModelVersionLocalResource]**](ModelVersionLocalResource.md) | Compatible accepted or returned by this contract. |
**external** | [**List[ModelVersionExternalResource]**](ModelVersionExternalResource.md) | External accepted or returned by this contract. |
**recommended** | [**List[ModelVersionLocalResource]**](ModelVersionLocalResource.md) | Recommended accepted or returned by this contract. |
**required** | [**List[ModelVersionLocalResource]**](ModelVersionLocalResource.md) | Required accepted or returned by this contract. |
**sample_used** | [**List[ModelVersionLocalResource]**](ModelVersionLocalResource.md) | Sample Used accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.model_version_resource_graph_response_groups import ModelVersionResourceGraphResponseGroups

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionResourceGraphResponseGroups from a JSON string
model_version_resource_graph_response_groups_instance = ModelVersionResourceGraphResponseGroups.from_json(json)
# print the JSON string representation of the object
print(ModelVersionResourceGraphResponseGroups.to_json())

# convert the object into a dict
model_version_resource_graph_response_groups_dict = model_version_resource_graph_response_groups_instance.to_dict()
# create an instance of ModelVersionResourceGraphResponseGroups from a dict
model_version_resource_graph_response_groups_from_dict = ModelVersionResourceGraphResponseGroups.from_dict(model_version_resource_graph_response_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
