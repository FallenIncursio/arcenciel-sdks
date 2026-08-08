# GeneratorOptionsResponseLimits

Structured limits details for this generator options response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer_attention_couple_policies** | **List[str]** | Ordered adetailer attention couple policies entries included with this limits; an empty list means none are available. |
**adetailer_attention_couple_policy_default** | **str** | Adetailer Attention Couple Policy Default associated with this limits; preserve server-returned values when passing them to another operation. Supported values: &#x60;strict-face-bbox&#x60;, &#x60;prefer-face&#x60;, &#x60;passthrough&#x60;. |
**adetailer_detection_order_default** | **str** | Adetailer Detection Order Default associated with this limits; preserve server-returned values when passing them to another operation. |
**adetailer_detection_orders** | **List[str]** | Ordered adetailer detection orders entries included with this limits; an empty list means none are available. |
**adetailer_detectors** | **List[str]** | Ordered adetailer detectors entries included with this limits; an empty list means none are available. |
**adetailer_enabled** | **bool** | Whether adetailer enabled applies to this limits. |
**adetailer_mask_mode_default** | **str** | Adetailer Mask Mode Default associated with this limits; preserve server-returned values when passing them to another operation. Supported values: &#x60;bbox-only&#x60;, &#x60;segmentation&#x60;. |
**adetailer_mask_modes** | **List[str]** | Ordered adetailer mask modes entries included with this limits; an empty list means none are available. |
**adetailer_models** | **List[str]** | Ordered adetailer models entries included with this limits; an empty list means none are available. |
**compare_enabled** | **bool** | Whether compare enabled applies to this limits. |
**max_batch_size** | **int** | Numeric max batch size reported for this limits. |
**max_cfg** | **float** | Numeric max cfg reported for this limits. |
**max_compare_targets** | **int** | Numeric max compare targets reported for this limits. |
**max_pixels** | **int** | Numeric max pixels reported for this limits. |
**max_resolution** | **int** | Numeric max resolution reported for this limits. |
**max_scale_factor** | **float** | Numeric max scale factor reported for this limits. |
**max_steps** | **int** | Numeric max steps reported for this limits. |
**max_upscale_profiles** | **int** | Numeric max upscale profiles reported for this limits. |
**max_weight** | **float** | Numeric max weight reported for this limits. |
**samplers** | **List[str]** | Ordered samplers entries included with this limits; an empty list means none are available. |
**schedulers** | **List[str]** | Ordered schedulers entries included with this limits; an empty list means none are available. |

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
