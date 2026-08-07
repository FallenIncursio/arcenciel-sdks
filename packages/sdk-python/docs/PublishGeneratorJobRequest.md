# PublishGeneratorJobRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outputs** | **List[str]** | Optional subset of output relatives to publish (for example &#x60;generator/job-id/file.png&#x60;). Output indices are not accepted here.  | [optional]

## Example

```python
from arcenciel.generated.models.publish_generator_job_request import PublishGeneratorJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PublishGeneratorJobRequest from a JSON string
publish_generator_job_request_instance = PublishGeneratorJobRequest.from_json(json)
# print the JSON string representation of the object
print(PublishGeneratorJobRequest.to_json())

# convert the object into a dict
publish_generator_job_request_dict = publish_generator_job_request_instance.to_dict()
# create an instance of PublishGeneratorJobRequest from a dict
publish_generator_job_request_from_dict = PublishGeneratorJobRequest.from_dict(publish_generator_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
