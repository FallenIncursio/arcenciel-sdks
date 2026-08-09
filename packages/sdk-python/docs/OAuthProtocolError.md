# OAuthProtocolError

Fields describing oauth protocol error in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | OAuth protocol error code; applications should branch on this value rather than the human-readable message. |
**error_description** | **str** | Human-readable diagnostic intended for application logs and developer troubleshooting. |

## Example

```python
from arcenciel.generated.models.o_auth_protocol_error import OAuthProtocolError

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthProtocolError from a JSON string
o_auth_protocol_error_instance = OAuthProtocolError.from_json(json)
# print the JSON string representation of the object
print(OAuthProtocolError.to_json())

# convert the object into a dict
o_auth_protocol_error_dict = o_auth_protocol_error_instance.to_dict()
# create an instance of OAuthProtocolError from a dict
o_auth_protocol_error_from_dict = OAuthProtocolError.from_dict(o_auth_protocol_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
