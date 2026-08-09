# OAuthScope

Fields describing oauth scope in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User-facing explanation of what the application may do. |
**name** | **str** | Stable scope name sent in authorization requests and returned by token endpoints. |
**risk** | **str** | Consent-screen risk category; clients must tolerate future categories. |
**title** | **str** | Short consent-screen label for the permission. |
**value** | **int** | Internal permission bit used for resource scopes; null for offline_access. | [optional]

## Example

```python
from arcenciel.generated.models.o_auth_scope import OAuthScope

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthScope from a JSON string
o_auth_scope_instance = OAuthScope.from_json(json)
# print the JSON string representation of the object
print(OAuthScope.to_json())

# convert the object into a dict
o_auth_scope_dict = o_auth_scope_instance.to_dict()
# create an instance of OAuthScope from a dict
o_auth_scope_from_dict = OAuthScope.from_dict(o_auth_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
