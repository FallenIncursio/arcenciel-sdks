# ReorderModelVersionImagesRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_ids** | **List[int]** | Array of image IDs representing the new order. | [optional]

## Example

```python
from arcenciel.generated.models.reorder_model_version_images_request import ReorderModelVersionImagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReorderModelVersionImagesRequest from a JSON string
reorder_model_version_images_request_instance = ReorderModelVersionImagesRequest.from_json(json)
# print the JSON string representation of the object
print(ReorderModelVersionImagesRequest.to_json())

# convert the object into a dict
reorder_model_version_images_request_dict = reorder_model_version_images_request_instance.to_dict()
# create an instance of ReorderModelVersionImagesRequest from a dict
reorder_model_version_images_request_from_dict = ReorderModelVersionImagesRequest.from_dict(reorder_model_version_images_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
