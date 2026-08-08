# GeneratorJobProgress

Fields describing generator job progress in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | [**GeneratorJobProgressDetail**](GeneratorJobProgressDetail.md) |  | [optional]
**eta_ms** | **int** | Numeric eta ms reported for this generator job progress. | [optional]
**percent** | **float** | Numeric percent reported for this generator job progress. |
**phase** | **str** | Phase associated with this generator job progress; preserve server-returned values when passing them to another operation. Supported values: &#x60;queued&#x60;, &#x60;warmup&#x60;, &#x60;generating&#x60;, &#x60;refining&#x60;, &#x60;upscaling&#x60;, &#x60;finalizing&#x60;, &#x60;completed&#x60;, &#x60;failed&#x60;. |
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
