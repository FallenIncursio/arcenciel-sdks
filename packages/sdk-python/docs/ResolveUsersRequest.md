# ResolveUsersRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Array of usernames to resolve. | [optional]

## Example

```python
from arcenciel.generated.models.resolve_users_request import ResolveUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResolveUsersRequest from a JSON string
resolve_users_request_instance = ResolveUsersRequest.from_json(json)
# print the JSON string representation of the object
print(ResolveUsersRequest.to_json())

# convert the object into a dict
resolve_users_request_dict = resolve_users_request_instance.to_dict()
# create an instance of ResolveUsersRequest from a dict
resolve_users_request_from_dict = ResolveUsersRequest.from_dict(resolve_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
