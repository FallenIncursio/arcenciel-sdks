# DeveloperImageReactionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**Image**](Image.md) |  | [optional]
**image_id** | **int** | Present when the requested reaction was already active. | [optional]
**message** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_image_reaction_response import DeveloperImageReactionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperImageReactionResponse from a JSON string
developer_image_reaction_response_instance = DeveloperImageReactionResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperImageReactionResponse.to_json())

# convert the object into a dict
developer_image_reaction_response_dict = developer_image_reaction_response_instance.to_dict()
# create an instance of DeveloperImageReactionResponse from a dict
developer_image_reaction_response_from_dict = DeveloperImageReactionResponse.from_dict(developer_image_reaction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
