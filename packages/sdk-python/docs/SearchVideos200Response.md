# SearchVideos200Response

Fields describing 200 response for api videos search in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Video]**](Video.md) | Ordered data entries included with this 200 response for api videos search; an empty list means none are available. | [optional]
**has_more** | **bool** | Whether another page of this 200 response for api videos search is available after the current result. | [optional]
**limit** | **int** | Maximum number of records requested or returned in one page of this 200 response for api videos search. | [optional]
**next_cursor** | **str** | Opaque continuation token for the next page of this 200 response for api videos search; absent or null means iteration is complete. | [optional]
**page** | **int** | One-based result page requested or returned for this 200 response for api videos search. | [optional]
**showcased** | [**List[Video]**](Video.md) | Ordered showcased entries included with this 200 response for api videos search; an empty list means none are available. | [optional]
**total_count** | **int** | Total number of matching records across all pages for this 200 response for api videos search. | [optional]
**total_pages** | **int** | Total number of pages available at the current page size for this 200 response for api videos search. | [optional]

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
