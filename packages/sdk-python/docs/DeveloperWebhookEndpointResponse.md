# DeveloperWebhookEndpointResponse

Fields describing developer webhook endpoint response in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DeveloperWebhookEndpoint**](DeveloperWebhookEndpoint.md) |  |

## Example

```python
from arcenciel.generated.models.developer_webhook_endpoint_response import DeveloperWebhookEndpointResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperWebhookEndpointResponse from a JSON string
developer_webhook_endpoint_response_instance = DeveloperWebhookEndpointResponse.from_json(json)
# print the JSON string representation of the object
print(DeveloperWebhookEndpointResponse.to_json())

# convert the object into a dict
developer_webhook_endpoint_response_dict = developer_webhook_endpoint_response_instance.to_dict()
# create an instance of DeveloperWebhookEndpointResponse from a dict
developer_webhook_endpoint_response_from_dict = DeveloperWebhookEndpointResponse.from_dict(developer_webhook_endpoint_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
