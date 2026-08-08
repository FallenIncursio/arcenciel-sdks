# AnalyzeImagePrompt200ResponseSummary

Structured summary details for this 200 response for api images id prompt analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description_count** | **int** | Number of description records represented by this summary. |
**tag_count** | **int** | Number of tag records represented by this summary. |
**unclassified_count** | **int** | Number of unclassified records represented by this summary. |

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
