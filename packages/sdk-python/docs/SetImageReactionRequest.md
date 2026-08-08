# SetImageReactionRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reaction_type** | **str** | The type of reaction (heart, like, or dislike). |

## Example

```python
from arcenciel.generated.models.set_image_reaction_request import SetImageReactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetImageReactionRequest from a JSON string
set_image_reaction_request_instance = SetImageReactionRequest.from_json(json)
# print the JSON string representation of the object
print(SetImageReactionRequest.to_json())

# convert the object into a dict
set_image_reaction_request_dict = set_image_reaction_request_instance.to_dict()
# create an instance of SetImageReactionRequest from a dict
set_image_reaction_request_from_dict = SetImageReactionRequest.from_dict(set_image_reaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
