# InviteChatParticipantsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_ids** | **List[int]** | Existing users to invite or re-invite to the group. |

## Example

```python
from arcenciel.generated.models.invite_chat_participants_request import InviteChatParticipantsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InviteChatParticipantsRequest from a JSON string
invite_chat_participants_request_instance = InviteChatParticipantsRequest.from_json(json)
# print the JSON string representation of the object
print(InviteChatParticipantsRequest.to_json())

# convert the object into a dict
invite_chat_participants_request_dict = invite_chat_participants_request_instance.to_dict()
# create an instance of InviteChatParticipantsRequest from a dict
invite_chat_participants_request_from_dict = InviteChatParticipantsRequest.from_dict(invite_chat_participants_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
