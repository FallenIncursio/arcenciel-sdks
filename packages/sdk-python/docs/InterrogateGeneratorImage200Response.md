# InterrogateGeneratorImage200Response

200 response for api generator autotag interrogate used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rating** | **str** | Rating accepted or returned by this contract. |
**source** | **str** | Source accepted or returned by this contract. |
**tag_count** | **int** | Tag Count accepted or returned by this contract. |
**tags** | **List[str]** | Tags accepted or returned by this contract. |

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
