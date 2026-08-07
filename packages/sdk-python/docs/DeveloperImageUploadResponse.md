# DeveloperImageUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional]
**image_ids** | **List[int]** |  |
**message** | **str** |  | [optional]

## Example

```python
from arcenciel.generated.models.developer_image_upload_response import DeveloperImageUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperImageUploadResponse from a JSON string
developer_image_upload_response_instance = DeveloperImageUploadResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperImageUploadResponse.to_json())

# convert the object into a dict
developer_image_upload_response_dict = developer_image_upload_response_instance.to_dict()
# create an instance of DeveloperImageUploadResponse from a dict
developer_image_upload_response_from_dict = DeveloperImageUploadResponse.from_dict(developer_image_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
