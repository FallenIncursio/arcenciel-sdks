# GeneratorJobAttentionCouple

Regional prompt payload captured for this job. Supports up to 2 regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled accepted or returned by this contract. | [optional]
**global_prompt_weight** | **float** | Global Prompt Weight accepted or returned by this contract. | [optional] [default to 0.01]
**regions** | [**List[GeneratorJobAttentionCoupleRegionsInner]**](GeneratorJobAttentionCoupleRegionsInner.md) | Regions accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_attention_couple import GeneratorJobAttentionCouple

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobAttentionCouple from a JSON string
generator_job_attention_couple_instance = GeneratorJobAttentionCouple.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobAttentionCouple.to_json())

# convert the object into a dict
generator_job_attention_couple_dict = generator_job_attention_couple_instance.to_dict()
# create an instance of GeneratorJobAttentionCouple from a dict
generator_job_attention_couple_from_dict = GeneratorJobAttentionCouple.from_dict(generator_job_attention_couple_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
