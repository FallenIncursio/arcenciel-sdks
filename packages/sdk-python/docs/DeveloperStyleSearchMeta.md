# DeveloperStyleSearchMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_layers** | **List[str]** |  | [optional]
**backend_key** | **str** |  | [optional]
**default_layers** | **List[str]** |  | [optional]
**disabled** | **bool** |  | [optional]
**elapsed_seconds** | **float** |  | [optional]
**inverted** | **bool** |  |
**page** | **int** |  |
**page_size** | **int** |  |
**queried_count** | **int** |  | [optional]
**requested_layers** | **List[str]** |  | [optional]
**service_healthy** | **bool** |  |
**skipped_count** | **int** |  | [optional]
**source_type** | **str** |  | [optional]
**total_matches** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_style_search_meta import DeveloperStyleSearchMeta

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperStyleSearchMeta from a JSON string
developer_style_search_meta_instance = DeveloperStyleSearchMeta.from_json(json)
# print the JSON string representation of the object
print(DeveloperStyleSearchMeta.to_json())

# convert the object into a dict
developer_style_search_meta_dict = developer_style_search_meta_instance.to_dict()
# create an instance of DeveloperStyleSearchMeta from a dict
developer_style_search_meta_from_dict = DeveloperStyleSearchMeta.from_dict(developer_style_search_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
