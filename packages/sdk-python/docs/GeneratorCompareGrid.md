# GeneratorCompareGrid

Generator Compare Grid used by the Arc en Ciel API contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_url** | **str** | Download Url accepted or returned by this contract. |
**height** | **int** | Height accepted or returned by this contract. |
**preview_height** | **int** | Preview Height accepted or returned by this contract. |
**preview_relative_path** | **str** | Cached WebP preview grid path used by the inline grid endpoint. |
**preview_updated_at** | **int** | Preview Updated At accepted or returned by this contract. |
**preview_width** | **int** | Preview Width accepted or returned by this contract. |
**reason** | **str** | Reason accepted or returned by this contract. | [optional]
**relative_path** | **str** | Full-resolution PNG grid path used for downloads. |
**status** | **str** | Status accepted or returned by this contract. |
**updated_at** | **int** | Latest cache timestamp for any grid artifact. |
**url** | **str** | Url accepted or returned by this contract. |
**width** | **int** | Width accepted or returned by this contract. |

## Example

```python
from arcenciel.generated.models.generator_compare_grid import GeneratorCompareGrid

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorCompareGrid from a JSON string
generator_compare_grid_instance = GeneratorCompareGrid.from_json(json)
# print the JSON string representation of the object
print(GeneratorCompareGrid.to_json())

# convert the object into a dict
generator_compare_grid_dict = generator_compare_grid_instance.to_dict()
# create an instance of GeneratorCompareGrid from a dict
generator_compare_grid_from_dict = GeneratorCompareGrid.from_dict(generator_compare_grid_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
