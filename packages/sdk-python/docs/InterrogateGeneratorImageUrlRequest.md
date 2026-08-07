# InterrogateGeneratorImageUrlRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_url** | **str** | Image Url accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.interrogate_generator_image_url_request import InterrogateGeneratorImageUrlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InterrogateGeneratorImageUrlRequest from a JSON string
interrogate_generator_image_url_request_instance = InterrogateGeneratorImageUrlRequest.from_json(json)
# print the JSON string representation of the object
print(InterrogateGeneratorImageUrlRequest.to_json())

# convert the object into a dict
interrogate_generator_image_url_request_dict = interrogate_generator_image_url_request_instance.to_dict()
# create an instance of InterrogateGeneratorImageUrlRequest from a dict
interrogate_generator_image_url_request_from_dict = InterrogateGeneratorImageUrlRequest.from_dict(interrogate_generator_image_url_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
