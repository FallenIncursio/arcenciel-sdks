# ModelGalleryResponse

Stable paginated response envelope for a model's visible image and video gallery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ModelGalleryMediaEntry]**](ModelGalleryMediaEntry.md) | Mixed image and video entries for the current page. |
**limit** | **int** | Requested page size after server clamping. |
**page** | **int** | Current one-based page. |
**pinned** | [**List[Image]**](Image.md) | Creator-pinned visible images. Present only on the first page when pins exist. | [optional]
**total_count** | **int** | Total number of matching image and video entries. |
**total_pages** | **int** | Total number of pages at the current limit. |

## Example

```python
from arcenciel.generated.models.model_gallery_response import ModelGalleryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelGalleryResponse from a JSON string
model_gallery_response_instance = ModelGalleryResponse.from_json(json)
# print the JSON string representation of the object
print(ModelGalleryResponse.to_json())

# convert the object into a dict
model_gallery_response_dict = model_gallery_response_instance.to_dict()
# create an instance of ModelGalleryResponse from a dict
model_gallery_response_from_dict = ModelGalleryResponse.from_dict(model_gallery_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
