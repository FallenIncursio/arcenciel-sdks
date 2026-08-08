# ListModelClasses200ResponseClassesInner

Structured classes item details for this classes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Stable identifier for the classes item; use it in subsequent API calls instead of a display name. | [optional]
**name** | **str** | Human-readable name for this classes item; it is not a stable identifier. | [optional]

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
