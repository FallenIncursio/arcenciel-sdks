# GetModelVersionTrainingMetadata200Response

Fields describing 200 response for api models model id versions version id training metadata raw in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **object** | Structured metadata details for this 200 response for api models model id versions version id training metadata raw. | [optional]
**source** | **str** | Source associated with this 200 response for api models model id versions version id training metadata raw; preserve server-returned values when passing them to another operation. Supported values: &#x60;local&#x60;, &#x60;remote&#x60;. | [optional]
**version_id** | **int** | Stable identifier for the version; use it in subsequent API calls instead of a display name. | [optional]

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
