# GeneratorJobUpscaleProfilesInner

Upscale Profiles item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**denoise** | **float** | Denoise accepted or returned by this contract. | [optional]
**model_name** | **str** | Model Name accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_job_upscale_profiles_inner import GeneratorJobUpscaleProfilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorJobUpscaleProfilesInner from a JSON string
generator_job_upscale_profiles_inner_instance = GeneratorJobUpscaleProfilesInner.from_json(json)
# print the JSON string representation of the object
print(GeneratorJobUpscaleProfilesInner.to_json())

# convert the object into a dict
generator_job_upscale_profiles_inner_dict = generator_job_upscale_profiles_inner_instance.to_dict()
# create an instance of GeneratorJobUpscaleProfilesInner from a dict
generator_job_upscale_profiles_inner_from_dict = GeneratorJobUpscaleProfilesInner.from_dict(generator_job_upscale_profiles_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
