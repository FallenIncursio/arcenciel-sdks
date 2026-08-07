# DeveloperDiscordImageCandidatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**already_attached_count** | **int** |  |
**attachable_count** | **int** |  |
**items** | [**List[DeveloperDiscordImageCandidate]**](DeveloperDiscordImageCandidate.md) |  |
**total_found** | **int** |  |

## Example

```python
from arcenciel.generated.models.developer_discord_image_candidates_response import DeveloperDiscordImageCandidatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperDiscordImageCandidatesResponse from a JSON string
developer_discord_image_candidates_response_instance = DeveloperDiscordImageCandidatesResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperDiscordImageCandidatesResponse.to_json())

# convert the object into a dict
developer_discord_image_candidates_response_dict = developer_discord_image_candidates_response_instance.to_dict()
# create an instance of DeveloperDiscordImageCandidatesResponse from a dict
developer_discord_image_candidates_response_from_dict = DeveloperDiscordImageCandidatesResponse.from_dict(developer_discord_image_candidates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
