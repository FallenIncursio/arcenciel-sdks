# InterrogateGeneratorImageUrl200Response

Fields describing 200 response for api generator autotag interrogate url in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Discriminator identifying the kind of 200 response for api generator autotag interrogate url; clients should tolerate future values. |
**image_url** | **str** | URL for the image url associated with this 200 response for api generator autotag interrogate url; do not persist temporary signed query parameters. Format: uri. |
**rating** | **str** | Content-safety rating assigned to this 200 response for api generator autotag interrogate url; callers must still apply their own audience policy. Supported values: &#x60;safe&#x60;, &#x60;questionable&#x60;, &#x60;sensitive&#x60;, &#x60;explicit&#x60;, &#x60;unknown&#x60;. |
**size** | **int** | Size of the associated 200 response for api generator autotag interrogate url content in the unit indicated by the field name. |
**source** | **str** | Source associated with this 200 response for api generator autotag interrogate url; preserve server-returned values when passing them to another operation. Supported values: &#x60;url&#x60;. |
**tag_count** | **int** | Number of tag records represented by this 200 response for api generator autotag interrogate url. |
**tags** | **List[str]** | Ordered tags entries included with this 200 response for api generator autotag interrogate url; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.interrogate_generator_image_url200_response import InterrogateGeneratorImageUrl200Response

# TODO update the JSON string below
json = "{}"
# create an instance of InterrogateGeneratorImageUrl200Response from a JSON string
interrogate_generator_image_url200_response_instance = InterrogateGeneratorImageUrl200Response.from_json(json)
# print the JSON string representation of the object
print(InterrogateGeneratorImageUrl200Response.to_json())

# convert the object into a dict
interrogate_generator_image_url200_response_dict = interrogate_generator_image_url200_response_instance.to_dict()
# create an instance of InterrogateGeneratorImageUrl200Response from a dict
interrogate_generator_image_url200_response_from_dict = InterrogateGeneratorImageUrl200Response.from_dict(interrogate_generator_image_url200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
