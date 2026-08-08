# GeneratorState

Fields describing generator state in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_moderators_when_disabled** | **bool** | Whether allow moderators when disabled applies to this generator state. |
**enabled** | **bool** | Whether enabled applies to this generator state. |
**message** | **str** | Message associated with this generator state; preserve server-returned values when passing them to another operation. |
**regional_prompts_admins_only** | **bool** | Whether regional prompts admins only applies to this generator state. |

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
