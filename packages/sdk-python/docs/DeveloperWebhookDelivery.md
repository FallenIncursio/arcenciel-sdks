# DeveloperWebhookDelivery

Fields describing developer webhook delivery in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_count** | **int** | Number of attempt records represented by this developer webhook delivery. Minimum: 0. |
**created_at** | **datetime** | UTC timestamp when this developer webhook delivery was created. Format: date-time. |
**endpoint_id** | **str** | Stable identifier for the endpoint; use it in subsequent API calls instead of a display name. |
**event_id** | **str** | Stable identifier for the event; use it in subsequent API calls instead of a display name. |
**id** | **str** | Stable identifier for the developer webhook delivery; use it in subsequent API calls instead of a display name. |
**last_attempt_at** | **datetime** | UTC timestamp for the last attempt at transition of this developer webhook delivery. Format: date-time. | [optional]
**last_error** | **str** | Last Error associated with this developer webhook delivery; preserve server-returned values when passing them to another operation. | [optional]
**last_status_code** | **int** | Numeric last status code reported for this developer webhook delivery. | [optional]
**next_attempt_at** | **datetime** | UTC timestamp for the next attempt at transition of this developer webhook delivery. Format: date-time. | [optional]
**response_snippet** | **str** | Response Snippet associated with this developer webhook delivery; preserve server-returned values when passing them to another operation. | [optional]
**status** | **str** | Current lifecycle state of this developer webhook delivery; clients should tolerate future values. Supported values: &#x60;PENDING&#x60;, &#x60;SENDING&#x60;, &#x60;SUCCESS&#x60;, &#x60;FAILED&#x60;. |
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this developer webhook delivery. Format: date-time. |

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
