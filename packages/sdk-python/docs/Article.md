# Article

Article used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bumped_at** | **datetime** | Bumped At accepted or returned by this contract. | [optional]
**content** | **str** | Sanitized rich HTML article body. Existing legacy Markdown remains render-compatible during migration. | [optional]
**content_bumped_at** | **datetime** | Content Bumped At accepted or returned by this contract. | [optional]
**created_at** | **datetime** | Created At accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**tags** | **List[str]** | Tags accepted or returned by this contract. | [optional]
**thumbnail_file** | **str** | Thumbnail File accepted or returned by this contract. | [optional]
**title** | **str** | Title accepted or returned by this contract. | [optional]
**updated_at** | **datetime** | Updated At accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.article import Article

# TODO update the JSON string below
json = "{}"
# create an instance of Article from a JSON string
article_instance = Article.from_json(json)
# print the JSON string representation of the object
print(Article.to_json())

# convert the object into a dict
article_dict = article_instance.to_dict()
# create an instance of Article from a dict
article_from_dict = Article.from_dict(article_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
