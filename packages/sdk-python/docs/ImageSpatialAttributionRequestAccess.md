# ImageSpatialAttributionRequestAccess

Request Access accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tier** | **str** | Access Tier accepted or returned by this contract. | [optional]
**can_request** | **bool** | Can Request accepted or returned by this contract. | [optional]
**free_limit** | **int** | Free Limit accepted or returned by this contract. | [optional]
**reason** | **str** | Reason accepted or returned by this contract. | [optional]
**remaining** | **int** | Remaining accepted or returned by this contract. | [optional]

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
