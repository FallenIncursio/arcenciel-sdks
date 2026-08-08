# SetModelVersionCommunityMediaRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include** | **bool** | Set to true to add the media, false to remove it. |
**media_id** | **int** | Stable identifier for the media; use it in subsequent API calls instead of a display name. |
**media_type** | **str** | Discriminator identifying the kind of request payload; clients should tolerate future values. Supported values: &#x60;IMAGE&#x60;, &#x60;VIDEO&#x60;. |

## Example

```python
from arcenciel.generated.models.set_model_version_community_media_request import SetModelVersionCommunityMediaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetModelVersionCommunityMediaRequest from a JSON string
set_model_version_community_media_request_instance = SetModelVersionCommunityMediaRequest.from_json(json)
# print the JSON string representation of the object
print(SetModelVersionCommunityMediaRequest.to_json())

# convert the object into a dict
set_model_version_community_media_request_dict = set_model_version_community_media_request_instance.to_dict()
# create an instance of SetModelVersionCommunityMediaRequest from a dict
set_model_version_community_media_request_from_dict = SetModelVersionCommunityMediaRequest.from_dict(set_model_version_community_media_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
