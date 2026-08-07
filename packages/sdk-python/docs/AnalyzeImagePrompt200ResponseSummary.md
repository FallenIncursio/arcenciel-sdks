# AnalyzeImagePrompt200ResponseSummary

Summary accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description_count** | **int** | Description Count accepted or returned by this contract. |
**tag_count** | **int** | Tag Count accepted or returned by this contract. |
**unclassified_count** | **int** | Unclassified Count accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.analyze_image_prompt200_response_summary import AnalyzeImagePrompt200ResponseSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeImagePrompt200ResponseSummary from a JSON string
analyze_image_prompt200_response_summary_instance = AnalyzeImagePrompt200ResponseSummary.from_json(json)
# print the JSON string representation of the object
print(AnalyzeImagePrompt200ResponseSummary.to_json())

# convert the object into a dict
analyze_image_prompt200_response_summary_dict = analyze_image_prompt200_response_summary_instance.to_dict()
# create an instance of AnalyzeImagePrompt200ResponseSummary from a dict
analyze_image_prompt200_response_summary_from_dict = AnalyzeImagePrompt200ResponseSummary.from_dict(analyze_image_prompt200_response_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
