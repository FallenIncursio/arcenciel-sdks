# ImageSpatialAttributionTagsInner

Structured tags item details for this tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution** | **str** | Distribution associated with this tags item; preserve server-returned values when passing them to another operation. Supported values: &#x60;localized&#x60;, &#x60;mixed&#x60;, &#x60;distributed&#x60;. |
**focus** | **float** | Numeric focus reported for this tags item. Minimum: 0. Maximum: 1. |
**index** | **int** | Numeric index reported for this tags item. Minimum: 0. |
**name** | **str** | Human-readable name for this tags item; it is not a stable identifier. |
**score** | **float** | Numeric score reported for this tags item. Minimum: 0. Maximum: 1. |

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
