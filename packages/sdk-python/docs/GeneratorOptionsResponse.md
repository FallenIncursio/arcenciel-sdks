# GeneratorOptionsResponse

Fields describing generator options response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limits** | [**GeneratorOptionsResponseLimits**](GeneratorOptionsResponseLimits.md) |  |
**model_capabilities** | **Dict[str, List[str]]** | Structured model capabilities details for this generator options response. |
**model_details** | [**GeneratorOptionsResponseModelDetails**](GeneratorOptionsResponseModelDetails.md) |  |
**models** | [**GeneratorOptionsResponseModels**](GeneratorOptionsResponseModels.md) |  |
**quota** | [**GeneratorQuotaSnapshot**](GeneratorQuotaSnapshot.md) |  |
**rf_required_notes** | **Dict[str, List[str]]** | Structured rf required notes details for this generator options response. |
**settings** | [**GeneratorOptionsResponseSettings**](GeneratorOptionsResponseSettings.md) |  |

## Example

```python
from arcenciel.generated.models.generator_options_response import GeneratorOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponse from a JSON string
generator_options_response_instance = GeneratorOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponse.to_json())

# convert the object into a dict
generator_options_response_dict = generator_options_response_instance.to_dict()
# create an instance of GeneratorOptionsResponse from a dict
generator_options_response_from_dict = GeneratorOptionsResponse.from_dict(generator_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
