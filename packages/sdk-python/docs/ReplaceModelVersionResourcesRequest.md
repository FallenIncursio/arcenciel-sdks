# ReplaceModelVersionResourcesRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replace** | **bool** | Whether replace applies to this request payload. | [optional]
**resources** | **List[object]** | Ordered resources entries included with this request payload; an empty list means none are available. | [optional]

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
