# GetModelVersionTrainingMetadata200Response

200 response for api models model Id versions version Id training metadata raw used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **object** | Metadata accepted or returned by this contract. | [optional]
**source** | **str** | Source accepted or returned by this contract. | [optional]
**version_id** | **int** | Version Id accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.get_model_version_training_metadata200_response import GetModelVersionTrainingMetadata200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetModelVersionTrainingMetadata200Response from a JSON string
get_model_version_training_metadata200_response_instance = GetModelVersionTrainingMetadata200Response.from_json(json)
# print the JSON string representation of the object
print(GetModelVersionTrainingMetadata200Response.to_json())

# convert the object into a dict
get_model_version_training_metadata200_response_dict = get_model_version_training_metadata200_response_instance.to_dict()
# create an instance of GetModelVersionTrainingMetadata200Response from a dict
get_model_version_training_metadata200_response_from_dict = GetModelVersionTrainingMetadata200Response.from_dict(get_model_version_training_metadata200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
