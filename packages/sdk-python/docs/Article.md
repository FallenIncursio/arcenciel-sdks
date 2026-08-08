# Article

Fields describing article in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bumped_at** | **datetime** | UTC timestamp for the bumped at transition of this article. Format: date-time. | [optional]
**content** | **str** | Sanitized rich HTML article body. Existing legacy Markdown remains render-compatible during migration. | [optional]
**content_bumped_at** | **datetime** | UTC timestamp for the content bumped at transition of this article. Format: date-time. | [optional]
**created_at** | **datetime** | UTC timestamp when this article was created. Format: date-time. | [optional]
**id** | **int** | Stable identifier for the article; use it in subsequent API calls instead of a display name. | [optional]
**tags** | **List[str]** | Ordered tags entries included with this article; an empty list means none are available. | [optional]
**thumbnail_file** | **str** | Thumbnail File associated with this article; preserve server-returned values when passing them to another operation. | [optional]
**title** | **str** | Display title shown to users for this article. | [optional]
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this article. Format: date-time. | [optional]

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
