# TouchGeneratorUploads404Response

404 response for api generator uploads touch used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error accepted or returned by this contract. |
**error_code** | **str** | Stable machine-readable error code for client handling. | [optional]
**safety_reason** | **str** | Present for safety-restricted output access responses (for example &#x60;nsfw&#x60;). | [optional]
**safety_status** | **str** | Present for safety-restricted output access responses. | [optional]
**expires_at** | **datetime** | Expires At accepted or returned by this contract. |
**missing** | **List[str]** | Missing accepted or returned by this contract. |
**touched** | **int** | Touched accepted or returned by this contract. |
**ttl_seconds** | **int** | Ttl Seconds accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.touch_generator_uploads404_response import TouchGeneratorUploads404Response

# TODO update the JSON string below
json = "{}"
# create an instance of TouchGeneratorUploads404Response from a JSON string
touch_generator_uploads404_response_instance = TouchGeneratorUploads404Response.from_json(json)
# print the JSON string representation of the object
print(TouchGeneratorUploads404Response.to_json())

# convert the object into a dict
touch_generator_uploads404_response_dict = touch_generator_uploads404_response_instance.to_dict()
# create an instance of TouchGeneratorUploads404Response from a dict
touch_generator_uploads404_response_from_dict = TouchGeneratorUploads404Response.from_dict(touch_generator_uploads404_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
