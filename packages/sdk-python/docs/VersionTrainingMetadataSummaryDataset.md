# VersionTrainingMetadataSummaryDataset

Dataset accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dirs** | [**List[VersionTrainingMetadataSummaryDatasetDirsInner]**](VersionTrainingMetadataSummaryDatasetDirsInner.md) | Dirs accepted or returned by this contract. | [optional]
**total_images** | **int** | Total Images accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.version_training_metadata_summary_dataset import VersionTrainingMetadataSummaryDataset

# TODO update the JSON string below
json = "{}"
# create an instance of VersionTrainingMetadataSummaryDataset from a JSON string
version_training_metadata_summary_dataset_instance = VersionTrainingMetadataSummaryDataset.from_json(json)
# print the JSON string representation of the object
print(VersionTrainingMetadataSummaryDataset.to_json())

# convert the object into a dict
version_training_metadata_summary_dataset_dict = version_training_metadata_summary_dataset_instance.to_dict()
# create an instance of VersionTrainingMetadataSummaryDataset from a dict
version_training_metadata_summary_dataset_from_dict = VersionTrainingMetadataSummaryDataset.from_dict(version_training_metadata_summary_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
