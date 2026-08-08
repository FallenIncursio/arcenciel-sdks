# UpdateWebhookEndpointRequest

Request payload used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled accepted or returned by this contract. | [optional]
**event_types** | **List[str]** | Event Types accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. | [optional]
**url** | **str** | Url accepted or returned by this contract. | [optional]

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
