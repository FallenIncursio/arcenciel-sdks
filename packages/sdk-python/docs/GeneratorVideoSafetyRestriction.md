# GeneratorVideoSafetyRestriction

Generator Video Safety Restriction used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Viewer-safe restriction message. |
**error_code** | **str** | Stable safety restriction code. |
**safety_reason** | **str** | Current safety reason. |
**safety_status** | **str** | Current blocking safety state. |

## Example

```python
from arcenciel.generated.models.generator_video_safety_restriction import GeneratorVideoSafetyRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoSafetyRestriction from a JSON string
generator_video_safety_restriction_instance = GeneratorVideoSafetyRestriction.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoSafetyRestriction.to_json())

# convert the object into a dict
generator_video_safety_restriction_dict = generator_video_safety_restriction_instance.to_dict()
# create an instance of GeneratorVideoSafetyRestriction from a dict
generator_video_safety_restriction_from_dict = GeneratorVideoSafetyRestriction.from_dict(generator_video_safety_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
