# GeneratorJobProgressDetail

Detail accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elapsed_ms** | **int** | Elapsed Ms accepted or returned by this contract. | [optional]
**max** | **float** | Max accepted or returned by this contract. | [optional]
**node_id** | **str** | Node Id accepted or returned by this contract. | [optional]
**ratio** | **float** | Ratio accepted or returned by this contract. | [optional]
**source** | **str** | Source accepted or returned by this contract. | [optional]
**timeout_ms** | **int** | Timeout Ms accepted or returned by this contract. | [optional]
**value** | **float** | Value accepted or returned by this contract. | [optional]

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
