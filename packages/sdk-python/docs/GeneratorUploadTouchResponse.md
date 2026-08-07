# GeneratorUploadTouchResponse

Generator Upload Touch Response used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **datetime** | Expires At accepted or returned by this contract. |
**missing** | **List[str]** | Missing accepted or returned by this contract. |
**touched** | **int** | Touched accepted or returned by this contract. |
**ttl_seconds** | **int** | Ttl Seconds accepted or returned by this contract. |

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
