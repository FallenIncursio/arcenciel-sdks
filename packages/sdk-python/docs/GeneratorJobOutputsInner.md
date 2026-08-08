# GeneratorJobOutputsInner

Structured outputs item details for this outputs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** | Client-visible filename for this outputs item; do not use it as a resource identifier or filesystem path without sanitizing it. |
**subfolder** | **str** | Subfolder associated with this outputs item; preserve server-returned values when passing them to another operation. |
**type** | **str** | Discriminator identifying the kind of outputs item; clients should tolerate future values. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_outputs_inner import GeneratorJobOutputsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobOutputsInner from a JSON string
generator_job_outputs_inner_instance = GeneratorJobOutputsInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobOutputsInner.to_json())

# convert the object into a dict
generator_job_outputs_inner_dict = generator_job_outputs_inner_instance.to_dict()
# create an instance of GeneratorJobOutputsInner from a dict
generator_job_outputs_inner_from_dict = GeneratorJobOutputsInner.from_dict(generator_job_outputs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
