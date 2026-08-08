# ModelVersionChunkUploadSession

Fields describing model version chunk upload session in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_size** | **int** | Negotiated non-final chunk length in bytes. Clients must use this returned value. |
**created_at** | **datetime** | UTC timestamp when this model version chunk upload session was created. Format: date-time. |
**error** | **str** | Processing failure message when &#x60;status&#x60; is &#x60;error&#x60;; otherwise &#x60;null&#x60;. |
**expires_at** | **datetime** | Fixed expiry set 24 hours after creation; chunk uploads do not extend it. |
**file_size** | **int** | Expected total file length in bytes. |
**model_id** | **int** | Stable identifier for the model; use it in subsequent API calls instead of a display name. Minimum: 1. |
**original_name** | **str** | Path-stripped base name supplied when the session was created. |
**received_bytes** | **int** | Sum of valid staged chunk lengths. |
**received_chunks** | **List[int]** | Zero-based indices of chunks currently stored with the expected byte length. |
**status** | [**ModelVersionChunkUploadStatus**](ModelVersionChunkUploadStatus.md) |  |
**total_chunks** | **int** | &#x60;ceil(fileSize / chunkSize)&#x60;. |
**updated_at** | **datetime** | Time of the latest manifest update. |
**upload_id** | **UUID** | Stable identifier used by all later upload operations. |
**version_id** | **int** | Created model-version ID when &#x60;status&#x60; is &#x60;completed&#x60;; otherwise &#x60;null&#x60;. |

## Example

```python
from arcenciel.generated.models.model_version_chunk_upload_session import ModelVersionChunkUploadSession

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersionChunkUploadSession from a JSON string
model_version_chunk_upload_session_instance = ModelVersionChunkUploadSession.from_json(json)
# print the JSON string representation of the object
print(ModelVersionChunkUploadSession.to_json())

# convert the object into a dict
model_version_chunk_upload_session_dict = model_version_chunk_upload_session_instance.to_dict()
# create an instance of ModelVersionChunkUploadSession from a dict
model_version_chunk_upload_session_from_dict = ModelVersionChunkUploadSession.from_dict(model_version_chunk_upload_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
