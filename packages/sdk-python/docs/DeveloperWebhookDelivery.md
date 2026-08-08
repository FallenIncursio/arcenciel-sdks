# DeveloperWebhookDelivery

Developer Webhook Delivery used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_count** | **int** | Attempt Count accepted or returned by this contract. |
**created_at** | **datetime** | Created At accepted or returned by this contract. |
**endpoint_id** | **str** | Endpoint Id accepted or returned by this contract. |
**event_id** | **str** | Event Id accepted or returned by this contract. |
**id** | **str** | Id accepted or returned by this contract. |
**last_attempt_at** | **datetime** | Last Attempt At accepted or returned by this contract. | [optional]
**last_error** | **str** | Last Error accepted or returned by this contract. | [optional]
**last_status_code** | **int** | Last Status Code accepted or returned by this contract. | [optional]
**next_attempt_at** | **datetime** | Next Attempt At accepted or returned by this contract. | [optional]
**response_snippet** | **str** | Response Snippet accepted or returned by this contract. | [optional]
**status** | **str** | Status accepted or returned by this contract. |
**updated_at** | **datetime** | Updated At accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.developer_webhook_delivery import DeveloperWebhookDelivery

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperWebhookDelivery from a JSON string
developer_webhook_delivery_instance = DeveloperWebhookDelivery.from_json(json)
# print the JSON string representation of the object
print(DeveloperWebhookDelivery.to_json())

# convert the object into a dict
developer_webhook_delivery_dict = developer_webhook_delivery_instance.to_dict()
# create an instance of DeveloperWebhookDelivery from a dict
developer_webhook_delivery_from_dict = DeveloperWebhookDelivery.from_dict(developer_webhook_delivery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
