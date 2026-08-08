# DownloadGeneratorJobsBulkRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | Ordered ids entries included with this request payload; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.download_generator_jobs_bulk_request import DownloadGeneratorJobsBulkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadGeneratorJobsBulkRequest from a JSON string
download_generator_jobs_bulk_request_instance = DownloadGeneratorJobsBulkRequest.from_json(json)
# print the JSON string representation of the object
print(DownloadGeneratorJobsBulkRequest.to_json())

# convert the object into a dict
download_generator_jobs_bulk_request_dict = download_generator_jobs_bulk_request_instance.to_dict()
# create an instance of DownloadGeneratorJobsBulkRequest from a dict
download_generator_jobs_bulk_request_from_dict = DownloadGeneratorJobsBulkRequest.from_dict(download_generator_jobs_bulk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
