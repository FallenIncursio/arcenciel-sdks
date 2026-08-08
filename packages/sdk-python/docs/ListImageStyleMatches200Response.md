# ListImageStyleMatches200Response

Fields describing 200 response for api images id style matches in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matches** | [**List[Image]**](Image.md) | Ordered matches entries included with this 200 response for api images id style matches; an empty list means none are available. | [optional]
**meta** | **object** | Structured meta details for this 200 response for api images id style matches. | [optional]

## Example

```python
from arcenciel.generated.models.list_image_style_matches200_response import ListImageStyleMatches200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListImageStyleMatches200Response from a JSON string
list_image_style_matches200_response_instance = ListImageStyleMatches200Response.from_json(json)
# print the JSON string representation of the object
print(ListImageStyleMatches200Response.to_json())

# convert the object into a dict
list_image_style_matches200_response_dict = list_image_style_matches200_response_instance.to_dict()
# create an instance of ListImageStyleMatches200Response from a dict
list_image_style_matches200_response_from_dict = ListImageStyleMatches200Response.from_dict(list_image_style_matches200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
