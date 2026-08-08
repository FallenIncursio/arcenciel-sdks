# CreateImageCrosspostRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manual** | **bool** | Whether the crosspost was made manually. | [optional]
**model_ids** | **List[int]** | Array of model IDs. |

## Example

```python
from arcenciel.generated.models.create_image_crosspost_request import CreateImageCrosspostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateImageCrosspostRequest from a JSON string
create_image_crosspost_request_instance = CreateImageCrosspostRequest.from_json(json)
# print the JSON string representation of the object
print(CreateImageCrosspostRequest.to_json())

# convert the object into a dict
create_image_crosspost_request_dict = create_image_crosspost_request_instance.to_dict()
# create an instance of CreateImageCrosspostRequest from a dict
create_image_crosspost_request_from_dict = CreateImageCrosspostRequest.from_dict(create_image_crosspost_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
