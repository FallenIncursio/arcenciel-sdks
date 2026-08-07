# DeveloperCollectionIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  |
**slug** | **str** |  |

## Example

```python
from arcenciel.generated.models.developer_collection_identity import DeveloperCollectionIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperCollectionIdentity from a JSON string
developer_collection_identity_instance = DeveloperCollectionIdentity.from_json(json)
# print the JSON string representation of the object
print(DeveloperCollectionIdentity.to_json())

# convert the object into a dict
developer_collection_identity_dict = developer_collection_identity_instance.to_dict()
# create an instance of DeveloperCollectionIdentity from a dict
developer_collection_identity_from_dict = DeveloperCollectionIdentity.from_dict(developer_collection_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
