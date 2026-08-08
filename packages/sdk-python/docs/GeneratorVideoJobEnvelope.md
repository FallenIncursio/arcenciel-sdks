# GeneratorVideoJobEnvelope

Fields describing generator video job envelope in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**GeneratorVideoJob**](GeneratorVideoJob.md) |  |

## Example

```python
from arcenciel.generated.models.generator_video_job_envelope import GeneratorVideoJobEnvelope

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoJobEnvelope from a JSON string
generator_video_job_envelope_instance = GeneratorVideoJobEnvelope.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoJobEnvelope.to_json())

# convert the object into a dict
generator_video_job_envelope_dict = generator_video_job_envelope_instance.to_dict()
# create an instance of GeneratorVideoJobEnvelope from a dict
generator_video_job_envelope_from_dict = GeneratorVideoJobEnvelope.from_dict(generator_video_job_envelope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
