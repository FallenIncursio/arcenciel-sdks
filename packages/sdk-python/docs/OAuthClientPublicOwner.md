# OAuthClientPublicOwner

Structured owner details for this oauth client public.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | Username associated with this owner; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.o_auth_client_public_owner import OAuthClientPublicOwner

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthClientPublicOwner from a JSON string
o_auth_client_public_owner_instance = OAuthClientPublicOwner.from_json(json)
# print the JSON string representation of the object
print(OAuthClientPublicOwner.to_json())

# convert the object into a dict
o_auth_client_public_owner_dict = o_auth_client_public_owner_instance.to_dict()
# create an instance of OAuthClientPublicOwner from a dict
o_auth_client_public_owner_from_dict = OAuthClientPublicOwner.from_dict(o_auth_client_public_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
