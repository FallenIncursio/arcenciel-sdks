# UpdateModelVersionResourceRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind associated with this request payload; preserve server-returned values when passing them to another operation. Supported values: &#x60;REQUIRED&#x60;, &#x60;RECOMMENDED&#x60;, &#x60;COMPATIBLE&#x60;, &#x60;SAMPLE_USED&#x60;. | [optional]
**status** | **str** | Current lifecycle state of this request payload; clients should tolerate future values. Supported values: &#x60;ACTIVE&#x60;, &#x60;HIDDEN&#x60;. | [optional]

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
