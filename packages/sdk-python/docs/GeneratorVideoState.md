# GeneratorVideoState

Fields describing generator video state in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Staff-visible audience policy returned only to moderators and administrators. | [optional]
**can_enqueue** | **bool** | Whether the current account can enqueue a video job now. |
**enabled** | **bool** | Whether new video jobs are globally enabled. |
**message** | **str** | Viewer-facing lock message when generation is disabled. |
**staff_only** | **bool** | Staff-visible policy detail returned only to moderators and administrators. | [optional]
**visible** | **bool** | Whether the current account may see the video generator. |

## Example

```python
from arcenciel.generated.models.generator_video_state import GeneratorVideoState

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoState from a JSON string
generator_video_state_instance = GeneratorVideoState.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoState.to_json())

# convert the object into a dict
generator_video_state_dict = generator_video_state_instance.to_dict()
# create an instance of GeneratorVideoState from a dict
generator_video_state_from_dict = GeneratorVideoState.from_dict(generator_video_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
