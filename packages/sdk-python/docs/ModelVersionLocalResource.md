# ModelVersionLocalResource

Required item used by the Arc en Ciel API contract.

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
**download_url** | **str** | Null when the caller cannot download the target version. | [optional]
**file_name** | **str** | File Name accepted or returned by this contract. | [optional]
**file_scan_status** | **str** | File Scan Status accepted or returned by this contract. | [optional]
**file_size_kb** | **int** | File Size Kb accepted or returned by this contract. | [optional]
**model_id** | **int** | Model Id accepted or returned by this contract. |
**model_type** | **str** | Model Type accepted or returned by this contract. |
**open_url** | **str** | Open Url accepted or returned by this contract. |
**preview_image** | [**ModelVersionResourcePreviewImage**](ModelVersionResourcePreviewImage.md) | Preview Image accepted or returned by this contract. | [optional]
**publish_at** | **datetime** | Publish At accepted or returned by this contract. | [optional]
**title** | **str** | Title accepted or returned by this contract. |
**version_id** | **int** | Version Id accepted or returned by this contract. |
**version_name** | **str** | Version Name accepted or returned by this contract. |
**version_status** | **str** | Version Status accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.model_version_local_resource import ModelVersionLocalResource

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionLocalResource from a JSON string
model_version_local_resource_instance = ModelVersionLocalResource.from_json(json)
# print the JSON string representation of the object
print(ModelVersionLocalResource.to_json())

# convert the object into a dict
model_version_local_resource_dict = model_version_local_resource_instance.to_dict()
# create an instance of ModelVersionLocalResource from a dict
model_version_local_resource_from_dict = ModelVersionLocalResource.from_dict(model_version_local_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
