# DeveloperStyleMatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  |
**image** | [**Image**](Image.md) |  | [optional]
**layer_scores** | **Dict[str, float]** |  | [optional]
**score** | **float** |  |

## Example

```python
from arcenciel.generated.models.developer_style_match import DeveloperStyleMatch

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperStyleMatch from a JSON string
developer_style_match_instance = DeveloperStyleMatch.from_json(json)
# print the JSON string representation of the object
print(DeveloperStyleMatch.to_json())

# convert the object into a dict
developer_style_match_dict = developer_style_match_instance.to_dict()
# create an instance of DeveloperStyleMatch from a dict
developer_style_match_from_dict = DeveloperStyleMatch.from_dict(developer_style_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
