# VersionEarlyAccess

Structured early access details for this versions item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_download** | **bool** | Whether can download applies to this early access. |
**can_download_via_link** | **bool** | Whether can download via link applies to this early access. |
**enabled** | **bool** | True when the version is configured and eligible for the supporter early-access flow. |
**reason** | **str** | Stable machine-readable reason for the current state. |
**starts_at** | **datetime** | UTC timestamp for the starts at transition of this early access. Format: date-time. |
**state** | **str** | Current lifecycle state of this early access; clients should tolerate future values. Supported values: &#x60;PUBLIC&#x60;, &#x60;AVAILABLE&#x60;, &#x60;UPCOMING&#x60;, &#x60;LOCKED&#x60;, &#x60;DISABLED&#x60;, &#x60;UNAVAILABLE&#x60;. |
**window_hours** | **int** | Numeric window hours reported for this early access. |

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
