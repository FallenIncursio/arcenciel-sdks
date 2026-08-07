# ApiKey

Api Keys item used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At accepted or returned by this contract. | [optional]
**expires_at** | **datetime** | Expires At accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**last_used_at** | **datetime** | Last Used At accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. | [optional]
**preview** | **str** | Preview accepted or returned by this contract. | [optional]
**revoked_at** | **datetime** | Revoked At accepted or returned by this contract. | [optional]
**scope_mask** | **int** | Bitmask of API-key scopes. See components.x-api-key-scopes for the full scope table. | [optional]
**usage_count** | **int** | Usage Count accepted or returned by this contract. | [optional]

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
