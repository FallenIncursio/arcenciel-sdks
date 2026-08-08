# SearchGeneratorCheckpoints200Response

Fields describing 200 response for api generator models checkpoints in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model associated with this 200 response for api generator models checkpoints; preserve server-returned values when passing them to another operation. |
**entries** | [**List[GeneratorModelCatalogEntry]**](GeneratorModelCatalogEntry.md) | Ordered entries entries included with this 200 response for api generator models checkpoints; an empty list means none are available. |
**limit** | **int** | Maximum number of records requested or returned in one page of this 200 response for api generator models checkpoints. |
**query** | **str** | Query associated with this 200 response for api generator models checkpoints; preserve server-returned values when passing them to another operation. |

## Example

```python
from arcenciel.generated.models.search_generator_checkpoints200_response import SearchGeneratorCheckpoints200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGeneratorCheckpoints200Response from a JSON string
search_generator_checkpoints200_response_instance = SearchGeneratorCheckpoints200Response.from_json(json)
# print the JSON string representation of the object
print(SearchGeneratorCheckpoints200Response.to_json())

# convert the object into a dict
search_generator_checkpoints200_response_dict = search_generator_checkpoints200_response_instance.to_dict()
# create an instance of SearchGeneratorCheckpoints200Response from a dict
search_generator_checkpoints200_response_from_dict = SearchGeneratorCheckpoints200Response.from_dict(search_generator_checkpoints200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
