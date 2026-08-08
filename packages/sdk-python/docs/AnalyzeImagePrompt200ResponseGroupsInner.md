# AnalyzeImagePrompt200ResponseGroupsInner

Structured groups item details for this groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key associated with this groups item; preserve server-returned values when passing them to another operation. |
**label** | **str** | Label associated with this groups item; preserve server-returned values when passing them to another operation. |
**tags** | [**List[AnalyzeImagePrompt200ResponseGroupsInnerTagsInner]**](AnalyzeImagePrompt200ResponseGroupsInnerTagsInner.md) | Ordered tags entries included with this groups item; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.analyze_image_prompt200_response_groups_inner import AnalyzeImagePrompt200ResponseGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeImagePrompt200ResponseGroupsInner from a JSON string
analyze_image_prompt200_response_groups_inner_instance = AnalyzeImagePrompt200ResponseGroupsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyzeImagePrompt200ResponseGroupsInner.to_json())

# convert the object into a dict
analyze_image_prompt200_response_groups_inner_dict = analyze_image_prompt200_response_groups_inner_instance.to_dict()
# create an instance of AnalyzeImagePrompt200ResponseGroupsInner from a dict
analyze_image_prompt200_response_groups_inner_from_dict = AnalyzeImagePrompt200ResponseGroupsInner.from_dict(analyze_image_prompt200_response_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
