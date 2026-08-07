# DeveloperStoredImagesUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional]
**images** | [**List[DeveloperManagedImage]**](DeveloperManagedImage.md) |  |
**message** | **str** |  | [optional]

## Example

```python
from arcenciel.generated.models.developer_stored_images_upload_response import DeveloperStoredImagesUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperStoredImagesUploadResponse from a JSON string
developer_stored_images_upload_response_instance = DeveloperStoredImagesUploadResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperStoredImagesUploadResponse.to_json())

# convert the object into a dict
developer_stored_images_upload_response_dict = developer_stored_images_upload_response_instance.to_dict()
# create an instance of DeveloperStoredImagesUploadResponse from a dict
developer_stored_images_upload_response_from_dict = DeveloperStoredImagesUploadResponse.from_dict(developer_stored_images_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
