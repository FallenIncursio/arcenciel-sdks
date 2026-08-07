# SetModelShowcaseRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**showcased** | **str** | Showcase placement for the model. |

## Example

```python
from arcenciel.generated.models.set_model_showcase_request import SetModelShowcaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetModelShowcaseRequest from a JSON string
set_model_showcase_request_instance = SetModelShowcaseRequest.from_json(json)
# print the JSON string representation of the object
print(SetModelShowcaseRequest.to_json())

# convert the object into a dict
set_model_showcase_request_dict = set_model_showcase_request_instance.to_dict()
# create an instance of SetModelShowcaseRequest from a dict
set_model_showcase_request_from_dict = SetModelShowcaseRequest.from_dict(set_model_showcase_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
