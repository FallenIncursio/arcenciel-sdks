# GeneratorJob

Generator Job used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**GeneratorAdetailerConfig**](GeneratorAdetailerConfig.md) |  | [optional]
**attempts** | **int** | Attempts accepted or returned by this contract. | [optional]
**attention_couple** | [**GeneratorJobAttentionCouple**](GeneratorJobAttentionCouple.md) |  | [optional]
**batch_size** | **int** | Batch Size accepted or returned by this contract. | [optional]
**cancelled** | **bool** | Cancelled accepted or returned by this contract. | [optional]
**cfg** | **float** | Cfg accepted or returned by this contract. | [optional]
**comfy** | [**GeneratorJobComfy**](GeneratorJobComfy.md) |  | [optional]
**controlnets** | [**List[GeneratorJobControlnetsInner]**](GeneratorJobControlnetsInner.md) | Controlnets accepted or returned by this contract. | [optional]
**created_at** | **int** | Unix epoch timestamp in milliseconds. |
**deleted_at** | **int** | Unix epoch timestamp in milliseconds. | [optional]
**deleted_by_user_id** | **int** | Deleted By User Id accepted or returned by this contract. | [optional]
**denoise** | **float** | Denoise accepted or returned by this contract. | [optional]
**diagnostics** | [**GeneratorJobDiagnostics**](GeneratorJobDiagnostics.md) |  | [optional]
**error** | **str** | Error accepted or returned by this contract. | [optional]
**expires_at** | **int** | Unix epoch timestamp in milliseconds. | [optional]
**extra_seed** | [**GeneratorJobExtraSeed**](GeneratorJobExtraSeed.md) |  | [optional]
**extra_seed_strength** | **float** | Extra Seed Strength accepted or returned by this contract. | [optional]
**height** | **int** | Height accepted or returned by this contract. | [optional]
**id** | **str** | Id accepted or returned by this contract. |
**image_path** | **str** | Image Path accepted or returned by this contract. | [optional]
**lora_name** | **str** | Lora Name accepted or returned by this contract. | [optional]
**loras** | [**List[GeneratorJobLorasInner]**](GeneratorJobLorasInner.md) | Loras accepted or returned by this contract. | [optional]
**metadata** | **Dict[str, object]** | Metadata accepted or returned by this contract. | [optional]
**mode** | **str** | Mode accepted or returned by this contract. |
**model_capabilities** | **List[str]** | Model Capabilities accepted or returned by this contract. | [optional]
**model_name** | **str** | Model Name accepted or returned by this contract. | [optional]
**negative_prompt** | **str** | Negative Prompt accepted or returned by this contract. | [optional]
**output_token** | **str** | Short-lived token for direct output access. | [optional]
**outputs** | [**List[GeneratorJobOutputsInner]**](GeneratorJobOutputsInner.md) | Outputs accepted or returned by this contract. | [optional]
**outputs_expired_at** | **int** | Unix epoch timestamp in milliseconds. | [optional]
**position** | **int** | Queue position hint, present on list/SSE payloads. | [optional]
**priority** | **int** | Priority accepted or returned by this contract. | [optional]
**progress** | [**GeneratorJobProgress**](GeneratorJobProgress.md) |  | [optional]
**prompt** | **str** | Prompt accepted or returned by this contract. |
**prompt_control** | [**GeneratorJobPromptControl**](GeneratorJobPromptControl.md) |  | [optional]
**published_outputs** | **List[str]** | Published Outputs accepted or returned by this contract. | [optional]
**queue_eta_ms** | **int** | Estimated queue wait time in milliseconds for this job hint. | [optional]
**rf_shift** | **float** | Rf Shift accepted or returned by this contract. | [optional]
**role** | **str** | Role accepted or returned by this contract. | [optional]
**safety** | [**GeneratorSafetySnapshot**](GeneratorSafetySnapshot.md) |  | [optional]
**sampler_name** | **str** | Sampler Name accepted or returned by this contract. | [optional]
**scale_factor** | **float** | Scale Factor accepted or returned by this contract. | [optional]
**scheduler** | **str** | Scheduler accepted or returned by this contract. | [optional]
**seed** | [**GeneratorCompareRunSeed**](GeneratorCompareRunSeed.md) |  | [optional]
**status** | **str** | Status accepted or returned by this contract. |
**steps** | **int** | Steps accepted or returned by this contract. | [optional]
**storage** | [**GeneratorStorageStatus**](GeneratorStorageStatus.md) |  | [optional]
**tagger_tags** | **List[str]** | Tagger Tags accepted or returned by this contract. | [optional]
**tags** | **List[str]** | Tags accepted or returned by this contract. | [optional]
**updated_at** | **int** | Unix epoch timestamp in milliseconds. |
**upscale_model_name** | **str** | Upscale Model Name accepted or returned by this contract. | [optional]
**upscale_profiles** | [**List[GeneratorJobUpscaleProfilesInner]**](GeneratorJobUpscaleProfilesInner.md) | Upscale Profiles accepted or returned by this contract. | [optional]
**upscale_target_height** | **int** | Upscale Target Height accepted or returned by this contract. | [optional]
**upscale_target_width** | **int** | Upscale Target Width accepted or returned by this contract. | [optional]
**user_id** | **int** | User Id accepted or returned by this contract. |
**vae_name** | **str** | Vae Name accepted or returned by this contract. | [optional]
**weight** | **float** | Weight accepted or returned by this contract. | [optional]
**width** | **int** | Width accepted or returned by this contract. | [optional]

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
