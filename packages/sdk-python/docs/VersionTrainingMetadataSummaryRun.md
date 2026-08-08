# VersionTrainingMetadataSummaryRun

Structured run details for this training metadata summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_size** | **int** | Numeric batch size reported for this run. | [optional]
**epoch** | **int** | Numeric epoch reported for this run. | [optional]
**learning_rate** | **float** | Numeric learning rate reported for this run. | [optional]
**optimizer** | **str** | Optimizer associated with this run; preserve server-returned values when passing them to another operation. | [optional]
**resolution** | **str** | Resolution associated with this run; preserve server-returned values when passing them to another operation. | [optional]
**scheduler** | **str** | Scheduler associated with this run; preserve server-returned values when passing them to another operation. | [optional]
**steps** | **int** | Numeric steps reported for this run. | [optional]
**text_encoder_learning_rate** | **float** | Numeric text encoder learning rate reported for this run. | [optional]
**total_epochs** | **int** | Numeric total epochs reported for this run. | [optional]
**unet_learning_rate** | **float** | Numeric unet learning rate reported for this run. | [optional]

## Example

```python
from arcenciel.generated.models.version_training_metadata_summary_run import VersionTrainingMetadataSummaryRun

# TODO update the JSON string below
json = "{}"
# create an instance of VersionTrainingMetadataSummaryRun from a JSON string
version_training_metadata_summary_run_instance = VersionTrainingMetadataSummaryRun.from_json(json)
# print the JSON string representation of the object
print(VersionTrainingMetadataSummaryRun.to_json())

# convert the object into a dict
version_training_metadata_summary_run_dict = version_training_metadata_summary_run_instance.to_dict()
# create an instance of VersionTrainingMetadataSummaryRun from a dict
version_training_metadata_summary_run_from_dict = VersionTrainingMetadataSummaryRun.from_dict(version_training_metadata_summary_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
