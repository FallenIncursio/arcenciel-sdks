# DeveloperFeedbackActor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  |
**username** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_feedback_actor import DeveloperFeedbackActor

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperFeedbackActor from a JSON string
developer_feedback_actor_instance = DeveloperFeedbackActor.from_json(json)
# print the JSON string representation of the object
print(DeveloperFeedbackActor.to_json())

# convert the object into a dict
developer_feedback_actor_dict = developer_feedback_actor_instance.to_dict()
# create an instance of DeveloperFeedbackActor from a dict
developer_feedback_actor_from_dict = DeveloperFeedbackActor.from_dict(developer_feedback_actor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
