# User

Structured uploader details for this video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email associated with this uploader; preserve server-returned values when passing them to another operation. | [optional]
**id** | **int** | Stable identifier for the uploader; use it in subsequent API calls instead of a display name. | [optional]
**profile_picture** | **str** | Profile Picture associated with this uploader; preserve server-returned values when passing them to another operation. | [optional]
**role** | **str** | Access role represented by this uploader; use it for display and capability checks, not authentication. | [optional]
**username** | **str** | Username associated with this uploader; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
