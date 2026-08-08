# RegisterModelVersionDownload200Response

Fields describing 200 response for api models model id versions version id download register in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery** | **str** | Delivery associated with this 200 response for api models model id versions version id download register; preserve server-returned values when passing them to another operation. Supported values: &#x60;external&#x60;, &#x60;local&#x60;. | [optional]
**message** | **str** | Message associated with this 200 response for api models model id versions version id download register; preserve server-returned values when passing them to another operation. | [optional]

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
