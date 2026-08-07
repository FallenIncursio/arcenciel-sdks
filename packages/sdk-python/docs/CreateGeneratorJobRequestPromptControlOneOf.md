# CreateGeneratorJobRequestPromptControlOneOf

Prompt Control used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled accepted or returned by this contract. | [optional]
**mode** | **str** | Mode accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_job_request_prompt_control_one_of import CreateGeneratorJobRequestPromptControlOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequestPromptControlOneOf from a JSON string
create_generator_job_request_prompt_control_one_of_instance = CreateGeneratorJobRequestPromptControlOneOf.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequestPromptControlOneOf.to_json())

# convert the object into a dict
create_generator_job_request_prompt_control_one_of_dict = create_generator_job_request_prompt_control_one_of_instance.to_dict()
# create an instance of CreateGeneratorJobRequestPromptControlOneOf from a dict
create_generator_job_request_prompt_control_one_of_from_dict = CreateGeneratorJobRequestPromptControlOneOf.from_dict(create_generator_job_request_prompt_control_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
