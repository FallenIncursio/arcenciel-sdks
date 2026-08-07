# SetVideoReactionRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reaction_type** | **str** | The type of reaction. | [optional]

## Example

```python
from arcenciel.generated.models.set_video_reaction_request import SetVideoReactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetVideoReactionRequest from a JSON string
set_video_reaction_request_instance = SetVideoReactionRequest.from_json(json)
# print the JSON string representation of the object
print(SetVideoReactionRequest.to_json())

# convert the object into a dict
set_video_reaction_request_dict = set_video_reaction_request_instance.to_dict()
# create an instance of SetVideoReactionRequest from a dict
set_video_reaction_request_from_dict = SetVideoReactionRequest.from_dict(set_video_reaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
