# GeneratorTagSuggestionsResponse

Generator Tag Suggestions Response used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | [**List[GeneratorTagSuggestion]**](GeneratorTagSuggestion.md) | Tags accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_tag_suggestions_response import GeneratorTagSuggestionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorTagSuggestionsResponse from a JSON string
generator_tag_suggestions_response_instance = GeneratorTagSuggestionsResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorTagSuggestionsResponse.to_json())

# convert the object into a dict
generator_tag_suggestions_response_dict = generator_tag_suggestions_response_instance.to_dict()
# create an instance of GeneratorTagSuggestionsResponse from a dict
generator_tag_suggestions_response_from_dict = GeneratorTagSuggestionsResponse.from_dict(generator_tag_suggestions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
