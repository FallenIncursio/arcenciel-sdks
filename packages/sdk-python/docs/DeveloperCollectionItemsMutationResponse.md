# DeveloperCollectionItemsMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added** | **List[int]** |  |
**added_count** | **int** |  |
**collection_id** | **int** |  |
**created_item_ids** | **List[int]** |  |
**duplicate** | **List[int]** |  |
**duplicate_count** | **int** |  |
**missing** | **List[int]** |  |
**missing_count** | **int** |  |
**type** | **str** | Current values are MODEL and IMAGE; clients must tolerate additions. |

## Example

```python
from arcenciel.generated.models.developer_collection_items_mutation_response import DeveloperCollectionItemsMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperCollectionItemsMutationResponse from a JSON string
developer_collection_items_mutation_response_instance = DeveloperCollectionItemsMutationResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperCollectionItemsMutationResponse.to_json())

# convert the object into a dict
developer_collection_items_mutation_response_dict = developer_collection_items_mutation_response_instance.to_dict()
# create an instance of DeveloperCollectionItemsMutationResponse from a dict
developer_collection_items_mutation_response_from_dict = DeveloperCollectionItemsMutationResponse.from_dict(developer_collection_items_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
