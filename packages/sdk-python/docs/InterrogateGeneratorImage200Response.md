# InterrogateGeneratorImage200Response

Fields describing 200 response for api generator autotag interrogate in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rating** | **str** | Content-safety rating assigned to this 200 response for api generator autotag interrogate; callers must still apply their own audience policy. Supported values: &#x60;safe&#x60;, &#x60;questionable&#x60;, &#x60;sensitive&#x60;, &#x60;explicit&#x60;, &#x60;unknown&#x60;. |
**source** | **str** | Source associated with this 200 response for api generator autotag interrogate; preserve server-returned values when passing them to another operation. Supported values: &#x60;upload&#x60;. |
**tag_count** | **int** | Number of tag records represented by this 200 response for api generator autotag interrogate. |
**tags** | **List[str]** | Ordered tags entries included with this 200 response for api generator autotag interrogate; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.interrogate_generator_image200_response import InterrogateGeneratorImage200Response

# TODO update the JSON string below
json = "{}"
# create an instance of InterrogateGeneratorImage200Response from a JSON string
interrogate_generator_image200_response_instance = InterrogateGeneratorImage200Response.from_json(json)
# print the JSON string representation of the object
print(InterrogateGeneratorImage200Response.to_json())

# convert the object into a dict
interrogate_generator_image200_response_dict = interrogate_generator_image200_response_instance.to_dict()
# create an instance of InterrogateGeneratorImage200Response from a dict
interrogate_generator_image200_response_from_dict = InterrogateGeneratorImage200Response.from_dict(interrogate_generator_image200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
