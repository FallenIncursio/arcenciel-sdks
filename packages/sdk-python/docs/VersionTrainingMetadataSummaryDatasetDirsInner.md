# VersionTrainingMetadataSummaryDatasetDirsInner

Dirs item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_count** | **int** | Image Count accepted or returned by this contract. | [optional] 
**name** | **str** | Name accepted or returned by this contract. | [optional] 

## Example

```python
from arcenciel.generated.models.version_training_metadata_summary_dataset_dirs_inner import VersionTrainingMetadataSummaryDatasetDirsInner

# TODO update the JSON string below
json = "{}"
# create an instance of VersionTrainingMetadataSummaryDatasetDirsInner from a JSON string
version_training_metadata_summary_dataset_dirs_inner_instance = VersionTrainingMetadataSummaryDatasetDirsInner.from_json(json)
# print the JSON string representation of the object
print(VersionTrainingMetadataSummaryDatasetDirsInner.to_json())

# convert the object into a dict
version_training_metadata_summary_dataset_dirs_inner_dict = version_training_metadata_summary_dataset_dirs_inner_instance.to_dict()
# create an instance of VersionTrainingMetadataSummaryDatasetDirsInner from a dict
version_training_metadata_summary_dataset_dirs_inner_from_dict = VersionTrainingMetadataSummaryDatasetDirsInner.from_dict(version_training_metadata_summary_dataset_dirs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


