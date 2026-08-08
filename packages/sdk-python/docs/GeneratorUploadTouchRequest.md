# GeneratorUploadTouchRequest

Fields describing generator upload touch request in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paths** | **List[str]** | Ordered paths entries included with this generator upload touch request; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.generator_upload_touch_request import GeneratorUploadTouchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorUploadTouchRequest from a JSON string
generator_upload_touch_request_instance = GeneratorUploadTouchRequest.from_json(json)
# print the JSON string representation of the object
print(GeneratorUploadTouchRequest.to_json())

# convert the object into a dict
generator_upload_touch_request_dict = generator_upload_touch_request_instance.to_dict()
# create an instance of GeneratorUploadTouchRequest from a dict
generator_upload_touch_request_from_dict = GeneratorUploadTouchRequest.from_dict(generator_upload_touch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
