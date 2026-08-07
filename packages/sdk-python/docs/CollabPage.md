# CollabPage

Collab Page used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CollabSummary]**](CollabSummary.md) | Data accepted or returned by this contract. |
**limit** | **int** | Limit accepted or returned by this contract. |
**page** | **int** | Page accepted or returned by this contract. |
**total_count** | **int** | Total Count accepted or returned by this contract. |
**total_pages** | **int** | Total Pages accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.collab_page import CollabPage

# TODO update the JSON string below
json = "{}"
# create an instance of CollabPage from a JSON string
collab_page_instance = CollabPage.from_json(json)
# print the JSON string representation of the object
print(CollabPage.to_json())

# convert the object into a dict
collab_page_dict = collab_page_instance.to_dict()
# create an instance of CollabPage from a dict
collab_page_from_dict = CollabPage.from_dict(collab_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
