# ModelVersionLocalResource

Required item associated with this required; preserve server-returned values when passing them to another operation.

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
**base_model** | **str** | Base Model associated with this required item; preserve server-returned values when passing them to another operation. | [optional]
**download_url** | **str** | Null when the caller cannot download the target version. | [optional]
**file_name** | **str** | Human-readable file name for this required item; it is not a stable identifier. | [optional]
**file_scan_status** | **str** | Current lifecycle state of this required item; clients should tolerate future values. | [optional]
**file_size_kb** | **int** | Size of the associated required item content in the unit indicated by the field name. | [optional]
**model_id** | **int** | Stable identifier for the model; use it in subsequent API calls instead of a display name. |
**model_type** | **str** | Discriminator identifying the kind of required item; clients should tolerate future values. |
**open_url** | **str** | URL for the open url associated with this required item; do not persist temporary signed query parameters. |
**preview_image** | [**ModelVersionResourcePreviewImage**](ModelVersionResourcePreviewImage.md) | Preview Image associated with this required item; preserve server-returned values when passing them to another operation. | [optional]
**publish_at** | **datetime** | UTC publication time for this required item; a future value indicates scheduled publication. Format: date-time. | [optional]
**title** | **str** | Display title shown to users for this required item. |
**version_id** | **int** | Stable identifier for the version; use it in subsequent API calls instead of a display name. |
**version_name** | **str** | Human-readable version name for this required item; it is not a stable identifier. |
**version_status** | **str** | Current lifecycle state of this required item; clients should tolerate future values. |

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
