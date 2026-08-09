# OAuthIntrospection

Fields describing oauth introspection in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether active applies to this oauth introspection. |
**client_id** | **str** | Stable identifier for the client; use it in subsequent API calls instead of a display name. | [optional]
**exp** | **int** | Expiry as Unix seconds. | [optional]
**iat** | **int** | Issue time as Unix seconds. | [optional]
**iss** | **str** | Iss associated with this oauth introspection; preserve server-returned values when passing them to another operation. Format: uri. | [optional]
**scope** | **str** | Scope associated with this oauth introspection; preserve server-returned values when passing them to another operation. | [optional]
**sub** | **str** | Stable Arc en Ciel user identifier. | [optional]
**token_type** | **str** | Discriminator identifying the kind of oauth introspection; clients should tolerate future values. Supported values: &#x60;Bearer&#x60;. | [optional]
**username** | **str** | Username associated with this oauth introspection; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.o_auth_introspection import OAuthIntrospection

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthIntrospection from a JSON string
o_auth_introspection_instance = OAuthIntrospection.from_json(json)
# print the JSON string representation of the object
print(OAuthIntrospection.to_json())

# convert the object into a dict
o_auth_introspection_dict = o_auth_introspection_instance.to_dict()
# create an instance of OAuthIntrospection from a dict
o_auth_introspection_from_dict = OAuthIntrospection.from_dict(o_auth_introspection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
