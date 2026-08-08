# TestWebhookEndpoint202ResponseData

Structured data details for this 202 response for api webhooks endpoints endpoint id test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_id** | **str** | Stable identifier for the delivery; use it in subsequent API calls instead of a display name. |
**event_id** | **str** | Stable identifier for the event; use it in subsequent API calls instead of a display name. |
**status** | **str** | Current lifecycle state of this data; clients should tolerate future values. Supported values: &#x60;PENDING&#x60;. |

## Example

```python
from arcenciel.generated.models.test_webhook_endpoint202_response_data import TestWebhookEndpoint202ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TestWebhookEndpoint202ResponseData from a JSON string
test_webhook_endpoint202_response_data_instance = TestWebhookEndpoint202ResponseData.from_json(json)
# print the JSON string representation of the object
print(TestWebhookEndpoint202ResponseData.to_json())

# convert the object into a dict
test_webhook_endpoint202_response_data_dict = test_webhook_endpoint202_response_data_instance.to_dict()
# create an instance of TestWebhookEndpoint202ResponseData from a dict
test_webhook_endpoint202_response_data_from_dict = TestWebhookEndpoint202ResponseData.from_dict(test_webhook_endpoint202_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
