# GeneratorVideoSafetySnapshot

Generator Video Safety Snapshot used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Scan-level error. |
**outputs** | [**Dict[str, GeneratorVideoSafetyOutput]**](GeneratorVideoSafetyOutput.md) | Per-output sampled-frame scan results keyed by output basename. |
**reason** | **str** | Current safety reason. |
**review** | [**GeneratorVideoSafetyReview**](GeneratorVideoSafetyReview.md) | Latest manual moderation decision. |
**sfw_mode** | **bool** | Whether stricter SFW output handling applied. | [optional]
**status** | **str** | Current normalized safety status. |
**updated_at** | **int** | Latest safety update in Unix milliseconds. |

## Example

```python
from arcenciel.generated.models.generator_video_safety_snapshot import GeneratorVideoSafetySnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoSafetySnapshot from a JSON string
generator_video_safety_snapshot_instance = GeneratorVideoSafetySnapshot.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoSafetySnapshot.to_json())

# convert the object into a dict
generator_video_safety_snapshot_dict = generator_video_safety_snapshot_instance.to_dict()
# create an instance of GeneratorVideoSafetySnapshot from a dict
generator_video_safety_snapshot_from_dict = GeneratorVideoSafetySnapshot.from_dict(generator_video_safety_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
