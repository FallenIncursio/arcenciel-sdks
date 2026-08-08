# ModelVersionExternalResource

External item associated with this external; preserve server-returned values when passing them to another operation.

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
**base_model** | **str** | Base Model associated with this external item; preserve server-returned values when passing them to another operation. | [optional]
**download_url** | **str** | URL for the download url associated with this external item; do not persist temporary signed query parameters. Format: uri. | [optional]
**external_resource_id** | **int** | Stable identifier for the external resource; use it in subsequent API calls instead of a display name. |
**file_name** | **str** | Human-readable file name for this external item; it is not a stable identifier. | [optional]
**model_type** | **str** | Discriminator identifying the kind of external item; clients should tolerate future values. | [optional]
**provider** | **str** | Provider associated with this external item; preserve server-returned values when passing them to another operation. |
**title** | **str** | Display title shown to users for this external item. |
**url** | **str** | URL for the url associated with this external item; do not persist temporary signed query parameters. Format: uri. |
**version_name** | **str** | Human-readable version name for this external item; it is not a stable identifier. | [optional]

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
