# GeneratorAdetailerConfig

ADetailer configuration for post-processing passes. Allowed detectors/orders are exposed by `GET /api/generator/options` under `limits`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer_attention_couple_policy** | **str** | Legacy alias for &#x60;attentionCouplePolicy&#x60;. | [optional]
**adetailer_denoise** | **float** | Legacy alias for &#x60;denoise&#x60;. | [optional]
**adetailer_mask_mode** | **str** | Legacy alias for &#x60;maskMode&#x60;. | [optional]
**adetailer_timing** | **str** | Legacy alias for &#x60;timing&#x60;. | [optional]
**attention_couple_policy** | **str** | Controls how ADetailer is normalized when regional prompts (&#x60;attentionCouple&#x60;) are enabled. &#x60;strict-face-bbox&#x60;: force/normalize face detector routing and strict regional crop clamping. &#x60;prefer-face&#x60;: prefer/swap to a face detector when needed, but keep user mask knobs. &#x60;passthrough&#x60;: keep submitted ADetailer settings unchanged.  | [optional] [default to 'strict-face-bbox']
**confidence** | **float** | Confidence accepted or returned by this contract. | [optional]
**denoise** | **float** | ADetailer denoise strength. If omitted, backend defaults to &#x60;0.5&#x60;. For regional prompts, strict mode applies regional-mask crop clamping instead of denoise auto-capping.  | [optional] [default to 0.5]
**detection_order** | **str** | Use one of &#x60;limits.adetailerDetectionOrders&#x60;. | [optional]
**detector** | **str** | Detector accepted or returned by this contract. | [optional]
**dilate** | **float** | Mask dilation in pixels for the ADetailer pass. During regional prompts with strict policy this value is still honored (not force-overridden).  | [optional] [default to 4]
**drop_size** | **int** | Minimum bbox edge size to keep before detailing. The runtime still accepts the deprecated &#x60;drop_size&#x60; spelling, but generated clients use this canonical field. | [optional]
**enabled** | **bool** | Enabled accepted or returned by this contract. | [optional] [default to True]
**iou** | **float** | Iou accepted or returned by this contract. | [optional]
**mask_blur** | **float** | Mask blur radius in pixels for the ADetailer pass. During regional prompts with strict policy this value is still honored (not force-overridden).  | [optional] [default to 4]
**mask_mode** | **str** | ADetailer mask behavior. &#x60;bbox-only&#x60; uses detector boxes directly (stronger edits). &#x60;segmentation&#x60; intersects detector boxes with segmentation masks, with automatic bbox fallback when masks are empty/tiny. During regional prompts with strict policy, backend still forwards region masks/crop clamps but preserves the submitted mask mode unless you explicitly pick &#x60;bbox-only&#x60;.  | [optional] [default to 'segmentation']
**max_detections** | **int** | Max Detections accepted or returned by this contract. | [optional] [default to 2]
**model** | **str** | Model accepted or returned by this contract. | [optional]
**negative_prompt** | **str** | Negative Prompt accepted or returned by this contract. | [optional]
**positive_prompt** | **str** | Optional ADetailer positive prompt override. During regional prompts, split wildcards (&#x60;[SEP]&#x60;) remain supported and wildcard ordering is normalized to detector order semantics. Backend also accepts regional split forms &#x60;left || right&#x60;, exactly two non-empty lines (&#x60;left\\nright&#x60;), and &#x60;[R1] ... [R2] ...&#x60;; these are canonicalized to &#x60;left [SEP] right&#x60;.  | [optional]
**timing** | **str** | For hires/upscale jobs, run ADetailer before or after upscale. Default behavior: &#x60;pre-upscale&#x60; when no upscale is active, &#x60;post-upscale&#x60; when upscale is active.  | [optional]

## Example

```python
from arcenciel.generated.models.generator_adetailer_config import GeneratorAdetailerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorAdetailerConfig from a JSON string
generator_adetailer_config_instance = GeneratorAdetailerConfig.from_json(json)
# print the JSON string representation of the object
print(GeneratorAdetailerConfig.to_json())

# convert the object into a dict
generator_adetailer_config_dict = generator_adetailer_config_instance.to_dict()
# create an instance of GeneratorAdetailerConfig from a dict
generator_adetailer_config_from_dict = GeneratorAdetailerConfig.from_dict(generator_adetailer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
