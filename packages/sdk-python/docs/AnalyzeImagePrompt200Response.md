# AnalyzeImagePrompt200Response

200 response for api images id prompt analysis used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyzer_version** | **str** | Analyzer Version accepted or returned by this contract. |
**description** | **List[str]** | Description accepted or returned by this contract. |
**dialect** | **str** | Dialect accepted or returned by this contract. |
**groups** | [**List[AnalyzeImagePrompt200ResponseGroupsInner]**](AnalyzeImagePrompt200ResponseGroupsInner.md) | Non-empty groups in a stable display order. |
**summary** | [**AnalyzeImagePrompt200ResponseSummary**](AnalyzeImagePrompt200ResponseSummary.md) |  |

## Example

```python
from arcenciel.generated.models.analyze_image_prompt200_response import AnalyzeImagePrompt200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeImagePrompt200Response from a JSON string
analyze_image_prompt200_response_instance = AnalyzeImagePrompt200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyzeImagePrompt200Response.to_json())

# convert the object into a dict
analyze_image_prompt200_response_dict = analyze_image_prompt200_response_instance.to_dict()
# create an instance of AnalyzeImagePrompt200Response from a dict
analyze_image_prompt200_response_from_dict = AnalyzeImagePrompt200Response.from_dict(analyze_image_prompt200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
