# DeveloperModelVersionResourceCandidate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** |  | [optional]
**download_url** | **str** |  |
**file_name** | **str** |  | [optional]
**file_scan_status** | **str** |  | [optional]
**file_size_kb** | **int** |  | [optional]
**model_id** | **int** |  |
**model_type** | **str** |  | [optional]
**open_url** | **str** |  |
**preview_image** | [**ModelVersionResourcePreviewImage**](ModelVersionResourcePreviewImage.md) |  | [optional]
**publish_at** | **datetime** |  | [optional]
**target_type** | **str** |  |
**title** | **str** |  |
**version_id** | **int** |  |
**version_name** | **str** |  |
**version_status** | **str** |  | [optional]

## Example

```python
from arcenciel.generated.models.developer_model_version_resource_candidate import DeveloperModelVersionResourceCandidate

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperModelVersionResourceCandidate from a JSON string
developer_model_version_resource_candidate_instance = DeveloperModelVersionResourceCandidate.from_json(json)
# print the JSON string representation of the object
print(DeveloperModelVersionResourceCandidate.to_json())

# convert the object into a dict
developer_model_version_resource_candidate_dict = developer_model_version_resource_candidate_instance.to_dict()
# create an instance of DeveloperModelVersionResourceCandidate from a dict
developer_model_version_resource_candidate_from_dict = DeveloperModelVersionResourceCandidate.from_dict(developer_model_version_resource_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
