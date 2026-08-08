# GeneratorModelCatalogEntry

Fields describing generator model catalog entry in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model associated with this generator model catalog entry; preserve server-returned values when passing them to another operation. | [optional]
**cover_image** | **str** | Cover Image associated with this generator model catalog entry; preserve server-returned values when passing them to another operation. | [optional]
**cover_rating** | **str** | Cover Rating associated with this generator model catalog entry; preserve server-returned values when passing them to another operation. | [optional]
**favorite_count** | **int** | Number of favorite records represented by this generator model catalog entry. | [optional]
**model_capabilities** | **List[str]** | Ordered model capabilities entries included with this generator model catalog entry; an empty list means none are available. | [optional]
**model_id** | **int** | Stable identifier for the model; use it in subsequent API calls instead of a display name. | [optional]
**model_tags** | **List[str]** | Ordered model tags entries included with this generator model catalog entry; an empty list means none are available. | [optional]
**model_title** | **str** | Human-readable title/label for UI display (&#x60;displayName&#x60; equivalent for catalog responses). | [optional]
**model_type** | **str** | Discriminator identifying the kind of generator model catalog entry; clients should tolerate future values. | [optional]
**model_version_count** | **int** | Number of model version records represented by this generator model catalog entry. | [optional]
**model_version_rank** | **int** | Position of this version within the model order (0 &#x3D; first/latest). | [optional]
**name** | **str** | Human-readable name for this generator model catalog entry; it is not a stable identifier. |
**precision** | **str** | Precision associated with this generator model catalog entry; preserve server-returned values when passing them to another operation. | [optional]
**preview_image** | **str** | Preview Image associated with this generator model catalog entry; preserve server-returned values when passing them to another operation. | [optional]
**preview_rating** | **str** | Preview Rating associated with this generator model catalog entry; preserve server-returned values when passing them to another operation. | [optional]
**rf_required_notes** | **List[str]** | Ordered rf required notes entries included with this generator model catalog entry; an empty list means none are available. | [optional]
**trigger_prompts** | **List[str]** | Ordered trigger prompts entries included with this generator model catalog entry; an empty list means none are available. | [optional]
**uploader_id** | **int** | Stable identifier for the uploader; use it in subsequent API calls instead of a display name. | [optional]
**uploader_profile_picture** | **str** | Uploader Profile Picture associated with this generator model catalog entry; preserve server-returned values when passing them to another operation. | [optional]
**uploader_username** | **str** | Uploader Username associated with this generator model catalog entry; preserve server-returned values when passing them to another operation. | [optional]
**version_id** | **int** | Stable identifier for the version; use it in subsequent API calls instead of a display name. | [optional]
**version_name** | **str** | Human-readable version name for this generator model catalog entry; it is not a stable identifier. | [optional]

## Example

```python
from arcenciel.generated.models.generator_model_catalog_entry import GeneratorModelCatalogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorModelCatalogEntry from a JSON string
generator_model_catalog_entry_instance = GeneratorModelCatalogEntry.from_json(json)
# print the JSON string representation of the object
print(GeneratorModelCatalogEntry.to_json())

# convert the object into a dict
generator_model_catalog_entry_dict = generator_model_catalog_entry_instance.to_dict()
# create an instance of GeneratorModelCatalogEntry from a dict
generator_model_catalog_entry_from_dict = GeneratorModelCatalogEntry.from_dict(generator_model_catalog_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
