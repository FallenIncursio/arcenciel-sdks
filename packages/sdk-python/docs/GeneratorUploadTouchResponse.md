# GeneratorUploadTouchResponse

Fields describing generator upload touch response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **datetime** | UTC timestamp for the expires at transition of this generator upload touch response. Format: date-time. |
**missing** | **List[str]** | Ordered missing entries included with this generator upload touch response; an empty list means none are available. |
**touched** | **int** | Numeric touched reported for this generator upload touch response. Minimum: 0. |
**ttl_seconds** | **int** | Numeric ttl seconds reported for this generator upload touch response. |

## Example

```python
from arcenciel.generated.models.generator_upload_touch_response import GeneratorUploadTouchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorUploadTouchResponse from a JSON string
generator_upload_touch_response_instance = GeneratorUploadTouchResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorUploadTouchResponse.to_json())

# convert the object into a dict
generator_upload_touch_response_dict = generator_upload_touch_response_instance.to_dict()
# create an instance of GeneratorUploadTouchResponse from a dict
generator_upload_touch_response_from_dict = GeneratorUploadTouchResponse.from_dict(generator_upload_touch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
