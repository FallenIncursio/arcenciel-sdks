# CollectionPage

Collection Page used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CollectionSummary]**](CollectionSummary.md) | Data accepted or returned by this contract. |
**limit** | **int** | Limit accepted or returned by this contract. |
**page** | **int** | Page accepted or returned by this contract. |
**total_count** | **int** | Total Count accepted or returned by this contract. |
**total_pages** | **int** | Total Pages accepted or returned by this contract. |

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
