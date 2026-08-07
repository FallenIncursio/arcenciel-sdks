# GeneratorQuotaSnapshot

Quota accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budgets** | [**GeneratorQuotaBudgets**](GeneratorQuotaBudgets.md) |  |
**daily** | [**GeneratorQuotaCounter**](GeneratorQuotaCounter.md) |  |
**next_daily_relief_at** | **int** | Backwards-compatible alias of windowResetsAt. |
**pending** | [**GeneratorQuotaCounter**](GeneratorQuotaCounter.md) |  |
**role** | **str** | Role accepted or returned by this contract. |
**supporter** | **bool** | Supporter accepted or returned by this contract. |
**supporter_preview** | [**GeneratorQuotaSnapshotSupporterPreview**](GeneratorQuotaSnapshotSupporterPreview.md) |  |
**window_ms** | **int** | Personal usage period length in milliseconds. |
**window_resets_at** | **int** | Epoch milliseconds when the current personal usage period resets and the full allowance returns. |
**window_started_at** | **int** | Epoch milliseconds when the current personal usage period started, or null before first use / after reset. |

## Example

```python
from arcenciel.generated.models.generator_quota_snapshot import GeneratorQuotaSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorQuotaSnapshot from a JSON string
generator_quota_snapshot_instance = GeneratorQuotaSnapshot.from_json(json)
# print the JSON string representation of the object
print(GeneratorQuotaSnapshot.to_json())

# convert the object into a dict
generator_quota_snapshot_dict = generator_quota_snapshot_instance.to_dict()
# create an instance of GeneratorQuotaSnapshot from a dict
generator_quota_snapshot_from_dict = GeneratorQuotaSnapshot.from_dict(generator_quota_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
