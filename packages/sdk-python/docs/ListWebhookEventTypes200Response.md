# ListWebhookEventTypes200Response

Fields describing 200 response for api webhooks event types in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DeveloperWebhookEventType]**](DeveloperWebhookEventType.md) | Ordered data entries included with this 200 response for api webhooks event types; an empty list means none are available. |

## Example

```python
from arcenciel.generated.models.list_webhook_event_types200_response import ListWebhookEventTypes200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookEventTypes200Response from a JSON string
list_webhook_event_types200_response_instance = ListWebhookEventTypes200Response.from_json(json)
# print the JSON string representation of the object
print(ListWebhookEventTypes200Response.to_json())

# convert the object into a dict
list_webhook_event_types200_response_dict = list_webhook_event_types200_response_instance.to_dict()
# create an instance of ListWebhookEventTypes200Response from a dict
list_webhook_event_types200_response_from_dict = ListWebhookEventTypes200Response.from_dict(list_webhook_event_types200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
