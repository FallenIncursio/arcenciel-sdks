# ImageSpatialAttributionRequestAccess

Structured request access details for this image spatial attribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tier** | **str** | Access Tier associated with this request access; preserve server-returned values when passing them to another operation. Supported values: &#x60;ANONYMOUS&#x60;, &#x60;STANDARD&#x60;, &#x60;SUPPORTER&#x60;, &#x60;STAFF&#x60;. | [optional]
**can_request** | **bool** | Whether can request applies to this request access. | [optional]
**free_limit** | **int** | Numeric free limit reported for this request access. | [optional]
**reason** | **str** | Reason associated with this request access; preserve server-returned values when passing them to another operation. Supported values: &#x60;AUTH_REQUIRED&#x60;, &#x60;FREE_LIMIT_REACHED&#x60;. | [optional]
**remaining** | **int** | Numeric remaining reported for this request access. | [optional]

## Example

```python
from arcenciel.generated.models.image_spatial_attribution_request_access import ImageSpatialAttributionRequestAccess

# TODO update the JSON string below
json = "{}"
# create an instance of ImageSpatialAttributionRequestAccess from a JSON string
image_spatial_attribution_request_access_instance = ImageSpatialAttributionRequestAccess.from_json(json)
# print the JSON string representation of the object
print(ImageSpatialAttributionRequestAccess.to_json())

# convert the object into a dict
image_spatial_attribution_request_access_dict = image_spatial_attribution_request_access_instance.to_dict()
# create an instance of ImageSpatialAttributionRequestAccess from a dict
image_spatial_attribution_request_access_from_dict = ImageSpatialAttributionRequestAccess.from_dict(image_spatial_attribution_request_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
