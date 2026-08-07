# DownloadImagesBulkRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[int]** | Ids accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.download_images_bulk_request import DownloadImagesBulkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadImagesBulkRequest from a JSON string
download_images_bulk_request_instance = DownloadImagesBulkRequest.from_json(json)
# print the JSON string representation of the object
print(DownloadImagesBulkRequest.to_json())

# convert the object into a dict
download_images_bulk_request_dict = download_images_bulk_request_instance.to_dict()
# create an instance of DownloadImagesBulkRequest from a dict
download_images_bulk_request_from_dict = DownloadImagesBulkRequest.from_dict(download_images_bulk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
