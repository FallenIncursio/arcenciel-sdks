# ListWebhookEndpoints200Response

Fields describing 200 response for api webhooks endpoints in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DeveloperWebhookEndpoint]**](DeveloperWebhookEndpoint.md) | Ordered data entries included with this 200 response for api webhooks endpoints; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.list_webhook_endpoints200_response import ListWebhookEndpoints200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookEndpoints200Response from a JSON string
list_webhook_endpoints200_response_instance = ListWebhookEndpoints200Response.from_json(json)
# print the JSON string representation of the object
print(ListWebhookEndpoints200Response.to_json())

# convert the object into a dict
list_webhook_endpoints200_response_dict = list_webhook_endpoints200_response_instance.to_dict()
# create an instance of ListWebhookEndpoints200Response from a dict
list_webhook_endpoints200_response_from_dict = ListWebhookEndpoints200Response.from_dict(list_webhook_endpoints200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
