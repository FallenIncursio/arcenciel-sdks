# ListOAuthScopes200Response

Fields describing 200 response for api oauth scopes in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[OAuthScope]**](OAuthScope.md) | Ordered data entries included with this 200 response for api oauth scopes; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.list_o_auth_scopes200_response import ListOAuthScopes200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListOAuthScopes200Response from a JSON string
list_o_auth_scopes200_response_instance = ListOAuthScopes200Response.from_json(json)
# print the JSON string representation of the object
print(ListOAuthScopes200Response.to_json())

# convert the object into a dict
list_o_auth_scopes200_response_dict = list_o_auth_scopes200_response_instance.to_dict()
# create an instance of ListOAuthScopes200Response from a dict
list_o_auth_scopes200_response_from_dict = ListOAuthScopes200Response.from_dict(list_o_auth_scopes200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
