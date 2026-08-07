# TogglePinnedTemplateRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_id** | **int** | Model Id accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.toggle_pinned_template_request import TogglePinnedTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TogglePinnedTemplateRequest from a JSON string
toggle_pinned_template_request_instance = TogglePinnedTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(TogglePinnedTemplateRequest.to_json())

# convert the object into a dict
toggle_pinned_template_request_dict = toggle_pinned_template_request_instance.to_dict()
# create an instance of TogglePinnedTemplateRequest from a dict
toggle_pinned_template_request_from_dict = TogglePinnedTemplateRequest.from_dict(toggle_pinned_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
