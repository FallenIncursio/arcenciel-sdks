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
**file_scan_reason** | **str** | File Scan Reason accepted or returned by this contract. | [optional] 
**file_scan_status** | **str** | File Scan Status accepted or returned by this contract. | [optional] 
**file_size_kb** | **int** | File Size Kb accepted or returned by this contract. | [optional] 
**model_id** | **int** | Model Id accepted or returned by this contract. | [optional] 
**original_name** | **str** | Original Name accepted or returned by this contract. | [optional] 
**register_url** | **str** | Endpoint to record a completed direct or external download without streaming through Arc. | [optional] 
**sha256** | **str** | Full SHA-256 hash for byte verification. | [optional] 
**sha256webui** | **str** | Stable Diffusion WebUI compatibility hash. | [optional] 
**source** | **str** | Hosted files are served by Arc en Ciel; external files must be fetched from externalDownloadUrl by clients that support them. | [optional] 
**status** | **str** | Status accepted or returned by this contract. | [optional] 
**version_id** | **int** | Version Id accepted or returned by this contract. | [optional] 

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


