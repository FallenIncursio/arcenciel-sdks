# DeveloperAttachedImagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_ids** | **List[int]** |  |
**image_order** | **List[int]** |  |
**message** | **str** |  |
**skipped_already_attached_ids** | **List[int]** |  |

## Example

```python
from arcenciel.generated.models.developer_attached_images_response import DeveloperAttachedImagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperAttachedImagesResponse from a JSON string
developer_attached_images_response_instance = DeveloperAttachedImagesResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperAttachedImagesResponse.to_json())

# convert the object into a dict
developer_attached_images_response_dict = developer_attached_images_response_instance.to_dict()
# create an instance of DeveloperAttachedImagesResponse from a dict
developer_attached_images_response_from_dict = DeveloperAttachedImagesResponse.from_dict(developer_attached_images_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
