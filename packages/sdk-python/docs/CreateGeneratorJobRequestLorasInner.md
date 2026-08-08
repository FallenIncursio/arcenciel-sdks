# CreateGeneratorJobRequestLorasInner

Loras item associated with this loras; preserve server-returned values when passing them to another operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Human-readable name for this loras item; it is not a stable identifier. | [optional]
**weight** | **float** | Numeric weight reported for this loras item. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_job_request_loras_inner import CreateGeneratorJobRequestLorasInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequestLorasInner from a JSON string
create_generator_job_request_loras_inner_instance = CreateGeneratorJobRequestLorasInner.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequestLorasInner.to_json())

# convert the object into a dict
create_generator_job_request_loras_inner_dict = create_generator_job_request_loras_inner_instance.to_dict()
# create an instance of CreateGeneratorJobRequestLorasInner from a dict
create_generator_job_request_loras_inner_from_dict = CreateGeneratorJobRequestLorasInner.from_dict(create_generator_job_request_loras_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
