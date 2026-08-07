# CreateGeneratorJobRequestPromptControl

Enables ComfyUI Prompt Control scheduling and alternates, for example `[red hair:blue hair:0.5]`. If omitted, the backend auto-enables Prompt Control when clear schedule syntax is detected. Send `false` or `{ \"mode\": \"disabled\" }` to force plain prompt encoding. Unsupported Prompt Control model/wildcard/NODE syntax is rejected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled accepted or returned by this contract. | [optional]
**mode** | **str** | Mode accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_job_request_prompt_control import CreateGeneratorJobRequestPromptControl

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequestPromptControl from a JSON string
create_generator_job_request_prompt_control_instance = CreateGeneratorJobRequestPromptControl.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequestPromptControl.to_json())

# convert the object into a dict
create_generator_job_request_prompt_control_dict = create_generator_job_request_prompt_control_instance.to_dict()
# create an instance of CreateGeneratorJobRequestPromptControl from a dict
create_generator_job_request_prompt_control_from_dict = CreateGeneratorJobRequestPromptControl.from_dict(create_generator_job_request_prompt_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
