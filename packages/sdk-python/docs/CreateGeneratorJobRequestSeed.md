# CreateGeneratorJobRequestSeed

Primary seed. `-1` requests randomization. If omitted, the backend also randomizes by default.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from arcenciel.generated.models.create_generator_job_request_seed import CreateGeneratorJobRequestSeed

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequestSeed from a JSON string
create_generator_job_request_seed_instance = CreateGeneratorJobRequestSeed.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequestSeed.to_json())

# convert the object into a dict
create_generator_job_request_seed_dict = create_generator_job_request_seed_instance.to_dict()
# create an instance of CreateGeneratorJobRequestSeed from a dict
create_generator_job_request_seed_from_dict = CreateGeneratorJobRequestSeed.from_dict(create_generator_job_request_seed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
