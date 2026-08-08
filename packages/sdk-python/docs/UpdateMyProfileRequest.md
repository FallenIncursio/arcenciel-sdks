# UpdateMyProfileRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bio** | **str** | Bio associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]
**nsfw_age_verified** | **bool** | Whether nsfw age verified applies to this request payload. | [optional]
**sfw_mode** | **bool** | Whether sfw mode applies to this request payload. | [optional]
**track_downloads** | **bool** | Whether track downloads applies to this request payload. | [optional]
**username** | **str** | Username associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.update_my_profile_request import UpdateMyProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMyProfileRequest from a JSON string
update_my_profile_request_instance = UpdateMyProfileRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMyProfileRequest.to_json())

# convert the object into a dict
update_my_profile_request_dict = update_my_profile_request_instance.to_dict()
# create an instance of UpdateMyProfileRequest from a dict
update_my_profile_request_from_dict = UpdateMyProfileRequest.from_dict(update_my_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
