# CollectionPage

Fields describing collection page in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CollectionSummary]**](CollectionSummary.md) | Ordered data entries included with this collection page; an empty list means none are available. |
**limit** | **int** | Maximum number of records requested or returned in one page of this collection page. Minimum: 1. |
**page** | **int** | One-based result page requested or returned for this collection page. Minimum: 1. |
**total_count** | **int** | Total number of matching records across all pages for this collection page. Minimum: 0. |
**total_pages** | **int** | Total number of pages available at the current page size for this collection page. Minimum: 0. |

## Example

```python
from arcenciel.generated.models.collection_page import CollectionPage

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionPage from a JSON string
collection_page_instance = CollectionPage.from_json(json)
# print the JSON string representation of the object
print(CollectionPage.to_json())

# convert the object into a dict
collection_page_dict = collection_page_instance.to_dict()
# create an instance of CollectionPage from a dict
collection_page_from_dict = CollectionPage.from_dict(collection_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
