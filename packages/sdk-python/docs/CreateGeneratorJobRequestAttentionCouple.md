# CreateGeneratorJobRequestAttentionCouple

Regional prompt payload (max 2 regions). UI clients typically derive prompts from `[R1]/[R2]` or `left || right` syntax and auto-generate masks. The parser also accepts exactly two non-empty prompt lines (`line1\\nline2`) as region prompts. API clients must still provide explicit `maskPath` values. ADetailer normalization during regional prompts is controlled by `adetailer.attentionCouplePolicy`. Default policy is `strict-face-bbox` for lower cross-region face bleed. During regional prompts, backend keeps ADetailer split-wildcard prompt modes (`[SEP]`) with normalized wildcard ordering. For `adetailer.positivePrompt`, backend canonicalizes `left || right`, two-line splits (`left\\nright`), and `[R1] ... [R2] ...` into `left [SEP] right`. If `adetailer.positivePrompt` is omitted, backend may derive a split detailer prompt from the region prompts. In strict mode, backend forwards regional masks to ADetailer for per-region crop clamping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether enabled applies to this attention couple. | [optional]
**global_prompt_weight** | **float** | Numeric global prompt weight reported for this attention couple. Minimum: 0.01. Maximum: 1. | [optional] [default to 0.01]
**regions** | [**List[CreateGeneratorJobRequestAttentionCoupleRegionsInner]**](CreateGeneratorJobRequestAttentionCoupleRegionsInner.md) | Ordered regions entries included with this attention couple; an empty list means none are available. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_job_request_attention_couple import CreateGeneratorJobRequestAttentionCouple

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequestAttentionCouple from a JSON string
create_generator_job_request_attention_couple_instance = CreateGeneratorJobRequestAttentionCouple.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequestAttentionCouple.to_json())

# convert the object into a dict
create_generator_job_request_attention_couple_dict = create_generator_job_request_attention_couple_instance.to_dict()
# create an instance of CreateGeneratorJobRequestAttentionCouple from a dict
create_generator_job_request_attention_couple_from_dict = CreateGeneratorJobRequestAttentionCouple.from_dict(create_generator_job_request_attention_couple_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
