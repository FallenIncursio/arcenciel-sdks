# ListWebhookDeliveries200Response

Fields describing 200 response for api webhooks endpoints endpoint id deliveries in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DeveloperWebhookDelivery]**](DeveloperWebhookDelivery.md) | Ordered data entries included with this 200 response for api webhooks endpoints endpoint id deliveries; an empty list means none are available. |
**next_cursor** | **str** | Opaque continuation token for the next page of this 200 response for api webhooks endpoints endpoint id deliveries; absent or null means iteration is complete. |

## Example

```python
from arcenciel.generated.models.list_webhook_deliveries200_response import ListWebhookDeliveries200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookDeliveries200Response from a JSON string
list_webhook_deliveries200_response_instance = ListWebhookDeliveries200Response.from_json(json)
# print the JSON string representation of the object
print(ListWebhookDeliveries200Response.to_json())

# convert the object into a dict
list_webhook_deliveries200_response_dict = list_webhook_deliveries200_response_instance.to_dict()
# create an instance of ListWebhookDeliveries200Response from a dict
list_webhook_deliveries200_response_from_dict = ListWebhookDeliveries200Response.from_dict(list_webhook_deliveries200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
