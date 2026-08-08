# ModelVersionChunkUploadError

Fields describing model version chunk upload error in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Human-readable error message. |
**error_code** | **str** | Stable machine-readable code when the error has one. | [optional]
**retryable** | **bool** | Whether retrying the idempotent operation is safe and expected. | [optional]

## Example

```python
from arcenciel.generated.models.model_version_chunk_upload_error import ModelVersionChunkUploadError

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionChunkUploadError from a JSON string
model_version_chunk_upload_error_instance = ModelVersionChunkUploadError.from_json(json)
# print the JSON string representation of the object
print(ModelVersionChunkUploadError.to_json())

# convert the object into a dict
model_version_chunk_upload_error_dict = model_version_chunk_upload_error_instance.to_dict()
# create an instance of ModelVersionChunkUploadError from a dict
model_version_chunk_upload_error_from_dict = ModelVersionChunkUploadError.from_dict(model_version_chunk_upload_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
