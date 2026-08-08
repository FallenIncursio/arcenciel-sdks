# ModelVersionResourceBase

Structured required item details for this required.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Numeric confidence reported for this required item. Format: double. |
**edge_id** | **int** | Stable identifier for the edge; use it in subsequent API calls instead of a display name. |
**evidence** | **object** | Source-specific evidence. New evidence fields may be added without a contract change. |
**id** | **int** | Stable identifier for the required item; use it in subsequent API calls instead of a display name. |
**kind** | **str** | Dependency kind such as REQUIRED, RECOMMENDED, COMPATIBLE, or SAMPLE_USED. |
**management** | [**ModelVersionResourceBaseManagement**](ModelVersionResourceBaseManagement.md) |  | [optional]
**source** | **str** | Discovery source such as IMAGE_METADATA, IMPORTER_WEBHOOK, MANUAL, or SYSTEM. |
**status** | **str** | Current values are ACTIVE and HIDDEN; clients must tolerate additions. |
**strength** | **float** | Numeric strength reported for this required item. Format: double. |
**target_type** | **str** | Current values are local and external; clients must tolerate additions. |

## Example

```python
from arcenciel.generated.models.model_version_resource_base import ModelVersionResourceBase

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionResourceBase from a JSON string
model_version_resource_base_instance = ModelVersionResourceBase.from_json(json)
# print the JSON string representation of the object
print(ModelVersionResourceBase.to_json())

# convert the object into a dict
model_version_resource_base_dict = model_version_resource_base_instance.to_dict()
# create an instance of ModelVersionResourceBase from a dict
model_version_resource_base_from_dict = ModelVersionResourceBase.from_dict(model_version_resource_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
