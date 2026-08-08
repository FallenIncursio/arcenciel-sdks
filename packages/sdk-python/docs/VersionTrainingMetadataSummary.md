# VersionTrainingMetadataSummary

Structured training metadata summary details for this versions item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | [**VersionTrainingMetadataSummaryDataset**](VersionTrainingMetadataSummaryDataset.md) |  | [optional]
**extracted_at** | **datetime** | UTC timestamp for the extracted at transition of this training metadata summary. Format: date-time. | [optional]
**run** | [**VersionTrainingMetadataSummaryRun**](VersionTrainingMetadataSummaryRun.md) |  | [optional]
**schema_version** | **int** | Numeric schema version reported for this training metadata summary. Supported values: &#x60;1&#x60;. | [optional]
**source** | **str** | Source associated with this training metadata summary; preserve server-returned values when passing them to another operation. Supported values: &#x60;upload_local&#x60;, &#x60;upload_hf&#x60;, &#x60;admin_backfill&#x60;. | [optional]
**tags_top** | [**List[VersionTrainingMetadataSummaryTagsTopInner]**](VersionTrainingMetadataSummaryTagsTopInner.md) | Ordered tags top entries included with this training metadata summary; an empty list means none are available. | [optional]

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
