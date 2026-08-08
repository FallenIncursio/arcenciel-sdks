# VersionDownloadInfo

Stable JSON contract for third-party model download clients.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_redirect_hosts** | **List[str]** | Additional HTTPS hosts a client should allow when following the canonical Arc download URL. | [optional]
**available** | **bool** | True when the version has a usable download source and is not scan-blocked. | [optional]
**blocked** | **bool** | True when file safety status prevents direct download delivery. | [optional]
**download_url** | **str** | Canonical Arc download URL for hosted files. Start here and allow documented redirects. | [optional]
**early_access** | [**VersionEarlyAccess**](VersionEarlyAccess.md) |  | [optional]
**external_download_url** | **str** | External source URL for external-only versions. Null for hosted files and scan-blocked entries. | [optional]
**file_name** | **str** | Safe filename clients can use for local storage. | [optional]
**file_scan_reason** | **str** | File Scan Reason associated with this version download info; preserve server-returned values when passing them to another operation. | [optional]
**file_scan_status** | **str** | Current lifecycle state of this version download info; clients should tolerate future values. Supported values: &#x60;UNSCANNED&#x60;, &#x60;PENDING&#x60;, &#x60;CLEAN&#x60;, &#x60;POTENTIALLY_RISKY&#x60;, &#x60;INFECTED&#x60;, &#x60;SCAN_ERROR&#x60;, &#x60;UNVERIFIED_EXTERNAL&#x60;. | [optional]
**file_size_kb** | **int** | Size of the associated version download info content in the unit indicated by the field name. | [optional]
**model_id** | **int** | Stable identifier for the model; use it in subsequent API calls instead of a display name. | [optional]
**original_name** | **str** | Human-readable original name for this version download info; it is not a stable identifier. | [optional]
**register_url** | **str** | Endpoint to record a completed direct or external download without streaming through Arc. | [optional]
**sha256** | **str** | Full SHA-256 hash for byte verification. | [optional]
**sha256webui** | **str** | Stable Diffusion WebUI compatibility hash. | [optional]
**source** | **str** | Hosted files are served by Arc en Ciel; external files must be fetched from externalDownloadUrl by clients that support them. | [optional]
**status** | **str** | Current lifecycle state of this version download info; clients should tolerate future values. | [optional]
**version_id** | **int** | Stable identifier for the version; use it in subsequent API calls instead of a display name. | [optional]

## Example

```python
from arcenciel.generated.models.version_download_info import VersionDownloadInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VersionDownloadInfo from a JSON string
version_download_info_instance = VersionDownloadInfo.from_json(json)
# print the JSON string representation of the object
print(VersionDownloadInfo.to_json())

# convert the object into a dict
version_download_info_dict = version_download_info_instance.to_dict()
# create an instance of VersionDownloadInfo from a dict
version_download_info_from_dict = VersionDownloadInfo.from_dict(version_download_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
