# GetPublicOAuthClient200Response

Fields describing 200 response for api oauth clients client id public in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OAuthClientPublic**](OAuthClientPublic.md) |  |

## Example

```python
from arcenciel.generated.models.get_public_o_auth_client200_response import GetPublicOAuthClient200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublicOAuthClient200Response from a JSON string
get_public_o_auth_client200_response_instance = GetPublicOAuthClient200Response.from_json(json)
# print the JSON string representation of the object
print(GetPublicOAuthClient200Response.to_json())

# convert the object into a dict
get_public_o_auth_client200_response_dict = get_public_o_auth_client200_response_instance.to_dict()
# create an instance of GetPublicOAuthClient200Response from a dict
get_public_o_auth_client200_response_from_dict = GetPublicOAuthClient200Response.from_dict(get_public_o_auth_client200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
