# DeveloperWebhookDeliveryResponse

Developer Webhook Delivery Response used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DeveloperWebhookDelivery**](DeveloperWebhookDelivery.md) |  |

## Example

```python
from arcenciel.generated.models.developer_webhook_delivery_response import DeveloperWebhookDeliveryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperWebhookDeliveryResponse from a JSON string
developer_webhook_delivery_response_instance = DeveloperWebhookDeliveryResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperWebhookDeliveryResponse.to_json())

# convert the object into a dict
developer_webhook_delivery_response_dict = developer_webhook_delivery_response_instance.to_dict()
# create an instance of DeveloperWebhookDeliveryResponse from a dict
developer_webhook_delivery_response_from_dict = DeveloperWebhookDeliveryResponse.from_dict(developer_webhook_delivery_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
