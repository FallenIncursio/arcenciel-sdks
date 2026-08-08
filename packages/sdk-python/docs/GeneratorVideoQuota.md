# GeneratorVideoQuota

Fields describing generator video quota in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Credits available in the rolling window; zero denotes an unlimited quota. |
**pending** | **int** | Current queued, running, or finalizing job count. |
**pending_limit** | **int** | Maximum concurrent non-terminal jobs for the resolved tier. |
**remaining** | **int** | Remaining credits, or null for an unlimited quota. |
**reset_at** | **datetime** | Earliest time at which a currently reserved credit leaves the rolling window. |
**tier** | **str** | Quota tier resolved from the account role and active support access. |
**unlimited_override** | **bool** | Whether an administrator&#39;s image-and-video unlimited override removed the daily quota. Queue concurrency still applies. |
**used** | **int** | Credits reserved during the current rolling 24-hour window. |

## Example

```python
from arcenciel.generated.models.generator_video_quota import GeneratorVideoQuota

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoQuota from a JSON string
generator_video_quota_instance = GeneratorVideoQuota.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoQuota.to_json())

# convert the object into a dict
generator_video_quota_dict = generator_video_quota_instance.to_dict()
# create an instance of GeneratorVideoQuota from a dict
generator_video_quota_from_dict = GeneratorVideoQuota.from_dict(generator_video_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
