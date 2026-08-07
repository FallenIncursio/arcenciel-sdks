# DeveloperComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**DeveloperUserSummary**](DeveloperUserSummary.md) |  | [optional]
**author_id** | **int** |  |
**content** | **str** |  |
**created_at** | **datetime** |  |
**id** | **int** |  |
**is_deleted** | **bool** |  |
**mentions** | **Dict[str, object]** |  | [optional]
**parent_comment_id** | **int** |  | [optional]
**target_id** | **int** |  |
**target_type** | **str** | Resource domain containing the comment. |
**thread_id** | **int** |  | [optional]
**updated_at** | **datetime** |  |

## Example

```python
from arcenciel.generated.models.developer_comment import DeveloperComment

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperComment from a JSON string
developer_comment_instance = DeveloperComment.from_json(json)
# print the JSON string representation of the object
print(DeveloperComment.to_json())

# convert the object into a dict
developer_comment_dict = developer_comment_instance.to_dict()
# create an instance of DeveloperComment from a dict
developer_comment_from_dict = DeveloperComment.from_dict(developer_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
