# ModelVersionResourceGraphResponse

Visible local and external dependencies associated with one model version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_manage** | **bool** | Whether the current caller may see hidden edges and management metadata. |
**counts** | [**ModelVersionResourceGraphResponseCounts**](ModelVersionResourceGraphResponseCounts.md) |  |
**groups** | [**ModelVersionResourceGraphResponseGroups**](ModelVersionResourceGraphResponseGroups.md) |  |
**source_version_id** | **int** | Source Version Id accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.model_version_resource_graph_response import ModelVersionResourceGraphResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionResourceGraphResponse from a JSON string
model_version_resource_graph_response_instance = ModelVersionResourceGraphResponse.from_json(json)
# print the JSON string representation of the object
print(ModelVersionResourceGraphResponse.to_json())

# convert the object into a dict
model_version_resource_graph_response_dict = model_version_resource_graph_response_instance.to_dict()
# create an instance of ModelVersionResourceGraphResponse from a dict
model_version_resource_graph_response_from_dict = ModelVersionResourceGraphResponse.from_dict(model_version_resource_graph_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
