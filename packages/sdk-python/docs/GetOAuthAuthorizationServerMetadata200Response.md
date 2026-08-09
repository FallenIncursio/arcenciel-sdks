# GetOAuthAuthorizationServerMetadata200Response

Fields describing 200 response for well known oauth authorization server in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_endpoint** | **str** | Authorization endpoint associated with this 200 response for well known oauth authorization server; preserve server-returned values when passing them to another operation. Format: uri. |
**authorization_response_iss_parameter_supported** | **bool** | Whether authorization response iss parameter supported applies to this 200 response for well known oauth authorization server. | [optional]
**code_challenge_methods_supported** | **List[str]** | Ordered code challenge methods supported entries included with this 200 response for well known oauth authorization server; an empty list means none are available. |
**grant_types_supported** | **List[str]** | Ordered grant types supported entries included with this 200 response for well known oauth authorization server; an empty list means none are available. |
**introspection_endpoint** | **str** | Introspection endpoint associated with this 200 response for well known oauth authorization server; preserve server-returned values when passing them to another operation. Format: uri. |
**introspection_endpoint_auth_methods_supported** | **List[str]** | Ordered introspection endpoint auth methods supported entries included with this 200 response for well known oauth authorization server; an empty list means none are available. | [optional]
**issuer** | **str** | Issuer associated with this 200 response for well known oauth authorization server; preserve server-returned values when passing them to another operation. Format: uri. |
**response_types_supported** | **List[str]** | Ordered response types supported entries included with this 200 response for well known oauth authorization server; an empty list means none are available. |
**revocation_endpoint** | **str** | Revocation endpoint associated with this 200 response for well known oauth authorization server; preserve server-returned values when passing them to another operation. Format: uri. |
**revocation_endpoint_auth_methods_supported** | **List[str]** | Ordered revocation endpoint auth methods supported entries included with this 200 response for well known oauth authorization server; an empty list means none are available. | [optional]
**scopes_supported** | **List[str]** | Ordered scopes supported entries included with this 200 response for well known oauth authorization server; an empty list means none are available. |
**service_documentation** | **str** | Service documentation associated with this 200 response for well known oauth authorization server; preserve server-returned values when passing them to another operation. Format: uri. | [optional]
**token_endpoint** | **str** | Token endpoint associated with this 200 response for well known oauth authorization server; preserve server-returned values when passing them to another operation. Format: uri. |
**token_endpoint_auth_methods_supported** | **List[str]** | Ordered token endpoint auth methods supported entries included with this 200 response for well known oauth authorization server; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.get_o_auth_authorization_server_metadata200_response import GetOAuthAuthorizationServerMetadata200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOAuthAuthorizationServerMetadata200Response from a JSON string
get_o_auth_authorization_server_metadata200_response_instance = GetOAuthAuthorizationServerMetadata200Response.from_json(json)
# print the JSON string representation of the object
print(GetOAuthAuthorizationServerMetadata200Response.to_json())

# convert the object into a dict
get_o_auth_authorization_server_metadata200_response_dict = get_o_auth_authorization_server_metadata200_response_instance.to_dict()
# create an instance of GetOAuthAuthorizationServerMetadata200Response from a dict
get_o_auth_authorization_server_metadata200_response_from_dict = GetOAuthAuthorizationServerMetadata200Response.from_dict(get_o_auth_authorization_server_metadata200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
