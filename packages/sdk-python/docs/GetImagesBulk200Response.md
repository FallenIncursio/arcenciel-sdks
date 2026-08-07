# GetImagesBulk200Response

200 response for api images bulk info used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**images** | [**List[GetImagesBulk200ResponseImagesInner]**](GetImagesBulk200ResponseImagesInner.md) | Images accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.get_images_bulk200_response import GetImagesBulk200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetImagesBulk200Response from a JSON string
get_images_bulk200_response_instance = GetImagesBulk200Response.from_json(json)
# print the JSON string representation of the object
print(GetImagesBulk200Response.to_json())

# convert the object into a dict
get_images_bulk200_response_dict = get_images_bulk200_response_instance.to_dict()
# create an instance of GetImagesBulk200Response from a dict
get_images_bulk200_response_from_dict = GetImagesBulk200Response.from_dict(get_images_bulk200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
