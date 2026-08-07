# ListModelClasses200Response

200 response for api models classes used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classes** | [**List[ListModelClasses200ResponseClassesInner]**](ListModelClasses200ResponseClassesInner.md) | Classes accepted or returned by this contract. | [optional] 

## Example

```python
from arcenciel.generated.models.list_model_classes200_response import ListModelClasses200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListModelClasses200Response from a JSON string
list_model_classes200_response_instance = ListModelClasses200Response.from_json(json)
# print the JSON string representation of the object
print(ListModelClasses200Response.to_json())

# convert the object into a dict
list_model_classes200_response_dict = list_model_classes200_response_instance.to_dict()
# create an instance of ListModelClasses200Response from a dict
list_model_classes200_response_from_dict = ListModelClasses200Response.from_dict(list_model_classes200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


