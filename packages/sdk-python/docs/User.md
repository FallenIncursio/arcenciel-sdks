# User

Uploader accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email accepted or returned by this contract. | [optional] 
**id** | **int** | Id accepted or returned by this contract. | [optional] 
**profile_picture** | **str** | Profile Picture accepted or returned by this contract. | [optional] 
**role** | **str** | Role accepted or returned by this contract. | [optional] 
**username** | **str** | Username accepted or returned by this contract. | [optional] 

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


