# CreateGeneratorJobRequestLorasInnerOneOf

Structured loras item details for this loras.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Human-readable name for this loras item; it is not a stable identifier. | [optional]
**weight** | **float** | Numeric weight reported for this loras item. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_job_request_loras_inner_one_of import CreateGeneratorJobRequestLorasInnerOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequestLorasInnerOneOf from a JSON string
create_generator_job_request_loras_inner_one_of_instance = CreateGeneratorJobRequestLorasInnerOneOf.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequestLorasInnerOneOf.to_json())

# convert the object into a dict
create_generator_job_request_loras_inner_one_of_dict = create_generator_job_request_loras_inner_one_of_instance.to_dict()
# create an instance of CreateGeneratorJobRequestLorasInnerOneOf from a dict
create_generator_job_request_loras_inner_one_of_from_dict = CreateGeneratorJobRequestLorasInnerOneOf.from_dict(create_generator_job_request_loras_inner_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
