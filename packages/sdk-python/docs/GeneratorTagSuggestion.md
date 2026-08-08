# GeneratorTagSuggestion

Fields describing generator tag suggestion in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | **List[str]** | Ordered aliases entries included with this generator tag suggestion; an empty list means none are available. |
**count** | **int** | Number of count records represented by this generator tag suggestion. | [optional]
**display** | **str** | Display associated with this generator tag suggestion; preserve server-returned values when passing them to another operation. |
**name** | **str** | Human-readable name for this generator tag suggestion; it is not a stable identifier. |
**type** | **int** | Discriminator identifying the kind of generator tag suggestion; clients should tolerate future values. | [optional]

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
