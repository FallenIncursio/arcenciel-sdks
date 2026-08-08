# GeneratorJobRemixRequestAttentionCouple

Regional prompt payload. Supports up to 2 regions. Accepted prompt split forms include `left || right` and exactly two non-empty lines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether enabled applies to this attention couple. | [optional]
**global_prompt_weight** | **float** | Optional compatibility/base blend weight. | [optional] [default to 0.01]
**regions** | [**List[GeneratorJobRemixRequestAttentionCoupleRegionsInner]**](GeneratorJobRemixRequestAttentionCoupleRegionsInner.md) | Ordered regions entries included with this attention couple; an empty list means none are available. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_remix_request_attention_couple import GeneratorJobRemixRequestAttentionCouple

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobRemixRequestAttentionCouple from a JSON string
generator_job_remix_request_attention_couple_instance = GeneratorJobRemixRequestAttentionCouple.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobRemixRequestAttentionCouple.to_json())

# convert the object into a dict
generator_job_remix_request_attention_couple_dict = generator_job_remix_request_attention_couple_instance.to_dict()
# create an instance of GeneratorJobRemixRequestAttentionCouple from a dict
generator_job_remix_request_attention_couple_from_dict = GeneratorJobRemixRequestAttentionCouple.from_dict(generator_job_remix_request_attention_couple_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
