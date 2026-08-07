# GeneratorJobPromptControl

Prompt Control state used for this job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled accepted or returned by this contract. | [optional]
**mode** | **str** | Mode accepted or returned by this contract. | [optional]
**source** | **str** | Source accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_prompt_control import GeneratorJobPromptControl

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobPromptControl from a JSON string
generator_job_prompt_control_instance = GeneratorJobPromptControl.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobPromptControl.to_json())

# convert the object into a dict
generator_job_prompt_control_dict = generator_job_prompt_control_instance.to_dict()
# create an instance of GeneratorJobPromptControl from a dict
generator_job_prompt_control_from_dict = GeneratorJobPromptControl.from_dict(generator_job_prompt_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
