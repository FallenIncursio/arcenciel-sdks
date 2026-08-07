# ListImageStyleMatches200Response

200 response for api images id style matches used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matches** | [**List[Image]**](Image.md) | Matches accepted or returned by this contract. | [optional]
**meta** | **object** | Meta accepted or returned by this contract. | [optional]

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
