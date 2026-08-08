# SearchGeneratorLoras200Response

Fields describing 200 response for api generator models loras in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model associated with this 200 response for api generator models loras; preserve server-returned values when passing them to another operation. |
**entries** | [**List[GeneratorModelCatalogEntry]**](GeneratorModelCatalogEntry.md) | Ordered entries entries included with this 200 response for api generator models loras; an empty list means none are available. |
**limit** | **int** | Maximum number of records requested or returned in one page of this 200 response for api generator models loras. |
**query** | **str** | Query associated with this 200 response for api generator models loras; preserve server-returned values when passing them to another operation. |

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
