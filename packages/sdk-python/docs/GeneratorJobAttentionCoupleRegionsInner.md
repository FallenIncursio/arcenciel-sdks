# GeneratorJobAttentionCoupleRegionsInner

Regions item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mask_path** | **str** | PNG mask path under &#x60;generator/&#x60; with alpha transparency (must include transparent + opaque alpha values). |
**prompt** | **str** | Prompt accepted or returned by this contract. |
**weight** | **float** | Weight accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_job_attention_couple_regions_inner import GeneratorJobAttentionCoupleRegionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobAttentionCoupleRegionsInner from a JSON string
generator_job_attention_couple_regions_inner_instance = GeneratorJobAttentionCoupleRegionsInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobAttentionCoupleRegionsInner.to_json())

# convert the object into a dict
generator_job_attention_couple_regions_inner_dict = generator_job_attention_couple_regions_inner_instance.to_dict()
# create an instance of GeneratorJobAttentionCoupleRegionsInner from a dict
generator_job_attention_couple_regions_inner_from_dict = GeneratorJobAttentionCoupleRegionsInner.from_dict(generator_job_attention_couple_regions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
