# AnalyzeImagePrompt200Response

Fields describing 200 response for api images id prompt analysis in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyzer_version** | **str** | Analyzer Version associated with this 200 response for api images id prompt analysis; preserve server-returned values when passing them to another operation. |
**description** | **List[str]** | User-facing description of this 200 response for api images id prompt analysis; it may contain an empty string when no description was supplied. |
**dialect** | **str** | Dialect associated with this 200 response for api images id prompt analysis; preserve server-returned values when passing them to another operation. Supported values: &#x60;ANIMA&#x60;, &#x60;BOORU&#x60;, &#x60;MIXED&#x60;, &#x60;NATURAL&#x60;, &#x60;UNKNOWN&#x60;. |
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
