# ListImageExternalResources200Response

Fields describing 200 response for api images id external resources in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_resources** | **List[object]** | Ordered external resources entries included with this 200 response for api images id external resources; an empty list means none are available. | [optional]
**resources** | **List[object]** | Ordered resources entries included with this 200 response for api images id external resources; an empty list means none are available. | [optional]

## Example

```python
from arcenciel.generated.models.list_image_external_resources200_response import ListImageExternalResources200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListImageExternalResources200Response from a JSON string
list_image_external_resources200_response_instance = ListImageExternalResources200Response.from_json(json)
# print the JSON string representation of the object
print(ListImageExternalResources200Response.to_json())

# convert the object into a dict
list_image_external_resources200_response_dict = list_image_external_resources200_response_instance.to_dict()
# create an instance of ListImageExternalResources200Response from a dict
list_image_external_resources200_response_from_dict = ListImageExternalResources200Response.from_dict(list_image_external_resources200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
