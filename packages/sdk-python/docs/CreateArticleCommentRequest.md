# CreateArticleCommentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  |
**parent_comment** | **int** |  | [optional]

## Example

```python
from arcenciel.generated.models.create_article_comment_request import CreateArticleCommentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateArticleCommentRequest from a JSON string
create_article_comment_request_instance = CreateArticleCommentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateArticleCommentRequest.to_json())

# convert the object into a dict
create_article_comment_request_dict = create_article_comment_request_instance.to_dict()
# create an instance of CreateArticleCommentRequest from a dict
create_article_comment_request_from_dict = CreateArticleCommentRequest.from_dict(create_article_comment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
