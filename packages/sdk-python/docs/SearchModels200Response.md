# SearchModels200Response

200 response for api models search used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Model]**](Model.md) | Data accepted or returned by this contract. | [optional]
**limit** | **int** | Limit accepted or returned by this contract. | [optional]
**page** | **int** | Page accepted or returned by this contract. | [optional]
**showcased** | [**List[Model]**](Model.md) | Showcased accepted or returned by this contract. | [optional]
**total_count** | **int** | Total Count accepted or returned by this contract. | [optional]
**total_pages** | **int** | Total Pages accepted or returned by this contract. | [optional]

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
