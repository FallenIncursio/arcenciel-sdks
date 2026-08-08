# CollabCoverImage

Fields describing collab cover image in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external** | **bool** | Whether external applies to this collab cover image. |
**file_path** | **str** | Server-provided path for the file path associated with this collab cover image; treat it as opaque. |
**height** | **int** | Numeric height reported for this collab cover image. | [optional]
**id** | **int** | Stable identifier for the collab cover image; use it in subsequent API calls instead of a display name. |
**model_id** | **int** | Stable identifier for the model; use it in subsequent API calls instead of a display name. | [optional]
**rating** | **str** | Content-safety rating assigned to this collab cover image; callers must still apply their own audience policy. | [optional]
**source_model_id** | **int** | Stable identifier for the source model; use it in subsequent API calls instead of a display name. |
**title** | **str** | Display title shown to users for this collab cover image. |
**variants** | **Dict[str, object]** | Structured variants details for this collab cover image. | [optional]
**width** | **int** | Numeric width reported for this collab cover image. | [optional]

## Example

```python
from arcenciel.generated.models.collab_cover_image import CollabCoverImage

# TODO update the JSON string below
json = "{}"
# create an instance of CollabCoverImage from a JSON string
collab_cover_image_instance = CollabCoverImage.from_json(json)
# print the JSON string representation of the object
print(CollabCoverImage.to_json())

# convert the object into a dict
collab_cover_image_dict = collab_cover_image_instance.to_dict()
# create an instance of CollabCoverImage from a dict
collab_cover_image_from_dict = CollabCoverImage.from_dict(collab_cover_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
