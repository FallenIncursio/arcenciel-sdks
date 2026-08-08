# GeneratorError

Fields describing generator error in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error associated with this generator error; preserve server-returned values when passing them to another operation. |
**error_code** | **str** | Stable machine-readable error code for client handling. | [optional]
**safety_reason** | **str** | Present for safety-restricted output access responses (for example &#x60;nsfw&#x60;). | [optional]
**safety_status** | **str** | Present for safety-restricted output access responses. | [optional]

## Example

```python
from arcenciel.generated.models.generator_error import GeneratorError

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorError from a JSON string
generator_error_instance = GeneratorError.from_json(json)
# print the JSON string representation of the object
print(GeneratorError.to_json())

# convert the object into a dict
generator_error_dict = generator_error_instance.to_dict()
# create an instance of GeneratorError from a dict
generator_error_from_dict = GeneratorError.from_dict(generator_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
