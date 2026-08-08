# GeneratorCompareGrid

Fields describing generator compare grid in Developer API requests and responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_url** | **str** | URL for the download url associated with this generator compare grid; do not persist temporary signed query parameters. |
**height** | **int** | Numeric height reported for this generator compare grid. |
**preview_height** | **int** | Numeric preview height reported for this generator compare grid. |
**preview_relative_path** | **str** | Cached WebP preview grid path used by the inline grid endpoint. |
**preview_updated_at** | **int** | UTC timestamp for the preview updated at transition of this generator compare grid. |
**preview_width** | **int** | Numeric preview width reported for this generator compare grid. |
**reason** | **str** | Reason associated with this generator compare grid; preserve server-returned values when passing them to another operation. | [optional]
**relative_path** | **str** | Full-resolution PNG grid path used for downloads. |
**status** | **str** | Current lifecycle state of this generator compare grid; clients should tolerate future values. Supported values: &#x60;pending&#x60;, &#x60;ready&#x60;, &#x60;unavailable&#x60;. |
**updated_at** | **int** | Latest cache timestamp for any grid artifact. |
**url** | **str** | URL for the url associated with this generator compare grid; do not persist temporary signed query parameters. |
**width** | **int** | Numeric width reported for this generator compare grid. |

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
