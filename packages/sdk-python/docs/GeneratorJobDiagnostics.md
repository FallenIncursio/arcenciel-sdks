# GeneratorJobDiagnostics

Structured diagnostics details for this generator job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | **Dict[str, object]** | Structured adetailer details for this diagnostics. | [optional]
**adetailer_bridge** | [**GeneratorJobDiagnosticsAdetailerBridge**](GeneratorJobDiagnosticsAdetailerBridge.md) |  | [optional]
**attention_couple** | **Dict[str, object]** | Structured attention couple details for this diagnostics. | [optional]
**history_timeout_ms** | **int** | Numeric history timeout ms reported for this diagnostics. | [optional]
**workflow_captured** | **bool** | Whether workflow captured applies to this diagnostics. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_diagnostics import GeneratorJobDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobDiagnostics from a JSON string
generator_job_diagnostics_instance = GeneratorJobDiagnostics.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobDiagnostics.to_json())

# convert the object into a dict
generator_job_diagnostics_dict = generator_job_diagnostics_instance.to_dict()
# create an instance of GeneratorJobDiagnostics from a dict
generator_job_diagnostics_from_dict = GeneratorJobDiagnostics.from_dict(generator_job_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
