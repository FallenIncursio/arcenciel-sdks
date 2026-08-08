# DeveloperWebhookEventType

Fields describing developer webhook event type in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User-facing description of this developer webhook event type; it may contain an empty string when no description was supplied. |
**type** | **str** | Discriminator identifying the kind of developer webhook event type; clients should tolerate future values. |
**version** | **str** | Version associated with this developer webhook event type; preserve server-returned values when passing them to another operation. |

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
