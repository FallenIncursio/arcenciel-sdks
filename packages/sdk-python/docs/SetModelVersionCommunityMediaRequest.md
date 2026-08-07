# SetModelVersionCommunityMediaRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include** | **bool** | Set to true to add the media, false to remove it. |
**media_id** | **int** | Media Id accepted or returned by this contract. |
**media_type** | **str** | Media Type accepted or returned by this contract. |

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
