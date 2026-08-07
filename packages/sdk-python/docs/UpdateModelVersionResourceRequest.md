# UpdateModelVersionResourceRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind accepted or returned by this contract. | [optional]
**status** | **str** | Status accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.update_model_version_resource_request import UpdateModelVersionResourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateModelVersionResourceRequest from a JSON string
update_model_version_resource_request_instance = UpdateModelVersionResourceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateModelVersionResourceRequest.to_json())

# convert the object into a dict
update_model_version_resource_request_dict = update_model_version_resource_request_instance.to_dict()
# create an instance of UpdateModelVersionResourceRequest from a dict
update_model_version_resource_request_from_dict = UpdateModelVersionResourceRequest.from_dict(update_model_version_resource_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
