# GeneratorCompareResponse

Fields describing generator compare response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compare_run** | [**GeneratorCompareRun**](GeneratorCompareRun.md) |  |
**jobs** | [**List[GeneratorJobEnvelope]**](GeneratorJobEnvelope.md) | Ordered jobs entries included with this generator compare response; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.generator_compare_response import GeneratorCompareResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorCompareResponse from a JSON string
generator_compare_response_instance = GeneratorCompareResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorCompareResponse.to_json())

# convert the object into a dict
generator_compare_response_dict = generator_compare_response_instance.to_dict()
# create an instance of GeneratorCompareResponse from a dict
generator_compare_response_from_dict = GeneratorCompareResponse.from_dict(generator_compare_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
