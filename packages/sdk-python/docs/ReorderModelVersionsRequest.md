# ReorderModelVersionsRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version_ids** | **List[int]** | The new order of version IDs. | [optional]

## Example

```python
from arcenciel.generated.models.reorder_model_versions_request import ReorderModelVersionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReorderModelVersionsRequest from a JSON string
reorder_model_versions_request_instance = ReorderModelVersionsRequest.from_json(json)
# print the JSON string representation of the object
print(ReorderModelVersionsRequest.to_json())

# convert the object into a dict
reorder_model_versions_request_dict = reorder_model_versions_request_instance.to_dict()
# create an instance of ReorderModelVersionsRequest from a dict
reorder_model_versions_request_from_dict = ReorderModelVersionsRequest.from_dict(reorder_model_versions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
