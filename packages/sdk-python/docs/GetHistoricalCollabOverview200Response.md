# GetHistoricalCollabOverview200Response

Fields describing 200 response for api collabs history overview in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collab_count** | **int** | Number of collab records represented by this 200 response for api collabs history overview. |
**creator_count** | **int** | Number of creator records represented by this 200 response for api collabs history overview. |
**end_year** | **int** | Numeric end year reported for this 200 response for api collabs history overview. | [optional]
**major_count** | **int** | Number of major records represented by this 200 response for api collabs history overview. |
**mini_count** | **int** | Number of mini records represented by this 200 response for api collabs history overview. |
**participant_count** | **int** | Number of participant records represented by this 200 response for api collabs history overview. |
**start_year** | **int** | Numeric start year reported for this 200 response for api collabs history overview. | [optional]
**submission_count** | **int** | Number of submission records represented by this 200 response for api collabs history overview. |

## Example

```python
from arcenciel.generated.models.get_historical_collab_overview200_response import GetHistoricalCollabOverview200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetHistoricalCollabOverview200Response from a JSON string
get_historical_collab_overview200_response_instance = GetHistoricalCollabOverview200Response.from_json(json)
# print the JSON string representation of the object
print(GetHistoricalCollabOverview200Response.to_json())

# convert the object into a dict
get_historical_collab_overview200_response_dict = get_historical_collab_overview200_response_instance.to_dict()
# create an instance of GetHistoricalCollabOverview200Response from a dict
get_historical_collab_overview200_response_from_dict = GetHistoricalCollabOverview200Response.from_dict(get_historical_collab_overview200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
