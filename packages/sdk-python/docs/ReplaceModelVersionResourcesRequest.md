# ReplaceModelVersionResourcesRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replace** | **bool** | Replace accepted or returned by this contract. | [optional]
**resources** | **List[object]** | Resources accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.replace_model_version_resources_request import ReplaceModelVersionResourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceModelVersionResourcesRequest from a JSON string
replace_model_version_resources_request_instance = ReplaceModelVersionResourcesRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceModelVersionResourcesRequest.to_json())

# convert the object into a dict
replace_model_version_resources_request_dict = replace_model_version_resources_request_instance.to_dict()
# create an instance of ReplaceModelVersionResourcesRequest from a dict
replace_model_version_resources_request_from_dict = ReplaceModelVersionResourcesRequest.from_dict(replace_model_version_resources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
