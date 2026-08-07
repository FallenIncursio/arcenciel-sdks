# ImageSpatialAttribution

Image Spatial Attribution used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm_version** | **str** | Algorithm Version accepted or returned by this contract. | [optional]
**atlas_url** | **str** | Atlas Url accepted or returned by this contract. | [optional]
**columns** | **int** | Columns accepted or returned by this contract. | [optional]
**completed_at** | **datetime** | Completed At accepted or returned by this contract. | [optional]
**device** | **str** | Device accepted or returned by this contract. | [optional]
**duration_ms** | **float** | Duration Ms accepted or returned by this contract. | [optional]
**height** | **int** | Height accepted or returned by this contract. | [optional]
**map_size** | **int** | Map Size accepted or returned by this contract. | [optional]
**message** | **str** | Message accepted or returned by this contract. | [optional]
**model_version** | **str** | Model Version accepted or returned by this contract. | [optional]
**request_access** | [**ImageSpatialAttributionRequestAccess**](ImageSpatialAttributionRequestAccess.md) |  | [optional]
**requested_at** | **datetime** | Requested At accepted or returned by this contract. | [optional]
**retry_after_ms** | **int** | Retry After Ms accepted or returned by this contract. | [optional]
**rows** | **int** | Rows accepted or returned by this contract. | [optional]
**status** | **str** | Status accepted or returned by this contract. |
**tags** | [**List[ImageSpatialAttributionTagsInner]**](ImageSpatialAttributionTagsInner.md) | Tags accepted or returned by this contract. | [optional]
**width** | **int** | Width accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.image_spatial_attribution import ImageSpatialAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of ImageSpatialAttribution from a JSON string
image_spatial_attribution_instance = ImageSpatialAttribution.from_json(json)
# print the JSON string representation of the object
print(ImageSpatialAttribution.to_json())

# convert the object into a dict
image_spatial_attribution_dict = image_spatial_attribution_instance.to_dict()
# create an instance of ImageSpatialAttribution from a dict
image_spatial_attribution_from_dict = ImageSpatialAttribution.from_dict(image_spatial_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
