# DownloadModelVersion200Response

Fields describing 200 response for api models model id versions version id download in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Message associated with this 200 response for api models model id versions version id download; preserve server-returned values when passing them to another operation. | [optional]

## Example

```python
from arcenciel.generated.models.download_model_version200_response import DownloadModelVersion200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadModelVersion200Response from a JSON string
download_model_version200_response_instance = DownloadModelVersion200Response.from_json(json)
# print the JSON string representation of the object
print(DownloadModelVersion200Response.to_json())

# convert the object into a dict
download_model_version200_response_dict = download_model_version200_response_instance.to_dict()
# create an instance of DownloadModelVersion200Response from a dict
download_model_version200_response_from_dict = DownloadModelVersion200Response.from_dict(download_model_version200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
