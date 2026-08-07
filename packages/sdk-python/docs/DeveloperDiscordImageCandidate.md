# DeveloperDiscordImageCandidate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional]
**disabled_reason** | **str** |  |
**dislike_count** | **int** |  | [optional]
**file_name** | **str** |  | [optional]
**file_path** | **str** |  | [optional]
**heart_count** | **int** |  | [optional]
**height** | **int** |  | [optional]
**id** | **int** |  |
**is_already_attached** | **bool** |  |
**is_attachable** | **bool** |  |
**like_count** | **int** |  | [optional]
**matched_hashes** | **List[str]** |  |
**title** | **str** |  | [optional]
**upload_source** | **str** |  | [optional]
**uploaded_via_discord** | **bool** |  | [optional]
**variants** | **Dict[str, object]** |  | [optional]
**width** | **int** |  | [optional]

## Example

```python
from arcenciel.generated.models.developer_discord_image_candidate import DeveloperDiscordImageCandidate

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperDiscordImageCandidate from a JSON string
developer_discord_image_candidate_instance = DeveloperDiscordImageCandidate.from_json(json)
# print the JSON string representation of the object
print(DeveloperDiscordImageCandidate.to_json())

# convert the object into a dict
developer_discord_image_candidate_dict = developer_discord_image_candidate_instance.to_dict()
# create an instance of DeveloperDiscordImageCandidate from a dict
developer_discord_image_candidate_from_dict = DeveloperDiscordImageCandidate.from_dict(developer_discord_image_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
