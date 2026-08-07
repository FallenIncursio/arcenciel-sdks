# DeveloperCollabParticipantResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**participant** | [**CollabParticipant**](CollabParticipant.md) |  |

## Example

```python
from arcenciel.generated.models.developer_collab_participant_response import DeveloperCollabParticipantResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperCollabParticipantResponse from a JSON string
developer_collab_participant_response_instance = DeveloperCollabParticipantResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperCollabParticipantResponse.to_json())

# convert the object into a dict
developer_collab_participant_response_dict = developer_collab_participant_response_instance.to_dict()
# create an instance of DeveloperCollabParticipantResponse from a dict
developer_collab_participant_response_from_dict = DeveloperCollabParticipantResponse.from_dict(developer_collab_participant_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
