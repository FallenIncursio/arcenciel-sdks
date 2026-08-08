# ListUsers200Response

Fields describing 200 response for api users in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[User]**](User.md) | Ordered data entries included with this 200 response for api users; an empty list means none are available. | [optional]
**has_more** | **bool** | Whether another page of this 200 response for api users is available after the current result. | [optional]
**limit** | **int** | Maximum number of records requested or returned in one page of this 200 response for api users. | [optional]
**page** | **int** | One-based result page requested or returned for this 200 response for api users. | [optional]
**total** | **int** | Total number of matching records across all pages for this 200 response for api users. | [optional]

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
