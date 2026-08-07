# CollabCoverImage

Collab Cover Image used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external** | **bool** | External accepted or returned by this contract. |
**file_path** | **str** | File Path accepted or returned by this contract. |
**height** | **int** | Height accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. |
**model_id** | **int** | Model Id accepted or returned by this contract. | [optional]
**rating** | **str** | Rating accepted or returned by this contract. | [optional]
**source_model_id** | **int** | Source Model Id accepted or returned by this contract. |
**title** | **str** | Title accepted or returned by this contract. |
**variants** | **Dict[str, object]** | Variants accepted or returned by this contract. | [optional]
**width** | **int** | Width accepted or returned by this contract. | [optional]

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
