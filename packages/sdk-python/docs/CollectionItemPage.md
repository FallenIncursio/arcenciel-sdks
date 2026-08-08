# CollectionItemPage

Fields describing collection item page in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_offset** | **int** | Numeric next offset reported for this collection item page. Minimum: 0. |
**returned** | **int** | Numeric returned reported for this collection item page. Minimum: 0. |
**total** | **int** | Total number of matching records across all pages for this collection item page. Minimum: 0. |

## Example

```python
from arcenciel.generated.models.collection_item_page import CollectionItemPage

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionItemPage from a JSON string
collection_item_page_instance = CollectionItemPage.from_json(json)
# print the JSON string representation of the object
print(CollectionItemPage.to_json())

# convert the object into a dict
collection_item_page_dict = collection_item_page_instance.to_dict()
# create an instance of CollectionItemPage from a dict
collection_item_page_from_dict = CollectionItemPage.from_dict(collection_item_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
