# GeneratorJob

Fields describing generator job in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**GeneratorAdetailerConfig**](GeneratorAdetailerConfig.md) |  | [optional]
**attempts** | **int** | Numeric attempts reported for this generator job. | [optional]
**attention_couple** | [**GeneratorJobAttentionCouple**](GeneratorJobAttentionCouple.md) |  | [optional]
**batch_size** | **int** | Numeric batch size reported for this generator job. | [optional]
**cancelled** | **bool** | Whether cancelled applies to this generator job. | [optional]
**cfg** | **float** | Numeric cfg reported for this generator job. | [optional]
**comfy** | [**GeneratorJobComfy**](GeneratorJobComfy.md) |  | [optional]
**controlnets** | [**List[GeneratorJobControlnetsInner]**](GeneratorJobControlnetsInner.md) | Ordered controlnets entries included with this generator job; an empty list means none are available. | [optional]
**created_at** | **int** | Unix epoch timestamp in milliseconds. |
**deleted_at** | **int** | Unix epoch timestamp in milliseconds. | [optional]
**deleted_by_user_id** | **int** | Stable identifier for the deleted by user; use it in subsequent API calls instead of a display name. | [optional]
**denoise** | **float** | Numeric denoise reported for this generator job. | [optional]
**diagnostics** | [**GeneratorJobDiagnostics**](GeneratorJobDiagnostics.md) |  | [optional]
**error** | **str** | Error associated with this generator job; preserve server-returned values when passing them to another operation. | [optional]
**expires_at** | **int** | Unix epoch timestamp in milliseconds. | [optional]
**extra_seed** | [**GeneratorJobExtraSeed**](GeneratorJobExtraSeed.md) |  | [optional]
**extra_seed_strength** | **float** | Numeric extra seed strength reported for this generator job. Minimum: 0. Maximum: 1. | [optional]
**height** | **int** | Numeric height reported for this generator job. | [optional]
**id** | **str** | Stable identifier for the generator job; use it in subsequent API calls instead of a display name. |
**image_path** | **str** | Server-provided path for the image path associated with this generator job; treat it as opaque. | [optional]
**lora_name** | **str** | Human-readable lora name for this generator job; it is not a stable identifier. | [optional]
**loras** | [**List[GeneratorJobLorasInner]**](GeneratorJobLorasInner.md) | Ordered loras entries included with this generator job; an empty list means none are available. | [optional]
**metadata** | **Dict[str, object]** | Structured metadata details for this generator job. | [optional]
**mode** | **str** | Mode associated with this generator job; preserve server-returned values when passing them to another operation. Supported values: &#x60;txt2img&#x60;, &#x60;img2img&#x60;, &#x60;inpaint&#x60;. |
**model_capabilities** | **List[str]** | Ordered model capabilities entries included with this generator job; an empty list means none are available. | [optional]
**model_name** | **str** | Human-readable model name for this generator job; it is not a stable identifier. | [optional]
**negative_prompt** | **str** | Negative Prompt text associated with generation of this generator job; availability depends on visibility and privacy rules. | [optional]
**output_token** | **str** | Short-lived token for direct output access. | [optional]
**outputs** | [**List[GeneratorJobOutputsInner]**](GeneratorJobOutputsInner.md) | Ordered outputs entries included with this generator job; an empty list means none are available. | [optional]
**outputs_expired_at** | **int** | Unix epoch timestamp in milliseconds. | [optional]
**position** | **int** | Queue position hint, present on list/SSE payloads. | [optional]
**priority** | **int** | Numeric priority reported for this generator job. | [optional]
**progress** | [**GeneratorJobProgress**](GeneratorJobProgress.md) |  | [optional]
**prompt** | **str** | Prompt text associated with generation of this generator job; availability depends on visibility and privacy rules. |
**prompt_control** | [**GeneratorJobPromptControl**](GeneratorJobPromptControl.md) |  | [optional]
**published_outputs** | **List[str]** | Ordered published outputs entries included with this generator job; an empty list means none are available. | [optional]
**queue_eta_ms** | **int** | Estimated queue wait time in milliseconds for this job hint. | [optional]
**rf_shift** | **float** | Numeric rf shift reported for this generator job. | [optional]
**role** | **str** | Access role represented by this generator job; use it for display and capability checks, not authentication. | [optional]
**safety** | [**GeneratorSafetySnapshot**](GeneratorSafetySnapshot.md) |  | [optional]
**sampler_name** | **str** | Human-readable sampler name for this generator job; it is not a stable identifier. | [optional]
**scale_factor** | **float** | Numeric scale factor reported for this generator job. | [optional]
**scheduler** | **str** | Scheduler associated with this generator job; preserve server-returned values when passing them to another operation. | [optional]
**seed** | [**GeneratorJobSeed**](GeneratorJobSeed.md) |  | [optional]
**status** | **str** | Current lifecycle state of this generator job; clients should tolerate future values. Supported values: &#x60;queued&#x60;, &#x60;running&#x60;, &#x60;completed&#x60;, &#x60;failed&#x60;. |
**steps** | **int** | Numeric steps reported for this generator job. | [optional]
**storage** | [**GeneratorStorageStatus**](GeneratorStorageStatus.md) |  | [optional]
**tagger_tags** | **List[str]** | Ordered tagger tags entries included with this generator job; an empty list means none are available. | [optional]
**tags** | **List[str]** | Ordered tags entries included with this generator job; an empty list means none are available. | [optional]
**updated_at** | **int** | Unix epoch timestamp in milliseconds. |
**upscale_model_name** | **str** | Human-readable upscale model name for this generator job; it is not a stable identifier. | [optional]
**upscale_profiles** | [**List[GeneratorJobUpscaleProfilesInner]**](GeneratorJobUpscaleProfilesInner.md) | Ordered upscale profiles entries included with this generator job; an empty list means none are available. | [optional]
**upscale_target_height** | **int** | Numeric upscale target height reported for this generator job. | [optional]
**upscale_target_width** | **int** | Numeric upscale target width reported for this generator job. | [optional]
**user_id** | **int** | Stable identifier for the user; use it in subsequent API calls instead of a display name. |
**vae_name** | **str** | Human-readable vae name for this generator job; it is not a stable identifier. | [optional]
**weight** | **float** | Numeric weight reported for this generator job. | [optional]
**width** | **int** | Numeric width reported for this generator job. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job import GeneratorJob

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJob from a JSON string
generator_job_instance = GeneratorJob.from_json(json)
# print the JSON string representation of the object
print(GeneratorJob.to_json())

# convert the object into a dict
generator_job_dict = generator_job_instance.to_dict()
# create an instance of GeneratorJob from a dict
generator_job_from_dict = GeneratorJob.from_dict(generator_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
