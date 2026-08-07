# Version

Versions item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about_this_version** | **str** | About This Version accepted or returned by this contract. | [optional] 
**activation_tags** | **List[str]** | Activation Tags accepted or returned by this contract. | [optional] 
**base_model** | **str** | Base Model accepted or returned by this contract. | [optional] 
**download_count** | **int** | Download Count accepted or returned by this contract. | [optional] 
**early_access** | [**VersionEarlyAccess**](VersionEarlyAccess.md) |  | [optional] 
**external_download_url** | **str** | Direct external source URL for versions not hosted by Arc en Ciel. It is null for future scheduled versions unless the viewer owns the model or is staff. | [optional] 
**file_name** | **str** | File Name accepted or returned by this contract. | [optional] 
**file_path** | **str** | File Path accepted or returned by this contract. | [optional] 
**file_scan_engine_version** | **str** | File Scan Engine Version accepted or returned by this contract. | [optional] 
**file_scan_meta** | **object** | File Scan Meta accepted or returned by this contract. | [optional] 
**file_scan_reason** | **str** | File Scan Reason accepted or returned by this contract. | [optional] 
**file_scan_source** | **str** | File Scan Source accepted or returned by this contract. | [optional] 
**file_scan_status** | **str** | File Scan Status accepted or returned by this contract. | [optional] 
**file_scanned_at** | **datetime** | File Scanned At accepted or returned by this contract. | [optional] 
**file_size_kb** | **int** | File Size Kb accepted or returned by this contract. | [optional] 
**id** | **int** | Id accepted or returned by this contract. | [optional] 
**image_order** | **List[int]** | Image Order accepted or returned by this contract. | [optional] 
**images** | [**List[Image]**](Image.md) | Images accepted or returned by this contract. | [optional] 
**original_name** | **str** | Original Name accepted or returned by this contract. | [optional] 
**publish_at** | **datetime** | Publish At accepted or returned by this contract. | [optional] 
**sha256** | **str** | Full SHA-256 hash for byte verification. | [optional] 
**sha256webui** | **str** | Stable Diffusion WebUI compatibility hash; do not use as a substitute for full SHA-256 verification. | [optional] 
**status** | **str** | Status accepted or returned by this contract. | [optional] 
**supporter_early_access_enabled** | **bool** | Creator-controlled opt-out. External versions remain ineligible regardless of this value. | [optional] [default to True]
**training_metadata_summary** | [**VersionTrainingMetadataSummary**](VersionTrainingMetadataSummary.md) |  | [optional] 
**version_name** | **str** | Version Name accepted or returned by this contract. | [optional] 

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


