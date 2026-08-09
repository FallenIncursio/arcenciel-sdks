# OAuthClientPublic

Fields describing oauth client public in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_offline_access** | **bool** | Whether allow offline access applies to this oauth client public. |
**allowed_scopes** | **List[str]** | Ordered allowed scopes entries included with this oauth client public; an empty list means none are available. |
**description** | **str** | User-facing description of this oauth client public; it may contain an empty string when no description was supplied. | [optional]
**homepage_url** | **str** | URL for the homepage url associated with this oauth client public; do not persist temporary signed query parameters. Format: uri. | [optional]
**id** | **str** | Stable identifier for the oauth client public; use it in subsequent API calls instead of a display name. |
**name** | **str** | Human-readable name for this oauth client public; it is not a stable identifier. |
**owner** | [**OAuthClientPublicOwner**](OAuthClientPublicOwner.md) |  | [optional]
**type** | **str** | Discriminator identifying the kind of oauth client public; clients should tolerate future values. Supported values: &#x60;PUBLIC&#x60;, &#x60;CONFIDENTIAL&#x60;. |

## Example

```python
from arcenciel.generated.models.o_auth_client_public import OAuthClientPublic

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthClientPublic from a JSON string
o_auth_client_public_instance = OAuthClientPublic.from_json(json)
# print the JSON string representation of the object
print(OAuthClientPublic.to_json())

# convert the object into a dict
o_auth_client_public_dict = o_auth_client_public_instance.to_dict()
# create an instance of OAuthClientPublic from a dict
o_auth_client_public_from_dict = OAuthClientPublic.from_dict(o_auth_client_public_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
