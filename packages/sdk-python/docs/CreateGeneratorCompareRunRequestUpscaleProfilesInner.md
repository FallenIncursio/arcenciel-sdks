# CreateGeneratorCompareRunRequestUpscaleProfilesInner

Upscale Profiles item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**denoise** | **float** | Denoise accepted or returned by this contract. | [optional]
**model** | **str** | Compatibility alias for &#x60;modelName&#x60;. | [optional]
**model_name** | **str** | Model Name accepted or returned by this contract. | [optional]
**upscale_model_name** | **str** | Compatibility alias for &#x60;modelName&#x60;. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_compare_run_request_upscale_profiles_inner import CreateGeneratorCompareRunRequestUpscaleProfilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorCompareRunRequestUpscaleProfilesInner from a JSON string
create_generator_compare_run_request_upscale_profiles_inner_instance = CreateGeneratorCompareRunRequestUpscaleProfilesInner.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorCompareRunRequestUpscaleProfilesInner.to_json())

# convert the object into a dict
create_generator_compare_run_request_upscale_profiles_inner_dict = create_generator_compare_run_request_upscale_profiles_inner_instance.to_dict()
# create an instance of CreateGeneratorCompareRunRequestUpscaleProfilesInner from a dict
create_generator_compare_run_request_upscale_profiles_inner_from_dict = CreateGeneratorCompareRunRequestUpscaleProfilesInner.from_dict(create_generator_compare_run_request_upscale_profiles_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
