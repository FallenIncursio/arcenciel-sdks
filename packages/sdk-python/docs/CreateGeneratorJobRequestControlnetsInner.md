# CreateGeneratorJobRequestControlnetsInner

Structured controlnets item details for this controlnets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **float** | Numeric end reported for this controlnets item. Minimum: 0. Maximum: 1. | [optional]
**image_path** | **str** | Server-provided path for the image path associated with this controlnets item; treat it as opaque. | [optional]
**model** | **str** | Model associated with this controlnets item; preserve server-returned values when passing them to another operation. | [optional]
**model_name** | **str** | Compatibility alias for &#x60;model&#x60;. | [optional]
**start** | **float** | Numeric start reported for this controlnets item. Minimum: 0. Maximum: 1. | [optional]
**strength** | **float** | Numeric strength reported for this controlnets item. Minimum: 0. Maximum: 2. | [optional]

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
