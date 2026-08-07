# DeveloperCollabPlaceholderUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**participant** | [**CollabParticipant**](CollabParticipant.md) |  |
**path** | **str** |  |
**rating** | **str** | Safety rating returned by the media pipeline. |

## Example

```python
from arcenciel.generated.models.developer_collab_placeholder_upload_response import DeveloperCollabPlaceholderUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperCollabPlaceholderUploadResponse from a JSON string
developer_collab_placeholder_upload_response_instance = DeveloperCollabPlaceholderUploadResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperCollabPlaceholderUploadResponse.to_json())

# convert the object into a dict
developer_collab_placeholder_upload_response_dict = developer_collab_placeholder_upload_response_instance.to_dict()
# create an instance of DeveloperCollabPlaceholderUploadResponse from a dict
developer_collab_placeholder_upload_response_from_dict = DeveloperCollabPlaceholderUploadResponse.from_dict(developer_collab_placeholder_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
