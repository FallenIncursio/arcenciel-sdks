# CreateGeneratorJobRequestUpscaleProfilesInner

Structured upscale profiles item details for this upscale profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**denoise** | **float** | Denoise strength for the refinement pass. x4 upscalers require a target &#x60;scaleFactor&#x60;. | [optional]
**model** | **str** | Compatibility alias for &#x60;modelName&#x60;. | [optional]
**model_name** | **str** | Human-readable model name for this upscale profiles item; it is not a stable identifier. | [optional]
**upscale_model_name** | **str** | Compatibility alias for &#x60;modelName&#x60;. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_job_request_upscale_profiles_inner import CreateGeneratorJobRequestUpscaleProfilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequestUpscaleProfilesInner from a JSON string
create_generator_job_request_upscale_profiles_inner_instance = CreateGeneratorJobRequestUpscaleProfilesInner.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequestUpscaleProfilesInner.to_json())

# convert the object into a dict
create_generator_job_request_upscale_profiles_inner_dict = create_generator_job_request_upscale_profiles_inner_instance.to_dict()
# create an instance of CreateGeneratorJobRequestUpscaleProfilesInner from a dict
create_generator_job_request_upscale_profiles_inner_from_dict = CreateGeneratorJobRequestUpscaleProfilesInner.from_dict(create_generator_job_request_upscale_profiles_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
