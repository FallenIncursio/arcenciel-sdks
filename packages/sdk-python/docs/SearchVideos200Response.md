# SearchVideos200Response

200 response for api videos search used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Video]**](Video.md) | Data accepted or returned by this contract. | [optional]
**has_more** | **bool** | Has More accepted or returned by this contract. | [optional]
**limit** | **int** | Limit accepted or returned by this contract. | [optional]
**next_cursor** | **str** | Next Cursor accepted or returned by this contract. | [optional]
**page** | **int** | Page accepted or returned by this contract. | [optional]
**showcased** | [**List[Video]**](Video.md) | Showcased accepted or returned by this contract. | [optional]
**total_count** | **int** | Total Count accepted or returned by this contract. | [optional]
**total_pages** | **int** | Total Pages accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.search_videos200_response import SearchVideos200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchVideos200Response from a JSON string
search_videos200_response_instance = SearchVideos200Response.from_json(json)
# print the JSON string representation of the object
print(SearchVideos200Response.to_json())

# convert the object into a dict
search_videos200_response_dict = search_videos200_response_instance.to_dict()
# create an instance of SearchVideos200Response from a dict
search_videos200_response_from_dict = SearchVideos200Response.from_dict(search_videos200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
