# GeneratorJobRemixRequest

Same override fields as `POST /api/generator/jobs`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**GeneratorAdetailerConfig**](GeneratorAdetailerConfig.md) |  | [optional]
**adetailer_detection_order** | **str** | Adetailer Detection Order associated with this generator job remix request; preserve server-returned values when passing them to another operation. | [optional]
**adetailer_negative** | **str** | Adetailer Negative associated with this generator job remix request; preserve server-returned values when passing them to another operation. | [optional]
**adetailer_positive** | **str** | Adetailer Positive associated with this generator job remix request; preserve server-returned values when passing them to another operation. | [optional]
**attention_couple** | [**GeneratorJobRemixRequestAttentionCouple**](GeneratorJobRemixRequestAttentionCouple.md) |  | [optional]
**batch_size** | **int** | &#x60;txt2img&#x60; only. Must be &#x60;1&#x60; when upscale/hires is enabled.  | [optional]
**cfg** | **float** | Numeric cfg reported for this generator job remix request. | [optional]
**controlnets** | [**List[GeneratorJobRemixRequestControlnetsInner]**](GeneratorJobRemixRequestControlnetsInner.md) | Ordered controlnets entries included with this generator job remix request; an empty list means none are available. | [optional]
**denoise** | **float** | Numeric denoise reported for this generator job remix request. | [optional]
**extra_seed** | [**GeneratorJobRemixRequestExtraSeed**](GeneratorJobRemixRequestExtraSeed.md) |  | [optional]
**extra_seed_strength** | **float** | Numeric extra seed strength reported for this generator job remix request. Minimum: 0. Maximum: 1. | [optional]
**height** | **int** | Numeric height reported for this generator job remix request. | [optional]
**image_path** | **str** | Server-provided path for the image path associated with this generator job remix request; treat it as opaque. | [optional]
**lora_name** | **str** | Human-readable lora name for this generator job remix request; it is not a stable identifier. | [optional]
**loras** | [**List[CreateGeneratorJobRequestLorasInner]**](CreateGeneratorJobRequestLorasInner.md) | Ordered loras entries included with this generator job remix request; an empty list means none are available. | [optional]
**metadata** | **Dict[str, object]** | Structured metadata details for this generator job remix request. | [optional]
**mode** | **str** | Mode associated with this generator job remix request; preserve server-returned values when passing them to another operation. Supported values: &#x60;txt2img&#x60;, &#x60;img2img&#x60;, &#x60;inpaint&#x60;. | [optional]
**model_name** | **str** | Human-readable model name for this generator job remix request; it is not a stable identifier. | [optional]
**negative_prompt** | **str** | Negative Prompt text associated with generation of this generator job remix request; availability depends on visibility and privacy rules. | [optional]
**preset_id** | **int** | Stable identifier for the preset; use it in subsequent API calls instead of a display name. | [optional]
**prompt** | **str** | Prompt text associated with generation of this generator job remix request; availability depends on visibility and privacy rules. |
**prompt_control** | [**GeneratorJobRemixRequestPromptControl**](GeneratorJobRemixRequestPromptControl.md) |  | [optional]
**retention_days** | **int** | Numeric retention days reported for this generator job remix request. | [optional]
**rf_shift** | **float** | Numeric rf shift reported for this generator job remix request. Minimum: 1. Maximum: 15. | [optional]
**sampler_name** | **str** | Human-readable sampler name for this generator job remix request; it is not a stable identifier. | [optional]
**scale_factor** | **float** | Upscale factor target. Applied only when &#x60;upscaleProfiles&#x60; (or legacy &#x60;upscaleModelName&#x60;) is set; otherwise treated as &#x60;1&#x60;. | [optional]
**scheduler** | **str** | Scheduler associated with this generator job remix request; preserve server-returned values when passing them to another operation. | [optional]
**scheduler_name** | **str** | Human-readable scheduler name for this generator job remix request; it is not a stable identifier. | [optional]
**seed** | [**GeneratorJobRemixRequestSeed**](GeneratorJobRemixRequestSeed.md) |  | [optional]
**sfw_mode** | **bool** | Whether sfw mode applies to this generator job remix request. | [optional]
**steps** | **int** | Numeric steps reported for this generator job remix request. | [optional]
**tags** | **List[str]** | Ordered tags entries included with this generator job remix request; an empty list means none are available. | [optional]
**upscale_profiles** | [**List[GeneratorJobRemixRequestUpscaleProfilesInner]**](GeneratorJobRemixRequestUpscaleProfilesInner.md) | Ordered upscale profiles entries included with this generator job remix request; an empty list means none are available. | [optional]
**vae_name** | **str** | Human-readable vae name for this generator job remix request; it is not a stable identifier. | [optional]
**width** | **int** | Numeric width reported for this generator job remix request. | [optional]

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
