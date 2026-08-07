# SetArticleFavoriteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**favorite** | **bool** | The desired favorite state. |

## Example

```python
from arcenciel.generated.models.set_article_favorite_request import SetArticleFavoriteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetArticleFavoriteRequest from a JSON string
set_article_favorite_request_instance = SetArticleFavoriteRequest.from_json(json)
# print the JSON string representation of the object
print(SetArticleFavoriteRequest.to_json())

# convert the object into a dict
set_article_favorite_request_dict = set_article_favorite_request_instance.to_dict()
# create an instance of SetArticleFavoriteRequest from a dict
set_article_favorite_request_from_dict = SetArticleFavoriteRequest.from_dict(set_article_favorite_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
