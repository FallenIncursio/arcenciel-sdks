# UpdateMyProfileRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bio** | **str** | Bio accepted or returned by this contract. | [optional]
**nsfw_age_verified** | **bool** | Nsfw Age Verified accepted or returned by this contract. | [optional]
**sfw_mode** | **bool** | Sfw Mode accepted or returned by this contract. | [optional]
**track_downloads** | **bool** | Track Downloads accepted or returned by this contract. | [optional]
**username** | **str** | Username accepted or returned by this contract. | [optional]

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
