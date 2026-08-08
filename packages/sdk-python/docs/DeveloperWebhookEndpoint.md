# DeveloperWebhookEndpoint

Developer Webhook Endpoint used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_disabled_at** | **datetime** | Auto Disabled At accepted or returned by this contract. | [optional]
**consecutive_failure_count** | **int** | Consecutive Failure Count accepted or returned by this contract. |
**created_at** | **datetime** | Created At accepted or returned by this contract. |
**enabled** | **bool** | Enabled accepted or returned by this contract. |
**event_types** | **List[str]** | Event Types accepted or returned by this contract. |
**id** | **str** | Id accepted or returned by this contract. |
**last_delivered_at** | **datetime** | Last Delivered At accepted or returned by this contract. | [optional]
**last_error** | **str** | Last Error accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. |
**secret_last_rotated_at** | **datetime** | Secret Last Rotated At accepted or returned by this contract. | [optional]
**updated_at** | **datetime** | Updated At accepted or returned by this contract. |
**url** | **str** | Url accepted or returned by this contract. |
**verified_at** | **datetime** | Verified At accepted or returned by this contract. | [optional]

## Example

```python
from arcenciel.generated.models.developer_webhook_endpoint import DeveloperWebhookEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperWebhookEndpoint from a JSON string
developer_webhook_endpoint_instance = DeveloperWebhookEndpoint.from_json(json)
# print the JSON string representation of the object
print(DeveloperWebhookEndpoint.to_json())

# convert the object into a dict
developer_webhook_endpoint_dict = developer_webhook_endpoint_instance.to_dict()
# create an instance of DeveloperWebhookEndpoint from a dict
developer_webhook_endpoint_from_dict = DeveloperWebhookEndpoint.from_dict(developer_webhook_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
