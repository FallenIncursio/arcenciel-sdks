# Version

Structured versions item details for this versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about_this_version** | **str** | About This Version associated with this versions item; preserve server-returned values when passing them to another operation. | [optional]
**activation_tags** | **List[str]** | Ordered activation tags entries included with this versions item; an empty list means none are available. | [optional]
**base_model** | **str** | Base Model associated with this versions item; preserve server-returned values when passing them to another operation. | [optional]
**download_count** | **int** | Number of download records represented by this versions item. | [optional]
**early_access** | [**VersionEarlyAccess**](VersionEarlyAccess.md) |  | [optional]
**external_download_url** | **str** | Direct external source URL for versions not hosted by Arc en Ciel. It is null for future scheduled versions unless the viewer owns the model or is staff. | [optional]
**file_name** | **str** | Human-readable file name for this versions item; it is not a stable identifier. | [optional]
**file_path** | **str** | Server-provided path for the file path associated with this versions item; treat it as opaque. | [optional]
**file_scan_engine_version** | **str** | File Scan Engine Version associated with this versions item; preserve server-returned values when passing them to another operation. | [optional]
**file_scan_meta** | **object** | Structured file scan meta details for this versions item. | [optional]
**file_scan_reason** | **str** | File Scan Reason associated with this versions item; preserve server-returned values when passing them to another operation. | [optional]
**file_scan_source** | **str** | File Scan Source associated with this versions item; preserve server-returned values when passing them to another operation. | [optional]
**file_scan_status** | **str** | Current lifecycle state of this versions item; clients should tolerate future values. Supported values: &#x60;UNSCANNED&#x60;, &#x60;PENDING&#x60;, &#x60;CLEAN&#x60;, &#x60;POTENTIALLY_RISKY&#x60;, &#x60;INFECTED&#x60;, &#x60;SCAN_ERROR&#x60;, &#x60;UNVERIFIED_EXTERNAL&#x60;. | [optional]
**file_scanned_at** | **datetime** | UTC timestamp for the file scanned at transition of this versions item. Format: date-time. | [optional]
**file_size_kb** | **int** | Size of the associated versions item content in the unit indicated by the field name. | [optional]
**id** | **int** | Stable identifier for the versions item; use it in subsequent API calls instead of a display name. | [optional]
**image_order** | **List[int]** | Ordered image order entries included with this versions item; an empty list means none are available. | [optional]
**images** | [**List[Image]**](Image.md) | Ordered images entries included with this versions item; an empty list means none are available. | [optional]
**original_name** | **str** | Human-readable original name for this versions item; it is not a stable identifier. | [optional]
**publish_at** | **datetime** | UTC publication time for this versions item; a future value indicates scheduled publication. Format: date-time. | [optional]
**sha256** | **str** | Full SHA-256 hash for byte verification. | [optional]
**sha256webui** | **str** | Stable Diffusion WebUI compatibility hash; do not use as a substitute for full SHA-256 verification. | [optional]
**status** | **str** | Current lifecycle state of this versions item; clients should tolerate future values. | [optional]
**supporter_early_access_enabled** | **bool** | Creator-controlled opt-out. External versions remain ineligible regardless of this value. | [optional] [default to True]
**training_metadata_summary** | [**VersionTrainingMetadataSummary**](VersionTrainingMetadataSummary.md) |  | [optional]
**version_name** | **str** | Human-readable version name for this versions item; it is not a stable identifier. | [optional]

## Example

```python
from arcenciel.generated.models.version import Version

# TODO update the JSON string below
json = "{}"
# create an instance of Version from a JSON string
version_instance = Version.from_json(json)
# print the JSON string representation of the object
print(Version.to_json())

# convert the object into a dict
version_dict = version_instance.to_dict()
# create an instance of Version from a dict
version_from_dict = Version.from_dict(version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
