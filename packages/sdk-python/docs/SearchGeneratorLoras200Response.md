# SearchGeneratorLoras200Response

200 response for api generator models loras used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model accepted or returned by this contract. |
**entries** | [**List[GeneratorModelCatalogEntry]**](GeneratorModelCatalogEntry.md) | Entries accepted or returned by this contract. |
**limit** | **int** | Limit accepted or returned by this contract. |
**query** | **str** | Query accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.search_generator_loras200_response import SearchGeneratorLoras200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGeneratorLoras200Response from a JSON string
search_generator_loras200_response_instance = SearchGeneratorLoras200Response.from_json(json)
# print the JSON string representation of the object
print(SearchGeneratorLoras200Response.to_json())

# convert the object into a dict
search_generator_loras200_response_dict = search_generator_loras200_response_instance.to_dict()
# create an instance of SearchGeneratorLoras200Response from a dict
search_generator_loras200_response_from_dict = SearchGeneratorLoras200Response.from_dict(search_generator_loras200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
