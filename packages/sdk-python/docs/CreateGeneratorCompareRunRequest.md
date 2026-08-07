# CreateGeneratorCompareRunRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**GeneratorAdetailerConfig**](GeneratorAdetailerConfig.md) |  | [optional]
**adetailer_detection_order** | **str** | Deprecated compatibility alias for &#x60;adetailer.detectionOrder&#x60;. | [optional]
**adetailer_negative** | **str** | Deprecated compatibility alias for &#x60;adetailer.negativePrompt&#x60;. | [optional]
**adetailer_positive** | **str** | Deprecated compatibility alias for &#x60;adetailer.positivePrompt&#x60;. | [optional]
**attention_couple** | [**CreateGeneratorCompareRunRequestAttentionCouple**](CreateGeneratorCompareRunRequestAttentionCouple.md) |  | [optional]
**batch_size** | **int** | Compare always queues each target as one output; non-1 values are normalized to 1. | [optional]
**cfg** | **float** | Cfg accepted or returned by this contract. | [optional]
**controlnets** | [**List[CreateGeneratorJobRequestControlnetsInner]**](CreateGeneratorJobRequestControlnetsInner.md) | ControlNet stack, validated once per target before any compare job is queued. | [optional]
**denoise** | **float** | Denoise accepted or returned by this contract. | [optional]
**extra_seed** | [**CreateGeneratorJobRequestExtraSeed**](CreateGeneratorJobRequestExtraSeed.md) |  | [optional]
**extra_seed_strength** | **float** | Extra Seed Strength accepted or returned by this contract. | [optional]
**height** | **int** | Height accepted or returned by this contract. | [optional]
**lora_name** | **str** | Legacy single-LoRA alias. Prefer &#x60;loras&#x60;. | [optional]
**loras** | [**List[CreateGeneratorJobRequestLorasInner]**](CreateGeneratorJobRequestLorasInner.md) | Loras accepted or returned by this contract. | [optional]
**metadata** | **Dict[str, object]** | Metadata accepted or returned by this contract. | [optional]
**mode** | **str** | Mode accepted or returned by this contract. | [optional]
**model_name** | **str** | Ignored for compare requests; use &#x60;modelNames&#x60;. | [optional]
**model_names** | **List[str]** | Exact checkpoint names. Duplicate names are rejected. |
**negative_prompt** | **str** | Negative Prompt accepted or returned by this contract. | [optional]
**preset_id** | **int** | Preset Id accepted or returned by this contract. | [optional]
**prompt** | **str** | Prompt accepted or returned by this contract. |
**prompt_control** | [**CreateGeneratorCompareRunRequestPromptControl**](CreateGeneratorCompareRunRequestPromptControl.md) |  | [optional]
**retention_days** | **int** | Retention Days accepted or returned by this contract. | [optional]
**rf_shift** | **float** | Rf Shift accepted or returned by this contract. | [optional]
**sampler_name** | **str** | Sampler Name accepted or returned by this contract. | [optional]
**scale_factor** | **float** | Upscale target factor. Applied only when &#x60;upscaleProfiles&#x60; or legacy &#x60;upscaleModelName&#x60; is set. | [optional]
**scheduler** | **str** | Scheduler accepted or returned by this contract. | [optional]
**scheduler_name** | **str** | Compatibility alias for &#x60;scheduler&#x60;. | [optional]
**seed** | [**CreateGeneratorCompareRunRequestSeed**](CreateGeneratorCompareRunRequestSeed.md) |  | [optional]
**sfw_mode** | **bool** | Sfw Mode accepted or returned by this contract. | [optional]
**steps** | **int** | Steps accepted or returned by this contract. | [optional]
**tags** | **List[str]** | Tags accepted or returned by this contract. | [optional]
**upscale_profiles** | [**List[CreateGeneratorCompareRunRequestUpscaleProfilesInner]**](CreateGeneratorCompareRunRequestUpscaleProfilesInner.md) | Upscale pipeline passes, applied independently to every compare target. | [optional]
**vae_name** | **str** | Vae Name accepted or returned by this contract. | [optional]
**width** | **int** | Width accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_compare_run_request import CreateGeneratorCompareRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorCompareRunRequest from a JSON string
create_generator_compare_run_request_instance = CreateGeneratorCompareRunRequest.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorCompareRunRequest.to_json())

# convert the object into a dict
create_generator_compare_run_request_dict = create_generator_compare_run_request_instance.to_dict()
# create an instance of CreateGeneratorCompareRunRequest from a dict
create_generator_compare_run_request_from_dict = CreateGeneratorCompareRunRequest.from_dict(create_generator_compare_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
