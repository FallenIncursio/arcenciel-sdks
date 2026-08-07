# CreateModelVersionChunkUploadRequest

Create Model Version Chunk Upload Request used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about_this_version** | **str** | Optional version notes. | [optional]
**activation_tags** | **str** | Optional comma-separated activation tags. | [optional]
**base_model** | **str** | Optional base-model label. | [optional]
**chunk_size** | **int** | Optional positive preferred chunk length in bytes. The server clamps it to the effective range 8388608–90000000 bytes; the default is 8388608 bytes. Always split the file using the &#x60;chunkSize&#x60; returned in the created session. | [optional] [default to 8388608]
**file_name** | **str** | Original model-file name. Its extension must be allowed for the target model type. |
**file_size** | **int** | Exact total file length in bytes. Maximum: 536870912 bytes (512 MiB). |
**model_id** | **int** | ID of the model that will own the new draft version. |
**supporter_early_access_enabled** | **bool** | Set false to opt the new hosted version out of the 72-hour supporter early-access window. | [optional] [default to True]
**version_name** | **str** | Optional display name for the new version. | [optional]

## Example

```python
from arcenciel.generated.models.create_model_version_chunk_upload_request import CreateModelVersionChunkUploadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateModelVersionChunkUploadRequest from a JSON string
create_model_version_chunk_upload_request_instance = CreateModelVersionChunkUploadRequest.from_json(json)
# print the JSON string representation of the object
print(CreateModelVersionChunkUploadRequest.to_json())

# convert the object into a dict
create_model_version_chunk_upload_request_dict = create_model_version_chunk_upload_request_instance.to_dict()
# create an instance of CreateModelVersionChunkUploadRequest from a dict
create_model_version_chunk_upload_request_from_dict = CreateModelVersionChunkUploadRequest.from_dict(create_model_version_chunk_upload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
