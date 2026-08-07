# VersionTrainingMetadataSummaryTagsTopInner

Tags Top item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count accepted or returned by this contract. | [optional]
**tag** | **str** | Tag accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.version_training_metadata_summary_tags_top_inner import VersionTrainingMetadataSummaryTagsTopInner

# TODO update the JSON string below
json = "{}"
# create an instance of VersionTrainingMetadataSummaryTagsTopInner from a JSON string
version_training_metadata_summary_tags_top_inner_instance = VersionTrainingMetadataSummaryTagsTopInner.from_json(json)
# print the JSON string representation of the object
print(VersionTrainingMetadataSummaryTagsTopInner.to_json())

# convert the object into a dict
version_training_metadata_summary_tags_top_inner_dict = version_training_metadata_summary_tags_top_inner_instance.to_dict()
# create an instance of VersionTrainingMetadataSummaryTagsTopInner from a dict
version_training_metadata_summary_tags_top_inner_from_dict = VersionTrainingMetadataSummaryTagsTopInner.from_dict(version_training_metadata_summary_tags_top_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
