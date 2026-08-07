# DeveloperVideoMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  |
**video** | [**Video**](Video.md) |  |

## Example

```python
from arcenciel.generated.models.developer_video_mutation_response import DeveloperVideoMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperVideoMutationResponse from a JSON string
developer_video_mutation_response_instance = DeveloperVideoMutationResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperVideoMutationResponse.to_json())

# convert the object into a dict
developer_video_mutation_response_dict = developer_video_mutation_response_instance.to_dict()
# create an instance of DeveloperVideoMutationResponse from a dict
developer_video_mutation_response_from_dict = DeveloperVideoMutationResponse.from_dict(developer_video_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
