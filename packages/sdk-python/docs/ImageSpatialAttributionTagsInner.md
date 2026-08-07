# ImageSpatialAttributionTagsInner

Tags item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution** | **str** | Distribution accepted or returned by this contract. |
**focus** | **float** | Focus accepted or returned by this contract. |
**index** | **int** | Index accepted or returned by this contract. |
**name** | **str** | Name accepted or returned by this contract. |
**score** | **float** | Score accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.image_spatial_attribution_tags_inner import ImageSpatialAttributionTagsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ImageSpatialAttributionTagsInner from a JSON string
image_spatial_attribution_tags_inner_instance = ImageSpatialAttributionTagsInner.from_json(json)
# print the JSON string representation of the object
print(ImageSpatialAttributionTagsInner.to_json())

# convert the object into a dict
image_spatial_attribution_tags_inner_dict = image_spatial_attribution_tags_inner_instance.to_dict()
# create an instance of ImageSpatialAttributionTagsInner from a dict
image_spatial_attribution_tags_inner_from_dict = ImageSpatialAttributionTagsInner.from_dict(image_spatial_attribution_tags_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
