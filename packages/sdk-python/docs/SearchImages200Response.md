# SearchImages200Response

Fields describing 200 response for api images search in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Image]**](Image.md) | Ordered data entries included with this 200 response for api images search; an empty list means none are available. | [optional]
**has_more** | **bool** | Whether another page of this 200 response for api images search is available after the current result. | [optional]
**limit** | **int** | Maximum number of records requested or returned in one page of this 200 response for api images search. | [optional]
**next_cursor** | **str** | Opaque continuation token for the next page of this 200 response for api images search; absent or null means iteration is complete. | [optional]
**page** | **int** | One-based result page requested or returned for this 200 response for api images search. | [optional]
**showcased** | [**List[Image]**](Image.md) | Ordered showcased entries included with this 200 response for api images search; an empty list means none are available. | [optional]
**total_count** | **int** | Total number of matching records across all pages for this 200 response for api images search. | [optional]
**total_pages** | **int** | Total number of pages available at the current page size for this 200 response for api images search. | [optional]

## Example

```python
from arcenciel.generated.models.search_images200_response import SearchImages200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchImages200Response from a JSON string
search_images200_response_instance = SearchImages200Response.from_json(json)
# print the JSON string representation of the object
print(SearchImages200Response.to_json())

# convert the object into a dict
search_images200_response_dict = search_images200_response_instance.to_dict()
# create an instance of SearchImages200Response from a dict
search_images200_response_from_dict = SearchImages200Response.from_dict(search_images200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
