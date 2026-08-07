# GetHistoricalCollabOverview200Response

200 response for api collabs history overview used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collab_count** | **int** | Collab Count accepted or returned by this contract. |
**creator_count** | **int** | Creator Count accepted or returned by this contract. |
**end_year** | **int** | End Year accepted or returned by this contract. | [optional]
**major_count** | **int** | Major Count accepted or returned by this contract. |
**mini_count** | **int** | Mini Count accepted or returned by this contract. |
**participant_count** | **int** | Participant Count accepted or returned by this contract. |
**start_year** | **int** | Start Year accepted or returned by this contract. | [optional]
**submission_count** | **int** | Submission Count accepted or returned by this contract. |

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
