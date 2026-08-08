# CollectionPagination

Fields describing collection pagination in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**images** | [**CollectionItemPage**](CollectionItemPage.md) |  |
**models** | [**CollectionItemPage**](CollectionItemPage.md) |  |

## Example

```python
from arcenciel.generated.models.collection_pagination import CollectionPagination

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionPagination from a JSON string
collection_pagination_instance = CollectionPagination.from_json(json)
# print the JSON string representation of the object
print(CollectionPagination.to_json())

# convert the object into a dict
collection_pagination_dict = collection_pagination_instance.to_dict()
# create an instance of CollectionPagination from a dict
collection_pagination_from_dict = CollectionPagination.from_dict(collection_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
