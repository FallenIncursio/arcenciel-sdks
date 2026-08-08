# ApiKey

Structured api keys item details for this api keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | UTC timestamp when this api keys item was created. Format: date-time. | [optional]
**expires_at** | **datetime** | UTC timestamp for the expires at transition of this api keys item. Format: date-time. | [optional]
**id** | **int** | Stable identifier for the api keys item; use it in subsequent API calls instead of a display name. | [optional]
**last_used_at** | **datetime** | UTC timestamp for the last used at transition of this api keys item. Format: date-time. | [optional]
**name** | **str** | Human-readable name for this api keys item; it is not a stable identifier. | [optional]
**preview** | **str** | Preview associated with this api keys item; preserve server-returned values when passing them to another operation. | [optional]
**revoked_at** | **datetime** | UTC timestamp for the revoked at transition of this api keys item. Format: date-time. | [optional]
**scope_mask** | **int** | Bitmask of API-key scopes. See components.x-api-key-scopes for the full scope table. | [optional]
**usage_count** | **int** | Number of usage records represented by this api keys item. | [optional]

## Example

```python
from arcenciel.generated.models.api_key import ApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKey from a JSON string
api_key_instance = ApiKey.from_json(json)
# print the JSON string representation of the object
print(ApiKey.to_json())

# convert the object into a dict
api_key_dict = api_key_instance.to_dict()
# create an instance of ApiKey from a dict
api_key_from_dict = ApiKey.from_dict(api_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
