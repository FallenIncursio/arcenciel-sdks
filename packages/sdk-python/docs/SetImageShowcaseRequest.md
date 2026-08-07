# SetImageShowcaseRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**showcased** | **str** | Showcase placement for the image. |

## Example

```python
from arcenciel.generated.models.set_image_showcase_request import SetImageShowcaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetImageShowcaseRequest from a JSON string
set_image_showcase_request_instance = SetImageShowcaseRequest.from_json(json)
# print the JSON string representation of the object
print(SetImageShowcaseRequest.to_json())

# convert the object into a dict
set_image_showcase_request_dict = set_image_showcase_request_instance.to_dict()
# create an instance of SetImageShowcaseRequest from a dict
set_image_showcase_request_from_dict = SetImageShowcaseRequest.from_dict(set_image_showcase_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
