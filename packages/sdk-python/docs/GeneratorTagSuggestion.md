# GeneratorTagSuggestion

Generator Tag Suggestion used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | **List[str]** | Aliases accepted or returned by this contract. |
**count** | **int** | Count accepted or returned by this contract. | [optional]
**display** | **str** | Display accepted or returned by this contract. |
**name** | **str** | Name accepted or returned by this contract. |
**type** | **int** | Type accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_tag_suggestion import GeneratorTagSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorTagSuggestion from a JSON string
generator_tag_suggestion_instance = GeneratorTagSuggestion.from_json(json)
# print the JSON string representation of the object
print(GeneratorTagSuggestion.to_json())

# convert the object into a dict
generator_tag_suggestion_dict = generator_tag_suggestion_instance.to_dict()
# create an instance of GeneratorTagSuggestion from a dict
generator_tag_suggestion_from_dict = GeneratorTagSuggestion.from_dict(generator_tag_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
