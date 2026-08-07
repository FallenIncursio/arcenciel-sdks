# UpdateCollectionRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_collaborators** | **bool** | Allow Collaborators accepted or returned by this contract. | [optional]
**cover_image** | **str** | Cover Image accepted or returned by this contract. | [optional]
**cover_image_rating** | **str** | Cover Image Rating accepted or returned by this contract. | [optional]
**description** | **str** | Description accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. | [optional]
**slug** | **str** | Slug accepted or returned by this contract. | [optional]
**visibility** | **str** | Visibility accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.update_collection_request import UpdateCollectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCollectionRequest from a JSON string
update_collection_request_instance = UpdateCollectionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCollectionRequest.to_json())

# convert the object into a dict
update_collection_request_dict = update_collection_request_instance.to_dict()
# create an instance of UpdateCollectionRequest from a dict
update_collection_request_from_dict = UpdateCollectionRequest.from_dict(update_collection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
