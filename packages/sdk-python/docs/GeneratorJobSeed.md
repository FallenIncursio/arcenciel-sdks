# GeneratorJobSeed

Seed associated with this generator job; preserve server-returned values when passing them to another operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from arcenciel.generated.models.generator_job_seed import GeneratorJobSeed

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobSeed from a JSON string
generator_job_seed_instance = GeneratorJobSeed.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobSeed.to_json())

# convert the object into a dict
generator_job_seed_dict = generator_job_seed_instance.to_dict()
# create an instance of GeneratorJobSeed from a dict
generator_job_seed_from_dict = GeneratorJobSeed.from_dict(generator_job_seed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
