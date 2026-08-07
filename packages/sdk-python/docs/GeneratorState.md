# GeneratorState

Generator State used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_moderators_when_disabled** | **bool** | Allow Moderators When Disabled accepted or returned by this contract. |
**enabled** | **bool** | Enabled accepted or returned by this contract. |
**message** | **str** | Message accepted or returned by this contract. |
**regional_prompts_admins_only** | **bool** | Regional Prompts Admins Only accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_state import GeneratorState

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorState from a JSON string
generator_state_instance = GeneratorState.from_json(json)
# print the JSON string representation of the object
print(GeneratorState.to_json())

# convert the object into a dict
generator_state_dict = generator_state_instance.to_dict()
# create an instance of GeneratorState from a dict
generator_state_from_dict = GeneratorState.from_dict(generator_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
