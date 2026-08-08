# GeneratorJobProgressDetail

Structured detail details for this generator job progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elapsed_ms** | **int** | Numeric elapsed ms reported for this detail. | [optional]
**max** | **float** | Numeric max reported for this detail. | [optional]
**node_id** | **str** | Stable identifier for the node; use it in subsequent API calls instead of a display name. | [optional]
**ratio** | **float** | Numeric ratio reported for this detail. Minimum: 0. Maximum: 1. | [optional]
**source** | **str** | Source associated with this detail; preserve server-returned values when passing them to another operation. Supported values: &#x60;comfy_progress&#x60;, &#x60;comfy_progress_state&#x60;, &#x60;history_poll&#x60;, &#x60;finalizing&#x60;. | [optional]
**timeout_ms** | **int** | Numeric timeout ms reported for this detail. | [optional]
**value** | **float** | Numeric value reported for this detail. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_progress_detail import GeneratorJobProgressDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobProgressDetail from a JSON string
generator_job_progress_detail_instance = GeneratorJobProgressDetail.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobProgressDetail.to_json())

# convert the object into a dict
generator_job_progress_detail_dict = generator_job_progress_detail_instance.to_dict()
# create an instance of GeneratorJobProgressDetail from a dict
generator_job_progress_detail_from_dict = GeneratorJobProgressDetail.from_dict(generator_job_progress_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
