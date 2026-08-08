# GeneratorSafetySnapshot

Fields describing generator safety snapshot in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error associated with this generator safety snapshot; preserve server-returned values when passing them to another operation. | [optional]
**outputs** | **Dict[str, object]** | Structured outputs details for this generator safety snapshot. | [optional]
**reason** | **str** | Reason associated with this generator safety snapshot; preserve server-returned values when passing them to another operation. | [optional]
**status** | **str** | Current lifecycle state of this generator safety snapshot; clients should tolerate future values. Supported values: &#x60;ok&#x60;, &#x60;quarantined&#x60;, &#x60;pending_review&#x60;. | [optional]
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
