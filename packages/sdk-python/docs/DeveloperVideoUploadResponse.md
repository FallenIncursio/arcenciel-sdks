# DeveloperVideoUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional]
**message** | **str** |  | [optional]
**video_ids** | **List[int]** |  |

## Example

```python
from arcenciel.generated.models.developer_video_upload_response import DeveloperVideoUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperVideoUploadResponse from a JSON string
developer_video_upload_response_instance = DeveloperVideoUploadResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperVideoUploadResponse.to_json())

# convert the object into a dict
developer_video_upload_response_dict = developer_video_upload_response_instance.to_dict()
# create an instance of DeveloperVideoUploadResponse from a dict
developer_video_upload_response_from_dict = DeveloperVideoUploadResponse.from_dict(developer_video_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
