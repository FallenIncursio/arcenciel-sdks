# GeneratorJobProgress

Generator Job Progress used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | [**GeneratorJobProgressDetail**](GeneratorJobProgressDetail.md) |  | [optional]
**eta_ms** | **int** | Eta Ms accepted or returned by this contract. | [optional]
**percent** | **float** | Percent accepted or returned by this contract. |
**phase** | **str** | Phase accepted or returned by this contract. |
**updated_at** | **int** | Unix epoch timestamp in milliseconds. |

## Example

```python
from arcenciel.generated.models.generator_job_progress import GeneratorJobProgress

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobProgress from a JSON string
generator_job_progress_instance = GeneratorJobProgress.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobProgress.to_json())

# convert the object into a dict
generator_job_progress_dict = generator_job_progress_instance.to_dict()
# create an instance of GeneratorJobProgress from a dict
generator_job_progress_from_dict = GeneratorJobProgress.from_dict(generator_job_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
