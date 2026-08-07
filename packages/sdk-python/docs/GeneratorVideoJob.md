# GeneratorVideoJob

Generator Video Job used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfg** | **float** | Server-owned guidance value. |
**completed_at** | **datetime** | Terminal completion time. |
**created_at** | **datetime** | Creation time. |
**credit_cost** | **int** | Credits reserved by this job. |
**download_url** | **str** | Authenticated MP4 attachment URL when available and viewable. |
**duration_seconds** | **float** | Expected playback duration. |
**error** | **str** | Viewer-safe terminal error. |
**estimated_completion_ms** | **int** | Estimated milliseconds from now until completion. |
**estimated_remaining_ms** | **int** | Estimated time until completion, including queue delay. |
**estimated_render_ms** | **int** | Estimated render duration. |
**expires_at** | **datetime** | Generated-output expiration time. |
**finalization_ms** | **int** | Download, validation, and moderation time. |
**first_frame_url** | **str** | Authenticated source-frame preview URL. |
**fps** | **int** | Output FPS. |
**frames** | **int** | Requested frame count. |
**has_first_frame** | **bool** | Whether the job has a source image. |
**has_last_frame** | **bool** | Whether the job has an ending-frame image. |
**height** | **int** | Resolved output height. |
**id** | **UUID** | Video job ID. |
**last_frame_url** | **str** | Authenticated ending-frame preview URL. |
**metadata** | [**GeneratorVideoPublicMetadata**](GeneratorVideoPublicMetadata.md) |  |
**mode** | **str** | Generation mode. |
**negative_prompt** | **str** | Submitted or server-default negative prompt. |
**output_bytes** | **int** | Final MP4 size. |
**output_duration_seconds** | **float** | Media playback duration, not generation time. |
**output_url** | **str** | Authenticated inline MP4 URL when available and viewable. |
**position** | **int** | Current one-based queue position. |
**processing_ms** | **int** | Worker processing time. |
**progress** | **float** | Normalized job progress. |
**progress_message** | **str** | Viewer-safe current phase. |
**prompt** | **str** | Submitted positive prompt. |
**prompt_preset** | **str** | Selected prompt-preset ID. |
**queue_eta_ms** | **int** | Estimated wait before rendering begins. |
**queue_wait_ms** | **int** | Time from creation until worker start. |
**remote_render_ms** | **int** | Remote rendering time. |
**safety** | [**GeneratorVideoSafetySnapshot**](GeneratorVideoSafetySnapshot.md) |  |
**sampler_name** | **str** | Server-owned sampler name. |
**scheduler** | **str** | Server-owned scheduler name. |
**seed** | **str** | Decimal generation seed. |
**started_at** | **datetime** | Worker start time. |
**status** | **str** | Current job lifecycle status. |
**steps** | **int** | Sampling steps. |
**tagger_tags** | **List[str]** | Normalized sampled-frame tags. |
**total_elapsed_ms** | **int** | Total creation-to-completion time. |
**width** | **int** | Resolved output width. |

## Example

```python
from arcenciel.generated.models.generator_video_job import GeneratorVideoJob

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorVideoJob from a JSON string
generator_video_job_instance = GeneratorVideoJob.from_json(json)
# print the JSON string representation of the object
print(GeneratorVideoJob.to_json())

# convert the object into a dict
generator_video_job_dict = generator_video_job_instance.to_dict()
# create an instance of GeneratorVideoJob from a dict
generator_video_job_from_dict = GeneratorVideoJob.from_dict(generator_video_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
