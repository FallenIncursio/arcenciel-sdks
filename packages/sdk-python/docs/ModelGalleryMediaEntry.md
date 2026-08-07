# ModelGalleryMediaEntry

One mixed-media gallery entry. Use kind as the discriminator before reading data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ModelGalleryMediaEntryData**](ModelGalleryMediaEntryData.md) |  |
**kind** | **str** | Media type contained in data. |

## Example

```python
from arcenciel.generated.models.model_gallery_media_entry import ModelGalleryMediaEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ModelGalleryMediaEntry from a JSON string
model_gallery_media_entry_instance = ModelGalleryMediaEntry.from_json(json)
# print the JSON string representation of the object
print(ModelGalleryMediaEntry.to_json())

# convert the object into a dict
model_gallery_media_entry_dict = model_gallery_media_entry_instance.to_dict()
# create an instance of ModelGalleryMediaEntry from a dict
model_gallery_media_entry_from_dict = ModelGalleryMediaEntry.from_dict(model_gallery_media_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
