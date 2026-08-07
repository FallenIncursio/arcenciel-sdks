# GeneratorPublishResponse

Generator Publish Response used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**already_published** | **List[str]** | Already Published accepted or returned by this contract. |
**already_published_count** | **int** | Already Published Count accepted or returned by this contract. |
**count** | **int** | Count accepted or returned by this contract. |
**images** | **List[Dict[str, object]]** | Images accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_publish_response import GeneratorPublishResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorPublishResponse from a JSON string
generator_publish_response_instance = GeneratorPublishResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorPublishResponse.to_json())

# convert the object into a dict
generator_publish_response_dict = generator_publish_response_instance.to_dict()
# create an instance of GeneratorPublishResponse from a dict
generator_publish_response_from_dict = GeneratorPublishResponse.from_dict(generator_publish_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
