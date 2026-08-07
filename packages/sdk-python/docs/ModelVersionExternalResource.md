# ModelVersionExternalResource

External item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence accepted or returned by this contract. |
**edge_id** | **int** | Edge Id accepted or returned by this contract. |
**evidence** | **object** | Source-specific evidence. New evidence fields may be added without a contract change. |
**id** | **int** | Id accepted or returned by this contract. |
**kind** | **str** | Dependency kind such as REQUIRED, RECOMMENDED, COMPATIBLE, or SAMPLE_USED. |
**management** | [**ModelVersionResourceBaseManagement**](ModelVersionResourceBaseManagement.md) |  | [optional]
**source** | **str** | Discovery source such as IMAGE_METADATA, IMPORTER_WEBHOOK, MANUAL, or SYSTEM. |
**status** | **str** | Current values are ACTIVE and HIDDEN; clients must tolerate additions. |
**strength** | **float** | Strength accepted or returned by this contract. |
**target_type** | **str** | Current values are local and external; clients must tolerate additions. |
**base_model** | **str** | Base Model accepted or returned by this contract. | [optional]
**download_url** | **str** | Download Url accepted or returned by this contract. | [optional]
**external_resource_id** | **int** | External Resource Id accepted or returned by this contract. |
**file_name** | **str** | File Name accepted or returned by this contract. | [optional]
**model_type** | **str** | Model Type accepted or returned by this contract. | [optional]
**provider** | **str** | Provider accepted or returned by this contract. |
**title** | **str** | Title accepted or returned by this contract. |
**url** | **str** | Url accepted or returned by this contract. |
**version_name** | **str** | Version Name accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.model_version_external_resource import ModelVersionExternalResource

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionExternalResource from a JSON string
model_version_external_resource_instance = ModelVersionExternalResource.from_json(json)
# print the JSON string representation of the object
print(ModelVersionExternalResource.to_json())

# convert the object into a dict
model_version_external_resource_dict = model_version_external_resource_instance.to_dict()
# create an instance of ModelVersionExternalResource from a dict
model_version_external_resource_from_dict = ModelVersionExternalResource.from_dict(model_version_external_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
