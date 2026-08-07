# CreateGeneratorJobRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**GeneratorAdetailerConfig**](GeneratorAdetailerConfig.md) |  | [optional]
**adetailer_detection_order** | **str** | Deprecated compatibility alias for &#x60;adetailer.detectionOrder&#x60;. | [optional]
**adetailer_negative** | **str** | Deprecated compatibility alias for &#x60;adetailer.negativePrompt&#x60;. | [optional]
**adetailer_positive** | **str** | Deprecated compatibility alias for &#x60;adetailer.positivePrompt&#x60;. | [optional]
**attention_couple** | [**CreateGeneratorJobRequestAttentionCouple**](CreateGeneratorJobRequestAttentionCouple.md) |  | [optional]
**batch_size** | **int** | &#x60;txt2img&#x60; only. Must be &#x60;1&#x60; when upscale/hires is enabled.  | [optional]
**cfg** | **float** | Cfg accepted or returned by this contract. | [optional]
**controlnets** | [**List[CreateGeneratorJobRequestControlnetsInner]**](CreateGeneratorJobRequestControlnetsInner.md) | ControlNet stack (server-enforced max count; currently defaults to 2). | [optional]
**denoise** | **float** | Denoise accepted or returned by this contract. | [optional]
**extra_seed** | [**CreateGeneratorJobRequestExtraSeed**](CreateGeneratorJobRequestExtraSeed.md) |  | [optional]
**extra_seed_strength** | **float** | Noise blend factor for &#x60;extraSeed&#x60; (0 &#x3D; base noise, 1 &#x3D; extra-seed noise). Defaults to &#x60;0.15&#x60; when &#x60;extraSeed&#x60; is provided.  | [optional]
**height** | **int** | Height accepted or returned by this contract. | [optional]
**image_path** | **str** | Required for img2img/inpaint. Must reference an existing upload under &#x60;uploads/generator&#x60; (relative path &#x60;generator/...&#x60;).  | [optional]
**lora_name** | **str** | Legacy single-LoRA alias. Prefer &#x60;loras&#x60;. | [optional]
**loras** | [**List[CreateGeneratorJobRequestLorasInner]**](CreateGeneratorJobRequestLorasInner.md) | Loras accepted or returned by this contract. | [optional]
**metadata** | **Dict[str, object]** | Metadata accepted or returned by this contract. | [optional]
**mode** | **str** | Mode accepted or returned by this contract. | [optional]
**model_name** | **str** | Exact checkpoint name (for example from &#x60;GET /api/generator/options&#x60; -&gt; &#x60;models.checkpoints&#x60;). Do not send &#x60;displayName&#x60; or &#x60;modelTitle&#x60; here.  | [optional]
**negative_prompt** | **str** | Negative Prompt accepted or returned by this contract. | [optional]
**preset_id** | **int** | Preset Id accepted or returned by this contract. | [optional]
**prompt** | **str** | Prompt accepted or returned by this contract. |
**prompt_control** | [**CreateGeneratorJobRequestPromptControl**](CreateGeneratorJobRequestPromptControl.md) |  | [optional]
**retention_days** | **int** | Retention Days accepted or returned by this contract. | [optional]
**rf_shift** | **float** | Rf Shift accepted or returned by this contract. | [optional]
**sampler_name** | **str** | Sampler Name accepted or returned by this contract. | [optional]
**scale_factor** | **float** | Upscale target factor. Applied only when &#x60;upscaleProfiles&#x60; (or legacy &#x60;upscaleModelName&#x60;) is set; otherwise treated as &#x60;1&#x60;. | [optional]
**scheduler** | **str** | Scheduler accepted or returned by this contract. | [optional]
**scheduler_name** | **str** | Compatibility alias for &#x60;scheduler&#x60;. | [optional]
**seed** | [**CreateGeneratorJobRequestSeed**](CreateGeneratorJobRequestSeed.md) |  | [optional]
**sfw_mode** | **bool** | Sfw Mode accepted or returned by this contract. | [optional]
**steps** | **int** | Steps accepted or returned by this contract. | [optional]
**tags** | **List[str]** | Tags accepted or returned by this contract. | [optional]
**upscale_profiles** | [**List[CreateGeneratorJobRequestUpscaleProfilesInner]**](CreateGeneratorJobRequestUpscaleProfilesInner.md) | Upscale pipeline passes (server-enforced max count; currently defaults to 3). | [optional]
**vae_name** | **str** | Vae Name accepted or returned by this contract. | [optional]
**width** | **int** | Width accepted or returned by this contract. | [optional]

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
