# GeneratorQuotaCounter

Structured daily details for this quota.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Maximum number of records requested or returned in one page of this daily. |
**remaining** | **int** | Numeric remaining reported for this daily. |
**used** | **int** | Numeric used reported for this daily. |

## Example

```python
from arcenciel.generated.models.generator_quota_counter import GeneratorQuotaCounter

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorQuotaCounter from a JSON string
generator_quota_counter_instance = GeneratorQuotaCounter.from_json(json)
# print the JSON string representation of the object
print(GeneratorQuotaCounter.to_json())

# convert the object into a dict
generator_quota_counter_dict = generator_quota_counter_instance.to_dict()
# create an instance of GeneratorQuotaCounter from a dict
generator_quota_counter_from_dict = GeneratorQuotaCounter.from_dict(generator_quota_counter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
