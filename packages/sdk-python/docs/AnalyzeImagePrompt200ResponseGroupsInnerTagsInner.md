# AnalyzeImagePrompt200ResponseGroupsInnerTagsInner

Structured tags item details for this tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical** | **str** | Canonical associated with this tags item; preserve server-returned values when passing them to another operation. |
**match** | **str** | Match associated with this tags item; preserve server-returned values when passing them to another operation. Supported values: &#x60;EXACT&#x60;, &#x60;ALIAS&#x60;, &#x60;HEURISTIC&#x60;. |
**raw** | **str** | Original token fragment, retaining inline weighting and artist markers. Outer wrappers shared by multi-tag attention groups may be omitted.  |
**source** | **str** | Source associated with this tags item; preserve server-returned values when passing them to another operation. Supported values: &#x60;ACTIVATION&#x60;, &#x60;CATALOG&#x60;, &#x60;SEMANTIC&#x60;, &#x60;HEURISTIC&#x60;. |

## Example

```python
from arcenciel.generated.models.analyze_image_prompt200_response_groups_inner_tags_inner import AnalyzeImagePrompt200ResponseGroupsInnerTagsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeImagePrompt200ResponseGroupsInnerTagsInner from a JSON string
analyze_image_prompt200_response_groups_inner_tags_inner_instance = AnalyzeImagePrompt200ResponseGroupsInnerTagsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyzeImagePrompt200ResponseGroupsInnerTagsInner.to_json())

# convert the object into a dict
analyze_image_prompt200_response_groups_inner_tags_inner_dict = analyze_image_prompt200_response_groups_inner_tags_inner_instance.to_dict()
# create an instance of AnalyzeImagePrompt200ResponseGroupsInnerTagsInner from a dict
analyze_image_prompt200_response_groups_inner_tags_inner_from_dict = AnalyzeImagePrompt200ResponseGroupsInnerTagsInner.from_dict(analyze_image_prompt200_response_groups_inner_tags_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
