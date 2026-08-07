# ApiError

Standard Arc en Ciel error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **Dict[str, object]** | Optional structured error details. | [optional] 
**error** | **str** | Human-readable error message. | [optional] 
**error_code** | **str** | Stable machine-readable error code. | [optional] 
**message** | **str** | Additional human-readable context. | [optional] 
**retryable** | **bool** | Whether retrying the request may succeed. | [optional] 

## Example

```python
from arcenciel.generated.models.api_error import ApiError

# TODO update the JSON string below
json = "{}"
# create an instance of ApiError from a JSON string
api_error_instance = ApiError.from_json(json)
# print the JSON string representation of the object
print(ApiError.to_json())

# convert the object into a dict
api_error_dict = api_error_instance.to_dict()
# create an instance of ApiError from a dict
api_error_from_dict = ApiError.from_dict(api_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


