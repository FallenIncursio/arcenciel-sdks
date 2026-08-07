# Emote

Emote used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**animated** | **bool** | Animated accepted or returned by this contract. | [optional]
**id** | **int** | Id accepted or returned by this contract. | [optional]
**name** | **str** | Name accepted or returned by this contract. | [optional]
**url** | **str** | Url accepted or returned by this contract. | [optional]

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
