# DeveloperPinnedTemplatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional]
**model_ids** | **List[int]** |  |
**models** | [**List[Model]**](Model.md) | Present only when compact&#x3D;true is requested. | [optional]

## Example

```python
from arcenciel.generated.models.developer_pinned_templates_response import DeveloperPinnedTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperPinnedTemplatesResponse from a JSON string
developer_pinned_templates_response_instance = DeveloperPinnedTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperPinnedTemplatesResponse.to_json())

# convert the object into a dict
developer_pinned_templates_response_dict = developer_pinned_templates_response_instance.to_dict()
# create an instance of DeveloperPinnedTemplatesResponse from a dict
developer_pinned_templates_response_from_dict = DeveloperPinnedTemplatesResponse.from_dict(developer_pinned_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
