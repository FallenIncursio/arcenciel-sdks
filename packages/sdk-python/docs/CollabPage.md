# CollabPage

Fields describing collab page in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CollabSummary]**](CollabSummary.md) | Ordered data entries included with this collab page; an empty list means none are available. |
**limit** | **int** | Maximum number of records requested or returned in one page of this collab page. Minimum: 1. |
**page** | **int** | One-based result page requested or returned for this collab page. Minimum: 1. |
**total_count** | **int** | Total number of matching records across all pages for this collab page. Minimum: 0. |
**total_pages** | **int** | Total number of pages available at the current page size for this collab page. Minimum: 0. |

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
