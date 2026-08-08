# GeneratorJobListResponse

Fields describing generator job list response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[GeneratorJobListItem]**](GeneratorJobListItem.md) | Ordered jobs entries included with this generator job list response; an empty list means none are available. |
**next_cursor** | **str** | Opaque continuation token for the next page of this generator job list response; absent or null means iteration is complete. |

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
