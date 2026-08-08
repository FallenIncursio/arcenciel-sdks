# ImageSpatialAttribution

Fields describing image spatial attribution in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm_version** | **str** | Algorithm Version associated with this image spatial attribution; preserve server-returned values when passing them to another operation. | [optional]
**atlas_url** | **str** | URL for the atlas url associated with this image spatial attribution; do not persist temporary signed query parameters. | [optional]
**columns** | **int** | Numeric columns reported for this image spatial attribution. | [optional]
**completed_at** | **datetime** | UTC timestamp for the completed at transition of this image spatial attribution. Format: date-time. | [optional]
**device** | **str** | Device associated with this image spatial attribution; preserve server-returned values when passing them to another operation. Supported values: &#x60;cuda&#x60;, &#x60;cpu&#x60;, &#x60;cpu-fallback&#x60;. | [optional]
**duration_ms** | **float** | Numeric duration ms reported for this image spatial attribution. | [optional]
**height** | **int** | Numeric height reported for this image spatial attribution. | [optional]
**map_size** | **int** | Numeric map size reported for this image spatial attribution. | [optional]
**message** | **str** | Message associated with this image spatial attribution; preserve server-returned values when passing them to another operation. | [optional]
**model_version** | **str** | Model Version associated with this image spatial attribution; preserve server-returned values when passing them to another operation. | [optional]
**request_access** | [**ImageSpatialAttributionRequestAccess**](ImageSpatialAttributionRequestAccess.md) |  | [optional]
**requested_at** | **datetime** | UTC timestamp for the requested at transition of this image spatial attribution. Format: date-time. | [optional]
**retry_after_ms** | **int** | Numeric retry after ms reported for this image spatial attribution. Minimum: 0. | [optional]
**rows** | **int** | Numeric rows reported for this image spatial attribution. | [optional]
**status** | **str** | Current lifecycle state of this image spatial attribution; clients should tolerate future values. Supported values: &#x60;disabled&#x60;, &#x60;locked&#x60;, &#x60;unavailable&#x60;, &#x60;queued&#x60;, &#x60;processing&#x60;, &#x60;ready&#x60;, &#x60;failed&#x60;. |
**tags** | [**List[ImageSpatialAttributionTagsInner]**](ImageSpatialAttributionTagsInner.md) | Ordered tags entries included with this image spatial attribution; an empty list means none are available. | [optional]
**width** | **int** | Numeric width reported for this image spatial attribution. | [optional]

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
