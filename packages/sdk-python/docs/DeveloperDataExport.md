# DeveloperDataExport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit** | **List[object]** |  |
**comments** | [**List[DeveloperComment]**](DeveloperComment.md) |  |
**profile** | [**SelfProfile**](SelfProfile.md) |  |
**uploads** | [**Uploads**](Uploads.md) |  |

## Example

```python
from arcenciel.generated.models.developer_data_export import DeveloperDataExport

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperDataExport from a JSON string
developer_data_export_instance = DeveloperDataExport.from_json(json)
# print the JSON string representation of the object
print(DeveloperDataExport.to_json())

# convert the object into a dict
developer_data_export_dict = developer_data_export_instance.to_dict()
# create an instance of DeveloperDataExport from a dict
developer_data_export_from_dict = DeveloperDataExport.from_dict(developer_data_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
