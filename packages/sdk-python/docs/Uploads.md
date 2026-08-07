# Uploads

Uploads accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**articles** | [**List[ApiKey]**](ApiKey.md) | Articles accepted or returned by this contract. | [optional]
**images** | [**List[ApiKey]**](ApiKey.md) | Images accepted or returned by this contract. | [optional]
**models** | [**List[User]**](User.md) | Models accepted or returned by this contract. | [optional]
**videos** | [**List[ApiKey]**](ApiKey.md) | Videos accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.uploads import Uploads

# TODO update the JSON string below
json = "{}"
# create an instance of Uploads from a JSON string
uploads_instance = Uploads.from_json(json)
# print the JSON string representation of the object
print(Uploads.to_json())

# convert the object into a dict
uploads_dict = uploads_instance.to_dict()
# create an instance of Uploads from a dict
uploads_from_dict = Uploads.from_dict(uploads_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
