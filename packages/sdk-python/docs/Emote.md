# Emote

Fields describing emote in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**animated** | **bool** | Whether animated applies to this emote. | [optional]
**id** | **int** | Stable identifier for the emote; use it in subsequent API calls instead of a display name. | [optional]
**name** | **str** | Human-readable name for this emote; it is not a stable identifier. | [optional]
**url** | **str** | URL for the url associated with this emote; do not persist temporary signed query parameters. | [optional]

## Example

```python
from arcenciel.generated.models.emote import Emote

# TODO update the JSON string below
json = "{}"
# create an instance of Emote from a JSON string
emote_instance = Emote.from_json(json)
# print the JSON string representation of the object
print(Emote.to_json())

# convert the object into a dict
emote_dict = emote_instance.to_dict()
# create an instance of Emote from a dict
emote_from_dict = Emote.from_dict(emote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
