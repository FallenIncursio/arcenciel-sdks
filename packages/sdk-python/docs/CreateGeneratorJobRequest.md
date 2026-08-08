# CreateGeneratorJobRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**GeneratorAdetailerConfig**](GeneratorAdetailerConfig.md) |  | [optional]
**adetailer_detection_order** | **str** | Deprecated compatibility alias for &#x60;adetailer.detectionOrder&#x60;. | [optional]
**adetailer_negative** | **str** | Deprecated compatibility alias for &#x60;adetailer.negativePrompt&#x60;. | [optional]
**adetailer_positive** | **str** | Deprecated compatibility alias for &#x60;adetailer.positivePrompt&#x60;. | [optional]
**attention_couple** | [**CreateGeneratorJobRequestAttentionCouple**](CreateGeneratorJobRequestAttentionCouple.md) |  | [optional]
**batch_size** | **int** | &#x60;txt2img&#x60; only. Must be &#x60;1&#x60; when upscale/hires is enabled.  | [optional]
**cfg** | **float** | Numeric cfg reported for this request payload. | [optional]
**controlnets** | [**List[CreateGeneratorJobRequestControlnetsInner]**](CreateGeneratorJobRequestControlnetsInner.md) | ControlNet stack (server-enforced max count; currently defaults to 2). | [optional]
**denoise** | **float** | Numeric denoise reported for this request payload. | [optional]
**extra_seed** | [**CreateGeneratorJobRequestExtraSeed**](CreateGeneratorJobRequestExtraSeed.md) |  | [optional]
**extra_seed_strength** | **float** | Noise blend factor for &#x60;extraSeed&#x60; (0 &#x3D; base noise, 1 &#x3D; extra-seed noise). Defaults to &#x60;0.15&#x60; when &#x60;extraSeed&#x60; is provided.  | [optional]
**height** | **int** | Numeric height reported for this request payload. | [optional]
**image_path** | **str** | Required for img2img/inpaint. Must reference an existing upload under &#x60;uploads/generator&#x60; (relative path &#x60;generator/...&#x60;).  | [optional]
**lora_name** | **str** | Legacy single-LoRA alias. Prefer &#x60;loras&#x60;. | [optional]
**loras** | [**List[CreateGeneratorJobRequestLorasInner]**](CreateGeneratorJobRequestLorasInner.md) | Ordered loras entries included with this request payload; an empty list means none are available. | [optional]
**metadata** | **Dict[str, object]** | Structured metadata details for this request payload. | [optional]
**mode** | **str** | Mode associated with this request payload; preserve server-returned values when passing them to another operation. Supported values: &#x60;txt2img&#x60;, &#x60;img2img&#x60;, &#x60;inpaint&#x60;. | [optional]
**model_name** | **str** | Exact checkpoint name (for example from &#x60;GET /api/generator/options&#x60; -&gt; &#x60;models.checkpoints&#x60;). Do not send &#x60;displayName&#x60; or &#x60;modelTitle&#x60; here.  | [optional]
**negative_prompt** | **str** | Negative Prompt text associated with generation of this request payload; availability depends on visibility and privacy rules. | [optional]
**preset_id** | **int** | Stable identifier for the preset; use it in subsequent API calls instead of a display name. | [optional]
**prompt** | **str** | Prompt text associated with generation of this request payload; availability depends on visibility and privacy rules. |
**prompt_control** | [**CreateGeneratorJobRequestPromptControl**](CreateGeneratorJobRequestPromptControl.md) |  | [optional]
**retention_days** | **int** | Numeric retention days reported for this request payload. | [optional]
**rf_shift** | **float** | Numeric rf shift reported for this request payload. Minimum: 1. Maximum: 15. | [optional]
**sampler_name** | **str** | Human-readable sampler name for this request payload; it is not a stable identifier. | [optional]
**scale_factor** | **float** | Upscale target factor. Applied only when &#x60;upscaleProfiles&#x60; (or legacy &#x60;upscaleModelName&#x60;) is set; otherwise treated as &#x60;1&#x60;. | [optional]
**scheduler** | **str** | Scheduler associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]
**scheduler_name** | **str** | Compatibility alias for &#x60;scheduler&#x60;. | [optional]
**seed** | [**CreateGeneratorJobRequestSeed**](CreateGeneratorJobRequestSeed.md) |  | [optional]
**sfw_mode** | **bool** | Whether sfw mode applies to this request payload. | [optional]
**steps** | **int** | Numeric steps reported for this request payload. | [optional]
**tags** | **List[str]** | Ordered tags entries included with this request payload; an empty list means none are available. | [optional]
**upscale_profiles** | [**List[CreateGeneratorJobRequestUpscaleProfilesInner]**](CreateGeneratorJobRequestUpscaleProfilesInner.md) | Upscale pipeline passes (server-enforced max count; currently defaults to 3). | [optional]
**vae_name** | **str** | Human-readable vae name for this request payload; it is not a stable identifier. | [optional]
**width** | **int** | Numeric width reported for this request payload. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_job_request import CreateGeneratorJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequest from a JSON string
create_generator_job_request_instance = CreateGeneratorJobRequest.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequest.to_json())

# convert the object into a dict
create_generator_job_request_dict = create_generator_job_request_instance.to_dict()
# create an instance of CreateGeneratorJobRequest from a dict
create_generator_job_request_from_dict = CreateGeneratorJobRequest.from_dict(create_generator_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
