# CreateGeneratorCompareRunRequestAttentionCouple

Regional prompt payload. API clients must provide explicit `maskPath` values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled accepted or returned by this contract. | [optional]
**global_prompt_weight** | **float** | Global Prompt Weight accepted or returned by this contract. | [optional] [default to 0.01]
**regions** | [**List[CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner]**](CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner.md) | Regions accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_compare_run_request_attention_couple import CreateGeneratorCompareRunRequestAttentionCouple

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorCompareRunRequestAttentionCouple from a JSON string
create_generator_compare_run_request_attention_couple_instance = CreateGeneratorCompareRunRequestAttentionCouple.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorCompareRunRequestAttentionCouple.to_json())

# convert the object into a dict
create_generator_compare_run_request_attention_couple_dict = create_generator_compare_run_request_attention_couple_instance.to_dict()
# create an instance of CreateGeneratorCompareRunRequestAttentionCouple from a dict
create_generator_compare_run_request_attention_couple_from_dict = CreateGeneratorCompareRunRequestAttentionCouple.from_dict(create_generator_compare_run_request_attention_couple_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
