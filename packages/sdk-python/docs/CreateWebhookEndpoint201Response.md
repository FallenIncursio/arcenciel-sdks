# CreateWebhookEndpoint201Response

201 response for api webhooks endpoints value documented for this operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DeveloperWebhookEndpoint**](DeveloperWebhookEndpoint.md) |  |
**secret** | **str** | Secret associated with this 201 response for api webhooks endpoints; preserve server-returned values when passing them to another operation. |

## Example

```python
from arcenciel.generated.models.create_webhook_endpoint201_response import CreateWebhookEndpoint201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWebhookEndpoint201Response from a JSON string
create_webhook_endpoint201_response_instance = CreateWebhookEndpoint201Response.from_json(json)
# print the JSON string representation of the object
print(CreateWebhookEndpoint201Response.to_json())

# convert the object into a dict
create_webhook_endpoint201_response_dict = create_webhook_endpoint201_response_instance.to_dict()
# create an instance of CreateWebhookEndpoint201Response from a dict
create_webhook_endpoint201_response_from_dict = CreateWebhookEndpoint201Response.from_dict(create_webhook_endpoint201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
