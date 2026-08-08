# TestWebhookEndpoint202Response

Fields describing 202 response for api webhooks endpoints endpoint id test in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TestWebhookEndpoint202ResponseData**](TestWebhookEndpoint202ResponseData.md) |  |

## Example

```python
from arcenciel.generated.models.test_webhook_endpoint202_response import TestWebhookEndpoint202Response

# TODO update the JSON string below
json = "{}"
# create an instance of TestWebhookEndpoint202Response from a JSON string
test_webhook_endpoint202_response_instance = TestWebhookEndpoint202Response.from_json(json)
# print the JSON string representation of the object
print(TestWebhookEndpoint202Response.to_json())

# convert the object into a dict
test_webhook_endpoint202_response_dict = test_webhook_endpoint202_response_instance.to_dict()
# create an instance of TestWebhookEndpoint202Response from a dict
test_webhook_endpoint202_response_from_dict = TestWebhookEndpoint202Response.from_dict(test_webhook_endpoint202_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
