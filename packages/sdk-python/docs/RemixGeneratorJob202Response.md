# RemixGeneratorJob202Response

202 response for api generator jobs id remix used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**GeneratorJob**](GeneratorJob.md) |  |
**position** | **int** | Position accepted or returned by this contract. |
**queue_eta_ms** | **int** | Queue Eta Ms accepted or returned by this contract. |
**remixed_from** | **str** | Remixed From accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.remix_generator_job202_response import RemixGeneratorJob202Response

# TODO update the JSON string below
json = "{}"
# create an instance of RemixGeneratorJob202Response from a JSON string
remix_generator_job202_response_instance = RemixGeneratorJob202Response.from_json(json)
# print the JSON string representation of the object
print(RemixGeneratorJob202Response.to_json())

# convert the object into a dict
remix_generator_job202_response_dict = remix_generator_job202_response_instance.to_dict()
# create an instance of RemixGeneratorJob202Response from a dict
remix_generator_job202_response_from_dict = RemixGeneratorJob202Response.from_dict(remix_generator_job202_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
