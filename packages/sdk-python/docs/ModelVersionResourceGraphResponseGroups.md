# ModelVersionResourceGraphResponseGroups

Structured groups details for this model version resource graph response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatible** | [**List[ModelVersionLocalResource]**](ModelVersionLocalResource.md) | Ordered compatible entries included with this groups; an empty list means none are available. |
**external** | [**List[ModelVersionExternalResource]**](ModelVersionExternalResource.md) | Ordered external entries included with this groups; an empty list means none are available. |
**recommended** | [**List[ModelVersionLocalResource]**](ModelVersionLocalResource.md) | Ordered recommended entries included with this groups; an empty list means none are available. |
**required** | [**List[ModelVersionLocalResource]**](ModelVersionLocalResource.md) | Ordered required entries included with this groups; an empty list means none are available. |
**sample_used** | [**List[ModelVersionLocalResource]**](ModelVersionLocalResource.md) | Ordered sample used entries included with this groups; an empty list means none are available. |

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
