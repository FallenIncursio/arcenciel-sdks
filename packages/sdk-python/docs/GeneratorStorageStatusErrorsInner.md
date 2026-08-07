# GeneratorStorageStatusErrorsInner

Errors item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error accepted or returned by this contract. |
**path** | **str** | Path accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_storage_status_errors_inner import GeneratorStorageStatusErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorStorageStatusErrorsInner from a JSON string
generator_storage_status_errors_inner_instance = GeneratorStorageStatusErrorsInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorStorageStatusErrorsInner.to_json())

# convert the object into a dict
generator_storage_status_errors_inner_dict = generator_storage_status_errors_inner_instance.to_dict()
# create an instance of GeneratorStorageStatusErrorsInner from a dict
generator_storage_status_errors_inner_from_dict = GeneratorStorageStatusErrorsInner.from_dict(generator_storage_status_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
