# GeneratorJobRemixRequestUpscaleProfilesInner

Structured upscale profiles item details for this upscale profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**denoise** | **float** | Denoise strength for the upscale refinement pass. x4 upscalers with denoise &gt; 0 require a target &#x60;scaleFactor&#x60;. | [optional]
**model** | **str** | Model associated with this upscale profiles item; preserve server-returned values when passing them to another operation. | [optional]
**model_name** | **str** | Human-readable model name for this upscale profiles item; it is not a stable identifier. | [optional]
**upscale_model_name** | **str** | Human-readable upscale model name for this upscale profiles item; it is not a stable identifier. | [optional]

## Example

```python
from arcenciel.generated.models.generator_job_remix_request_upscale_profiles_inner import GeneratorJobRemixRequestUpscaleProfilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobRemixRequestUpscaleProfilesInner from a JSON string
generator_job_remix_request_upscale_profiles_inner_instance = GeneratorJobRemixRequestUpscaleProfilesInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobRemixRequestUpscaleProfilesInner.to_json())

# convert the object into a dict
generator_job_remix_request_upscale_profiles_inner_dict = generator_job_remix_request_upscale_profiles_inner_instance.to_dict()
# create an instance of GeneratorJobRemixRequestUpscaleProfilesInner from a dict
generator_job_remix_request_upscale_profiles_inner_from_dict = GeneratorJobRemixRequestUpscaleProfilesInner.from_dict(generator_job_remix_request_upscale_profiles_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
