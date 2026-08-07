# GeneratorOptionsResponse

Generator Options Response used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limits** | [**GeneratorOptionsResponseLimits**](GeneratorOptionsResponseLimits.md) |  |
**model_capabilities** | **Dict[str, List[str]]** | Model Capabilities accepted or returned by this contract. |
**model_details** | [**GeneratorOptionsResponseModelDetails**](GeneratorOptionsResponseModelDetails.md) |  |
**models** | [**GeneratorOptionsResponseModels**](GeneratorOptionsResponseModels.md) |  |
**quota** | [**GeneratorQuotaSnapshot**](GeneratorQuotaSnapshot.md) |  |
**rf_required_notes** | **Dict[str, List[str]]** | Rf Required Notes accepted or returned by this contract. |
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
