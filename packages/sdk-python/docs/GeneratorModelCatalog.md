# GeneratorModelCatalog

Generator Model Catalog used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adetailer** | [**List[GeneratorModelCatalogEntry]**](GeneratorModelCatalogEntry.md) | Adetailer accepted or returned by this contract. |
**checkpoints** | [**List[GeneratorModelCatalogEntry]**](GeneratorModelCatalogEntry.md) | Checkpoints accepted or returned by this contract. |
**loras** | [**List[GeneratorModelCatalogEntry]**](GeneratorModelCatalogEntry.md) | Loras accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_model_catalog import GeneratorModelCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorModelCatalog from a JSON string
generator_model_catalog_instance = GeneratorModelCatalog.from_json(json)
# print the JSON string representation of the object
print(GeneratorModelCatalog.to_json())

# convert the object into a dict
generator_model_catalog_dict = generator_model_catalog_instance.to_dict()
# create an instance of GeneratorModelCatalog from a dict
generator_model_catalog_from_dict = GeneratorModelCatalog.from_dict(generator_model_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
