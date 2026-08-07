# GeneratorModelCatalogEntry

Generator Model Catalog Entry used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | Base Model accepted or returned by this contract. | [optional]
**cover_image** | **str** | Cover Image accepted or returned by this contract. | [optional]
**cover_rating** | **str** | Cover Rating accepted or returned by this contract. | [optional]
**favorite_count** | **int** | Favorite Count accepted or returned by this contract. | [optional]
**model_capabilities** | **List[str]** | Model Capabilities accepted or returned by this contract. | [optional]
**model_id** | **int** | Model Id accepted or returned by this contract. | [optional]
**model_tags** | **List[str]** | Model Tags accepted or returned by this contract. | [optional]
**model_title** | **str** | Human-readable title/label for UI display (&#x60;displayName&#x60; equivalent for catalog responses). | [optional]
**model_type** | **str** | Model Type accepted or returned by this contract. | [optional]
**model_version_count** | **int** | Model Version Count accepted or returned by this contract. | [optional]
**model_version_rank** | **int** | Position of this version within the model order (0 &#x3D; first/latest). | [optional]
**name** | **str** | Name accepted or returned by this contract. |
**precision** | **str** | Precision accepted or returned by this contract. | [optional]
**preview_image** | **str** | Preview Image accepted or returned by this contract. | [optional]
**preview_rating** | **str** | Preview Rating accepted or returned by this contract. | [optional]
**rf_required_notes** | **List[str]** | Rf Required Notes accepted or returned by this contract. | [optional]
**trigger_prompts** | **List[str]** | Trigger Prompts accepted or returned by this contract. | [optional]
**uploader_id** | **int** | Uploader Id accepted or returned by this contract. | [optional]
**uploader_profile_picture** | **str** | Uploader Profile Picture accepted or returned by this contract. | [optional]
**uploader_username** | **str** | Uploader Username accepted or returned by this contract. | [optional]
**version_id** | **int** | Version Id accepted or returned by this contract. | [optional]
**version_name** | **str** | Version Name accepted or returned by this contract. | [optional]

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
