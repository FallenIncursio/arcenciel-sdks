# SetImagePinRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_id** | **int** | Target model id whose pinned image list should be updated. |
**pin** | **bool** | When true the image is pinned; when false it is unpinned. |

## Example

```python
from arcenciel.generated.models.set_image_pin_request import SetImagePinRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetImagePinRequest from a JSON string
set_image_pin_request_instance = SetImagePinRequest.from_json(json)
# print the JSON string representation of the object
print(SetImagePinRequest.to_json())

# convert the object into a dict
set_image_pin_request_dict = set_image_pin_request_instance.to_dict()
# create an instance of SetImagePinRequest from a dict
set_image_pin_request_from_dict = SetImagePinRequest.from_dict(set_image_pin_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
