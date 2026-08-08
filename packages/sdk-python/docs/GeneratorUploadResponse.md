# GeneratorUploadResponse

Fields describing generator upload response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **datetime** | UTC timestamp for the expires at transition of this generator upload response. Format: date-time. |
**mime_type** | **str** | Discriminator identifying the kind of generator upload response; clients should tolerate future values. |
**original_name** | **str** | Human-readable original name for this generator upload response; it is not a stable identifier. |
**path** | **str** | Server-provided path for the path associated with this generator upload response; treat it as opaque. |
**size** | **int** | Size of the associated generator upload response content in the unit indicated by the field name. |
**ttl_seconds** | **int** | Numeric ttl seconds reported for this generator upload response. |

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
