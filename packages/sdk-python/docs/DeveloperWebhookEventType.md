# DeveloperWebhookEventType

Developer Webhook Event Type used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description accepted or returned by this contract. |
**type** | **str** | Type accepted or returned by this contract. |
**version** | **str** | Version accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.developer_webhook_event_type import DeveloperWebhookEventType

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperWebhookEventType from a JSON string
developer_webhook_event_type_instance = DeveloperWebhookEventType.from_json(json)
# print the JSON string representation of the object
print(DeveloperWebhookEventType.to_json())

# convert the object into a dict
developer_webhook_event_type_dict = developer_webhook_event_type_instance.to_dict()
# create an instance of DeveloperWebhookEventType from a dict
developer_webhook_event_type_from_dict = DeveloperWebhookEventType.from_dict(developer_webhook_event_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
