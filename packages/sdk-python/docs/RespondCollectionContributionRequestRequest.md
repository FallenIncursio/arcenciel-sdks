# RespondCollectionContributionRequestRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action associated with this request payload; preserve server-returned values when passing them to another operation. Supported values: &#x60;approve&#x60;, &#x60;decline&#x60;. |

## Example

```python
from arcenciel.generated.models.respond_collection_contribution_request_request import RespondCollectionContributionRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RespondCollectionContributionRequestRequest from a JSON string
respond_collection_contribution_request_request_instance = RespondCollectionContributionRequestRequest.from_json(json)
# print the JSON string representation of the object
print(RespondCollectionContributionRequestRequest.to_json())

# convert the object into a dict
respond_collection_contribution_request_request_dict = respond_collection_contribution_request_request_instance.to_dict()
# create an instance of RespondCollectionContributionRequestRequest from a dict
respond_collection_contribution_request_request_from_dict = RespondCollectionContributionRequestRequest.from_dict(respond_collection_contribution_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
