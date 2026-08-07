# UpdateMySocialLinksRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**List[UpdateMySocialLinksRequestLinksInner]**](UpdateMySocialLinksRequestLinksInner.md) |  |

## Example

```python
from arcenciel.generated.models.update_my_social_links_request import UpdateMySocialLinksRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMySocialLinksRequest from a JSON string
update_my_social_links_request_instance = UpdateMySocialLinksRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMySocialLinksRequest.to_json())

# convert the object into a dict
update_my_social_links_request_dict = update_my_social_links_request_instance.to_dict()
# create an instance of UpdateMySocialLinksRequest from a dict
update_my_social_links_request_from_dict = UpdateMySocialLinksRequest.from_dict(update_my_social_links_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
