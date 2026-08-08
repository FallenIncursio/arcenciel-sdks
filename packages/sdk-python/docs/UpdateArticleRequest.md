# UpdateArticleRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Sanitized rich HTML article body. Legacy Markdown or mixed Markdown/HTML is accepted for compatibility and rendered by the rich-content pipeline. | [optional]
**tags** | **str** | Tags associated with this request payload; preserve server-returned values when passing them to another operation. | [optional]
**title** | **str** | Display title shown to users for this request payload. | [optional]

## Example

```python
from arcenciel.generated.models.update_article_request import UpdateArticleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateArticleRequest from a JSON string
update_article_request_instance = UpdateArticleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateArticleRequest.to_json())

# convert the object into a dict
update_article_request_dict = update_article_request_instance.to_dict()
# create an instance of UpdateArticleRequest from a dict
update_article_request_from_dict = UpdateArticleRequest.from_dict(update_article_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
