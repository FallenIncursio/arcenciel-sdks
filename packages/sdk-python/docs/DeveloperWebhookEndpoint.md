# DeveloperWebhookEndpoint

Fields describing developer webhook endpoint in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_disabled_at** | **datetime** | UTC timestamp for the auto disabled at transition of this developer webhook endpoint. Format: date-time. | [optional]
**consecutive_failure_count** | **int** | Number of consecutive failure records represented by this developer webhook endpoint. Minimum: 0. |
**created_at** | **datetime** | UTC timestamp when this developer webhook endpoint was created. Format: date-time. |
**enabled** | **bool** | Whether enabled applies to this developer webhook endpoint. |
**event_types** | **List[str]** | Ordered event types entries included with this developer webhook endpoint; an empty list means none are available. |
**id** | **str** | Stable identifier for the developer webhook endpoint; use it in subsequent API calls instead of a display name. |
**last_delivered_at** | **datetime** | UTC timestamp for the last delivered at transition of this developer webhook endpoint. Format: date-time. | [optional]
**last_error** | **str** | Last Error associated with this developer webhook endpoint; preserve server-returned values when passing them to another operation. | [optional]
**name** | **str** | Human-readable name for this developer webhook endpoint; it is not a stable identifier. |
**secret_last_rotated_at** | **datetime** | UTC timestamp for the secret last rotated at transition of this developer webhook endpoint. Format: date-time. | [optional]
**updated_at** | **datetime** | UTC timestamp of the most recent persisted change to this developer webhook endpoint. Format: date-time. |
**url** | **str** | URL for the url associated with this developer webhook endpoint; do not persist temporary signed query parameters. Format: uri. |
**verified_at** | **datetime** | UTC timestamp for the verified at transition of this developer webhook endpoint. Format: date-time. | [optional]

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
