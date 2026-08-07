# GeneratorUploadResponse

Generator Upload Response used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **datetime** | Expires At accepted or returned by this contract. |
**mime_type** | **str** | Mime Type accepted or returned by this contract. |
**original_name** | **str** | Original Name accepted or returned by this contract. |
**path** | **str** | Path accepted or returned by this contract. |
**size** | **int** | Size accepted or returned by this contract. |
**ttl_seconds** | **int** | Ttl Seconds accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_upload_response import GeneratorUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorUploadResponse from a JSON string
generator_upload_response_instance = GeneratorUploadResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorUploadResponse.to_json())

# convert the object into a dict
generator_upload_response_dict = generator_upload_response_instance.to_dict()
# create an instance of GeneratorUploadResponse from a dict
generator_upload_response_from_dict = GeneratorUploadResponse.from_dict(generator_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
