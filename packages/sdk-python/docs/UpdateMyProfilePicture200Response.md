# UpdateMyProfilePicture200Response

Fields describing 200 response for api users me profile picture in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Message associated with this 200 response for api users me profile picture; preserve server-returned values when passing them to another operation. | [optional]
**profile_picture** | **str** | Profile Picture associated with this 200 response for api users me profile picture; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.update_my_profile_picture200_response import UpdateMyProfilePicture200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMyProfilePicture200Response from a JSON string
update_my_profile_picture200_response_instance = UpdateMyProfilePicture200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateMyProfilePicture200Response.to_json())

# convert the object into a dict
update_my_profile_picture200_response_dict = update_my_profile_picture200_response_instance.to_dict()
# create an instance of UpdateMyProfilePicture200Response from a dict
update_my_profile_picture200_response_from_dict = UpdateMyProfilePicture200Response.from_dict(update_my_profile_picture200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
