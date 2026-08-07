# GeneratorOptionsResponseLimits

Limits accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer_attention_couple_policies** | **List[str]** | Adetailer Attention Couple Policies accepted or returned by this contract. |
**adetailer_attention_couple_policy_default** | **str** | Adetailer Attention Couple Policy Default accepted or returned by this contract. |
**adetailer_detection_order_default** | **str** | Adetailer Detection Order Default accepted or returned by this contract. |
**adetailer_detection_orders** | **List[str]** | Adetailer Detection Orders accepted or returned by this contract. |
**adetailer_detectors** | **List[str]** | Adetailer Detectors accepted or returned by this contract. |
**adetailer_enabled** | **bool** | Adetailer Enabled accepted or returned by this contract. |
**adetailer_mask_mode_default** | **str** | Adetailer Mask Mode Default accepted or returned by this contract. |
**adetailer_mask_modes** | **List[str]** | Adetailer Mask Modes accepted or returned by this contract. |
**adetailer_models** | **List[str]** | Adetailer Models accepted or returned by this contract. |
**compare_enabled** | **bool** | Compare Enabled accepted or returned by this contract. |
**max_batch_size** | **int** | Max Batch Size accepted or returned by this contract. |
**max_cfg** | **float** | Max Cfg accepted or returned by this contract. |
**max_compare_targets** | **int** | Max Compare Targets accepted or returned by this contract. |
**max_pixels** | **int** | Max Pixels accepted or returned by this contract. |
**max_resolution** | **int** | Max Resolution accepted or returned by this contract. |
**max_scale_factor** | **float** | Max Scale Factor accepted or returned by this contract. |
**max_steps** | **int** | Max Steps accepted or returned by this contract. |
**max_upscale_profiles** | **int** | Max Upscale Profiles accepted or returned by this contract. |
**max_weight** | **float** | Max Weight accepted or returned by this contract. |
**samplers** | **List[str]** | Samplers accepted or returned by this contract. |
**schedulers** | **List[str]** | Schedulers accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_options_response_limits import GeneratorOptionsResponseLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorOptionsResponseLimits from a JSON string
generator_options_response_limits_instance = GeneratorOptionsResponseLimits.from_json(json)
# print the JSON string representation of the object
print(GeneratorOptionsResponseLimits.to_json())

# convert the object into a dict
generator_options_response_limits_dict = generator_options_response_limits_instance.to_dict()
# create an instance of GeneratorOptionsResponseLimits from a dict
generator_options_response_limits_from_dict = GeneratorOptionsResponseLimits.from_dict(generator_options_response_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
