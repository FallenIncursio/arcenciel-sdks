# GeneratorQuotaSnapshotSupporterPreview

Structured supporter preview details for this quota.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budgets** | [**GeneratorQuotaBudgets**](GeneratorQuotaBudgets.md) |  |
**daily** | [**GeneratorQuotaCounter**](GeneratorQuotaCounter.md) |  |
**pending** | [**GeneratorQuotaCounter**](GeneratorQuotaCounter.md) |  |

## Example

```python
from arcenciel.generated.models.generator_quota_snapshot_supporter_preview import GeneratorQuotaSnapshotSupporterPreview

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorQuotaSnapshotSupporterPreview from a JSON string
generator_quota_snapshot_supporter_preview_instance = GeneratorQuotaSnapshotSupporterPreview.from_json(json)
# print the JSON string representation of the object
print(GeneratorQuotaSnapshotSupporterPreview.to_json())

# convert the object into a dict
generator_quota_snapshot_supporter_preview_dict = generator_quota_snapshot_supporter_preview_instance.to_dict()
# create an instance of GeneratorQuotaSnapshotSupporterPreview from a dict
generator_quota_snapshot_supporter_preview_from_dict = GeneratorQuotaSnapshotSupporterPreview.from_dict(generator_quota_snapshot_supporter_preview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
