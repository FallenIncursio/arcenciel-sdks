# GeneratorJobEnvelope

Generator Job Envelope used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**GeneratorJob**](GeneratorJob.md) |  |
**position** | **int** | Position accepted or returned by this contract. |
**queue_eta_ms** | **int** | Queue Eta Ms accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_job_envelope import GeneratorJobEnvelope

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobEnvelope from a JSON string
generator_job_envelope_instance = GeneratorJobEnvelope.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobEnvelope.to_json())

# convert the object into a dict
generator_job_envelope_dict = generator_job_envelope_instance.to_dict()
# create an instance of GeneratorJobEnvelope from a dict
generator_job_envelope_from_dict = GeneratorJobEnvelope.from_dict(generator_job_envelope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
