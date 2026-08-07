# DeveloperCollectionCoverUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  |
**rating** | **str** | Safety rating returned by the media pipeline. |

## Example

```python
from arcenciel.generated.models.developer_collection_cover_upload_response import DeveloperCollectionCoverUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperCollectionCoverUploadResponse from a JSON string
developer_collection_cover_upload_response_instance = DeveloperCollectionCoverUploadResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperCollectionCoverUploadResponse.to_json())

# convert the object into a dict
developer_collection_cover_upload_response_dict = developer_collection_cover_upload_response_instance.to_dict()
# create an instance of DeveloperCollectionCoverUploadResponse from a dict
developer_collection_cover_upload_response_from_dict = DeveloperCollectionCoverUploadResponse.from_dict(developer_collection_cover_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
