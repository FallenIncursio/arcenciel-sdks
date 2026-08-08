# GeneratorStorageStatus

Fields describing generator storage status in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[GeneratorStorageStatusErrorsInner]**](GeneratorStorageStatusErrorsInner.md) | Ordered errors entries included with this generator storage status; an empty list means none are available. |
**status** | **str** | Current lifecycle state of this generator storage status; clients should tolerate future values. |
**stored_at** | **int** | Unix epoch timestamp in milliseconds. |

## Example

```python
from arcenciel.generated.models.generator_storage_status import GeneratorStorageStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorStorageStatus from a JSON string
generator_storage_status_instance = GeneratorStorageStatus.from_json(json)
# print the JSON string representation of the object
print(GeneratorStorageStatus.to_json())

# convert the object into a dict
generator_storage_status_dict = generator_storage_status_instance.to_dict()
# create an instance of GeneratorStorageStatus from a dict
generator_storage_status_from_dict = GeneratorStorageStatus.from_dict(generator_storage_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
