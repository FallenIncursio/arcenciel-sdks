# CreateGeneratorCompareRunRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**GeneratorAdetailerConfig**](GeneratorAdetailerConfig.md) |  | [optional]
**adetailer_detection_order** | **str** | Deprecated compatibility alias for &#x60;adetailer.detectionOrder&#x60;. | [optional]
**adetailer_negative** | **str** | Deprecated compatibility alias for &#x60;adetailer.negativePrompt&#x60;. | [optional]
**adetailer_positive** | **str** | Deprecated compatibility alias for &#x60;adetailer.positivePrompt&#x60;. | [optional]
**attention_couple** | [**CreateGeneratorCompareRunRequestAttentionCouple**](CreateGeneratorCompareRunRequestAttentionCouple.md) |  | [optional]
**batch_size** | **int** | Compare always queues each target as one output; non-1 values are normalized to 1. | [optional]
**cfg** | **float** | Numeric cfg reported for this request payload. | [optional]
**controlnets** | [**List[CreateGeneratorJobRequestControlnetsInner]**](CreateGeneratorJobRequestControlnetsInner.md) | ControlNet stack, validated once per target before any compare job is queued. | [optional]
**denoise** | **float** | Numeric denoise reported for this request payload. | [optional]
**extra_seed** | [**CreateGeneratorJobRequestExtraSeed**](CreateGeneratorJobRequestExtraSeed.md) |  | [optional]
**extra_seed_strength** | **float** | Numeric extra seed strength reported for this request payload. Minimum: 0. Maximum: 1. | [optional]
**height** | **int** | Numeric height reported for this request payload. | [optional]
**lora_name** | **str** | Legacy single-LoRA alias. Prefer &#x60;loras&#x60;. | [optional]
**loras** | [**List[CreateGeneratorJobRequestLorasInner]**](CreateGeneratorJobRequestLorasInner.md) | Ordered loras entries included with this request payload; an empty list means none are available. | [optional]
**metadata** | **Dict[str, object]** | Structured metadata details for this request payload. | [optional]
**mode** | **str** | Mode associated with this request payload; preserve server-returned values when passing them to another operation. Supported values: &#x60;txt2img&#x60;. | [optional]
**model_name** | **str** | Ignored for compare requests; use &#x60;modelNames&#x60;. | [optional]
**model_names** | **List[str]** | Exact checkpoint names. Duplicate names are rejected. |
**negative_prompt** | **str** | Negative Prompt text associated with generation of this request payload; availability depends on visibility and privacy rules. | [optional]
**preset_id** | **int** | Stable identifier for the preset; use it in subsequent API calls instead of a display name. | [optional]
**prompt** | **str** | Prompt text associated with generation of this request payload; availability depends on visibility and privacy rules. |
**prompt_control** | [**CreateGeneratorCompareRunRequestPromptControl**](CreateGeneratorCompareRunRequestPromptControl.md) |  | [optional]
**retention_days** | **int** | Numeric retention days reported for this request payload. | [optional]
**rf_shift** | **float** | Numeric rf shift reported for this request payload. Minimum: 1. Maximum: 15. | [optional]
**sampler_name** | **str** | Human-readable sampler name for this request payload; it is not a stable identifier. | [optional]
**scale_factor** | **float** | Upscale target factor. Applied only when &#x60;upscaleProfiles&#x60; or legacy &#x60;upscaleModelName&#x60; is set. | [optional]
**scheduler** | **str** | Scheduler associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]
**scheduler_name** | **str** | Compatibility alias for &#x60;scheduler&#x60;. | [optional]
**seed** | [**CreateGeneratorCompareRunRequestSeed**](CreateGeneratorCompareRunRequestSeed.md) |  | [optional]
**sfw_mode** | **bool** | Whether sfw mode applies to this request payload. | [optional]
**steps** | **int** | Numeric steps reported for this request payload. | [optional]
**tags** | **List[str]** | Ordered tags entries included with this request payload; an empty list means none are available. | [optional]
**upscale_profiles** | [**List[CreateGeneratorCompareRunRequestUpscaleProfilesInner]**](CreateGeneratorCompareRunRequestUpscaleProfilesInner.md) | Upscale pipeline passes, applied independently to every compare target. | [optional]
**vae_name** | **str** | Human-readable vae name for this request payload; it is not a stable identifier. | [optional]
**width** | **int** | Numeric width reported for this request payload. | [optional]

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
