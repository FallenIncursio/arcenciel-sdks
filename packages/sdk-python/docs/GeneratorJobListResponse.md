# GeneratorJobListResponse

Generator Job List Response used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[GeneratorJobListItem]**](GeneratorJobListItem.md) | Jobs accepted or returned by this contract. |
**next_cursor** | **str** | Next Cursor accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_job_list_response import GeneratorJobListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobListResponse from a JSON string
generator_job_list_response_instance = GeneratorJobListResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobListResponse.to_json())

# convert the object into a dict
generator_job_list_response_dict = generator_job_list_response_instance.to_dict()
# create an instance of GeneratorJobListResponse from a dict
generator_job_list_response_from_dict = GeneratorJobListResponse.from_dict(generator_job_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
