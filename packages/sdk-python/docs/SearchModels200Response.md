# SearchModels200Response

Fields describing 200 response for api models search in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Model]**](Model.md) | Ordered data entries included with this 200 response for api models search; an empty list means none are available. | [optional]
**limit** | **int** | Maximum number of records requested or returned in one page of this 200 response for api models search. | [optional]
**page** | **int** | One-based result page requested or returned for this 200 response for api models search. | [optional]
**showcased** | [**List[Model]**](Model.md) | Ordered showcased entries included with this 200 response for api models search; an empty list means none are available. | [optional]
**total_count** | **int** | Total number of matching records across all pages for this 200 response for api models search. | [optional]
**total_pages** | **int** | Total number of pages available at the current page size for this 200 response for api models search. | [optional]

## Example

```python
from arcenciel.generated.models.search_models200_response import SearchModels200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchModels200Response from a JSON string
search_models200_response_instance = SearchModels200Response.from_json(json)
# print the JSON string representation of the object
print(SearchModels200Response.to_json())

# convert the object into a dict
search_models200_response_dict = search_models200_response_instance.to_dict()
# create an instance of SearchModels200Response from a dict
search_models200_response_from_dict = SearchModels200Response.from_dict(search_models200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
