# RotateWebhookSecret200Response

200 response for api webhooks endpoints endpoint Id rotate secret value documented for this operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DeveloperWebhookEndpoint**](DeveloperWebhookEndpoint.md) |  |
**previous_secret_expires_at** | **datetime** | UTC timestamp for the previous secret expires at transition of this 200 response for api webhooks endpoints endpoint id rotate secret. Format: date-time. |
**secret** | **str** | Secret associated with this 200 response for api webhooks endpoints endpoint id rotate secret; preserve server-returned values when passing them to another operation. |

## Example

```python
from arcenciel.generated.models.rotate_webhook_secret200_response import RotateWebhookSecret200Response

# TODO update the JSON string below
json = "{}"
# create an instance of RotateWebhookSecret200Response from a JSON string
rotate_webhook_secret200_response_instance = RotateWebhookSecret200Response.from_json(json)
# print the JSON string representation of the object
print(RotateWebhookSecret200Response.to_json())

# convert the object into a dict
rotate_webhook_secret200_response_dict = rotate_webhook_secret200_response_instance.to_dict()
# create an instance of RotateWebhookSecret200Response from a dict
rotate_webhook_secret200_response_from_dict = RotateWebhookSecret200Response.from_dict(rotate_webhook_secret200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
