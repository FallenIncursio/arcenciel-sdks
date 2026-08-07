# RegisterModelVersionDownload200Response

200 response for api models model Id versions version Id download register used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery** | **str** | Delivery accepted or returned by this contract. | [optional]
**message** | **str** | Message accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.register_model_version_download200_response import RegisterModelVersionDownload200Response

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterModelVersionDownload200Response from a JSON string
register_model_version_download200_response_instance = RegisterModelVersionDownload200Response.from_json(json)
# print the JSON string representation of the object
print(RegisterModelVersionDownload200Response.to_json())

# convert the object into a dict
register_model_version_download200_response_dict = register_model_version_download200_response_instance.to_dict()
# create an instance of RegisterModelVersionDownload200Response from a dict
register_model_version_download200_response_from_dict = RegisterModelVersionDownload200Response.from_dict(register_model_version_download200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
