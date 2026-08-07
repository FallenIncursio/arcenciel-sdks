# GeneratorJobDiagnosticsAdetailerBridge

Adetailer Bridge accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed** | **bool** | Failed accepted or returned by this contract. | [optional]
**reason** | **str** | Reason accepted or returned by this contract. | [optional]
**updated_at** | **int** | Unix epoch timestamp in milliseconds. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_diagnostics_adetailer_bridge import GeneratorJobDiagnosticsAdetailerBridge

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobDiagnosticsAdetailerBridge from a JSON string
generator_job_diagnostics_adetailer_bridge_instance = GeneratorJobDiagnosticsAdetailerBridge.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobDiagnosticsAdetailerBridge.to_json())

# convert the object into a dict
generator_job_diagnostics_adetailer_bridge_dict = generator_job_diagnostics_adetailer_bridge_instance.to_dict()
# create an instance of GeneratorJobDiagnosticsAdetailerBridge from a dict
generator_job_diagnostics_adetailer_bridge_from_dict = GeneratorJobDiagnosticsAdetailerBridge.from_dict(generator_job_diagnostics_adetailer_bridge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
