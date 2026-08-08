# ModelVersionResourceGraphResponseCounts

Structured counts details for this model version resource graph response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected** | **int** | Numeric detected reported for this counts. Minimum: 0. |
**external** | **int** | Numeric external reported for this counts. Minimum: 0. |
**hidden** | **int** | Numeric hidden reported for this counts. Minimum: 0. |
**local** | **int** | Numeric local reported for this counts. Minimum: 0. |

## Example

```python
from arcenciel.generated.models.model_version_resource_graph_response_counts import ModelVersionResourceGraphResponseCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionResourceGraphResponseCounts from a JSON string
model_version_resource_graph_response_counts_instance = ModelVersionResourceGraphResponseCounts.from_json(json)
# print the JSON string representation of the object
print(ModelVersionResourceGraphResponseCounts.to_json())

# convert the object into a dict
model_version_resource_graph_response_counts_dict = model_version_resource_graph_response_counts_instance.to_dict()
# create an instance of ModelVersionResourceGraphResponseCounts from a dict
model_version_resource_graph_response_counts_from_dict = ModelVersionResourceGraphResponseCounts.from_dict(model_version_resource_graph_response_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
