# CreateGeneratorCompareRunRequestPromptControl

Enables ComfyUI Prompt Control scheduling and alternates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether enabled applies to this prompt control. | [optional]
**mode** | **str** | Mode associated with this prompt control; preserve server-returned values when passing them to another operation. Supported values: &#x60;auto&#x60;, &#x60;manual&#x60;, &#x60;disabled&#x60;. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_compare_run_request_prompt_control import CreateGeneratorCompareRunRequestPromptControl

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorCompareRunRequestPromptControl from a JSON string
create_generator_compare_run_request_prompt_control_instance = CreateGeneratorCompareRunRequestPromptControl.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorCompareRunRequestPromptControl.to_json())

# convert the object into a dict
create_generator_compare_run_request_prompt_control_dict = create_generator_compare_run_request_prompt_control_instance.to_dict()
# create an instance of CreateGeneratorCompareRunRequestPromptControl from a dict
create_generator_compare_run_request_prompt_control_from_dict = CreateGeneratorCompareRunRequestPromptControl.from_dict(create_generator_compare_run_request_prompt_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
