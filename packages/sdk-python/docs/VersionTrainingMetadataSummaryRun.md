# VersionTrainingMetadataSummaryRun

Run accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_size** | **int** | Batch Size accepted or returned by this contract. | [optional]
**epoch** | **int** | Epoch accepted or returned by this contract. | [optional]
**learning_rate** | **float** | Learning Rate accepted or returned by this contract. | [optional]
**optimizer** | **str** | Optimizer accepted or returned by this contract. | [optional]
**resolution** | **str** | Resolution accepted or returned by this contract. | [optional]
**scheduler** | **str** | Scheduler accepted or returned by this contract. | [optional]
**steps** | **int** | Steps accepted or returned by this contract. | [optional]
**text_encoder_learning_rate** | **float** | Text Encoder Learning Rate accepted or returned by this contract. | [optional]
**total_epochs** | **int** | Total Epochs accepted or returned by this contract. | [optional]
**unet_learning_rate** | **float** | Unet Learning Rate accepted or returned by this contract. | [optional]

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
