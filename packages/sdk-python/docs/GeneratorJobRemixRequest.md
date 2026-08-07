# GeneratorJobRemixRequest

Same override fields as `POST /api/generator/jobs`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**GeneratorAdetailerConfig**](GeneratorAdetailerConfig.md) |  | [optional]
**adetailer_detection_order** | **str** | Adetailer Detection Order accepted or returned by this contract. | [optional]
**adetailer_negative** | **str** | Adetailer Negative accepted or returned by this contract. | [optional]
**adetailer_positive** | **str** | Adetailer Positive accepted or returned by this contract. | [optional]
**attention_couple** | [**GeneratorJobRemixRequestAttentionCouple**](GeneratorJobRemixRequestAttentionCouple.md) |  | [optional]
**batch_size** | **int** | &#x60;txt2img&#x60; only. Must be &#x60;1&#x60; when upscale/hires is enabled.  | [optional]
**cfg** | **float** | Cfg accepted or returned by this contract. | [optional]
**controlnets** | [**List[GeneratorJobRemixRequestControlnetsInner]**](GeneratorJobRemixRequestControlnetsInner.md) | Controlnets accepted or returned by this contract. | [optional]
**denoise** | **float** | Denoise accepted or returned by this contract. | [optional]
**extra_seed** | [**GeneratorJobRemixRequestExtraSeed**](GeneratorJobRemixRequestExtraSeed.md) |  | [optional]
**extra_seed_strength** | **float** | Extra Seed Strength accepted or returned by this contract. | [optional]
**height** | **int** | Height accepted or returned by this contract. | [optional]
**image_path** | **str** | Image Path accepted or returned by this contract. | [optional]
**lora_name** | **str** | Lora Name accepted or returned by this contract. | [optional]
**loras** | [**List[CreateGeneratorJobRequestLorasInner]**](CreateGeneratorJobRequestLorasInner.md) | Loras accepted or returned by this contract. | [optional]
**metadata** | **Dict[str, object]** | Metadata accepted or returned by this contract. | [optional]
**mode** | **str** | Mode accepted or returned by this contract. | [optional]
**model_name** | **str** | Model Name accepted or returned by this contract. | [optional]
**negative_prompt** | **str** | Negative Prompt accepted or returned by this contract. | [optional]
**preset_id** | **int** | Preset Id accepted or returned by this contract. | [optional]
**prompt** | **str** | Prompt accepted or returned by this contract. |
**prompt_control** | [**GeneratorJobRemixRequestPromptControl**](GeneratorJobRemixRequestPromptControl.md) |  | [optional]
**retention_days** | **int** | Retention Days accepted or returned by this contract. | [optional]
**rf_shift** | **float** | Rf Shift accepted or returned by this contract. | [optional]
**sampler_name** | **str** | Sampler Name accepted or returned by this contract. | [optional]
**scale_factor** | **float** | Upscale factor target. Applied only when &#x60;upscaleProfiles&#x60; (or legacy &#x60;upscaleModelName&#x60;) is set; otherwise treated as &#x60;1&#x60;. | [optional]
**scheduler** | **str** | Scheduler accepted or returned by this contract. | [optional]
**scheduler_name** | **str** | Scheduler Name accepted or returned by this contract. | [optional]
**seed** | [**GeneratorJobRemixRequestSeed**](GeneratorJobRemixRequestSeed.md) |  | [optional]
**sfw_mode** | **bool** | Sfw Mode accepted or returned by this contract. | [optional]
**steps** | **int** | Steps accepted or returned by this contract. | [optional]
**tags** | **List[str]** | Tags accepted or returned by this contract. | [optional]
**upscale_profiles** | [**List[GeneratorJobRemixRequestUpscaleProfilesInner]**](GeneratorJobRemixRequestUpscaleProfilesInner.md) | Upscale Profiles accepted or returned by this contract. | [optional]
**vae_name** | **str** | Vae Name accepted or returned by this contract. | [optional]
**width** | **int** | Width accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_remix_request import GeneratorJobRemixRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobRemixRequest from a JSON string
generator_job_remix_request_instance = GeneratorJobRemixRequest.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobRemixRequest.to_json())

# convert the object into a dict
generator_job_remix_request_dict = generator_job_remix_request_instance.to_dict()
# create an instance of GeneratorJobRemixRequest from a dict
generator_job_remix_request_from_dict = GeneratorJobRemixRequest.from_dict(generator_job_remix_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
