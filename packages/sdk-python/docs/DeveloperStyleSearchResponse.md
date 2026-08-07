# DeveloperStyleSearchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional]
**matches** | [**List[DeveloperStyleMatch]**](DeveloperStyleMatch.md) |  |
**meta** | [**DeveloperStyleSearchMeta**](DeveloperStyleSearchMeta.md) |  |

## Example

```python
from arcenciel.generated.models.developer_style_search_response import DeveloperStyleSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperStyleSearchResponse from a JSON string
developer_style_search_response_instance = DeveloperStyleSearchResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperStyleSearchResponse.to_json())

# convert the object into a dict
developer_style_search_response_dict = developer_style_search_response_instance.to_dict()
# create an instance of DeveloperStyleSearchResponse from a dict
developer_style_search_response_from_dict = DeveloperStyleSearchResponse.from_dict(developer_style_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
