# RequestCollectionContributionRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Optional request message (max 500 characters). | [optional]

## Example

```python
from arcenciel.generated.models.request_collection_contribution_request import RequestCollectionContributionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RequestCollectionContributionRequest from a JSON string
request_collection_contribution_request_instance = RequestCollectionContributionRequest.from_json(json)
# print the JSON string representation of the object
print(RequestCollectionContributionRequest.to_json())

# convert the object into a dict
request_collection_contribution_request_dict = request_collection_contribution_request_instance.to_dict()
# create an instance of RequestCollectionContributionRequest from a dict
request_collection_contribution_request_from_dict = RequestCollectionContributionRequest.from_dict(request_collection_contribution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
