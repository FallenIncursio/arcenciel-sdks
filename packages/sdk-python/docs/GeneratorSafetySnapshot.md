# GeneratorSafetySnapshot

Generator Safety Snapshot used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error accepted or returned by this contract. | [optional]
**outputs** | **Dict[str, object]** | Outputs accepted or returned by this contract. | [optional]
**reason** | **str** | Reason accepted or returned by this contract. | [optional]
**status** | **str** | Status accepted or returned by this contract. | [optional]
**updated_at** | **int** | Unix epoch timestamp in milliseconds. | [optional]

## Example

```python
from arcenciel.generated.models.generator_safety_snapshot import GeneratorSafetySnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorSafetySnapshot from a JSON string
generator_safety_snapshot_instance = GeneratorSafetySnapshot.from_json(json)
# print the JSON string representation of the object
print(GeneratorSafetySnapshot.to_json())

# convert the object into a dict
generator_safety_snapshot_dict = generator_safety_snapshot_instance.to_dict()
# create an instance of GeneratorSafetySnapshot from a dict
generator_safety_snapshot_from_dict = GeneratorSafetySnapshot.from_dict(generator_safety_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
