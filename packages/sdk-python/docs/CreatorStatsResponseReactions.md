# CreatorStatsResponseReactions

Structured reactions details for this creator stats response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dislikes** | **int** | Numeric dislikes reported for this reactions. |
**hearts** | **int** | Numeric hearts reported for this reactions. |
**likes** | **int** | Numeric likes reported for this reactions. |

## Example

```python
from arcenciel.generated.models.creator_stats_response_reactions import CreatorStatsResponseReactions

# TODO update the JSON string below
json = "{}"
# create an instance of CreatorStatsResponseReactions from a JSON string
creator_stats_response_reactions_instance = CreatorStatsResponseReactions.from_json(json)
# print the JSON string representation of the object
print(CreatorStatsResponseReactions.to_json())

# convert the object into a dict
creator_stats_response_reactions_dict = creator_stats_response_reactions_instance.to_dict()
# create an instance of CreatorStatsResponseReactions from a dict
creator_stats_response_reactions_from_dict = CreatorStatsResponseReactions.from_dict(creator_stats_response_reactions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
