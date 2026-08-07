# CreateCollectionRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_collaborators** | **bool** | Allow Collaborators accepted or returned by this contract. | [optional]
**cover_image** | **str** | Path returned from the cover upload endpoint. | [optional]
**cover_image_rating** | **str** | Cover Image Rating accepted or returned by this contract. | [optional]
**description** | **str** | Description accepted or returned by this contract. | [optional]
**item_placement** | **str** | Adjust the default placement for newly added items. | [optional]
**name** | **str** | Name accepted or returned by this contract. |
**type** | **str** | Type accepted or returned by this contract. |
**visibility** | **str** | Visibility accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.create_collection_request import CreateCollectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCollectionRequest from a JSON string
create_collection_request_instance = CreateCollectionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCollectionRequest.to_json())

# convert the object into a dict
create_collection_request_dict = create_collection_request_instance.to_dict()
# create an instance of CreateCollectionRequest from a dict
create_collection_request_from_dict = CreateCollectionRequest.from_dict(create_collection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
