# OAuthTokenResponse

Fields describing oauth token response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Opaque Bearer credential valid for 15 minutes. Never log or place it in a URL. |
**expires_in** | **int** | Access-token lifetime in seconds. |
**refresh_token** | **str** | Present only for offline_access. Replace it atomically after every successful refresh. | [optional]
**scope** | **str** | Scope associated with this oauth token response; preserve server-returned values when passing them to another operation. |
**token_type** | **str** | Discriminator identifying the kind of oauth token response; clients should tolerate future values. Supported values: &#x60;Bearer&#x60;. |

## Example

```python
from arcenciel.generated.models.o_auth_token_response import OAuthTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthTokenResponse from a JSON string
o_auth_token_response_instance = OAuthTokenResponse.from_json(json)
# print the JSON string representation of the object
print(OAuthTokenResponse.to_json())

# convert the object into a dict
o_auth_token_response_dict = o_auth_token_response_instance.to_dict()
# create an instance of OAuthTokenResponse from a dict
o_auth_token_response_from_dict = OAuthTokenResponse.from_dict(o_auth_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
