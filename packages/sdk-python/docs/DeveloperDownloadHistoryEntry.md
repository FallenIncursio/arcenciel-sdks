# DeveloperDownloadHistoryEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  |
**id** | **int** |  |
**user_id** | **int** |  |
**version** | [**Version**](Version.md) |  | [optional]
**version_id** | **int** |  |
**via_link** | **bool** |  |

## Example

```python
from arcenciel.generated.models.developer_download_history_entry import DeveloperDownloadHistoryEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperDownloadHistoryEntry from a JSON string
developer_download_history_entry_instance = DeveloperDownloadHistoryEntry.from_json(json)
# print the JSON string representation of the object
print(DeveloperDownloadHistoryEntry.to_json())

# convert the object into a dict
developer_download_history_entry_dict = developer_download_history_entry_instance.to_dict()
# create an instance of DeveloperDownloadHistoryEntry from a dict
developer_download_history_entry_from_dict = DeveloperDownloadHistoryEntry.from_dict(developer_download_history_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
