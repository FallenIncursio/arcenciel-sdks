# CreateChatGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | Optional group display title. | [optional]
**user_ids** | **List[int]** | Existing users to invite as pending members. | [optional]

## Example

```python
from arcenciel.generated.models.create_chat_group_request import CreateChatGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateChatGroupRequest from a JSON string
create_chat_group_request_instance = CreateChatGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CreateChatGroupRequest.to_json())

# convert the object into a dict
create_chat_group_request_dict = create_chat_group_request_instance.to_dict()
# create an instance of CreateChatGroupRequest from a dict
create_chat_group_request_from_dict = CreateChatGroupRequest.from_dict(create_chat_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
