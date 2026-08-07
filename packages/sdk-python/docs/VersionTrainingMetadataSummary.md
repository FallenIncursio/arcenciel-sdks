# VersionTrainingMetadataSummary

Training Metadata Summary accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | [**VersionTrainingMetadataSummaryDataset**](VersionTrainingMetadataSummaryDataset.md) |  | [optional] 
**extracted_at** | **datetime** | Extracted At accepted or returned by this contract. | [optional] 
**run** | [**VersionTrainingMetadataSummaryRun**](VersionTrainingMetadataSummaryRun.md) |  | [optional] 
**schema_version** | **int** | Schema Version accepted or returned by this contract. | [optional] 
**source** | **str** | Source accepted or returned by this contract. | [optional] 
**tags_top** | [**List[VersionTrainingMetadataSummaryTagsTopInner]**](VersionTrainingMetadataSummaryTagsTopInner.md) | Tags Top accepted or returned by this contract. | [optional] 

## Example

```python
from arcenciel.generated.models.version_training_metadata_summary import VersionTrainingMetadataSummary

# TODO update the JSON string below
json = "{}"
# create an instance of VersionTrainingMetadataSummary from a JSON string
version_training_metadata_summary_instance = VersionTrainingMetadataSummary.from_json(json)
# print the JSON string representation of the object
print(VersionTrainingMetadataSummary.to_json())

# convert the object into a dict
version_training_metadata_summary_dict = version_training_metadata_summary_instance.to_dict()
# create an instance of VersionTrainingMetadataSummary from a dict
version_training_metadata_summary_from_dict = VersionTrainingMetadataSummary.from_dict(version_training_metadata_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


