# RemixGeneratorJob202Response

202 response for api generator jobs id remix value documented for this operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**GeneratorJob**](GeneratorJob.md) |  |
**position** | **int** | Numeric position reported for this generator job envelope. |
**queue_eta_ms** | **int** | Numeric queue eta ms reported for this generator job envelope. |
**remixed_from** | **str** | Remixed From associated with this 202 response for api generator jobs id remix; preserve server-returned values when passing them to another operation. |

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
