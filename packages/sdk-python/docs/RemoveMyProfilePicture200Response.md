# RemoveMyProfilePicture200Response

200 response for api users me profile picture used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Message accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.remove_my_profile_picture200_response import RemoveMyProfilePicture200Response

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveMyProfilePicture200Response from a JSON string
remove_my_profile_picture200_response_instance = RemoveMyProfilePicture200Response.from_json(json)
# print the JSON string representation of the object
print(RemoveMyProfilePicture200Response.to_json())

# convert the object into a dict
remove_my_profile_picture200_response_dict = remove_my_profile_picture200_response_instance.to_dict()
# create an instance of RemoveMyProfilePicture200Response from a dict
remove_my_profile_picture200_response_from_dict = RemoveMyProfilePicture200Response.from_dict(remove_my_profile_picture200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
