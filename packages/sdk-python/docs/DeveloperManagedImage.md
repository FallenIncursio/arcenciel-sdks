# DeveloperManagedImage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** |  | [optional]
**file_path** | **str** |  |
**height** | **int** |  | [optional]
**id** | **int** |  |
**rating** | **str** |  | [optional]
**variants** | **Dict[str, object]** |  | [optional]
**width** | **int** |  | [optional]

## Example

```python
from arcenciel.generated.models.developer_managed_image import DeveloperManagedImage

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperManagedImage from a JSON string
developer_managed_image_instance = DeveloperManagedImage.from_json(json)
# print the JSON string representation of the object
print(DeveloperManagedImage.to_json())

# convert the object into a dict
developer_managed_image_dict = developer_managed_image_instance.to_dict()
# create an instance of DeveloperManagedImage from a dict
developer_managed_image_from_dict = DeveloperManagedImage.from_dict(developer_managed_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
