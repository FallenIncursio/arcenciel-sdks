# VersionEarlyAccess

Early Access accepted or returned by this contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_download** | **bool** | Can Download accepted or returned by this contract. |
**can_download_via_link** | **bool** | Can Download Via Link accepted or returned by this contract. |
**enabled** | **bool** | True when the version is configured and eligible for the supporter early-access flow. |
**reason** | **str** | Stable machine-readable reason for the current state. |
**starts_at** | **datetime** | Starts At accepted or returned by this contract. |
**state** | **str** | State accepted or returned by this contract. |
**window_hours** | **int** | Window Hours accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.version_early_access import VersionEarlyAccess

# TODO update the JSON string below
json = "{}"
# create an instance of VersionEarlyAccess from a JSON string
version_early_access_instance = VersionEarlyAccess.from_json(json)
# print the JSON string representation of the object
print(VersionEarlyAccess.to_json())

# convert the object into a dict
version_early_access_dict = version_early_access_instance.to_dict()
# create an instance of VersionEarlyAccess from a dict
version_early_access_from_dict = VersionEarlyAccess.from_dict(version_early_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
