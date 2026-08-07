# DeveloperVideoReactionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  |
**video** | [**Video**](Video.md) |  | [optional]
**video_id** | **int** | Present when the requested reaction was already active. | [optional]

## Example

```python
from arcenciel.generated.models.developer_video_reaction_response import DeveloperVideoReactionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperVideoReactionResponse from a JSON string
developer_video_reaction_response_instance = DeveloperVideoReactionResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperVideoReactionResponse.to_json())

# convert the object into a dict
developer_video_reaction_response_dict = developer_video_reaction_response_instance.to_dict()
# create an instance of DeveloperVideoReactionResponse from a dict
developer_video_reaction_response_from_dict = DeveloperVideoReactionResponse.from_dict(developer_video_reaction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
