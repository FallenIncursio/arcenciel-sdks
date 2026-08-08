# GeneratorPublishResponse

Fields describing generator publish response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**already_published** | **List[str]** | Ordered already published entries included with this generator publish response; an empty list means none are available. |
**already_published_count** | **int** | Number of already published records represented by this generator publish response. |
**count** | **int** | Number of count records represented by this generator publish response. |
**images** | **List[Dict[str, object]]** | Ordered images entries included with this generator publish response; an empty list means none are available. |

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
