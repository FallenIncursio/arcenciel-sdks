# GeneratorVideoSafetyReview

Generator Video Safety Review used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor_id** | **int** | Reviewing staff account ID. |
**actor_role** | **str** | Reviewing staff role. |
**locked** | **bool** | Whether automated rescans may replace this review. |
**note** | **str** | Private moderator note. |
**reason** | **str** | Moderator-selected or free-form safety reason. |
**reviewed_at** | **int** | Review time in Unix milliseconds. |
**status** | **str** | Moderator-selected safety status. |

## Example

```python
from arcenciel.generated.models.generator_video_safety_review import GeneratorVideoSafetyReview

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoSafetyReview from a JSON string
generator_video_safety_review_instance = GeneratorVideoSafetyReview.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoSafetyReview.to_json())

# convert the object into a dict
generator_video_safety_review_dict = generator_video_safety_review_instance.to_dict()
# create an instance of GeneratorVideoSafetyReview from a dict
generator_video_safety_review_from_dict = GeneratorVideoSafetyReview.from_dict(generator_video_safety_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
