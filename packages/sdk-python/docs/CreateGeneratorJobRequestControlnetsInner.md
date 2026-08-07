# CreateGeneratorJobRequestControlnetsInner

Controlnets item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **float** | End accepted or returned by this contract. | [optional]
**image_path** | **str** | Image Path accepted or returned by this contract. | [optional]
**model** | **str** | Model accepted or returned by this contract. | [optional]
**model_name** | **str** | Compatibility alias for &#x60;model&#x60;. | [optional]
**start** | **float** | Start accepted or returned by this contract. | [optional]
**strength** | **float** | Strength accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.create_generator_job_request_controlnets_inner import CreateGeneratorJobRequestControlnetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGeneratorJobRequestControlnetsInner from a JSON string
create_generator_job_request_controlnets_inner_instance = CreateGeneratorJobRequestControlnetsInner.from_json(json)
# print the JSON string representation of the object
print(CreateGeneratorJobRequestControlnetsInner.to_json())

# convert the object into a dict
create_generator_job_request_controlnets_inner_dict = create_generator_job_request_controlnets_inner_instance.to_dict()
# create an instance of CreateGeneratorJobRequestControlnetsInner from a dict
create_generator_job_request_controlnets_inner_from_dict = CreateGeneratorJobRequestControlnetsInner.from_dict(create_generator_job_request_controlnets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
