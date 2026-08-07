# ListUsers200Response

200 response for api users used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[User]**](User.md) | Data accepted or returned by this contract. | [optional]
**has_more** | **bool** | Has More accepted or returned by this contract. | [optional]
**limit** | **int** | Limit accepted or returned by this contract. | [optional]
**page** | **int** | Page accepted or returned by this contract. | [optional]
**total** | **int** | Total accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.list_users200_response import ListUsers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListUsers200Response from a JSON string
list_users200_response_instance = ListUsers200Response.from_json(json)
# print the JSON string representation of the object
print(ListUsers200Response.to_json())

# convert the object into a dict
list_users200_response_dict = list_users200_response_instance.to_dict()
# create an instance of ListUsers200Response from a dict
list_users200_response_from_dict = ListUsers200Response.from_dict(list_users200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
