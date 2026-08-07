# SearchArticles200Response

200 response for api articles search used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Article]**](Article.md) | Data accepted or returned by this contract. | [optional]
**limit** | **int** | Limit accepted or returned by this contract. | [optional]
**page** | **int** | Page accepted or returned by this contract. | [optional]
**showcased** | [**List[Article]**](Article.md) | Showcased accepted or returned by this contract. | [optional]
**total_count** | **int** | Total Count accepted or returned by this contract. | [optional]
**total_pages** | **int** | Total Pages accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.search_articles200_response import SearchArticles200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchArticles200Response from a JSON string
search_articles200_response_instance = SearchArticles200Response.from_json(json)
# print the JSON string representation of the object
print(SearchArticles200Response.to_json())

# convert the object into a dict
search_articles200_response_dict = search_articles200_response_instance.to_dict()
# create an instance of SearchArticles200Response from a dict
search_articles200_response_from_dict = SearchArticles200Response.from_dict(search_articles200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
