# CreateGeneratorJobRequestAttentionCoupleRegionsInner

Regions item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mask_path** | **str** | Relative staging path (&#x60;generator/...&#x60;) to a PNG mask with an alpha channel. The alpha channel must include both transparent and opaque pixels. RGB-only masks are rejected.  |
**prompt** | **str** | Prompt accepted or returned by this contract. |
**weight** | **float** | Weight accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_job_request_attention_couple_regions_inner import CreateGeneratorJobRequestAttentionCoupleRegionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequestAttentionCoupleRegionsInner from a JSON string
create_generator_job_request_attention_couple_regions_inner_instance = CreateGeneratorJobRequestAttentionCoupleRegionsInner.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequestAttentionCoupleRegionsInner.to_json())

# convert the object into a dict
create_generator_job_request_attention_couple_regions_inner_dict = create_generator_job_request_attention_couple_regions_inner_instance.to_dict()
# create an instance of CreateGeneratorJobRequestAttentionCoupleRegionsInner from a dict
create_generator_job_request_attention_couple_regions_inner_from_dict = CreateGeneratorJobRequestAttentionCoupleRegionsInner.from_dict(create_generator_job_request_attention_couple_regions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
