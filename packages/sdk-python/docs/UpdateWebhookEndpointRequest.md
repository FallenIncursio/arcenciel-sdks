# UpdateWebhookEndpointRequest

Fields describing request payload in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether enabled applies to this request payload. | [optional]
**event_types** | **List[str]** | Ordered event types entries included with this request payload; an empty list means none are available. | [optional]
**name** | **str** | Human-readable name for this request payload; it is not a stable identifier. Maximum length: 100 characters. | [optional]
**url** | **str** | URL for the url associated with this request payload; do not persist temporary signed query parameters. Format: uri. | [optional]

## Example

```python
from arcenciel.generated.models.update_webhook_endpoint_request import UpdateWebhookEndpointRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWebhookEndpointRequest from a JSON string
update_webhook_endpoint_request_instance = UpdateWebhookEndpointRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateWebhookEndpointRequest.to_json())

# convert the object into a dict
update_webhook_endpoint_request_dict = update_webhook_endpoint_request_instance.to_dict()
# create an instance of UpdateWebhookEndpointRequest from a dict
update_webhook_endpoint_request_from_dict = UpdateWebhookEndpointRequest.from_dict(update_webhook_endpoint_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
