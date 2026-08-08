# GeneratorJobRemixRequestPromptControl

Enables Prompt Control for schedule syntax, or `auto` to enable only when schedule syntax is present.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether enabled applies to this prompt control. | [optional]
**mode** | **str** | Mode associated with this prompt control; preserve server-returned values when passing them to another operation. Supported values: &#x60;auto&#x60;, &#x60;manual&#x60;, &#x60;disabled&#x60;. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_remix_request_prompt_control import GeneratorJobRemixRequestPromptControl

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobRemixRequestPromptControl from a JSON string
generator_job_remix_request_prompt_control_instance = GeneratorJobRemixRequestPromptControl.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobRemixRequestPromptControl.to_json())

# convert the object into a dict
generator_job_remix_request_prompt_control_dict = generator_job_remix_request_prompt_control_instance.to_dict()
# create an instance of GeneratorJobRemixRequestPromptControl from a dict
generator_job_remix_request_prompt_control_from_dict = GeneratorJobRemixRequestPromptControl.from_dict(generator_job_remix_request_prompt_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
