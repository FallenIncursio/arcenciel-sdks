# CreateCollectionRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_collaborators** | **bool** | Whether allow collaborators applies to this request payload. | [optional]
**cover_image** | **str** | Path returned from the cover upload endpoint. | [optional]
**cover_image_rating** | **str** | Cover Image Rating associated with this request payload; preserve server-returned values when passing them to another operation. Supported values: &#x60;safe&#x60;, &#x60;questionable&#x60;, &#x60;sensitive&#x60;, &#x60;explicit&#x60;. | [optional]
**description** | **str** | User-facing description of this request payload; it may contain an empty string when no description was supplied. | [optional]
**item_placement** | **str** | Adjust the default placement for newly added items. | [optional]
**name** | **str** | Human-readable name for this request payload; it is not a stable identifier. |
**type** | **str** | Discriminator identifying the kind of request payload; clients should tolerate future values. Supported values: &#x60;MODEL&#x60;, &#x60;IMAGE&#x60;. |
**visibility** | **str** | Visibility associated with this request payload; preserve server-returned values when passing them to another operation. Supported values: &#x60;PUBLIC&#x60;, &#x60;UNLISTED&#x60;, &#x60;PRIVATE&#x60;. | [optional]

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
