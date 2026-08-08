# TestWebhookEndpoint202ResponseData

Data accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_id** | **str** | Delivery Id accepted or returned by this contract. |
**event_id** | **str** | Event Id accepted or returned by this contract. |
**status** | **str** | Status accepted or returned by this contract. |

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
