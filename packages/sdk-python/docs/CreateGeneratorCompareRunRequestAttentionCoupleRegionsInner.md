# CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner

Structured regions item details for this regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mask_path** | **str** | Relative staging path (&#x60;generator/...&#x60;) to a PNG mask with an alpha channel. |
**prompt** | **str** | Prompt text associated with generation of this regions item; availability depends on visibility and privacy rules. |
**weight** | **float** | Numeric weight reported for this regions item. Minimum: 0.01. Maximum: 1. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_compare_run_request_attention_couple_regions_inner import CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner from a JSON string
create_generator_compare_run_request_attention_couple_regions_inner_instance = CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner.to_json())

# convert the object into a dict
create_generator_compare_run_request_attention_couple_regions_inner_dict = create_generator_compare_run_request_attention_couple_regions_inner_instance.to_dict()
# create an instance of CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner from a dict
create_generator_compare_run_request_attention_couple_regions_inner_from_dict = CreateGeneratorCompareRunRequestAttentionCoupleRegionsInner.from_dict(create_generator_compare_run_request_attention_couple_regions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
