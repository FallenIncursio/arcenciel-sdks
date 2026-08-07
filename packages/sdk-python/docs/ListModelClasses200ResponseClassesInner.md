# ListModelClasses200ResponseClassesInner

Classes item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Id accepted or returned by this contract. | [optional] 
**name** | **str** | Name accepted or returned by this contract. | [optional] 

## Example

```python
from arcenciel.generated.models.list_model_classes200_response_classes_inner import ListModelClasses200ResponseClassesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListModelClasses200ResponseClassesInner from a JSON string
list_model_classes200_response_classes_inner_instance = ListModelClasses200ResponseClassesInner.from_json(json)
# print the JSON string representation of the object
print(ListModelClasses200ResponseClassesInner.to_json())

# convert the object into a dict
list_model_classes200_response_classes_inner_dict = list_model_classes200_response_classes_inner_instance.to_dict()
# create an instance of ListModelClasses200ResponseClassesInner from a dict
list_model_classes200_response_classes_inner_from_dict = ListModelClasses200ResponseClassesInner.from_dict(list_model_classes200_response_classes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


